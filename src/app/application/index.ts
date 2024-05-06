import {startApplication} from './setup';
import {createApp, h} from 'vue';
import {RouterView} from 'vue-router';

createApp({
  render() {
    return h(RouterView);
  }
})
  .use(startApplication)
  .mount('#app');
