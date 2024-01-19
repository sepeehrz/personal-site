import {ref} from 'vue';
interface IData {
  title: string;
  details: string;
  slug: string;
  image: string;
}

export function useProjectLists() {
  const data = ref<IData[]>([
    {
      slug: 'cashineh',
      image: '',
      title: 'cashineh',
      details:
        'Professional software developer with 5+ years of experience in web applications and game development. Delivers a number of innovative and cutting-edge business soluti'
    },
    {
      slug: 'cashineh',
      image: '',
      title: 'cashineh',
      details:
        'Professional software developer with 5+ years of experience in web applications and game development. Delivers a number of innovative and cutting-edge business soluti'
    },
    {
      slug: 'cashineh',
      image: '',
      title: 'cashineh',
      details:
        'Professional software developer with 5+ years of experience in web applications and game development. Delivers a number of innovative and cutting-edge business soluti'
    },
    {
      slug: 'cashineh',
      image: '',
      title: 'cashineh',
      details:
        'Professional software developer with 5+ years of experience in web applications and game development. Delivers a number of innovative and cutting-edge business soluti'
    },
    {
      slug: 'cashineh',
      image: '',
      title: 'cashineh',
      details:
        'Professional software developer with 5+ years of experience in web applications and game development. Delivers a number of innovative and cutting-edge business soluti'
    },
    {
      slug: 'cashineh',
      image: '',
      title: 'cashineh',
      details:
        'Professional software developer with 5+ years of experience in web applications and game development. Delivers a number of innovative and cutting-edge business soluti'
    },
    {
      slug: 'cashineh',
      image: '',
      title: 'cashineh',
      details:
        'Professional software developer with 5+ years of experience in web applications and game development. Delivers a number of innovative and cutting-edge business soluti'
    },
    {
      slug: 'cashineh',
      image: '',
      title: 'cashineh',
      details:
        'Professional software developer with 5+ years of experience in web applications and game development. Delivers a number of innovative and cutting-edge business soluti'
    },
    {
      slug: 'cashineh',
      image: '',
      title: 'cashineh',
      details:
        'Professional software developer with 5+ years of experience in web applications and game development. Delivers a number of innovative and cutting-edge business soluti'
    },
    {
      slug: 'cashineh',
      image: '',
      title: 'cashineh',
      details:
        'Professional software developer with 5+ years of experience in web applications and game development. Delivers a number of innovative and cutting-edge business soluti'
    }
  ]);
  return {data};
}
