import { type RsbuildPlugin } from '@rsbuild/core';
import moduleAlias from 'module-alias';
import { createRequire } from 'node:module';
import path from 'node:path';

export default function rsbuildPluginVueLegacy(): RsbuildPlugin {
  const require = createRequire(import.meta.url);
  const vue2_7 = require.resolve('vue-v2.7').replace(/(node_modules[\/\\]vue-v2\.7)[\/\\].*/, '$1');
  moduleAlias.addAlias('vue', vue2_7);
  moduleAlias.addAlias('vue/compiler-sfc', path.join(vue2_7, 'compiler-sfc'));
  moduleAlias.addAlias('vue/package.json', path.join(vue2_7, 'package.json'));
  return {
    name: 'plugin:vue-legacy',
    setup(api) {
      api.modifyRsbuildConfig((config, { mergeRsbuildConfig }) => mergeRsbuildConfig(config, {
        tools: {
          rspack(config) {
            if (!config.resolve) config.resolve = {};
            if (!config.resolve.alias) config.resolve.alias = {};
            config.resolve.alias.vue = vue2_7;
            config.resolve.alias.vue$ = vue2_7;
            config.resolve.alias['@vue/composition-api'] = require.resolve('../composition.js');
            config.resolve.alias['vue-demi'] = require.resolve('vue-demi/lib/v2.7/index.mjs');
          }
        },
      }));
    }
  };
}
