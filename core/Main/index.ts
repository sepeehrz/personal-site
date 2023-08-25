import {createApp, h} from 'vue';
import {RouterView} from 'vue-router';
import {startApplication} from '@core/Aplication/index';

createApp({
  render() {
    return h(RouterView);
  }
})
  .use(startApplication)
  .mount('#app');
