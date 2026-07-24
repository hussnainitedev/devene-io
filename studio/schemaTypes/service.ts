import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'slug',
      title: 'Slug (used as the page anchor, e.g. svc-ai-strategy)',
      type: 'slug',
      options: { source: 'title' },
      validation: (r) => r.required(),
    }),
    defineField({ name: 'glyph', title: 'Glyph (single symbol/emoji)', type: 'string' }),
    defineField({ name: 'tag', title: 'Tag label', type: 'string' }),
    defineField({ name: 'tagAi', title: 'Highlight tag as "AI-native"?', type: 'boolean', initialValue: false }),
    defineField({ name: 'summary', title: 'One-line summary (used in preview lists)', type: 'string' }),
    defineField({
      name: 'body',
      title: 'Body paragraphs',
      type: 'array',
      of: [{ type: 'text', rows: 3 }],
    }),
    defineField({
      name: 'deliverables',
      title: 'Deliverables list',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({ name: 'order', title: 'Display order', type: 'number' }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'tag' },
  },
});
