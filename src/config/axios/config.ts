type AxiosHeaders = 'application/json' | 'application/x-www-form-urlencoded' | 'multipart/form-data' //global.d.ts文件部分类型声明不生效

export interface AxiosConfig {
  base_url: string
  result_code: number | string
  default_headers: AxiosHeaders
  request_timeout: number
  message?: string
  background?: string
  isLoading?: boolean
}

const config: AxiosConfig = {
  /**
   * api请求基础路径
   */
  base_url: 'http://127.0.0.1:48080',
  /**
   * 接口成功返回状态码
   */
  result_code: 200,

  /**
   * 接口请求超时时间
   */
  request_timeout: 30000,

  /**
   * 默认接口请求类型
   * 可选值：application/x-www-form-urlencoded multipart/form-data
   */
  default_headers: 'application/json'
}

export { config }
