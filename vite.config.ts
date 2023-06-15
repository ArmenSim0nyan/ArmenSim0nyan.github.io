import { defineConfig } from 'vite';

import solidPlugin from 'vite-plugin-solid';
import sassDts from 'vite-plugin-sass-dts';

export default defineConfig({
    plugins: [solidPlugin(), sassDts()],
});