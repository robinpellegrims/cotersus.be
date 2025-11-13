import type { ClientKey } from './clients';
import type { TechnologyKey } from './technologies';

export interface Project {
  image: string;
  alt: string;
  role: string;
  title: string;
  url: string;
  description: string;
  technologies: TechnologyKey[];
  clients: ClientKey[];
  year: number;
}

export const projects: Project[] = [
  {
    image: '/images/projects/pellegrims-coach-hero.png',
    alt: 'Ward Pellegrims Coaching platform',
    role: 'Analysis • Design • Full-stack Development',
    title: 'Ward Pellegrims Coaching',
    url: 'https://www.pellegrims.coach/',
    description:
      'Professional coaching platform for elite swimming and triathlon athletes with online training programs, technique sessions, and payment integration.',
    technologies: ['nextjs', 'typescript', 'tailwindcss', 'stripe'],
    clients: ['wardPellegrims'],
    year: 2025,
  },
  {
    image: '/images/projects/zwem-coach-hero.png',
    alt: 'Zwem Coach platform',
    role: 'Analysis • Design • Full-stack Development',
    title: 'Zwem Coach',
    url: 'https://www.zwem.coach/',
    description:
      'Swimming coaching platform offering personalized training programs, technique analysis, and performance tracking for swimmers of all levels.',
    technologies: ['nextjs', 'typescript', 'tailwindcss', 'stripe'],
    clients: ['wardPellegrims'],
    year: 2025,
  },
  {
    image: '/images/projects/exceptional-kids-hero.png',
    alt: 'Exceptional Kids Foundation website',
    role: 'Analysis • Design • Full-stack Development',
    title: 'Exceptional Kids',
    url: 'https://www.exceptionalkids.be/',
    description:
      'Foundation website supporting children with rare genetic disorders, featuring documentary integration, educational resources, and fundraising initiatives.',
    technologies: ['nextjs', 'prismicCms', 'typescript', 'tailwindcss'],
    clients: ['cmeKuleuven'],
    year: 2023,
  },
  {
    image: '/images/projects/vs-mediation-hero.png',
    alt: 'VS Mediation football agency platform',
    role: 'Frontend Development',
    title: 'VS Mediation',
    url: 'https://riff-agency.be/projecten/van-steenbrugge-mediation',
    description:
      'Modern football agency platform combining legal expertise, international networking, and performance coaching with transparent fee structures.',
    technologies: ['angular', 'typescript', 'nx'],
    clients: ['riffAgency'],
    year: 2019,
  },
  {
    image: '/images/projects/vsa-hero.jpg',
    alt: 'Van Steenbrugge Advocaten website',
    role: 'Frontend Development',
    title: 'Van Steenbrugge Advocaten',
    url: 'https://riff-agency.be/projecten/van-steenbrugge-advocaten',
    description:
      'Modern website update for Belgian law firm emphasizing professional branding and user experience',
    technologies: ['angular', 'typescript', 'nx'],
    clients: ['riffAgency'],
    year: 2019,
  },
  {
    image: '/images/projects/jazzandmo-hero.png',
    alt: 'Jazz&Mo platform',
    role: 'Frontend Development',
    title: 'Jazz&Mo',
    url: 'https://jazzandmo.be/',
    description:
      'Jazz magazine, community site, and music discovery platform where users can contribute content and discover their next favorite artist or album.',
    technologies: ['angular', 'typescript', 'nx'],
    clients: ['riffAgency'],
    year: 2017,
  },
  {
    image: '/images/projects/banakin-hero.png',
    alt: 'Banakin charitable fund website',
    role: 'Frontend Development',
    title: 'Banakin',
    url: 'https://banakin.org/',
    description:
      'Charitable fund website managed by King Baudouin Foundation, supporting cancer patients in Belgium, heritage preservation, and global health initiatives.',
    technologies: ['angularjs'],
    clients: ['riffAgency'],
    year: 2016,
  },
  {
    image: '/images/projects/mmb.png',
    alt: 'Manage My Business platform',
    role: 'Frontend Development',
    title: 'Manage My Business',
    url: 'https://manage-my-business.be/',
    description:
      'The Belgian platform for the online incorporation, modification, and dissolution of your company, association, or foundation.',
    technologies: ['angular', 'typescript'],
    clients: ['fednot', 'irisIms'],
    year: 2023,
  },
  {
    image: '/images/projects/stapor.png',
    alt: 'Statuten en vertegenwoordigingsbevoegdheden platform',
    role: 'Frontend Development',
    title: 'Statuten en vertegenwoordigingsbevoegdheden',
    url: 'https://statuten.notaris.be/stapor_v1',
    description:
      'The statutory database that contains all versions of the articles of association of legal entities, resulting from notarial acts executed in Belgium, from the incorporation of the legal entity up to the very last update of the articles of association.',
    technologies: ['angular', 'typescript', 'nx'],
    clients: ['fednot', 'irisIms'],
    year: 2019,
  },
  {
    image: '/images/projects/goldgetters.png',
    alt: 'ZVC Goldgetters futsal team website',
    role: 'Analysis • Design • Full-stack Development',
    title: 'ZVC Goldgetters',
    url: 'https://goldgetters.be/',
    description:
      'Official website for ZVC Goldgetters futsal team, featuring team information, match schedules, player profiles, statistics, and more.',
    technologies: ['drupal'],
    clients: ['zvcGoldgetters'],
    year: 2012,
  },
];
