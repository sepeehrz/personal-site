import {defineModule} from '@core/Aplication/setup';
import './assets/style/app.scss';
import {setupComponents} from './components';

export const uiProjectSetting = defineModule(({app, router}) => {
  setupComponents(app);
  router.addRoute({
    name: 'main',
    path: '',
    component: () => import('./layout/defaultLayout.vue')
  });
});
