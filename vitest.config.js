import { defineConfig } from "vitest/config";
import Vue from "@vitejs/plugin-vue";
const path = require("path");

export default defineConfig({
  plugins: [Vue()],
  test: {
    environment: "jsdom",
  },
  resolve: {
    alias: {
      'src': path.resolve(__dirname, "/src"),
      'components': path.resolve(__dirname, "/src/components"),
    }
  },
  root: ".",
});
