export interface CompanyBelief {
  number: string;
  title: string;
  description: string;
}

export const companyBeliefs: CompanyBelief[] = [
  {
    number: '01',
    title: 'Problem before technology.',
    description: 'Start with what needs solving—not what technology happens to be fashionable.',
  },
  {
    number: '02',
    title: 'Depth before assumptions.',
    description: 'The better we understand a problem, the better we can understand what deserves to be built.',
  },
  {
    number: '03',
    title: 'Build to learn.',
    description: 'Ideas become useful when they meet reality.',
  },
  {
    number: '04',
    title: 'Outcomes over outputs.',
    description: 'What changes matters more than what we produce.',
  },
  {
    number: '05',
    title: 'Stay curious.',
    description: "The next important problem may come from somewhere we didn't expect.",
  },
];
