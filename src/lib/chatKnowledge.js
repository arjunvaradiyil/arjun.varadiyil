/** Portfolio knowledge for the AI chat assistant — keep in sync with public site copy. */

import { projects } from '../data/projectData';
import { experienceData } from '../data/experienceData';
import { EDUCATION_TIMELINE, PROFILE } from '../data/aboutData';
import { certifications } from '../data/certificationsData';
import { SGE_SUMMARY, CORE_COMPETENCIES, ABOUT_SUMMARY_SEO } from '../data/seoContent';
import { GITHUB_URL, LINKEDIN_URL, CURRENTLY_EXPLORING } from '../data/proof';
import { EMPLOYER_SHORT, LOCATION, ROLE_TITLE } from './employment';
import { SITE_EMAIL, SITE_NAME, SITE_URL, TOPMATE_URL } from './siteSeo';

export function buildChatKnowledge() {
  const projectLines = projects.map((p) => {
    const link = p.previewLink ? ` Live: ${p.previewLink}` : '';
    const path = p.slug ? ` Portfolio: ${SITE_URL}/projects/${p.slug}` : '';
    return `- ${p.title} (${p.year || 'n/a'}, ${p.industry || 'General'}): ${p.tagline || p.description}${link}${path}. Stack: ${(p.services || []).join(', ')}.`;
  });

  const expLines = experienceData.map((e) => {
    const points = Array.isArray(e.points) ? e.points.join(' ') : e.description || '';
    return `- ${e.role || e.title} @ ${e.company || e.organization} (${e.period || e.year || ''}): ${points}`;
  });

  const eduLines = EDUCATION_TIMELINE.map((e) => {
    const grade = e.grade ? ` ${e.grade}.` : '';
    return `- ${e.year}: ${e.title} — ${e.description || ''}${grade}`;
  });

  const certLines = (certifications || []).map((c) => {
    const when = c.date || c.year ? ` (${c.date || c.year})` : '';
    return `- ${c.title || c.name}${when} — ${c.issuer || c.organization || ''}`;
  });

  return [
    `Name: ${SITE_NAME}`,
    `Role: ${ROLE_TITLE}`,
    `Employer: ${EMPLOYER_SHORT}`,
    `Location: ${LOCATION}`,
    `Experience: ${PROFILE.experience || 'n/a'}`,
    `Education summary: ${PROFILE.education || 'n/a'}`,
    `Site: ${SITE_URL}`,
    `Email: ${SITE_EMAIL}`,
    `GitHub: ${GITHUB_URL}`,
    `LinkedIn: ${LINKEDIN_URL}`,
    `Book a call: ${TOPMATE_URL}`,
    '',
    'Summary:',
    SGE_SUMMARY,
    ABOUT_SUMMARY_SEO,
    '',
    'Education:',
    ...eduLines,
    '',
    'Certifications:',
    ...(certLines.length ? certLines : ['- None listed']),
    '',
    'Stack & competencies:',
    ...(CORE_COMPETENCIES.stack || []),
    '',
    'Domains:',
    ...(CORE_COMPETENCIES.domains || []),
    '',
    'Currently exploring:',
    ...CURRENTLY_EXPLORING.map((item) => `- ${item}`),
    '',
    'Selected projects:',
    ...projectLines,
    '',
    'Experience:',
    ...expLines,
  ].join('\n');
}

export function buildSystemPrompt() {
  return `You are the portfolio assistant for ${SITE_NAME}, an ${ROLE_TITLE} based in ${LOCATION}.

Your job:
- Answer questions about Arjun's work, skills, projects, education, certifications, experience, and how to contact him.
- Be concise, friendly, and professional. Prefer short paragraphs or bullets.
- Stay factual using ONLY the knowledge below. If you do not know, say so and suggest /contact or LinkedIn.
- Do not invent employers, clients, metrics, grades, or project details.
- Do not claim to be Arjun personally; you are an assistant on his site.
- When relevant, point to pages: /work, /about, /experience, /contact, or specific /projects/[slug] URLs.
- Encourage serious opportunities to use the contact form or LinkedIn.

KNOWLEDGE BASE:
${buildChatKnowledge()}`;
}

/** Keyword FAQ used when the LLM provider is unavailable (quota, missing key, errors). */
export function offlineReply(lastUserMessage) {
  const q = (lastUserMessage || '').toLowerCase().trim();

  if (/^(hi+|hii+|hai+|hello|hey|yo|hola|namaste|good\s*(morning|afternoon|evening))\b[!?.,]*$/i.test(q)) {
    return "Hello! I can help with Arjun's projects, education, stack, experience, or how to contact him. What would you like to know?";
  }

  if (/\b(educat\w*|qualif\w*|degree|college|university|cusat|b\.?\s*tech|school|cgpa|marks|graduation)\b/.test(q)) {
    return [
      "Arjun's education:",
      '• B.Tech in Computer Science Engineering — Cochin University of Science and Technology (CUSAT), 2020–2024 (CGPA: 7.5). Coursework included data structures, web development, databases, and AI/ML fundamentals.',
      '• Higher Secondary (Computer Science stream) — ASMHSS Velliyanchery, Kerala State Board, 2018–2020 (74%).',
      'More on /about.',
    ].join('\n');
  }

  if (/\b(certif\w*|course|entri|hackerrank|nsdc)\b/.test(q)) {
    const lines = (certifications || []).map((c) => {
      const when = c.date || c.year ? ` (${c.date || c.year})` : '';
      return `• ${c.title || c.name}${when} — ${c.issuer || c.organization || ''}`;
    });
    return lines.length
      ? `Certifications:\n${lines.join('\n')}\nSee /about for details.`
      : 'Certification details are listed on /about.';
  }

  if (/\b(contact|email|hire|reach|topmate|linkedin)\b/.test(q)) {
    return 'You can reach Arjun via the contact form at /contact, LinkedIn (linkedin.com/in/arjunvaradiyil), or book a call on Topmate. Prefer the contact form for project inquiries.';
  }

  if (/\b(experienc|job|employer|faircode|role|career|work\s*history)\b/.test(q)) {
    return `Arjun is an ${ROLE_TITLE} at ${EMPLOYER_SHORT} (January 2025 – Present) in ${LOCATION}. He ships editorial platforms (Kochi Muziris Biennale, Deshabhimani, Prajasakti, The Left Views) and civic tools like My Vote My Voice. Full timeline on /experience.`;
  }

  if (/\b(left[\s-]?views|leftviews)\b/.test(q)) {
    return 'The Left Views is a headless editorial stack (Payload CMS + Next.js) for politics, views, and interviews at leftviews.in. See /projects/left-views.';
  }

  if (/\b(biennale|kochi\s*muziris|kmb)\b/.test(q)) {
    return "Kochi Muziris Biennale is a festival CMS + Next.js visitor site so curators publish exhibitions and programmes without freeze-window rebuilds. Live at kochimuzirisbiennale.org — details on /projects/kochi-muziris-biennale.";
  }

  if (/\b(deshabhimani|malayalam\s*news)\b/.test(q)) {
    return "Deshabhimani News Portal is a Payload + Next.js stack for Kerala's Malayalam daily. See /projects/deshabhimani-news-portal.";
  }

  if (/\b(prajasakti|telugu)\b/.test(q)) {
    return 'Prajasakti News Portal is a headless editorial stack (Payload + Next.js) for the Telugu daily at prajasakti.com. See /projects/prajasakti-news-portal.';
  }

  if (/\b(idukki|vote|civic|myidukki)\b/.test(q)) {
    return 'My Vote My Voice (Idukki) is a civic web app for voter pledge, booth lookup, and election resources — built in a one-week sprint. Live at myidukki.com. See /projects/my-vote-my-voice-idukki.';
  }

  if (/\b(projects?|works?|portfolio|case\s*stud(?:y|ies)|builds?)\b/.test(q)) {
    return 'Arjun ships production Next.js and Payload CMS systems for newsrooms, festivals, and civic programmes — including Kochi Muziris Biennale, Deshabhimani, The Left Views, Prajasakti, and My Vote My Voice. Browse /work for case studies.';
  }

  if (/\b(skills?|stack|tech(?:nolog(?:y|ies))?|langchain|ai\s*agent|typescript|next\.?js|payload)\b/.test(q)) {
    return 'Core stack: Next.js, Payload CMS, TypeScript, React, Node.js, MongoDB, GraphQL, Tailwind — plus LangChain, RAG, and AI agent experiments. More on /about.';
  }

  if (/\b(who\s+is|about\s+arjun|introduce|bio|background)\b/.test(q)) {
    return `${SGE_SUMMARY} See /about for education and /work for projects.`;
  }

  return [
    `${SITE_NAME} is an ${ROLE_TITLE} in ${LOCATION} at ${EMPLOYER_SHORT}.`,
    'Ask about education, projects, skills, experience, or how to get in touch — or open /about and /work.',
  ].join(' ');
}

export const CHAT_SUGGESTIONS = [
  'What is his education?',
  'What does Arjun build?',
  'How can I contact him?',
];
