import type {App} from 'vue';
import svgLoader from './components/svgLoader.vue';
import componentTitle from './components/title.vue';
import LayoutBox from './components/layoutBox.vue';

export function setupComponents(app: App) {
  [svgLoader, componentTitle, LayoutBox].forEach((component: any) => {
    app.component(component.name, component);
  });
}
