import { ElLoading } from 'element-plus'
import type { InternalAxiosRequestConfig } from 'axios'

let needLoadingRequestCount = 0
let vLoading: ReturnType<typeof ElLoading.service>

/**
 * 加载
 * @param {*} config
 */
function startLoading() {
  vLoading = ElLoading.service({
    text: '加载中',
    background: 'rgba(0,0,0,.7)'
  })
}

/**
 * 清除loaing
 */
function closeLoading() {
  if (vLoading) {
    vLoading.close()
  }
}

const tryCloseLoading = () => {
  if (needLoadingRequestCount === 0) {
    closeLoading()
  }
}

export function showFullScreenLoading(config: InternalAxiosRequestConfig & AxiosConfig) {
  if (needLoadingRequestCount === 0 && config.isLoading) {
    needLoadingRequestCount++
    startLoading()
  } else {
    needLoadingRequestCount++
  }
}

export function tryHideFullScreenLoading() {
  if (needLoadingRequestCount <= 0) return
  needLoadingRequestCount--
  if (needLoadingRequestCount === 0) {
    setTimeout(() => {
      tryCloseLoading()
    }, 200)
  }
}
