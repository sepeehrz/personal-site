import {ref} from 'vue';
interface IData {
  name: string;
  isBold?: boolean;
}

export function useSkills() {
  const skillsFirst = ref<IData[]>([
    {
      name: 'Html/Html5',
      isBold: true
    },
    {
      name: 'Css/Css3',
      isBold: true
    },
    {
      name: 'javascript',
      isBold: true
    },
    {
      name: 'typescript',
      isBold: true
    },
    {
      name: 'Vue/Vue3',
      isBold: true
    },
    {
      name: 'Nuxt/Nuxt3',
      isBold: true
    },
    {
      name: 'Vue Router',
      isBold: true
    },
    {
      name: 'Vuetify/Vuetify3',
      isBold: true
    },
    {
      name: 'PrimeVue',
      isBold: true
    },
    {
      name: 'Vite',
      isBold: true
    },
    {
      name: 'Pwa',
      isBold: true
    }
  ]);
  const secondSkills = ref<IData[]>([
    {
      name: 'Ionic',
      isBold: true
    },
    {
      name: 'Vuex/Pinia',
      isBold: true
    },
    {
      name: 'Webpack/Rollup',
      isBold: true
    },
    {
      name: 'Git/Gitflow',
      isBold: true
    },
    {
      name: 'Jira/Trello/Azure',
      isBold: true
    },
    {
      name: 'Unit Test',
      isBold: true
    },
    {
      name: 'Scrum',
      isBold: true
    },
    {
      name: 'Xd/Figma',
      isBold: true
    },
    {
      name: 'Docker',
      isBold: false
    },
    {
      name: 'Ci/Cd',
      isBold: false
    },
    {
      name: 'react',
      isBold: false
    }
  ]);
  const thirdSkills = ref<IData[]>([
    {
      name: 'react-router',
      isBold: false
    },
    {
      name: 'AngularJs',
      isBold: false
    },
    {
      name: 'Nodejs',
      isBold: false
    },
    {
      name: 'Adonisjs',
      isBold: false
    },
    {
      name: 'Postman',
      isBold: false
    },
    {
      name: 'MySql',
      isBold: false
    },
    {
      name: 'SocketIo',
      isBold: false
    }
  ]);
  return {skillsFirst, secondSkills, thirdSkills};
}
