// Featured projects shown in the Projects section. Add, remove, or reorder
// freely. `repo` and `demo` are optional — omit a field to hide that link.

export interface Project {
  name: string;
  description: string;
  /** Short tech tags, e.g. ['TypeScript', 'Postgres']. */
  tech: string[];
  repo?: string;
  demo?: string;
}

export const PROJECTS: Project[] = [
  {
    name: 'wspr 🗣️',
    description:
      'Push-to-talk dictation for Linux that types what you say into any window. Fully local Whisper transcription, plus a socket sink that pipes transcripts to anything else you want to build.',
    tech: ['Python', 'faster-whisper', 'X11', 'Unix sockets'],
    repo: 'https://github.com/michaelgilch/wspr',
    demo: undefined,
  },
  {
    name: 'doc-converter',
    description:
      'Simple, yet effective, markdown to pdf/html converter. AI produces Markdown. I read HTML (or PDF). This makes it easy without burning tokens.',
    tech: ['bash', 'pandoc', 'weasyprint'],
    repo: 'https://github.com/michaelgilch/doc-converter',
    demo: undefined,
  },
  // {
  //   name: 'iris',
  //   description:
  //     'A third example so the grid looks balanced. Delete this one if you only want to feature two.',
  //   tech: ['Go', 'Docker'],
  //   repo: 'https://github.com/michaelgilch/iris',
  //   demo: undefined,
  // },
//   {
//     name: 'arthur',
//     description:
//       'A fourth example so the grid looks balanced. Delete this one if you only want to feature two.',
//     tech: ['Go', 'Docker'],
//     repo: 'https://github.com/michaelgilch/arthur',
//     demo: undefined,
//   },
//   {
//     name: 'convert-article-to-audio-summary',
//     description:
//       'A fifth example so the grid looks balanced. Delete this one if you only want to feature two.',
//     tech: ['Go', 'Docker'],
//     repo: 'https://github.com/michaelgilch',
//     demo: undefined,
//   },
//   {
//     name: 'else',
//     description:
//       'A sixth example so the grid looks balanced. Delete this one if you only want to feature two.',
//     tech: ['Go', 'Docker'],
//     repo: 'https://github.com/michaelgilch',
//     demo: undefined,
//   },
];
