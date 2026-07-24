import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'sector', title: 'Sector label (e.g. "energy · data")', type: 'string' }),
    defineField({
      name: 'category',
      title: 'Filter category',
      type: 'string',
      options: { list: ['data', 'product', 'automation', 'strategy'] },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'body',
      title: 'Body paragraphs',
      type: 'array',
      of: [{ type: 'text', rows: 3 }],
    }),
    defineField({
      name: 'results',
      title: 'Results',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'n', title: 'Number / stat (e.g. "−80%")', type: 'string' },
            { name: 'l', title: 'Label', type: 'string' },
          ],
        },
      ],
    }),
    defineField({ name: 'order', title: 'Display order', type: 'number' }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'sector' },
  },
});
