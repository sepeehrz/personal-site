import svgLoader from './components/svgLoader.vue';
import componentTitle from './components/title.vue';
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    svgLoader: typeof svgLoader;
    componentTitle: typeof componentTitle;
  }
}
