import {defineModule} from '@app/application/setup';

export default defineModule(({router}) => {
  router.addRoute('main', {
    name: 'Project',
    path: 'project/:id',
    component: () => import('./views/index.vue')
  });
});
