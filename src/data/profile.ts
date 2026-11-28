/**
 * ============================================================
 *  ALL WEBSITE CONTENT LIVES HERE.
 *  Edit the text below. You do not need to touch any other file.
 * ============================================================
 */

export const profile = {
  name: 'Muhammad Fakhri Umam',
  shortName: 'Fakhri',
  initials: 'MF',
  role: 'IT Support & Network Technician',
  tagline: 'Keeping networks up and people working.',
  location: 'Malang, Indonesia',
  status: 'Open to IT Support & NOC roles',
  intro:
    'I fix computers, run networks, and keep cables tidy, from a campus computer lab to a pondok pesantren network of 40 users. Calm under pressure and trusted with responsibility.',

  // Web-ready photo lives in /public/images/ (4:5, ~800x1000 JPG).
  // Original/source photos are kept in /design/photos/ (not published).
  // Leave it empty ('') to show the "MF" monogram instead.
  photo: '/images/profile.jpg',

  // CV PDF is exported from /design/cv/cv.html into /public/cv.pdf (see README). Leave '' to hide the button.
  cv: '/cv.pdf',

  contact: {
    email: 'fakhriummam@gmail.com',
    linkedin: 'https://www.linkedin.com/in/fakhriummam/',
    github: 'https://github.com/fakhriummam',
  },

  // Create a free form at https://formspree.io and paste the form ID here (e.g. 'xyzabcde').
  formspreeId: 'maeokrza',
};

export const stats = [
  { value: '30–40', label: 'Users on the network I operate' },
  { value: '2 + 4', label: 'MikroTik routers and access points' },
  { value: 'Apr 2025', label: 'Started in campus IT support' },
  { value: '1 yr', label: 'As network operator (NOC)' },
];

export const about = [
  'I am an IT Support intern and lab assistant at Institut Asia Malang, where I am also an Informatics Engineering student, now in my fifth semester. Whenever a lecturer or staff member has a problem with their PC, printer, shared folder or connection, I am usually the one they call.',
  'Outside campus, I run the network at Pondok Pesantren Sabilul Huda in Malang: two MikroTik routers and four access points serving 30–40 users. It is where I put what I learn into practice every day.',
  'I grew up in pesantren, at Darul Ulum Jombang, where discipline, honesty and respect are part of daily life. I bring the same attitude to technical work: I show up, I take ownership, and I leave things tidier than I found them.',
];

export const experience = [
  {
    role: 'IT Support Intern & Lab Assistant',
    org: 'Institut Asia Malang',
    period: 'Apr 2025 — Present',
    summary:
      'First point of contact for computer, peripheral and network issues across the campus computer lab, lecturers and staff.',
    points: [
      'Maintain every PC in the computer lab and repair staff and lecturer PCs, from application errors to hardware faults.',
      'Re-route and re-terminate network cabling (crimping RJ45) when lecturers change desks or rooms, keeping cable management neat.',
      'Restore file sharing and printer sharing on the office LAN.',
      'Monitor the campus network through MikroTik, check for internet outages, and register classroom TVs and other devices in IP Binding so they get access without a hotspot login.',
      'Support students with printing and installing the applications provided in the lab.',
    ],
  },
  {
    role: 'Network Operator (NOC) & Treasurer',
    org: 'Pondok Pesantren Sabilul Huda, Malang',
    period: '2025 — Present',
    summary:
      'Responsible for the pondok pesantren’s entire network, and trusted to manage its finances as treasurer.',
    points: [
      'Configured, on my own, the network of 2 MikroTik routers (RB450G and RB941) and 4 access points for 30–40 users.',
      'Set up VLAN segmentation, the hotspot for santri, and an OpenVPN tunnel for remote management on RouterOS 7.',
      'Manage user access, monitor connectivity and troubleshoot outages.',
      'Serve as treasurer, a role given to people the community trusts with money and records.',
    ],
  },
  {
    role: 'Lab Assistant Training',
    org: 'Institut Asia Malang',
    period: 'Early 2025 · 3 months',
    summary:
      'A selective training programme for lab assistant candidates. Participants are assessed on their learning progress, and only those who meet the standard are accepted.',
    points: ['Passed the selection and was accepted as lab assistant.'],
  },
  {
    role: 'Construction Worker & Family Food Stall',
    org: 'Part-time work after graduating from SMK',
    period: '2023 · ~4 months',
    summary:
      'After finishing SMK in 2023, I chose to keep working instead of waiting idle before starting university.',
    points: [
      'Worked about 3 months as a construction labourer: physical, on-site work in a team with fixed hours and a foreman to report to.',
      'Helped at my aunt’s ayam geprek stall for a few weeks, serving customers and handling payments.',
    ],
  },
];

/**
 * Projects and gallery photos are edited in the admin panel (/keystatic)
 * and stored as JSON files in /content. Do not edit them here.
 */
type ProjectFile = {
  title: string;
  order: number;
  context: string;
  summary?: string;
  problem: string;
  action: string;
  result: string;
  tags: string[];
  link?: string | null;
  images?: { image: string; caption: string }[];
};
type GalleryFile = { caption: string; order: number; image: string };

const byOrder = (x: { order: number }, y: { order: number }) => x.order - y.order;

export const caseStudies = Object.entries(
  import.meta.glob<ProjectFile>('../../content/projects/*.json', { eager: true, import: 'default' }),
)
  // The file name (without .json) becomes the project's id, used by the detail overlay.
  .map(([file, p]) => ({ ...p, slug: file.split('/').pop()!.replace(/\.json$/, '') }))
  .sort(byOrder)
  .map((p) => ({
    ...p,
    summary: p.summary || p.result,
    link: p.link || '',
    images: (p.images ?? []).map((i) => ({ src: i.image, caption: i.caption })),
  }));

export const skills = [
  {
    group: 'Network',
    items: [
      'MikroTik RouterOS / Winbox',
      'VLAN segmentation',
      'Hotspot setup & user management',
      'OpenVPN remote access',
      'Network monitoring',
      'IP Binding & user access',
      'Wireless access points',
      'LAN troubleshooting',
    ],
  },
  {
    group: 'Hardware & Support',
    items: [
      'PC hardware troubleshooting',
      'Windows & application installation',
      'Cable crimping (RJ45)',
      'Cable management',
      'File & printer sharing',
    ],
  },
  {
    group: 'Web Development',
    items: ['PHP', 'Laravel', 'HTML', 'CSS', 'JavaScript'],
  },
];

export const tools = ['Winbox', 'Crimping tool', 'LAN tester', 'Windows', 'Laravel', 'Docker', 'Claude Code', 'VS Code'];

export const learning = [
  'Preparing for MikroTik certification (MTCNA)',
  'Deeper network fundamentals: routing and firewall',
];

export const values = {
  intro:
    'I was raised in pesantren at Darul Ulum Jombang, one of the oldest and largest Islamic boarding schools in East Java. Years of living there shaped how I work.',
  items: [
    {
      title: 'Discipline & responsibility',
      text: 'A daily routine from before dawn taught me to manage my time and finish what I start.',
    },
    {
      title: 'Integrity (amanah)',
      text: 'I am trusted with network access and, as treasurer, with money. I take that trust seriously.',
    },
    {
      title: 'Teamwork & good manners',
      text: 'Living with hundreds of people teaches you to communicate respectfully and help without being asked.',
    },
    {
      title: 'Steady under pressure',
      text: 'Balancing study, work and community duties is normal for me, so outages do not make me panic.',
    },
    {
      title: 'Quick to adapt',
      text: 'Moving between communities taught me to settle into new environments and teams fast.',
    },
  ],
};

export const education = [
  {
    school: 'Institut Asia Malang',
    detail: 'Informatics Engineering (Teknik Informatika) · 5th semester',
    period: '2024 — Present',
  },
  {
    school: 'SMK Darul Ulum Jombang',
    detail: 'Software Engineering (Rekayasa Perangkat Lunak) · Pondok Pesantren Darul Ulum',
    period: 'Graduated 2023',
  },
];

export const gallery = Object.values(
  import.meta.glob<GalleryFile>('../../content/gallery/*.json', { eager: true, import: 'default' }),
)
  .sort(byOrder)
  .map((g) => ({ src: g.image, caption: g.caption }));

