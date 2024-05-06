import {defineModule} from '@app/application/setup';

export default defineModule(({router}) => {
  router.addRoute('main', {
    name: 'Home',
    path: '',
    component: () => import('./views/index.vue')
  });
});
