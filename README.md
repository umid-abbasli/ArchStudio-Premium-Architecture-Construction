<div align="center">

# ArchStudio

### Free Architecture & Construction Website Template

A premium dark-themed landing page for **architecture firms**, **construction companies**, and **design studios**.

[![Next.js](https://img.shields.io/badge/Next.js-15-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-ScrollTrigger-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://gsap.com/)

<br />

[![Free Template](https://img.shields.io/badge/🎁_FREE_TEMPLATE-Use_Commercially-success?style=for-the-badge)](LICENSE)
[![Frontend Only](https://img.shields.io/badge/Backend-Not_Required-blue?style=for-the-badge)]()
[![License](https://img.shields.io/badge/License-MIT-lightgrey?style=for-the-badge)](LICENSE)

<br />

[Live Demo](#) · [Report Bug](https://github.com/umid-abbasli/ArchStudio-Premium-Architecture-Construction/issues) · [Request Feature](https://github.com/umid-abbasli/ArchStudio-Premium-Architecture-Construction/issues)

</div>

<br />

> ### 🎁 This is a **100% free template**
>
> Use it for personal or commercial projects — no payment, no license key, no restrictions.  
> Modify, deploy, and rebrand as you wish. A ⭐ star is appreciated!

<br />

<!-- Replace with your own screenshot: public/preview.png -->
<!-- <img src="./public/preview.png" alt="ArchStudio template preview" width="100%" /> -->

<img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80" alt="ArchStudio — Architecture & Construction Website Template Preview" width="100%" />

<br />

---

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [SEO](#-seo)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [Customization](#-customization)
- [Deploy](#-deploy)
- [Free License](#-free-license)

---

## 📖 About

**ArchStudio** is a modern, SEO-friendly one-page website template built with **Next.js 15**, **React 19**, and **Tailwind CSS**.

It includes a cinematic hero video background, GSAP scroll animations, portfolio grid, services section, client testimonials, and a contact form — everything an architecture or construction business needs to launch online quickly.

**Ideal for:**

| | |
|---|---|
| 🏗️ Construction companies | 🏛️ Architecture agencies |
| 🏠 Real estate developers | 🛋️ Interior design studios |
| 🔧 Building contractors | 📐 Engineering firms |

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🎬 **Video Hero** | Full-screen autoplay background video |
| 🎞️ **Scroll Animations** | GSAP ScrollTrigger section transitions |
| 📱 **Fully Responsive** | Mobile, tablet & desktop optimized |
| 🧭 **Sticky Navigation** | Smooth scroll + mobile hamburger menu |
| 🖼️ **Portfolio Grid** | Project cards with hover reveal |
| ⚙️ **Services Section** | 6 ready-made service cards |
| 💬 **Testimonials** | Client review cards |
| 📬 **Contact Form** | Frontend form (connect your own API) |
| 🔍 **SEO Ready** | Title, meta description, Open Graph & Twitter cards |
| ♿ **Accessible** | `prefers-reduced-motion` support |

---

## 🛠 Tech Stack

```
Next.js 15  ·  React 19  ·  TypeScript 5  ·  Tailwind CSS 3  ·  GSAP 3
```

| Layer | Technology |
|:------|:-----------|
| Framework | [Next.js 15](https://nextjs.org/) — App Router |
| UI | [React 19](https://react.dev/) |
| Language | [TypeScript 5](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS 3](https://tailwindcss.com/) |
| Animation | [GSAP 3](https://gsap.com/) + ScrollTrigger |
| Fonts | Cormorant Garamond & Outfit — `next/font` |
| Images | `next/image` + Unsplash remote patterns |
| Backend | ❌ None — frontend only |

---

## 🔍 SEO

Default metadata is configured in `lib/site.ts` and `app/layout.tsx`:

**Title**
```
ArchStudio — Premium Architecture & Construction
```

**Description**
```
ArchStudio delivers premium residential, commercial, and industrial construction with modern design, expert craftsmanship, and end-to-end project management. Explore our portfolio and start your project today.
```

> 💡 Update `lib/site.ts` with your brand name, title, and description before going live.

---

## 🚀 Quick Start

**Requirements:** Node.js 18.17+

```bash
# 1. Clone
git clone https://github.com/umid-abbasli/ArchStudio-Premium-Architecture-Construction.git
cd ArchStudio-Premium-Architecture-Construction

# 2. Install
npm install

# 3. Run
npm run dev
```

Open **http://localhost:3000** 🎉

<details>
<summary><strong>Production build</strong></summary>

```bash
npm run build
npm start
```

</details>

---

## 📁 Project Structure

```
archstudio/
├── app/
│   ├── layout.tsx              # SEO metadata + fonts
│   ├── page.tsx                # Main page
│   └── globals.css             # Styles & animations
├── components/
│   ├── Header.tsx              # Nav + mobile menu
│   ├── Hero.tsx                # Video hero
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Projects.tsx
│   ├── Process.tsx
│   ├── Testimonials.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── hooks/
│   └── useScrollAnimations.ts  # GSAP setup
├── lib/
│   └── site.ts                 # Content + SEO config
└── public/
    └── hero-video.mp4          # Hero background
```

---

## 🎨 Customization

| What | Where |
|------|-------|
| Brand name, SEO, contact | `lib/site.ts` |
| Services, projects, reviews | `lib/site.ts` |
| Hero video | `public/hero-video.mp4` |
| Colors & theme | `tailwind.config.ts` |
| Custom styles | `app/globals.css` |
| README preview image | `public/preview.png` |

---

## 🌐 Deploy

<div align="center">

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/umid-abbasli/ArchStudio-Premium-Architecture-Construction)

Works on **Vercel** · **Netlify** · **Cloudflare Pages** · any Node.js host

</div>

---

## 🎁 Free License

This project is distributed as a **free website template**.

| ✅ Allowed | |
|---|---|
| Personal & commercial use | ✅ |
| Modify & rebrand | ✅ |
| Deploy anywhere | ✅ |
| Payment required | ❌ |

---

<div align="center">

### Keywords

`architecture website template` · `construction landing page` · `nextjs template` · `react template` · `free website template` · `tailwind css` · `gsap animation` · `building company website` · `interior design template`

<br />

**If this template helped you, leave a ⭐ star on GitHub!**

Made with ❤️ using Next.js · React · Tailwind CSS · GSAP

</div>
