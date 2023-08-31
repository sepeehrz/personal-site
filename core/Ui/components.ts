import type {App} from 'vue';
import svgLoader from './components/svgLoader.vue';
import componentTitle from './components/title.vue';
export function setupComponents(app: App) {
  [svgLoader, componentTitle].forEach(component => {
    app.component(component.name, component);
  });
}
