import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  // // server: {
  // //   host: "0.0.0.0",
  // //   port: Number(env.VITE_APP_PORT),
  // //   open: true, // 运行是否自动打开浏览器
  // //   proxy: {
  // //     // 反向代理解决跨域
  // //     [env.VITE_APP_BASE_API]: {
  // //       target: "http://vapi.youlai.tech", // 线上接口地址
  // //       // target: 'http://localhost:8989',  // 本地接口地址 , 后端工程仓库地址：https://gitee.com/youlaiorg/youlai-boot
  // //       changeOrigin: true,
  // //       rewrite: (path) =>
  // //         path.replace(new RegExp("^" + env.VITE_APP_BASE_API), ""), // 替换 /dev-api 为 target 接口地址
  // //     },
  // //   },
  // // },

  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "http://localhost:3001",
  //       changeOrigin: true,
  //       // rewrite: path => path.replace(/^\/api/, '') // 重写 api 为 空，就是去掉它
  //       rewrite: (path) => path.replace(/^\/api/, ""),
  //     },
  //   },
  // },
});
