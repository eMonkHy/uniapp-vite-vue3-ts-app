import type { App } from "vue"
import { createPinia } from "pinia"
import piniaPluginPersist from "pinia-plugin-persist"

/*
 * @Author: hy e_monk@163.com
 * @Date: 2024-06-17 18:53:43
 * @LastEditors: hy e_monk@163.com
 * @LastEditTime: 2024-06-17 20:02:04
 * @FilePath: \my-vue3-project\src\pinia\index.ts
 * @Description: 初始化pinia携带本地存储
 */
const store = createPinia()
store.use(piniaPluginPersist)

export function setupStore(app: App<Element>) {
  app.use(store)
}

export { store }
