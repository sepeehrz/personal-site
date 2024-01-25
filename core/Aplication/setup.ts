import {App, Plugin} from 'vue';
import {createRouter, createWebHistory} from 'vue-router';
import type {Router} from 'vue-router';
import {uiProjectSetting} from '@ui/index';

type ModuleSetupContext = {
  app: App;
  router: Router;
};

type Module = (context: ModuleSetupContext) => void;

export function defineModule(setup: Module) {
  return setup;
}

export const startApplication: Plugin = (app: App) => {
  const router = createRouter({
    scrollBehavior(to) {
      if (to.hash) {
        return {
          el: to.hash,
          behavior: 'smooth'
        };
      }

      return {top: 0};
    },
    history: createWebHistory(),
    routes: []
  });

  const context: ModuleSetupContext = {
    app,
    router
  };

  uiProjectSetting(context);

  const modulesPaths: any = import.meta.globEager('../../modules/*/index.ts');

  for (const path in modulesPaths) {
    const setup = modulesPaths[path].default as Module | undefined;
    if (setup) {
      setup(context);
    }
  }

  app.use(router);
};
