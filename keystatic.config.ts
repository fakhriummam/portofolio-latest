/**
 * Keystatic admin panel — open /keystatic.
 *
 * - On your laptop (npm run dev) it saves straight to the files in /content.
 * - On the live site it logs in with GitHub and saves by committing to the repo,
 *   which makes Vercel rebuild the site automatically.
 *
 * To try GitHub mode on your laptop (needed once, to create the GitHub App),
 * run:  $env:PUBLIC_KEYSTATIC_GITHUB='1'; npm run dev
 */
import { config, collection, fields } from '@keystatic/core';

const useGitHub = import.meta.env.PROD || import.meta.env.PUBLIC_KEYSTATIC_GITHUB === '1';

export default config({
  storage: useGitHub
    ? { kind: 'github', repo: { owner: 'fakhriummam', name: 'portofolio-latest' } }
    : { kind: 'local' },

  ui: {
    brand: { name: 'Fakhri · Portfolio' },
  },

  collections: {
    projects: collection({
      label: 'Projects (Selected work)',
      slugField: 'title',
      path: 'content/projects/*',
      format: { data: 'json' },
      columns: ['title', 'order'],
      schema: {
        title: fields.slug({ name: { label: 'Title', validation: { isRequired: true } } }),
        order: fields.integer({
          label: 'Order',
          description: 'Lower numbers appear first in the list.',
          defaultValue: 10,
          validation: { isRequired: true },
        }),
        context: fields.text({
          label: 'Context',
          description: 'Where it happened, e.g. "Institut Asia Malang" or "Pondok Pesantren Sabilul Huda".',
          validation: { isRequired: true },
        }),
        summary: fields.text({
          label: 'Summary (one line)',
          description:
            'Shown in the project list. One sentence, about 120 characters. The full story goes in Problem / What I did / Result.',
          validation: { length: { min: 1, max: 140 } },
        }),
        problem: fields.text({ label: 'Problem', multiline: true, validation: { isRequired: true } }),
        action: fields.text({ label: 'What I did', multiline: true, validation: { isRequired: true } }),
        result: fields.text({ label: 'Result', multiline: true, validation: { isRequired: true } }),
        tags: fields.array(fields.text({ label: 'Tag' }), {
          label: 'Tags',
          itemLabel: (props) => props.value || 'Tag',
        }),
        link: fields.url({ label: 'Link (optional)', description: 'Live website or GitHub repo.' }),
        images: fields.array(
          fields.object({
            image: fields.image({
              label: 'Screenshot',
              directory: 'public/images/projects',
              publicPath: '/images/projects/',
              validation: { isRequired: true },
            }),
            caption: fields.text({ label: 'Caption', validation: { isRequired: true } }),
          }),
          {
            label: 'Screenshots (optional)',
            description: 'Landscape screenshots work best. Blur names, passwords and public IPs first.',
            itemLabel: (props) => props.fields.caption.value || 'Screenshot',
          },
        ),
      },
    }),

    gallery: collection({
      label: 'Gallery (On the job)',
      slugField: 'caption',
      path: 'content/gallery/*',
      format: { data: 'json' },
      columns: ['caption', 'order'],
      schema: {
        caption: fields.slug({ name: { label: 'Caption', validation: { isRequired: true } } }),
        order: fields.integer({ label: 'Order', defaultValue: 10, validation: { isRequired: true } }),
        image: fields.image({
          label: 'Photo',
          description: 'Portrait (3:4) phone photos work best.',
          directory: 'public/gallery',
          publicPath: '/gallery/',
          validation: { isRequired: true },
        }),
      },
    }),
  },
});
