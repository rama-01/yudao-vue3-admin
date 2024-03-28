<template>
  <div class="flex justify-center">
    <div>
      <img :src="errorMap[type].url" alt="" class="w-80" />
      <div class="text-center my-2">{{ errorMap[type].message }}</div>
      <div class="flex justify-center">
        <el-button type="primary" @click="btnClick">{{ errorMap[type].buttonText }}</el-button>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import noPermission from '@/assets/svgs/403.svg'
import pageError from '@/assets/svgs/404.svg'
import netWorkError from '@/assets/svgs/500.svg'

interface ErrorMap {
  url: string
  message: string
  buttonText: string
}

const errorMap: {
  [key: string]: ErrorMap
} = {
  '403': {
    url: noPermission,
    message: '抱歉，您无权访问此页面。',
    buttonText: '返回首页'
  },
  '404': {
    url: pageError,
    message: '抱歉，您访问的页面不存在。',
    buttonText: '返回首页'
  },
  '500': {
    url: netWorkError,
    message: '抱歉，服务器报告错误。',
    buttonText: '返回首页'
  }
}

const props = defineProps<{ type: string }>()
const emit = defineEmits(['error-click'])

const btnClick = () => emit('error-click', props.type)
</script>
