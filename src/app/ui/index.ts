import './assets/style/app.scss';
import {setupComponents} from './components';
import {defineModule} from '@app/application/setup';

export const uiProjectSetting = defineModule(({app, router}) => {
  setupComponents(app);
  router.addRoute({
    name: 'main',
    path: '',
    component: () => import('./layout/defaultLayout.vue')
  });
});
