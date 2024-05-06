import {App, Plugin} from 'vue';
import type {Router} from 'vue-router';
import {uiProjectSetting} from '@app/ui/index';
import {createRouter, createWebHistory} from 'vue-router';

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

  const modulesPaths: any = import.meta.glob('../../modules/*/index.ts', {
    eager: true
  });

  for (const path in modulesPaths) {
    const setup = modulesPaths[path].default as Module | undefined;
    if (setup) {
      setup(context);
    }
  }

  app.use(router);
};
