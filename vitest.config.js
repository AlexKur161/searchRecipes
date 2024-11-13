import { defineConfig } from "vitest/config";
import { templateCompilerOptions } from "@tresjs/core";
import Vue from "@vitejs/plugin-vue";

const path = require("path");

export default defineConfig({
  plugins: [Vue(...templateCompilerOptions)],
  test: {
    environment: "jsdom",
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, "/src"),
      components: path.resolve(__dirname, "/src/components"),
    },
  },
  root: ".",
});
