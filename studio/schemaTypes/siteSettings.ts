import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'email', title: 'Contact email', type: 'string' }),
    defineField({ name: 'responseTime', title: 'Response time', type: 'string' }),
    defineField({ name: 'firstCall', title: 'First call description', type: 'string' }),
  ],
});
