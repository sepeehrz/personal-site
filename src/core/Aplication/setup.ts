import { App, Plugin } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import type { Router } from 'vue-router';

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
        history: createWebHistory(),
        routes: []
    });

    const context: ModuleSetupContext = {
        app,
        router,
    };
    const modulesPaths: any = import.meta.globEager(
        '../../modules/*/index.ts'
    );
    for (const path in modulesPaths) {
        const setup = modulesPaths[path].default as Module | undefined;
        if (setup) {
            setup(context);
        }
    }
    app.use(router);
};
