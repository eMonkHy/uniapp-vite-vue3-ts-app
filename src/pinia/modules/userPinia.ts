import { SysUser, SysDepart } from "@/api/services/systemService"
import { getAppEnvConfig } from "@/utils/env"
import { defineStore } from "pinia"

interface UserPinia {
  token?: string
  tenantId?: string
  testToken: string
  userInfo?: SysUser

  // location?: NsSystem.txLocation;
  logOutLoading: boolean
  /**所属部门 */
  departments: SysDepart[]
  /**所属部门ids */
  departmentIds: string[]

  /**登录选择的部门 */
  loginChooseDepart?: SysDepart
}
export const useUserPinia = defineStore({
  id: "userPinia",
  state: (): UserPinia => ({
    token: "",
    userInfo: undefined,
    testToken: "",
    tenantId: undefined,
    logOutLoading: false,
    departments: [],
    departmentIds: [],
    loginChooseDepart: undefined,
  }),
  getters: {},
  actions: {},
  persist: {
    enabled: true,
    strategies: [
      {
        key: getAppEnvConfig().VITE_GLOB_APP_SHORT_NAME + "userPinia",
        paths: ["userInfo", "token", "departmentIds", "departments", "loginChooseDepart"],
      },
    ],
  },
})
