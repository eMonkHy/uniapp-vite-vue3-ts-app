import { createSSRApp } from "vue";
import App from "./App.vue";
import { setupStore } from "./pinia";
import { setupGlobalComInit, setupGlobalPiniaFunInit } from "./hooks/GlobalInit";
export function createApp() {
  const app = createSSRApp(App);


  setupStore(app);

  setupGlobalPiniaFunInit()

  setupGlobalComInit(app);


  return {
    app,
  };
}
