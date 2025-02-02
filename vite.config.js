import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import hexColorTransform from "@lightningtv/vite-hex-transform";
import legacy from "@vitejs/plugin-legacy";
import path from "path";
import deviceConfigPlugin from "./devices/deviceConfigPlugin.js";

const envDir = "./environments";

export default defineConfig(({ _mode }) => {
  // Get environment variables
  // const env = loadEnv(mode, path.join(__dirname, envDir));

  return {
    envDir,
    plugins: [
      deviceConfigPlugin(process.env.TARGET_DEVICE),
      hexColorTransform({
        include: ["src/**/*.{ts,tsx,js,jsx}"],
      }),
      solidPlugin({
        solid: {
          moduleName: "@lightningtv/solid",
          generate: "universal",
        },
      }),
      legacy({
        targets: ["defaults", "Chrome >= 49"],
        // additionalLegacyPolyfills: ["whatwg-fetch", "es6-proxy-polyfill"],
        modernPolyfills: [
          // Safari 11 has modules, but throws > ReferenceError: Can't find variable: globalThis
          "es.global-this",
        ],
      }),
    ],
    resolve: {
      alias: {
        theme: path.resolve(__dirname, "./theme.js"),
        "@": path.resolve(__dirname, "./src"),
        "#devices": path.resolve(__dirname, "./devices"),
      },
      dedupe: ["solid-js", "@lightningtv/solid", "@lightningtv/core", "@lightningjs/renderer"],
    },
    optimizeDeps: {
      exclude: ["@lightningtv/solid", "@lightningtv/core", "@lightningjs/renderer"],
    },
    server: {
      hmr: true,
      headers: {
        "Cross-Origin-Opener-Policy": "same-origin",
        "Cross-Origin-Embedder-Policy": "require-corp",
      },
    },
    test: {
      browser: {
        enabled: true,
        headless: false,
        provider: "playwright",
        name: "webkit",
      },
      testTransformMode: { web: ["/.[jt]sx?$/"] },
      globals: true,
    },
  };
});
