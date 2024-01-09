import axios, { AxiosInstance, InternalAxiosRequestConfig, AxiosError, AxiosResponse } from 'axios'
import { config } from '@/config/axios/config'
import { getAccessToken } from '@/utils/auth'

const { base_url, request_timeout } = config
const service: AxiosInstance = axios.create({
  baseURL: base_url,
  timeout: request_timeout,
  withCredentials: false //禁用cookie信息
})

service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (getAccessToken()) {
      config.headers.Authorization = 'Bearer ' + getAccessToken()
    }
    return config
  },
  (error: AxiosError) => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response: AxiosResponse<any>) => {
    return response.data
  },
  (error: AxiosError) => {
    Promise.reject(error)
  }
)

export { service }
