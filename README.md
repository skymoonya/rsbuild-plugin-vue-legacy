# rsbuild-plugin-vue-legacy

English | [简体中文](./README.zh_CN.md)

Support for `Vue` versions below `2.7` by setting an alias for `vue` (switch `vue` version in the project to `2.7`). Suitable for projects that want to try `rsbuild` but do not want to upgrade `vue` version to `2.7`.

If there are any `vue` related errors, please refer to [Migration to Vue 2.7](https://v2.vuejs.org/v2/guide/migration-vue-2-7.html)

## Quick Start
1. Install Dependencies
```
npm i rsbuild-plugin-vue-legacy -D
```
2. Configure `rsbuild`
```js
import { defineConfig } from '@rsbuild/core'
import { pluginVue2 } from '@rsbuild/plugin-vue2'
import vueLegacy from 'rsbuild-plugin-vue-legacy'

export default defineConfig({
  plugins: [
    pluginVue2(),
    vueLegacy(),
  ]
})
```

## Configuration

No configuration required.


