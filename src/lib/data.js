// Single place pages import from. Tries Sanity first, falls back to src/lib/content.js
// so the site always builds — with real content once Sanity is wired up (see /studio and README).
import { fetchOrFallback } from './sanity.js';
import * as fallback from './content.js';

export async function getServices() {
  return fetchOrFallback(
    `*[_type == "service"] | order(order asc){ "id": slug.current, glyph, title, tag, tagAi, summary, body, deliverables }`,
    fallback.services
  );
}

export async function getTeamGroups() {
  return fetchOrFallback(
    `*[_type == "teamGroup"] | order(order asc){ heading, "members": members[]->{ glyph, name, role, help, experience, superpower } }`,
    fallback.teamGroups
  );
}

export async function getCaseStudies() {
  return fetchOrFallback(
    `*[_type == "caseStudy"] | order(order asc){ title, sector, category, body, results }`,
    fallback.caseStudies
  );
}

export async function getTestimonials() {
  return fetchOrFallback(
    `*[_type == "testimonial"]{ quote, who }`,
    fallback.testimonials
  );
}

export async function getFaqItems() {
  return fetchOrFallback(
    `*[_type == "faqItem"] | order(order asc){ "q": question, "a": answer }`,
    fallback.faqItems
  );
}

export async function getBlogPosts() {
  return fetchOrFallback(
    `*[_type == "blogPost" && defined(slug.current)] | order(featured desc, _createdAt desc){ "slug": slug.current, tag, title, excerpt, minutes, author, featured, glyph, body }`,
    fallback.blogPosts
  );
}

export async function getSiteSettings() {
  const result = await fetchOrFallback(
    `*[_type == "siteSettings"][0]{ email, responseTime, firstCall }`,
    null
  );
  return {
    email: result?.email || fallback.siteSettings.email,
    responseTime: result?.responseTime || fallback.siteSettings.responseTime,
    firstCall: result?.firstCall || fallback.siteSettings.firstCall,
  };
}
