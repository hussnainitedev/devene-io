import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'role', title: 'Role (e.g. "Lead Business Analyst · 8+ yrs")', type: 'string' }),
    defineField({ name: 'glyph', title: 'Glyph (single symbol/emoji)', type: 'string' }),
    defineField({ name: 'help', title: 'How they help you', type: 'text', rows: 3 }),
    defineField({ name: 'experience', title: 'Experience (mono tag line)', type: 'string' }),
    defineField({ name: 'superpower', title: 'Superpower', type: 'string' }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'role' },
  },
});
