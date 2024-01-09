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
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" />
        </el-form-item>
        <el-form-item class="mb-0 !important">
          <el-button type="primary" class="w-full">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
// import { getCode } from '@/api/login'
interface ILoginForm {
  tenantName: string
  username: string
  password: string
}

const formSize = ref('default')
const loginFormRef = ref<FormInstance>()
const loginForm = reactive<ILoginForm>({
  tenantName: 'yudao source code',
  username: 'admin',
  password: 'Admin123'
})

const rules = reactive<FormRules<ILoginForm>>({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 2, max: 10, message: '用户名长度在2-10之间', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    {
      pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,12}$/,
      message: '密码长度在6-12之间，且包含大写字母、小写字母和数字',
      trigger: 'blur'
    }
  ]
})

// 获取验证码
// getCode().then((res) => console.log(res))
</script>
