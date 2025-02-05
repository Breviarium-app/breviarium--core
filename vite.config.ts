import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
    build: {
        lib: {
            entry: "src/index.ts",
            name: "Breviarium",
            fileName: "breviarium",
            formats: ["es", "cjs"], // Output ESM and CommonJS
        },
        rollupOptions: {
            output: [
                {
                    format: "es",
                    entryFileNames: "index.esm.js",
                    dir: "dist",
                    sourcemap: true,
                },
                {
                    format: "cjs",
                    entryFileNames: "index.cjs.js",
                    dir: "dist",
                    sourcemap: true,
                },
            ],
        },
    },
    plugins: [dts()],
});