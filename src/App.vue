<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app"
import dayjs from "dayjs"
import "dayjs/locale/zh-cn"
import { getAppEnvConfig } from "./utils/env"

dayjs.locale("zh-cn")

onLaunch(() => {
  console.log("App Launch")
})
onShow(() => {
  console.log("App Show")
})
onHide(() => {
  console.log("App Hide")
})

const { VITE_GLOB_APP_TITLE, VITE_GLOB_API_URL, VITE_GLOB_APP_SHORT_NAME, VITE_GLOB_API_URL_PREFIX, VITE_GLOB_APP_CAS_BASE_URL, VITE_GLOB_APP_OPEN_SSO, VITE_GLOB_APP_OPEN_QIANKUN, VITE_GLOB_DOMAIN_URL, VITE_GLOB_ONLINE_VIEW_URL } = getAppEnvConfig()

let globalData: UniGlobalData = {
  _CONFIG: {
    imgDomainURL: "ande-boot/sys/common/view",
    domianURL: VITE_GLOB_DOMAIN_URL,
    staticDomainURL: VITE_GLOB_DOMAIN_URL + "/sys/common/static",
    zwDebug: 1,
  },
}
// uni.hideTabBar()
defineExpose({ globalData, _CONFIG: globalData._CONFIG })
</script>
<style lang="scss">
@import "nutui-uniapp/styles/index.scss";
</style>
