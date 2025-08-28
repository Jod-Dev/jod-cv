# Jod Louis Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices
- **Dark/Light Mode**: Toggle between dark and light themes
- **Smooth Animations**: Powered by Framer Motion
- **SEO Optimized**: Meta tags, Open Graph, and JSON-LD structured data
- **Static Export**: Ready for deployment on Cloudflare Pages
- **TypeScript**: Full type safety throughout the application

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes
- **Deployment**: Cloudflare Pages

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Jod-Dev/jod-portfolio.git
   cd jod-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run export` - Export static files
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run test` - Run tests
- `npm run preview` - Preview static build

## 🏗️ Project Structure

```
jod-portfolio/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── header.tsx         # Navigation header
│   ├── hero.tsx           # Hero section
│   ├── about.tsx          # About section
│   ├── experience.tsx     # Work experience
│   ├── skills.tsx         # Skills section
│   ├── education.tsx      # Education section
│   ├── awards.tsx         # Awards section
│   ├── volunteer.tsx      # Volunteer work
│   ├── contact.tsx        # Contact section
│   ├── footer.tsx         # Footer
│   └── theme-provider.tsx # Theme provider
├── lib/                   # Utility functions
│   └── data.ts           # Resume data
├── types/                 # TypeScript types
│   └── resume.ts         # Resume type definitions
├── public/               # Static assets
└── package.json          # Dependencies and scripts
```

## 🎨 Customization

### Updating Personal Information

Edit the `lib/data.ts` file to update your personal information:

```typescript
export const resumeData: Resume = {
  basics: {
    name: "Your Name",
    label: "Your Title",
    email: "your.email@example.com",
    // ... other fields
  },
  // ... other sections
}
```

### Styling

The project uses Tailwind CSS with custom CSS variables for theming. Main color schemes are defined in `app/globals.css`.

### Animations

Animations are powered by Framer Motion. You can customize animations by modifying the `motion` components throughout the application.

## 🚀 Deployment

### Cloudflare Pages

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Cloudflare Pages**
   - Go to [Cloudflare Pages](https://pages.cloudflare.com/)
   - Connect your GitHub repository
   - Set build settings:
     - **Framework preset**: Next.js
     - **Build command**: `npm run build`
     - **Build output directory**: `out`
   - Deploy!

### Other Platforms

The project is configured for static export, so it can be deployed to any static hosting platform:

- Vercel
- Netlify
- GitHub Pages
- AWS S3
- And more...

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:

- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔧 Development

### Adding New Sections

1. Create a new component in `components/`
2. Add it to `app/page.tsx`
3. Update navigation in `components/header.tsx`

### Styling Guidelines

- Use Tailwind CSS classes for styling
- Follow the existing color scheme
- Maintain responsive design principles
- Use CSS variables for theme colors

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: ing.jod@gmail.com
- **Website**: https://www.jodlouis.com
- **Location**: Tampa, FL

---

Built with ❤️ by Jod Louis
