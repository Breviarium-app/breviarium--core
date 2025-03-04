import {defineConfig} from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
    build: {
        sourcemap: true,
        lib: {
            entry: "src/breviarium.ts",
            name: "Breviarium",
            fileName: (format) => `breviarium.${format}.js`,
            formats: ["es", "cjs", "umd"]
        },
    },
    plugins: [dts()],
});