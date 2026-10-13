
# AGENTS.md — Developer Portfolio

## 1. Project Overview

Build a production-ready, premium personal portfolio website for a Software Engineer / Full Stack Developer.

The design combines:
- Bento Grid layouts
- Cinematic dark aesthetics
- Subtle futuristic visual effects
- Smooth interactive animations
- Modern typography
- Excellent usability and accessibility

The portfolio should feel unique and technically sophisticated while remaining professional and easy for recruiters to navigate.

## 2. Technology Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Motion for React
- Lucide React
- Git and GitHub
- Vercel for deployment

Prefer existing dependencies. Install new packages only when needed.

## 3. Design System

### Color Palette

- Primary Background: #080B12
- Secondary Background: #0D111B
- Card Background: #111827
- Elevated Card: #182231
- Primary Accent: #9DF4DD
- Secondary Accent: #C4B5FD
- Primary Text: #F8FAFC
- Secondary Text: #94A3B8
- Border: #263241

### Typography

- Geist Sans for headings and body text
- Geist Mono for technical labels and code
- Large, bold, high-impact hero headings
- Clear typographic hierarchy
- Generous spacing and readable line heights

### Visual Style

- Cinematic dark background
- Asymmetric bento grid sections
- Rounded cards with subtle borders
- Soft radial gradients and glow effects
- Minimal glassmorphism where appropriate
- Elegant hover and focus effects
- Consistent spacing and component styling

Avoid:
- Generic portfolio template appearances
- Excessive gradients
- Unnecessary 3D libraries
- Distracting animations
- Unreadable text
- Excessive decorative icons

## 4. Project Structure

Follow this folder structure:

developer-portfolio/
- public/
  - images/
  - projects/
  - resume.pdf
- src/
  - app/
    - layout.tsx
    - page.tsx
    - globals.css
  - components/
    - Navbar.tsx
    - Hero.tsx
    - About.tsx
    - Skills.tsx
    - Projects.tsx
    - Experience.tsx
    - Contact.tsx
    - Footer.tsx
  - data/
    - projects.ts
    - skills.ts
  - lib/
- AGENTS.md
- package.json
- README.md

Keep components modular and reusable.

Do not restructure the project without a clear technical reason.

## 5. Homepage Sections

### Navbar
- Sticky navigation
- Personal brand/logo
- About, Skills, Projects and Contact links
- Responsive mobile menu
- Subtle backdrop blur

### Hero
- Cinematic introduction
- Software Engineer / Full Stack Developer title
- Short professional description
- Availability indicator, only if accurate
- View Projects button
- Download Resume button
- GitHub and LinkedIn links
- Soft animated background glow

### About
- Professional summary
- Engineering interests
- Development philosophy
- Bento-style information cards

### Skills
Group verified skills into:
- Backend Development
- Frontend Development
- Databases
- DevOps and Tools
- Other Technologies

Use interactive cards or filters.

Do not invent skills or proficiency levels.

### Projects
- Responsive bento-style project gallery
- Featured projects displayed prominently
- Project screenshots
- Project descriptions
- Technology badges
- GitHub repository links
- Live demo links when available
- Clear explanation of engineering challenges

### Experience
- Professional timeline
- Work experience and internships
- Education and certifications where relevant

Do not invent employment details.

### Contact
- Professional contact section
- Email link
- GitHub and LinkedIn profiles
- Contact form only if a working submission method exists

### Footer
- Personal brand
- Social links
- Copyright notice
- Back-to-top navigation

## 6. Animation Guidelines

Use Motion for React where appropriate.

Recommended animations:
- Hero fade-in and upward entrance
- Staggered bento card reveals
- Subtle card hover elevation
- Smooth project image zoom
- Elegant section transitions
- Slow ambient background glow

Rules:
- Keep animations subtle and performant
- Avoid animation overload
- Honor prefers-reduced-motion
- Never hide important content behind animation
- Avoid expensive continuous effects

## 7. Responsive Design

Use a mobile-first approach.

Test layouts at approximately:
- 375px mobile
- 768px tablet
- 1024px laptop
- 1440px desktop

Bento grids must adapt gracefully to smaller screens.

Ensure there is no horizontal overflow.

## 8. Coding Standards

- Use strict TypeScript types
- Prefer functional React components
- Prefer Server Components by default
- Add "use client" only when necessary
- Use semantic HTML
- Use accessible buttons and links
- Keep data separate from presentation
- Avoid duplicated code
- Use Next.js Image for optimized images
- Use clean, descriptive file and variable names
- Do not use mock personal claims as real facts

## 9. Accessibility and SEO

- Semantic heading hierarchy
- Keyboard-accessible navigation
- Visible focus indicators
- Proper image alt text
- Sufficient color contrast
- Reduced-motion support
- Descriptive page title and metadata
- Open Graph metadata
- Responsive viewport layout
- Fast loading and optimized assets

## 10. Working With Codex

Before making changes:
1. Inspect the existing project.
2. Read AGENTS.md.
3. Understand existing components and dependencies.
4. Identify the smallest useful implementation step.

While implementing:
1. Make actual file changes in the workspace.
2. Preserve existing working functionality.
3. Use the defined design system.
4. Build components incrementally.
5. Avoid unrelated refactors.
6. Do not overwrite real portfolio content.

After implementing:
1. Run npm run lint.
2. Run npm run build.
3. Fix any reported errors.
4. Summarize changed files.
5. Explain how to test the completed feature.

## 11. Development Milestones

Phase 1: Project setup and design system

Phase 2: Navbar and cinematic hero

Phase 3: Responsive bento grid and About section

Phase 4: Interactive Skills section

Phase 5: Featured Projects gallery

Phase 6: Experience and Contact sections

Phase 7: Animations and micro-interactions

Phase 8: Accessibility, SEO and optimization

Phase 9: Final testing and Vercel deployment

Implement one phase at a time unless explicitly instructed otherwise.

## 12. Quality Goal

Deliver a distinctive, fast, polished, production-ready portfolio that demonstrates professional software engineering capability.

Prioritize clarity, engineering quality and genuine project evidence over visual effects.


<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
