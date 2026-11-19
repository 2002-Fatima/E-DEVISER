export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
  children?: Array<{ label: string; href: string }>;
};

export const primaryNavigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'What We Build', href: '/what-we-build/' },
  { label: 'Our Work', href: '/our-work/' },
  {
    label: 'Company',
    href: '/company/',
    children: [
      { label: 'Overview', href: '/company/' },
      { label: 'Team', href: '/company/team/' },
      { label: 'Careers & Contact', href: '/company/careers-contact/' },
    ],
  },
  { label: 'CUEVO', href: 'https://cuovo.tech', external: true },
];

export const companyNavigation = [
  { label: 'Overview', href: '/company/' },
  { label: 'Team', href: '/company/team/' },
  { label: 'Careers & Contact', href: '/company/careers-contact/' },
];
