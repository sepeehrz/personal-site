import {ref} from 'vue';
interface IStacks {
  name: string;
  icon: string;
}
interface IData {
  title: string;
  details: string;
  slug: string;
  images?: string[];
  tags: string[];
  stacks: IStacks[];
  withPreview: boolean;
  withSlider: boolean;
}

export function useProjects() {
  const data = ref<IData[]>([
    {
      withPreview: false,
      withSlider: true,
      slug: 'cashineh',
      title: 'Cashineh',
      details:
        'Shop from your favorite store through cashineh. When you buy from different stores through cashineh, after the store is approved, part of the amount you pay will be returned to your user account in cashineh.',
      images: [
        'cashineh/cashineh-home-page.jpg',
        'cashineh/cashineh-01.jpg',
        'cashineh/cashineh-02.jpg',
        'cashineh/cashineh-03.jpg'
      ],
      tags: ['website'],
      stacks: [
        {
          name: 'Html',
          icon: 'html'
        },
        {
          name: 'Css',
          icon: 'css'
        },
        {
          name: 'Sass',
          icon: 'sass'
        },
        {
          name: 'Bootstrap',
          icon: 'bootstrap'
        },
        {
          name: 'Angularjs',
          icon: 'angular'
        },
        {
          name: 'Material',
          icon: 'materialjs'
        },
        {
          name: 'Mysql',
          icon: 'mysql'
        },
        {
          name: 'Nodejs',
          icon: 'nodejs'
        },
        {
          name: 'Adonis',
          icon: 'adonis'
        },
        {
          name: 'webpack',
          icon: 'webpack'
        }
      ]
    },
    {
      withPreview: false,
      withSlider: true,
      slug: 'ressa',
      title: 'Ressa',
      details:
        'The formation of the Rasa system began in 2016. Rasa came into existence when the mother of one of its founders, who happened to be a doctor herself, came and raised the problem of being in a relationship with her patient, and this caused some graduates of Tehran University and Sharif Industrial to think about Rasa. to bring about During this time, Rasa has tried to establish a reliable communication between the doctor and the patient on the telephone platform, and has always considered his main values, which are serving in the field of health and protecting peoples privacy, as his mission. Rasti Rasa is owned by Danesh Baniyan Green and Silver Leaves Company and has the necessary licenses from the Ministry of Industry, Mines and Trade and the Ministry of Guidance. Rasa is proud of the fact that there are many well-known and experienced doctors in its collection of doctors, and it has made it possible for everyone to communicate with these doctors.',
      images: [
        'ressa/ressa-01.jpg',
        'ressa/ressa-02.jpg',
        'ressa/ressa-03.jpg',
        'ressa/ressa-04.jpg',
        'ressa/ressa-05.jpg'
      ],
      tags: ['website'],
      stacks: [
        {
          name: 'Html',
          icon: 'html'
        },
        {
          name: 'Css',
          icon: 'css'
        },
        {
          name: 'Sass',
          icon: 'sass'
        },
        {
          name: 'Bootstrap',
          icon: 'bootstrap'
        },
        {
          name: 'Vue',
          icon: 'vue'
        },
        {
          name: 'Nuxt',
          icon: 'nuxt'
        },
        {
          name: 'Mysql',
          icon: 'mysql'
        },
        {
          name: 'Nodejs',
          icon: 'nodejs'
        },
        {
          name: 'Adonis',
          icon: 'adonis'
        },
        {
          name: 'webpack',
          icon: 'webpack'
        }
      ]
    },
    {
      withPreview: false,
      withSlider: true,
      slug: 'rasha',
      title: 'Rasha',
      details:
        'Rasha is a power bank rental service for charging mobile batteries and other accessories. With Rasha, you wont have to worry about your mobile phone being low. It is enough to get a power bank from one of the Rasha stations and take it with you. Rasha will be with you all day in work and life. When you are done, return the Rasha to one of the stations or exchange it with another fully charged power bank. Everything is done easily in the Rasha application. Through it, you can find the nearest station and even find out about the news or good events that happen in our partner stores.',
      images: [
        'rasha/rasha-1.jpg',
        'rasha/rasha-2.png',
        'rasha/rasha-3.jpg',
        'rasha/rasha-4.jpg'
      ],
      tags: ['webapp', 'pwa'],
      stacks: [
        {
          name: 'Html',
          icon: 'html'
        },
        {
          name: 'Css',
          icon: 'css'
        },
        {
          name: 'Sass',
          icon: 'sass'
        },
        {
          name: 'Vue',
          icon: 'vue'
        },
        {
          name: 'Nuxt',
          icon: 'nuxt'
        },
        {
          name: 'Ionic',
          icon: 'ionic'
        },
        {
          name: 'Pwa',
          icon: 'pwa'
        },
        {
          name: 'webpack',
          icon: 'webpack'
        }
      ]
    },
    {
      withPreview: false,
      withSlider: true,
      slug: 'mekappa',
      title: 'Mekappa',
      details: 'Online shop for selling kitchen appliances',
      images: [
        'mekapa/mekapa-1.jpg',
        'mekapa/mekapa-2.png',
        'mekapa/mekapa-3.jpg',
        'mekapa/mekapa-4.jpg'
      ],
      tags: ['webpsite'],
      stacks: [
        {
          name: 'Html',
          icon: 'html'
        },
        {
          name: 'Css',
          icon: 'css'
        },
        {
          name: 'Sass',
          icon: 'sass'
        },
        {
          name: 'Vue',
          icon: 'vue'
        },
        {
          name: 'Nuxt',
          icon: 'nuxt'
        },
        {
          name: 'webpack',
          icon: 'webpack'
        }
      ]
    },
    {
      withPreview: false,
      withSlider: false,
      slug: 'spin',
      title: 'spin',
      details:
        'An admin panel for all the branches of Spin brand sports clubs in Iran, with the ability to see sports programs, register, buy sports equipment from the store for the athlete and to manage Spin collections, manage all athletes and branches based on the role of the user. It could be changed.',
      tags: ['pannel'],
      stacks: [
        {
          name: 'Html',
          icon: 'html'
        },
        {
          name: 'Css',
          icon: 'css'
        },
        {
          name: 'Sass',
          icon: 'sass'
        },
        {
          name: 'Vue',
          icon: 'vue'
        },
        {
          name: 'Nuxt',
          icon: 'nuxt'
        },
        {
          name: 'Mysql',
          icon: 'mysql'
        },
        {
          name: 'Nodejs',
          icon: 'nodejs'
        },
        {
          name: 'Adonis',
          icon: 'adonis'
        },
        {
          name: 'webpack',
          icon: 'webpack'
        }
      ]
    },
    {
      withPreview: false,
      withSlider: false,
      slug: 'emonshi',
      title: 'Emonshi',
      details:
        'An admin panel that could be used to make an appointment online, which was designed for doctors, so that the clients could make an appointment with the doctor of their choice online and communicate with the doctor online.',
      tags: ['pannel'],
      stacks: [
        {
          name: 'Html',
          icon: 'html'
        },
        {
          name: 'Css',
          icon: 'css'
        },
        {
          name: 'Sass',
          icon: 'sass'
        },
        {
          name: 'Vue',
          icon: 'vue'
        },
        {
          name: 'Nuxt',
          icon: 'nuxt'
        },
        {
          name: 'Mysql',
          icon: 'mysql'
        },
        {
          name: 'Nodejs',
          icon: 'nodejs'
        },
        {
          name: 'Adonis',
          icon: 'adonis'
        },
        {
          name: 'webpack',
          icon: 'webpack'
        }
      ]
    }
  ]);
  return {data};
}
