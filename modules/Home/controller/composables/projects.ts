import {ref} from 'vue';
interface IStacks {
  name: string;
  icon: string;
}
interface IData {
  title: string;
  details: string;
  slug: string;
  images: string[];
  tags: string[];
  stacks: IStacks[];
  withPreview: boolean;
}

export function useProjects() {
  const data = ref<IData[]>([
    {
      slug: 'cashineh',
      title: 'cashineh',
      details:
        'Shop from your favorite store through cashineh. When you buy from different stores through cashineh, after the store is approved, part of the amount you pay will be returned to your user account in cashineh.',
      images: [
        'cashineh-home-page.jpg',
        'cashineh-01.jpg',
        'cashineh-02.jpg',
        'cashineh-03.jpg'
      ],
      tags: ['website'],
      stacks: [
        {
          name: 'webpack',
          icon: 'webpack'
        }
      ],
      withPreview: false
    },
    {
      slug: 'cashineh2',
      title: 'cashineh2',
      details:
        'Shop from your favorite store through cashineh. When you buy from different stores through cashineh, after the store is approved, part of the amount you pay will be returned to your user account in cashineh.',
      images: [
        'cashineh-home-page.jpg',
        'cashineh-01.jpg',
        'cashineh-02.jpg',
        'cashineh-03.jpg'
      ],
      tags: ['website'],
      stacks: [
        {
          name: 'webpack',
          icon: 'webpack'
        }
      ],
      withPreview: false
    },
    {
      slug: 'resa',
      title: 'resa',
      details:
        'Shop from your favorite store through cashineh. When you buy from different stores through cashineh, after the store is approved, part of the amount you pay will be returned to your user account in cashineh.',
      images: [
        'cashineh-home-page.jpg',
        'cashineh-01.jpg',
        'cashineh-02.jpg',
        'cashineh-03.jpg'
      ],
      tags: ['website'],
      stacks: [
        {
          name: 'webpack',
          icon: 'webpack'
        }
      ],
      withPreview: false
    }
    // {
    //   slug: 'cashineh',

    //   title: 'cashineh',
    //   details:
    //     'Professional software developer with 5+ years of experience in web applications and game development. Delivers a number of innovative and cutting-edge business soluti'
    // },
    // {
    //   slug: 'cashineh',

    //   title: 'cashineh',
    //   details:
    //     'Professional software developer with 5+ years of experience in web applications and game development. Delivers a number of innovative and cutting-edge business soluti'
    // },
    // {
    //   slug: 'cashineh',

    //   title: 'cashineh',
    //   details:
    //     'Professional software developer with 5+ years of experience in web applications and game development. Delivers a number of innovative and cutting-edge business soluti'
    // },
    // {
    //   slug: 'cashineh',
    //   title: 'cashineh',
    //   details:
    //     'Professional software developer with 5+ years of experience in web applications and game development. Delivers a number of innovative and cutting-edge business soluti'
    // },
    // {
    //   slug: 'cashineh',
    //   title: 'cashineh',
    //   details:
    //     'Professional software developer with 5+ years of experience in web applications and game development. Delivers a number of innovative and cutting-edge business soluti'
    // },
    // {
    //   slug: 'cashineh',
    //   title: 'cashineh',
    //   details:
    //     'Professional software developer with 5+ years of experience in web applications and game development. Delivers a number of innovative and cutting-edge business soluti'
    // },
    // {
    //   slug: 'cashineh',
    //   title: 'cashineh',
    //   details:
    //     'Professional software developer with 5+ years of experience in web applications and game development. Delivers a number of innovative and cutting-edge business soluti'
    // },
    // {
    //   slug: 'cashineh',
    //   title: 'cashineh',
    //   details:
    //     'Professional software developer with 5+ years of experience in web applications and game development. Delivers a number of innovative and cutting-edge business soluti'
    // },
    // {
    //   slug: 'cashineh',
    //   title: 'cashineh',
    //   details:
    //     'Professional software developer with 5+ years of experience in web applications and game development. Delivers a number of innovative and cutting-edge business soluti'
    // }
  ]);
  return {data};
}
