/*
 * @Author: hy e_monk@163.com
 * @Date: 2024-06-17 18:49:34
 * @LastEditors: hy e_monk@163.com
 * @LastEditTime: 2024-06-17 20:19:43
 * @FilePath: \my-vue3-project\src\hooks\GlobalInit.ts
 * @Description: 全局初始化
 */
import BaseLayoutVue from "@/components/layouts/BaseLayout.vue"
import type { App } from "vue"

export function setupGlobalPiniaFunInit() {}

export function setupGlobalComInit(app: App<Element>) {
  app.component("a-layout", BaseLayoutVue)
}
