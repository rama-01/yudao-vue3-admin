import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosError, AxiosResponse } from 'axios'
import { config } from '@/config/axios/config'
import { getAccessToken, getRefreshToken, removeToken, getTenantId, setToken } from '@/utils/auth'
import { showFullScreenLoading, tryHideFullScreenLoading } from '@/utils/loading'
import { useCache } from '@/hooks/web/useCache'

const { result_code, base_url, request_timeout } = config
const service: AxiosInstance = axios.create({
  baseURL: base_url,
  timeout: request_timeout,
  withCredentials: false //禁用cookie信息
})

let isRefreshToken = false //是否正在刷新中
const whiteList = ['/login', '/refresh-token'] //无需token

service.interceptors.request.use(
  (config: InternalAxiosRequestConfig & AxiosConfig) => {
    showFullScreenLoading(config)
    config.isLoading = config.isLoading !== undefined && config.isLoading !== null ? config.isLoading : false
    /** question*/
    // 是否需要设置Token
    let shouldSetToken = (config.headers || {}).isToken === false
    // 不使用forEach，是因为它无法在遍历时中止循环
    whiteList.some((v) => {
      if (config.url && config.url.indexOf(v) !== -1) {
        return (shouldSetToken = false)
      }
    })

    if (getAccessToken() && !shouldSetToken) {
      config.headers.Authorization = 'Bearer ' + getAccessToken()
    }
    config.headers['Tenant-Id'] = 1
    return config
  },
  (error: AxiosError) => {
    tryHideFullScreenLoading()
    console.log(error) // for debug
    Promise.reject(error)
  }
)

service.interceptors.response.use(
  async (response: AxiosResponse<any>) => {
    tryHideFullScreenLoading()
    const config = response.config
    const { data } = response
    // 未设置状态码默认为成功
    const code = data.code || result_code
    if (code === 401) {
      // 未认证，并且未进行刷新令牌，可能是访问令牌过期了
      if (!isRefreshToken) {
        isRefreshToken = true
        // 1. 如果获取不到刷新令牌，执行登出操作
        if (!getRefreshToken()) {
          return handleAuthorized()
        }
        // 2. 进行刷新访问令牌
        try {
          const refreshTokenRes = await refreshToken()
          setToken(refreshTokenRes.data.data)
          config.headers.Authorization = 'Bearer ' + getAccessToken()
        } catch (error) {
          console.log(error)
          return handleAuthorized()
        } finally {
          isRefreshToken = false
        }
      } else {
        //
      }
    }
    return response.data
  },
  (error: AxiosError) => {
    tryHideFullScreenLoading()
    Promise.reject(error)
  }
)

// 使用refreshToken请求最新token
const refreshToken = async () => {
  axios.defaults.headers.common['tenant-id'] = getTenantId()
  return await axios.post(base_url + '/admin-api/system/auth/refresh-token?refreshToken=' + getRefreshToken())
}

const handleAuthorized = () => {
  // 登出时，重置静态路由表，清除缓存，清除token
  const { wsCache } = useCache()
  wsCache.clear()
  removeToken()
  // 干掉token之后再走一次路由，让它过router.beforeEach的校验
  window.location.href = window.location.href
}

export { service }
