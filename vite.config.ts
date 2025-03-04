import {defineConfig} from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
    build: {
        sourcemap: true,
        lib: {
            entry: "src/breviarium.ts",
            name: "Breviarium",
            fileName: "breviarium",
        },
        rollupOptions: {
            output: [
                {
                    format: "es",
                    entryFileNames: "breviarium.esm.js",
                    dir: "dist",
                },
                {
                    format: "cjs",
                    entryFileNames: "breviarium.cjs.cjs",
                    dir: "dist",
                },
                {
                    format: "umd",
                    entryFileNames: "breviarium.umd.js",
                    dir: "dist",
                    name: "Breviarium", // Global variable for browsers
                    sourcemap: true,
                },
            ],
        },
    },
    plugins: [dts()],
});