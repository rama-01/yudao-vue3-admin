import { App } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'

export const delConfirm = {
  install: (app: App) => {
    app.config.globalProperties.$confirm = function (
      titleMsg,
      callback,
      successMsg = '删除成功',
      rejectedMsg = '删除失败',
      errorMsg = '已取消'
    ) {
      ElMessageBox.confirm(titleMsg, '系统提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          callback()
            .then(() => {
              if (successMsg) {
                ElMessage({
                  type: 'success',
                  message: successMsg
                })
              }
            })
            .catch(() => {
              if (rejectedMsg) {
                ElMessage({
                  type: 'error',
                  message: rejectedMsg
                })
              }
            })
        })
        .catch(() => {
          if (errorMsg) {
            ElMessage({
              type: 'info',
              message: errorMsg
            })
          }
        })
    }
  }
}
