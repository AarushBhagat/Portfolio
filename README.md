# 🚀 Aarush Bhagat's 3D Portfolio

A jaw-dropping full-stack developer portfolio packed with interactive 3D animations, buttery smooth transitions, and a space-themed aesthetic. This portfolio showcases my projects, skills, education, and experience with bleeding-edge web technologies and creative design.

> **Open Source & Free to Use!** This portfolio is open source. If you use it, a credit/link back would be really appreciated 🙏

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/AarushBhagat/Portfolio)

![Portfolio Preview](https://github.com/AarushBhagat/Portfolio/blob/main/public/assets/seo/og-image.png?raw=true)

## ✨ Features

- **Interactive 3D Keyboard** — Custom Spline keyboard where each keycap represents a skill, revealing titles and descriptions on hover/press
- **Horizontal Scroll Sections** — Projects, Certificates, and Hackathons scroll horizontally with GSAP pinning and parallax animations
- **Education Section** — Showcase your academic qualifications with institution names, dates, and scores/CGPA
- **Buttery Animations** — GSAP + Framer Motion powered scroll, hover, and reveal animations
- **Space Theme** — Floating particles on a dark canvas for a cosmic vibe
- **Light & Dark Mode** — Full theme support with cheeky disclaimer toasts
- **Responsive Design** — Works seamlessly across all screen sizes and devices
- **Email Contact Form** — EmailJS integration for direct email delivery to your inbox
- **Real-time Features** (Optional) — Live cursors, online presence, and live chat powered by WebSocket
- **Smooth Scrolling** — Lenis integration for buttery smooth page scrolling
- **Analytics** (Optional) — Umami analytics integration for visitor insights

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| **Framework** | Next.js 14, React 18, TypeScript |
| **Styling** | Tailwind CSS, Shadcn UI, Aceternity UI |
| **Animation** | GSAP, Framer Motion |
| **3D** | Spline Runtime |
| **Email** | EmailJS |
| **Smooth Scroll** | Lenis |
| **UI Components** | Radix UI, Lucide Icons |
| **Form Validation** | Zod |
| **Utilities** | clsx, classnames |
| **Type Safety** | TypeScript |

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- pnpm (recommended), npm, or yarn

### Installation & Setup

#### 1. Clone the repository:

```bash
git clone https://github.com/AarushBhagat/Portfolio.git
cd 3d-portfolio
```

#### 2. Install all dependencies:

```bash
# Using pnpm (recommended)
pnpm install

# OR using npm
npm install

# OR using yarn
yarn install
```

This installs all required packages including:
- **Next.js & React** — For the framework and UI
- **Tailwind CSS** — For styling
- **GSAP & ScrollTrigger** — For scroll animations and pinning
- **Framer Motion** — For component animations
- **EmailJS** — For contact form email delivery
- **Lenis** — For smooth scrolling
- **Zod** — For form validation
- **Shadcn UI & Aceternity UI** — For pre-built components
- **Spline Runtime** — For 3D models
- **All other dependencies** as specified in `package.json`

#### 3. Set up EmailJS for the Contact Form:

To enable the contact form to send emails directly to your Gmail:

1. Go to [EmailJS](https://www.emailjs.com/) and create a free account
2. Set up a **Gmail Service** and connect your Gmail account
3. Create an **Email Template** with these variables:
   - `{{from_name}}` — Visitor's name
   - `{{from_email}}` — Visitor's email
   - `{{message}}` — Visitor's message
4. Copy your credentials and create a `.env.local` file in the project root:

```env
# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_58owav5
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_8keu6x3
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=H6C_kQYyV8S_tZJ_G
```

Replace with your actual EmailJS credentials from their dashboard.

#### 4. (Optional) Set up realtime features:

For live cursors, online presence, and chat, add:

```env
# Realtime Features (Optional)
NEXT_PUBLIC_WS_URL=https://your-websocket-server.com

# Analytics (Optional)
UMAMI_DOMAIN=https://analytics.example.com
UMAMI_SITE_ID=your-site-id
```

#### 5. Run the development server:

```bash
# Using pnpm
pnpm dev

# OR using npm
npm run dev

# OR using yarn
yarn dev
```

This starts the development server at `http://localhost:3000` (or the next available port if 3000 is in use).

#### 6. Open in your browser:

Navigate to [http://localhost:3000](http://localhost:3000) and see the magic ✨

---

## 📦 Available Scripts

Run these commands from the project root:

```bash
# Development
pnpm dev              # Start development server (hot reload)
pnpm dev --port 3001 # Start on a specific port

# Production Build
pnpm build            # Create optimized production build
pnpm start            # Run the production build locally

# Code Quality
pnpm lint             # Run ESLint to check code quality
pnpm format           # Format code with Prettier (if configured)

# Type Checking
pnpm tsc              # Check TypeScript types
pnpm type-check       # Check for type errors

# Database/Migration (if using)
pnpm db:push          # Push schema changes to database
pnpm db:studio        # Open database studio (if using Prisma)

# Utilities
pnpm clean            # Remove build artifacts and cache
git add .             # Stage all changes for commit
git commit -m "message" # Commit staged changes
git push              # Push commits to GitHub
```

---

## 🎨 Customize Your Portfolio

### Update Personal Information

All personal info is centralized in [`src/data/config.ts`](src/data/config.ts):

```ts
const config = {
  title: "Aarush Bhagat | Full-Stack Developer",
  description: {
    long: "Your long description for SEO...",
    short: "Your short description...",
  },
  keywords: ["your", "keywords"],
  author: "Your Name",
  email: "your@email.com",
  site: "https://yoursite.com",
  githubUsername: "your-github",
  githubRepo: "your-repo",
  social: {
    twitter: "https://x.com/you",
    linkedin: "https://linkedin.com/in/you",
    instagram: "https://instagram.com/you",
    facebook: "https://facebook.com/you",
    github: "https://github.com/you",
  },
};
```

### Update Projects

Edit [`src/data/projects.tsx`](src/data/projects.tsx) to add/modify projects:

```ts
{
  id: "your-project",
  category: "Category Name",
  title: "Project Title",
  src: "/assets/your-project/logo.png",
  screenshots: ["img1.png", "img2.png"],
  live: "https://your-project.com",
  github: "https://github.com/you/project",
  skills: {
    frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
    backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.express],
  },
  // Content goes in the get content() method
}
```

### Update Skills & Experience

Edit [`src/data/constants.ts`](src/data/constants.ts):

- **SKILLS** — Add/modify individual skills with icons and descriptions
- **EXPERIENCE** — Add your work experience entries
- **EDUCATION** — Add your education details (degree, institution, dates, scores)

### Update Images

Replace images in these directories:

- `public/assets/certificates/` — Certificate images
- `public/assets/projects-screenshots/` — Project screenshots
- `public/assets/Hackathons/` — Hackathon images
- `public/assets/seo/` — OG image and other SEO assets

---

## ⌨️ Updating the 3D Keyboard Skills

The 3D keyboard keycaps are stored in `public/assets/skills-keyboard.spline`:

1. Open the file in [Spline](https://spline.design/)
2. Unhide keycap objects you want to edit
3. Update logo images on each keycap
4. **Important:** Keycap object names in Spline must match the `name` field in `src/data/constants.ts` (e.g., `js`, `react`, `docker`)
5. Hide keycaps again and export
6. Replace the file in `public/assets/`

Make sure `src/data/constants.ts` has matching entries:

```ts
export const SKILLS: Record<SkillNames, Skill> = {
  js: { name: "js", label: "JavaScript", ... },
  react: { name: "react", label: "React", ... },
  // Must match keycap names in Spline file
};
```

---

## 📋 Project Sections

### Hero Section
- Large animated introduction with your name and tagline
- CTA buttons for actions

### About Section
- Brief introduction about you
- Highlights of your expertise

### Skills Section
- Interactive 3D keyboard with hover interactions
- Skill categories (frontend, backend, tools, etc.)

### Education Section *(New)*
- Display your academic qualifications
- Institution names, degrees, dates, and GPA/percentage
- Timeline format with animations

### Experience Section
- Work positions with descriptions
- Skills used in each role
- Date ranges and company names

### Projects Section
- Horizontal scrolling showcase with pinning
- Screenshots, descriptions, live links, and GitHub repos
- Tech stack badges for each project
- Featured projects: UniEd, Parivartan, StartupOps, Portfolio, PlanPilot, **Eco-Route**

### Certificates Section
- Horizontal scrolling with parallax
- Certificate images with titles
- 15+ certifications display

### Hackathons Section
- Dedicated section for hackathon achievements
- Horizontal scroll with smooth animations
- Logo pinning effect

### Contact Section
- EmailJS-powered contact form
- Sends directly to your Gmail inbox
- Real-time notifications on submission

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com) and sign in with GitHub
3. Click "Add New Project" and import your repository
4. Add environment variables in Vercel dashboard:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_value
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_value
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_value
   ```
5. Click "Deploy"

Every push to main will trigger an automatic deployment.

### Deploy to Other Platforms

- **Netlify** — Connect GitHub repo, add build command `npm run build`, set output directory to `.next`
- **Railway** — Connect repo, set environment variables, Railway handles deployment
- **Self-Hosted** — Build with `npm run build`, run with `npm start` on your server

---

## 🚀 Recent Updates & Features

- ✅ **Education Section** — New dedicated section for academic qualifications
- ✅ **Eco-Route Project** — Latest project added with fuel optimization showcase
- ✅ **EmailJS Integration** — Direct email delivery to your Gmail
- ✅ **Fixed Horizontal Scrolling** — Consistent scroll behavior across all sections
- ✅ **Git LFS Support** — Large file handling for images and 3D assets
- ✅ **Responsive Animations** — All scroll and hover animations work across devices

---

## 📦 Dependencies Reference

| Package | Version | Purpose |
|---|---|---|
| `next` | 14.2.3 | React framework |
| `react` | 18.3 | UI library |
| `typescript` | Latest | Type safety |
| `tailwindcss` | Latest | Styling |
| `gsap` | Latest | Scroll animations |
| `framer-motion` | Latest | Component animations |
| `emailjs-browser` | Latest | Email delivery |
| `lenis` | Latest | Smooth scrolling |
| `zod` | Latest | Validation |
| `@radix-ui/*` | Latest | Accessible components |
| `lucide-react` | Latest | Icons |
| `shadcn-ui` | Latest | Pre-built UI components |
| `@spline/react-spline` | Latest | 3D models |

Install all with `pnpm install` (or `npm install`).

---

## 🤝 Contributing

Found a bug? Want to add a feature? All contributions welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

If you use this portfolio, a credit or link back to the [original repo](https://github.com/AarushBhagat/Portfolio) would be much appreciated ❤️

---

## 🙋 Support & Questions

For issues, questions, or suggestions:
- **GitHub Issues** — Report bugs or request features
- **Email** — aarushbhagat093@gmail.com
- **LinkedIn** — [Aarush Bhagat](https://www.linkedin.com/in/aarushbhagat03/)
- **GitHub** — [AarushBhagat](https://github.com/AarushBhagat)

---

Made with ❤️ by **Aarush Bhagat**
