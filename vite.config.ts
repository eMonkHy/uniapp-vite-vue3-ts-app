import { defineConfig } from "vite"
import * as path from "path"
import uni from "@dcloudio/vite-plugin-uni"
import Components from "@uni-helper/vite-plugin-uni-components"
import { NutResolver } from "nutui-uniapp"
import vueJsx from "@vitejs/plugin-vue-jsx"
import AutoImport from "unplugin-auto-import/vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Components({
      resolvers: [NutResolver()],
    }),
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
    AutoImport({
      imports: [
        "vue",
        "uni-app",
        "pinia",
        {
          "nutui-uniapp/composables": ["useToast"],
        },
      ],
      dirs: ["./composables/**"],
    }),
    uni(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "nutui-uniapp/styles/variables.scss";`,
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "#": path.resolve(__dirname, "types"),
    },
  },
})
