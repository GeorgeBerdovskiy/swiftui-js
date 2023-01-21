import { defineConfig } from 'vite';
import swiftUIJS from './vite-plugin-swiftui-js';

export default defineConfig({
    plugins: [
        swiftUIJS()
    ],
})