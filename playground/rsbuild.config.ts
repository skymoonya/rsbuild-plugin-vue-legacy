import { defineConfig } from "@rsbuild/core";
import { pluginVue2 } from "@rsbuild/plugin-vue2";
import legacyDepsCompat from 'rsbuild-plugin-legacy-deps-compat';
import vueLegacy from '../src'

export default defineConfig({
    plugins: [
        pluginVue2(),
        legacyDepsCompat({
            postcss: false
        }),
        vueLegacy(),
    ],
    source: {
        entry: {
            index: './src/main.js'
        }
    },
    html: {
        mountId: 'app',
        template: 'public/index.html',
        templateParameters: {
            BASE_URL: '/',
            htmlWebpackPlugin: {
                options: {
                    title: 'Rsbuild App'
                }
            }
        }
    }
});
