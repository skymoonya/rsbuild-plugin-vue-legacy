# rsbuild-plugin-vue-legacy

[English](./README.md) | 简体中文

通过设置`vue`别名的方式支持`vue@2.7`以下版本 (将项目中的`vue`版本切到`2.7`)。适用于希望尝试`rsbuild`但却不想把`vue`版本升级到`2.7`的项目

如果有`vue`相关的错误，请参考[迁移至 Vue 2.7](https://v2.cn.vuejs.org/v2/guide/migration-vue-2-7.html)

## 快速开始
1. 安装依赖
```
npm i rsbuild-plugin-vue-legacy -D
```
2. 配置 `rsbuild`
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

## 配置

没有配置
