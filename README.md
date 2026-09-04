# Oriza Sativa — Personal Developer Portfolio

Modern, high-converting personal developer portfolio website showcasing my experience as a **Fullstack Developer & Software Engineer**. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

---

## 🛠️ Tech Stack & Tools

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, React 18)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & Custom Glassmorphism Utilities
- **Animations**: [Framer Motion](https://www.framer.com/motion/) (Scroll-triggered `whileInView` & GPU keyframe ambient blobs)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) & [Lucide React](https://lucide.dev/) (Monochrome brand logos)
- **Typography**: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) via `next/font/google`
- **Deployment**: [Vercel](https://vercel.com/) (Automated CI/CD Pipeline)

---

## ✨ Key Features

- **Bright Warm Cream Theme**: Clean, warm pastel aesthetic (`#FAFAF9`) with translucent glass panels and ambient background blobs.
- **Organic Liquid Mirror Cut Photo**: Profile picture framed with a custom organic fluid cut and floating 3D ribbon badge.
- **Fixed Social Side-Dock**: Quick 1-click access dock fixed on the right screen edge for GitHub, LinkedIn, and Email.
- **Copy-to-Clipboard Email Toast**: One-click Gmail copying with interactive floating toast notification.
- **Downloadable CV**: Instant PDF resume download feature (`/resume.pdf`).
- **Isolated Data Layer**: Centralized copywriting & content configuration in `src/data/content.ts`.
- **Responsive & Accessible**: Fully optimized for mobile, tablet, and desktop viewports with keyboard focus indicators (`focus-visible`).

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js `>=18.x`
- npm `>=9.x`

### Installation & Development

```bash
# Clone repository
git clone https://github.com/OrizaSativaFiojati/My-Porto-Web.git

# Enter project directory
cd My-Porto-Web

# Install dependencies
npm install

# Run local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📦 Production Build

```bash
# Verify production build & TypeScript validation
npm run build

# Start production preview server
npm start
```
