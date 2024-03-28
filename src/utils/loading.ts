import { ElLoading } from 'element-plus'
import type { AxiosConfig } from '@/config/axios/config'

let needLoadingRequestCount = 0
let vLoading: ReturnType<typeof ElLoading.service>

/**
 * 加载
 * @param {*} config
 */
function startLoading(config: AxiosConfig) {
  vLoading = ElLoading.service({
    text: config.message || '加载中',
    background: config.background || 'rgba(0,0,0,.7)'
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

export function showFullScreenLoading(config: AxiosConfig) {
  if (needLoadingRequestCount === 0 && config.isLoading) {
    needLoadingRequestCount++
    startLoading(config)
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
