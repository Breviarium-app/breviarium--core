import {defineConfig} from "vite";
import dts from "vite-plugin-dts";
import path, {resolve} from 'path';


export default defineConfig({
    build: {
        sourcemap: true,
        lib: {
            entry: "src/breviarium.ts",
            name: "Breviarium",
            fileName: (format) => `breviarium.${format}.js`,
            formats: ["es", "cjs", "umd"]
        },
        rollupOptions: {
            // input: ["src/prayers"],
        }
    },
    // publicDir: './src/',
    plugins: [dts({
        exclude: ["src/__tests__"]
    })],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            romcal: resolve(__dirname, 'node_modules/romcal/rites/roman1969/dist/esm/romcal.js'),
        },
    },
});