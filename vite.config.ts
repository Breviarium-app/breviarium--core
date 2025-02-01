import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
    build: {
        lib: {
            entry: "src/index.ts",
            name: "Breviarium",
            fileName: "breviarium",
        },
    },
    plugins: [dts()],
});