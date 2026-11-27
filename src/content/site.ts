export interface PendingSiteNotes {
  founderIntroduction: string;
  founderProfile: string;
  leadershipProfiles: string;
  leadershipPolicy: string;
  contactChannel: string;
  companyCopyEditorialNote: string;
  storyEditorialNote: string;
  careersAvailability: string;
  footerPublicationNote: string;
  screenReaderPlaceholderCaption: string;
}

export const showPendingNotes = false;

export const pendingNotes: PendingSiteNotes = {
  founderIntroduction: 'A personal introduction from our founder is being prepared.',
  founderProfile: 'Founder name, portrait, and full profile will be added once approved details are supplied.',
  leadershipProfiles: 'Only confirmed executives will be featured; no invented profiles.',
  leadershipPolicy: 'Leadership profiles will be added as names, titles, and biographies are confirmed.',
  contactChannel: 'Contact channel to be confirmed.',
  companyCopyEditorialNote: 'Supplied company copy must be approved before launch.',
  storyEditorialNote: 'This story page should capture the underlying motivations and practical context in an editable format.',
  careersAvailability: 'Career openings are not currently published.',
  footerPublicationNote: 'Contact details and career information are not yet published.',
  screenReaderPlaceholderCaption: 'The founder video introduction is not yet available. This is a placeholder and does not contain playback.',
};

export const site = {
  name: 'E Deviser',
  shortName: 'E Deviser',
  cuevoUrl: 'https://cuevo.tech/',
  description:
    'E Deviser builds agentic intelligent systems for complex problems, combining AI, data, and domain intelligence with education-first thinking.',
  footerText:
    'E Deviser builds intelligent systems for complex problems with a focus on learning and decision-making.',
  missionStatement:
    'To improve learning outcomes for 10 million learners across the GCC by 2030.',
};
