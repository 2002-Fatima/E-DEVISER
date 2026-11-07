export type MethodologyStep = {
  number: string;
  title: string;
  description: string;
};

export const methodologySteps: MethodologyStep[] = [
  {
    number: '01',
    title: 'Problem',
    description: 'A complex, messy real-world problem.',
  },
  {
    number: '02',
    title: 'Understand',
    description: 'We investigate the domain, constraints, people, systems, and evidence.',
  },
  {
    number: '03',
    title: 'Design',
    description: 'We determine what intelligence, technology, and solution are actually required.',
  },
  {
    number: '04',
    title: 'Build',
    description: 'AI agents, software, data, automation, or whatever is appropriate.',
  },
  {
    number: '05',
    title: 'Solution',
    description: 'A working system that solves the problem.',
  },
  {
    number: '06',
    title: 'Measure',
    description: 'Does it actually improve the outcome?',
  },
];
