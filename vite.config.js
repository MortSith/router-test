import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const { path } = require("path");
// const { resolve } = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: true
  }
  // alias:{
  //   '@' : path.resolve(__dirname, './src')
  // },

  // resolve: {
  //   alias: {
  //     '@' : path.resolve(__dirname, './src')
  //   },
  // },

  // resolve: {
  //   alias: [
  //     { find: "@",
  //       replacement: path.resolve(__dirname, "./src") }
  //   ],
  // },

  // resolve: {
  //   alias: {
  //     "@": path.resolve(__dirname, "./src") // map '@' to './src'
  //   },
  // }


});
