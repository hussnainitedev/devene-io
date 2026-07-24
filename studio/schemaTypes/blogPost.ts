import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (r) => r.required(),
    }),
    defineField({ name: 'tag', title: 'Tag (e.g. "ai & teams")', type: 'string' }),
    defineField({ name: 'excerpt', title: 'Excerpt', type: 'text', rows: 2 }),
    defineField({ name: 'minutes', title: 'Read time (minutes)', type: 'number' }),
    defineField({ name: 'author', title: 'Author line (e.g. "the engineering team")', type: 'string' }),
    defineField({ name: 'glyph', title: 'Glyph (single symbol/emoji)', type: 'string' }),
    defineField({ name: 'featured', title: 'Featured on blog index?', type: 'boolean', initialValue: false }),
    defineField({
      name: 'body',
      title: 'Body (Markdown)',
      description: 'Standard Markdown: ## headings, > blockquotes, **bold**, - lists.',
      type: 'text',
      rows: 20,
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'tag' },
  },
});
