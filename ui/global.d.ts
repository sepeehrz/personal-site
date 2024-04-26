import svgLoader from './components/svgLoader.vue';
import componentTitle from './components/title.vue';
import LayoutBox from './components/layoutBox.vue';

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    svgLoader: typeof svgLoader;
    componentTitle: typeof componentTitle;
    LayoutBox: typeof LayoutBox;
  }
}
