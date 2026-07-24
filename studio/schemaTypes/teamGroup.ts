import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'teamGroup',
  title: 'Team Group',
  type: 'document',
  fields: [
    defineField({ name: 'heading', title: 'Heading (e.g. "☾ Strategy & Analysis")', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'order', title: 'Display order', type: 'number' }),
    defineField({
      name: 'members',
      title: 'Members',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'teamMember' }] }],
    }),
  ],
  preview: {
    select: { title: 'heading' },
  },
});
