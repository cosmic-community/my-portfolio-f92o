# My Portfolio

![App Preview](https://imgix.cosmicjs.com/19daf010-6bd9-11f1-8dfe-457508ece1b8-autopilot-photo-1498050108023-c5249f4df085-1781871561089.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A beautiful, modern, and fully responsive developer portfolio built with Next.js 16 and powered by [Cosmic](https://www.cosmicjs.com). Showcase your profile, projects, skills, and work experience with a sleek dark-themed design and smooth interactions.

## Features

- 🎨 Stunning, modern dark-themed UI with gradient accents
- 👤 Profile hero section with bio, photo, and social links
- 💼 Projects showcase with screenshots, tech stack, galleries, and live links
- 🛠️ Skills section grouped by category with proficiency indicators
- 📋 Work experience timeline with detailed roles
- 📱 Fully responsive across all devices
- ⚡ Server-side rendering for lightning-fast performance
- 🔗 Dynamic individual project detail pages
- ♿ Accessible, semantic markup throughout

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a3533615b2ac5cef3df7d48&clone_repository=6a35347a5b2ac5cef3df7d82)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for a developer portfolio with projects (including screenshots, tech stack, and live URLs), skills, and work experience.
>
> User instructions: naredi landingpage za tomaz cvitkovic griblje sp podatke slike imas na spletu"

### Code Generation Prompt

> Build a Next.js application for a creative portfolio called "My Portfolio". The content is managed in Cosmic CMS with the following object types: profile, projects, skills, work-experience. Create a beautiful, modern, responsive design with a homepage and pages for each content type.
>
> User instructions: naredi landingpage za tomaz cvitkovic griblje sp podatke slike imas na spletu

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Cosmic](https://www.cosmicjs.com) headless CMS
- [Cosmic SDK](https://www.cosmicjs.com/docs)

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) or Node.js 18+
- A Cosmic account with a bucket containing your portfolio content

### Installation

1. Clone the repository
2. Install dependencies:

```bash
bun install
```

3. Set up your environment variables (these are automatically provided when you clone via Cosmic):

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:

```bash
bun run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Cosmic SDK Examples

```typescript
import { cosmic } from '@/lib/cosmic'

// Fetch the profile
const { object: profile } = await cosmic.objects
  .findOne({ type: 'profile' })
  .depth(1)

// Fetch all projects with connected data
const { objects: projects } = await cosmic.objects
  .find({ type: 'projects' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

// Fetch a single project by slug
const { object: project } = await cosmic.objects
  .findOne({ type: 'projects', slug: 'my-project' })
  .depth(1)
```

## Cosmic CMS Integration

This application leverages your existing Cosmic content model:

- **Profile** — Personal information, bio, photos, and social links
- **Projects** — Portfolio projects with screenshots, galleries, tech stacks, and live URLs
- **Skills** — Technical skills grouped by category with proficiency levels
- **Work Experience** — Professional history with roles, companies, and date ranges

All content is fetched server-side using the [Cosmic SDK](https://www.cosmicjs.com/docs) for optimal performance and security.

## Deployment Options

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project into [Vercel](https://vercel.com)
3. Add your environment variables (`COSMIC_BUCKET_SLUG`, `COSMIC_READ_KEY`, `COSMIC_WRITE_KEY`)
4. Deploy!

### Netlify

1. Push your code to GitHub
2. Import into [Netlify](https://netlify.com)
3. Set the build command to `bun run build`
4. Add your environment variables
5. Deploy!

For production, set these environment variables in your hosting platform's dashboard.
<!-- README_END -->