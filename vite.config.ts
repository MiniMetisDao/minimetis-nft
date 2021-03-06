/// <reference types="vitest" />
/// <reference types="vite/client" />

import { readdirSync } from "fs";
import { join, resolve } from "path";

import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";
import react from "@vitejs/plugin-react";
import nodePolyfills from "rollup-plugin-polyfill-node";
import { defineConfig } from "vite";

const rootFolders: { [key: string]: string } = {};

const srcPath = resolve("./src");

const srcFolders = readdirSync(srcPath, { withFileTypes: true }).map((dir) =>
  dir.name.replace(/(\.ts){1}(x?)|(\.svg)|(\.png)|(\.pdf)/, "")
);

srcFolders.forEach((folder) => {
  rootFolders[folder] = join(srcPath, folder);
});

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    global: "globalThis",
  },
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["@emotion/babel-plugin"],
      },
    }),
  ],
  resolve: {
    alias: { ...rootFolders },
  },
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: "globalThis",
      },
      // Enable esbuild polyfill plugins
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true,
        }),
      ],
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/utils/testUtils/setup.ts"],
  },

  build: {
    sourcemap: true,
    rollupOptions: {
      plugins: [nodePolyfills()],
    },
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
