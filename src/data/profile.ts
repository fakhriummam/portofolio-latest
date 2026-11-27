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

export const caseStudies = [
  {
    title: 'Pesantren website with automated hotspot billing',
    context: 'ppsabilulhuda.web.id · Pondok Pesantren Sabilul Huda',
    problem:
      'Santri paid their Wi-Fi fees manually, and every new account or late payment meant logging into Winbox to create or disable hotspot users by hand.',
    action:
      'Built a Laravel website with a santri portal for payments and integrated it with the pondok’s MikroTik, so hotspot accounts are created and disabled straight from the web. Developed with Claude as an AI coding assistant, then deployed it myself with Docker on a Linux server.',
    result:
      'All 19 santri hotspot accounts are managed from one dashboard: late payers are cut off from the website, with no need to open Winbox.',
    tags: ['Laravel', 'SQLite', 'MikroTik API', 'Docker', 'AI-assisted (Claude)'],
    // Optional: live link and screenshots (put images in /public/images/projects/).
    link: 'https://ppsabilulhuda.web.id',
    images: [
      { src: '/images/projects/pondok-beranda.webp', caption: 'Public homepage' },
      { src: '/images/projects/pondok-login-portal.webp', caption: 'Santri portal login' },
      { src: '/images/projects/pondok-panel-hotspot.webp', caption: 'Admin panel: hotspot accounts synced with MikroTik' },
    ],
  },
  {
    title: 'Running a pondok pesantren network',
    context: 'Pondok Pesantren Sabilul Huda',
    problem:
      'Forty students and staff share one internet connection across several buildings, and the network needs to stay up with no dedicated IT team.',
    action:
      'Configured the whole MikroTik setup myself: RB450G as the core and RB941 as secondary, four access points, VLAN segmentation, a santri hotspot, and an OpenVPN tunnel so the router can be managed remotely. Day to day I manage users, monitor traffic and handle outages.',
    result:
      'A segmented, stable network that the pesantren relies on daily, which I can manage even when I am not on site.',
    tags: ['MikroTik RouterOS 7', 'VLAN', 'Hotspot', 'OpenVPN', 'Wireless AP'],
    images: [
      { src: '/images/projects/pondok-winbox-interfaces.webp', caption: 'Live interface traffic on the pesantren’s RB450G in Winbox' },
    ],
  },
  {
    title: 'Desk relocation & cable management',
    context: 'Institut Asia Malang',
    problem:
      'When lecturers move desks or rooms, their PCs lose network access and cables end up loose and messy.',
    action:
      'Measure, crimp and terminate new RJ45 cables, route them along desks and walls, and test every connection.',
    result:
      'Lecturers are back online the same day with clean and safe cabling.',
    tags: ['Crimping', 'UTP / RJ45', 'Cable management'],
  },
  {
    title: 'Restoring file & printer sharing',
    context: 'Institut Asia Malang',
    problem:
      'Staff could not reach shared folders or print to the shared office printer.',
    action:
      'Traced the issue across network discovery, sharing permissions and printer drivers, then reconfigured the shares on the affected PCs.',
    result: 'Shared folders and printing restored for the team without replacing hardware.',
    tags: ['Windows', 'LAN', 'Printer sharing'],
    images: [
      { src: '/images/projects/kampus-printer-sharing.webp', caption: 'Re-enabling sharing for the office EPSON L220 printer in Windows' },
    ],
  },
  {
    title: 'Keeping the computer lab ready',
    context: 'Institut Asia Malang',
    problem:
      'A lab used by many students every day needs working PCs and the right software before each class.',
    action:
      'Routine checks before classes, hardware checks and repairs such as inspecting graphics cards, and installing the applications each course needs.',
    result: 'Classes start on time and students get help when they need it.',
    tags: ['Hardware', 'Software install', 'Lab maintenance'],
  },
];

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

/**
 * Gallery: put photos in /public/gallery/ and set `src` to e.g. '/gallery/rack.jpg'.
 * Items with an empty src show a placeholder tile.
 */
export const gallery = [
  { src: '/gallery/rak-server-kampus.webp', caption: 'Monitoring the campus server rack: MikroTik Cloud Core Router and core switch, Institut Asia' },
  { src: '/gallery/cek-vga-pc-lab.webp', caption: 'Checking the graphics card of a computer lab PC, Institut Asia' },
  { src: '/gallery/crimping-rj45.webp', caption: 'Crimping an RJ45 connector, with a LAN tester ready to check the cable' },
  // Empty src = hidden until a photo is added (portrait 3:4 works best).
  { src: '', caption: 'Network rack at the pesantren' },
  { src: '', caption: 'Re-cabling a lecturer’s desk' },
  { src: '', caption: 'MikroTik monitoring in Winbox' },
  { src: '', caption: 'Access point installation' },
];
