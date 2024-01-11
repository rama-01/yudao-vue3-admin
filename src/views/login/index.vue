<template>
  <div class="w-full h-full flex justify-center items-center">
    <el-card class="w-1/3 max-w-md">
      <el-form ref="loginFormRef" :model="loginForm" :rules="rules" :size="formSize" status-icon>
        <el-form-item>
          <el-input v-model="loginForm.tenantName" />
        </el-form-item>
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" />
        </el-form-item>
        <el-form-item prop="password" class="mb-0 !important">
          <el-input v-model="loginForm.password" @keyup.enter="getCode" />
        </el-form-item>
        <el-form-item class="mb-0 !important">
          <div class="w-full flex justify-between">
            <el-checkbox class="h-8" v-model="loginForm.rememberMe" label="记住我" size="large" />
            <el-link type="primary" :underline="false">忘记密码?</el-link>
          </div>
        </el-form-item>
        <el-form-item class="mb-0 !important">
          <el-button type="primary" class="w-full" @click="getCode">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
  <!-- 滑块验证码 -->
  <Verify
    ref="verify"
    :imgSize="{ width: '400px', height: '200px' }"
    mode="pop"
    :captchaType="captchaType"
    @success="handleLogin"
  />
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { login } from '@/api/login' //ts6307
import * as authUtil from '@/utils/auth'
import { useRouter } from 'vue-router'
const { push } = useRouter()

interface ILoginForm {
  tenantName: string
  username: string
  password: string
  rememberMe: boolean
  captchaVerification: string
}

const formSize = ref('default')
const loginFormRef = ref<FormInstance>()
const loginForm = reactive<ILoginForm>({
  tenantName: '芋道源码',
  username: 'admin',
  password: 'admin123',
  rememberMe: false,
  captchaVerification: ''
})

// 登录表单校验规则
const rules = reactive<FormRules<ILoginForm>>({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 2, max: 10, message: '用户名长度在2-10之间', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' }
    // {
    //   pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,12}$/,
    //   message: '密码长度在6-12之间，且包含大写字母、小写字母和数字',
    //   trigger: 'blur'
    // }
  ]
})

// 获取验证码
const verify = ref()
const captchaType = ref('blockPuzzle') // blockPuzzle 滑块 clickWord 点击文字

/* 1.打开验证码弹窗 2.验证通过调用登录接口 */
const handleLogin = (params) => {
  console.log('params', params)
  // getCode()
  // console.log(params)
  if (params.captchaVerification) {
    loginForm.captchaVerification = params.captchaVerification
  }
  login(loginForm).then((res) => {
    authUtil.setToken(res)
    push({ path: '/index' })
  })
}

// 获取验证码
const getCode = async () => {
  // 情况一，未开启：则直接登录
  // 情况二，已开启：则展示验证码；只有完成验证码的情况，才进行登录
  // 弹出验证码
  verify.value.show()
}
</script>
