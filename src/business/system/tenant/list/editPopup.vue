<template>
  <el-dialog
    :model-value="visible"
    :title="isEditTenant ? '编辑用户' : '新增用户'"
    :close-on-click-modal="false"
    @close="handleCloseDialog(tenantFormRef)"
  >
    <el-form
      ref="tenantFormRef"
      :rules="rules"
      :model="tenantForm"
      label-width="80px"
      class="p-5 shadow-sm"
    >
      <el-form-item label="租户名" prop="name">
        <el-input v-model="tenantForm.name" placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item label="租户套餐" prop="packageId">
        <el-select v-model="tenantForm.packageId" placeholder="请选择租户状态">
          <el-option label="普通套餐" :value="111" />
        </el-select>
      </el-form-item>
      <el-form-item label="联系人" prop="contactName">
        <el-input v-model="tenantForm.contactName" placeholder="请输入联系人" />
      </el-form-item>
      <el-form-item label="联系手机" prop="contactMobile">
        <el-input
          v-model="tenantForm.contactMobile"
          placeholder="请输入手机号"
        />
      </el-form-item>
      <el-form-item label="用户名称" prop="username" v-if="!isEditTenant">
        <el-input v-model="tenantForm.username" placeholder="请输入用户名称" />
      </el-form-item>
      <el-form-item label="用户密码" prop="password" v-if="!isEditTenant">
        <el-input v-model="tenantForm.password" placeholder="请输入用户密码" />
      </el-form-item>
      <el-form-item label="账号额度" prop="accountCount">
        <el-input
          v-model="tenantForm.accountCount"
          placeholder="请输入账户额度"
        />
      </el-form-item>
      <el-form-item label="过期时间" prop="expireTime">
        <el-date-picker
          v-model="tenantForm.expireTime"
          clearable
          placeholder="请选择过期时间"
          type="date"
          value-format="x"
        />
      </el-form-item>
      <el-form-item label="绑定域名" prop="website">
        <el-input v-model="tenantForm.website" placeholder="请输入绑定域名" />
      </el-form-item>
      <el-form-item label="租户状态" prop="status">
        <el-radio-group v-model="tenantForm.status">
          <el-radio :label="1">开启</el-radio>
          <el-radio :label="0">关闭</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
    <template #footer>
      <div>
        <el-button @click="handleCloseDialog(tenantFormRef)">取 消</el-button>
        <el-button type="primary" @click="handleSubmitForm(tenantFormRef)">
          确 认
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { reactive, ref, computed } from 'vue'
import type { FormRules, FormInstance } from 'element-plus'

const tenantFormRef = ref<FormInstance>()
const props = defineProps(['visible', 'data'])
const emit = defineEmits(['update:visible', 'action-event'])
const isEditTenant = computed<boolean>(() => !!props.data)

interface TenantForm {
  name: string
  packageId?: number | undefined
  contactName: string
  contactMobile: string
  username: string
  password: string
  accountCount: number | undefined
  expireTime: string
  website: string
  status: number
  id?: number
  cerateTime?: string
}

let tenantForm = ref<TenantForm>({
  name: '',
  packageId: undefined,
  contactName: '',
  contactMobile: '',
  username: '',
  password: '',
  accountCount: undefined,
  expireTime: '',
  website: '',
  status: 1
})

const rules = reactive<FormRules<TenantForm>>({
  name: [{ required: true, message: '租户名不能为空', trigger: 'blur' }],
  packageId: [
    { required: true, message: '租户套餐不能为空', trigger: 'change' }
  ], //
  contactName: [{ required: true, message: '联系人不能为空', trigger: 'blur' }],
  username: [{ required: true, message: '用户名称不能为空', trigger: 'blur' }],
  password: [
    { required: true, message: '密码不能为空', trigger: 'blur' },
    { min: 4, max: 16, message: '密码长度为4-16位', trigger: 'blur' }
  ],
  accountCount: [
    { required: true, message: '账号额度不能为空', trigger: 'blur' }
  ],
  expireTime: [
    { required: true, message: '过期时间不能为空', trigger: 'blur' }
  ],
  website: [{ required: true, message: '绑定域名不能为空', trigger: 'blur' }]
})

/* close dialog */
const handleCloseDialog = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
  emit('update:visible', false)
}

/* confirm submit form */
const handleSubmitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid) => {
    if (valid) {
      if (isEditTenant) {
        emit('action-event','update',tenantForm.value)
      } else {
        emit('action-event', 'create', tenantForm.value)
      }
      emit('update:visible', false)
    }
  })
}

/* edit tenant,fill up form */
watch(
  () => props.data,
  () => {
    if (props.data) {
      tenantForm.value = props.data
    }
  }
)
</script>
