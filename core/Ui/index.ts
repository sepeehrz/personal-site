import {defineModule} from '@core/Aplication/setup';
import './assets/style/app.scss';

export const uiProjectSetting = defineModule(({router}) => {
  router.addRoute({
    name: 'main',
    path: '',
    component: () => import('./layout/defaultLayout.vue')
  });
  // router.addRoute({
  //   name: 'not-found',
  //   path: '/:pathMatch(.*)*',
  //   component: () => import('./layout/notFound.vue')
  // });
});
