export type MethodologyStep = {
  number: string;
  title: string;
  description: string;
};

export const methodologySteps: MethodologyStep[] = [
  {
    number: '01',
    title: 'Problem',
    description: 'We start with the problem—not a predetermined technology or solution.',
  },
  {
    number: '02',
    title: 'Understand',
    description: 'We go deep into a problem—its people, incentives, systems, constraints, evidence, and desired outcomes—before deciding what needs to exist.',
  },
  {
    number: '03',
    title: 'Design',
    description: 'We translate insights into a solution approach designed around the problem, not the tech.',
  },
  {
    number: '04',
    title: 'Build',
    description: 'We build with the right mix of capabilities—whatever the problem actually requires.',
  },
  {
    number: '05',
    title: 'Solve',
    description: 'We deliver a working solution that people can use in the real world.',
  },
  {
    number: '06',
    title: 'Measure',
    description: 'We measure what matters and learn what needs to improve next.',
  },
];
