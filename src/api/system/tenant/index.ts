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

export const deleteTenant = (id: number) =>
  request.delete({ url: '/admin-api/system/tenant/delete', params: { id } })

export const createTenant = (data) =>
  request.post({ url: '/admin-api/system/tenant/create', data })

export const getSingleTenant = (id: number) =>
  request.get({ url: '/admin-api/system/tenant/get', params: { id } })

export const updateTenant = (data) =>
  request.put({ url: '/admin-api/system/tenant/update', data })
