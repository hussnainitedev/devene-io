import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({ name: 'quote', title: 'Quote', type: 'text', rows: 3, validation: (r) => r.required() }),
    defineField({ name: 'who', title: 'Attribution (e.g. "Founder, HealthTech Startup")', type: 'string' }),
  ],
  preview: {
    select: { title: 'who', subtitle: 'quote' },
  },
});
