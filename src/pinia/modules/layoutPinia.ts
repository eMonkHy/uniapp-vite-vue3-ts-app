import { NotifyInst, NotifyOptions } from "nutui-uniapp"
import { defineStore } from "pinia"

interface LayoutState {
  theme: "dark" | ""
  themeVars?: { [key: string]: any }

  notifyRef?: NotifyInst
}

export const useLayoutPinia = defineStore({
  id: "layoutPinia",
  state: (): LayoutState => ({
    theme: "",
    themeVars: {},

    notifyRef: undefined,
  }),
  actions: {},
})
