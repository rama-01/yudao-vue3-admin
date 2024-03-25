import request from '@/config/axios'

export interface TenantVO {
  id: number
  name: string
  contactName: string
  contactMobile: string
  status: number
  domain: string
  packageId: number
  username: string
  password: string
  expireTime: Date
  accountCount: number
  createTime: Date
}

export interface TenantPageReqVO extends PageParam {
  name?: string
  contactName?: string
  contactMobile?: string
  status?: number
  createTime?: Date[]
}

export const getTenantList = (params: TenantPageReqVO) =>
  request.get({ url: '/admin-api/system/tenant/page', params })
