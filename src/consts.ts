import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'b3at\'s blog',
  description:
    'I\'m just a guy who does stuff',
  href: 'https://b3at1.github.io',
  author: 'b3at',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 4,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/about',
    label: 'about',
  },
  {
    href: '/blog',
    label: 'blog',
  }
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/b3at1',
    label: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/sam-bederman/',
    label: 'LinkedIn',
  },
  {
    href: 'mailto:sambederman@gmail.com',
    label: 'Email',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
