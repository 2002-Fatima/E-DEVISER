export type MethodologyStep = {
  number: string;
  title: string;
  description: string;
};

export const methodologySteps: MethodologyStep[] = [
  {
    number: '01',
    title: 'Problem',
    description: 'We begin by clarifying the real challenge, the decision context, and the people affected by it.',
  },
  {
    number: '02',
    title: 'Understand',
    description: 'We investigate the underlying patterns, constraints, and signals that shape the problem.',
  },
  {
    number: '03',
    title: 'Design',
    description: 'We shape a practical path from a complex problem to a concrete system, experience, or intervention.',
  },
  {
    number: '04',
    title: 'Build',
    description: 'We turn the design into a usable product or capability with human-centred iteration.',
  },
  {
    number: '05',
    title: 'Solution',
    description: 'We evaluate how the system supports the intended outcomes and how it fits the surrounding organization.',
  },
  {
    number: '06',
    title: 'Measure',
    description: 'We monitor results, refine assumptions, and improve the system with evidence and learning.',
  },
];
