import path from "path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  ssr: true,
  devtools: { enabled: true },
  modules: ["@vant/nuxt"],
  postcss: {
    plugins: {
      "postcss-px-to-viewport": {
        viewportWidth: 375,
      },
    },
  },
  css: ["~/assets/styles/global.css"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: '@use "@/assets/styles/global.scss" as *;',
        },
      },
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname),
        "~": path.resolve(__dirname),
      },
    },
  },
});
