<template>
  <div class="g-layout-box">
    <NutConfigProvider
      :theme="layoutPinia.theme"
      :theme-vars="layoutPinia.themeVars">
      <NutNotify ref="notifyRef"></NutNotify>

      <div class="g-layout-header-box"></div>
      <div class="g-layout-content-box">
        <slot></slot>
      </div>
      <div class="g-layout-footer-box"></div>
      <div class="g-layout-tabbar-box"></div>
    </NutConfigProvider>
  </div>
</template>

<script setup lang="ts">
import { useLayoutPinia } from "@/pinia/modules/layoutPinia"
import { NotifyOptions } from "nutui-uniapp"
import { ref } from "vue"

const layoutPinia = useLayoutPinia()

const notifyRef = ref<NotifyOptions>()
</script>

<style scoped></style>
