// Featured projects shown in the Projects section. Add, remove, or reorder
// freely. `repo` and `demo` are optional — omit a field to hide that link.
//
// `image` is optional too. Drop a square-ish logo/icon in
// src/assets/projects/ and set `image: 'wspr.png'` (filename only).
// It renders at 64px beside the title, so icons read better than screenshots.

export interface Project {
  name: string;
  description: string;
  /** Short tech tags, e.g. ['TypeScript', 'Postgres']. */
  tech: string[];
  /** Filename in src/assets/projects/, e.g. 'wspr.png'. */
  image?: string;
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
    image: 'wspr.png',
    demo: undefined,
  },
  {
    name: 'doc-converter',
    description:
      'Simple, yet effective, markdown to pdf/html converter. AI produces Markdown. I read HTML (or PDF). This makes it easy without burning tokens.',
    tech: ['bash', 'pandoc', 'weasyprint'],
    repo: 'https://github.com/michaelgilch/doc-converter',
    image: 'doc-converter.svg',
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
