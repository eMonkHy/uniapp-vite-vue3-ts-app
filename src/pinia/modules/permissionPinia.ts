import { AndeMenuItemType, NsPermissions } from "#/system"
import { 菜单权限Service } from "@/api/services/systemService"
import { defineStore } from "pinia"
import { toRaw } from "vue"
import { generateIndexRouter } from "@/utils/router"

export const usePermissionPinia = defineStore({
  id: "permissionPinia",
  state: (): NsPermissions.PermissionReturnData => ({
    allAuth: [],
    auth: [],
    menu: [],
  }),
  actions: {
    async init() {
      let willData: NsPermissions.PermissionReturnData = {
        allAuth: [],
        auth: [],
        menu: [],
      }

      let res = await 菜单权限Service.getUserPermissionByToken()
      if (res.success) {
        this.allAuth = res.result.allAuth || []
        this.auth = res.result.auth || []

        let menu = (res.result.menu || []) as AndeMenuItemType[]
        if (!!menu) {
          this.menu = generateIndexRouter(toRaw(menu))
        }
      }
    },
    clearData() {
      this.menu = []
      this.allAuth = []
      this.auth = []
    },
  },
})
