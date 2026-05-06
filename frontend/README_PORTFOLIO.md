# 3D Animated Portfolio Website

A stunning, interactive 3D animated portfolio website built with React, Three.js, and modern web technologies. Features smooth animations, responsive design, and an immersive user experience.

## 🌟 Features

- **3D Animated Hero Section**: Rotating 3D cube with Three.js
- **Custom Animated Cursor**: Interactive mouse cursor animation
- **Scroll Animations**: Smooth scroll-triggered animations using Framer Motion
- **Responsive Design**: Fully responsive on mobile, tablet, and desktop
- **Modern UI/UX**: Glassmorphism effects with gradient colors
- **Smooth Navigation**: Sticky navigation bar with smooth scrolling
- **Multiple Sections**:
  - Hero with 3D Graphics
  - About Me
  - Education & Certifications (Animated Timeline)
  - Technologies & Tools
  - Featured Projects
  - Professional Experience
  - Testimonials
  - Contact Form
  - Footer

## 🛠️ Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Three.js** - 3D graphics
- **@react-three/fiber** - React renderer for Three.js
- **Framer Motion** - Animation library
- **GSAP** - Advanced animations
- **Tailwind CSS** - Styling
- **Lucide React** - Icon library
- **react-intersection-observer** - Scroll animations trigger

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd portfolio2

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🚀 Quick Start

1. **Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser

2. **Build for Production**:
   ```bash
   npm run build
   ```

3. **Preview Production Build**:
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
src/
├── components/
│   ├── About.tsx              # About section
│   ├── Contact.tsx            # Contact form
│   ├── CustomCursor.tsx       # Animated cursor
│   ├── Education.tsx          # Timeline education
│   ├── Experience.tsx         # Work experience
│   ├── Footer.tsx             # Footer
│   ├── Hero.tsx               # Hero section with 3D
│   ├── Navigation.tsx         # Navigation bar
│   ├── Projects.tsx           # Projects showcase
│   ├── Testimonials.tsx       # Client testimonials
│   ├── Technologies.tsx       # Tech stack
│   └── *.css                  # Component styles
├── App.tsx                    # Main app component
├── App.css                    # App styles
├── index.css                  # Global styles
└── main.tsx                   # Entry point
```

## 🎨 Customization

### Update Personal Information
Edit the component files to add your own content:
- Update hero text in `Hero.tsx`
- Add your education in `Education.tsx`
- Showcase your projects in `Projects.tsx`
- Update experience in `Experience.tsx`
- Add testimonials in `Testimonials.tsx`

### Color Scheme
The color scheme uses:
- **Primary**: `#00d4ff` (Cyan)
- **Secondary**: `#a855f7` (Purple)
- **Accent**: `#ec4899` (Pink)

Edit `tailwind.config.js` to customize colors.

### Animations
- Adjust animation speeds in component files
- Modify scroll trigger distances in `useInView` hook
- Customize 3D rotation in `Hero.tsx`

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

All components are fully responsive and tested on various devices.

## 🔗 Navigation

The portfolio includes smooth scroll navigation with hash-based routing:
- Home (#home)
- About (#about)
- Education (#education)
- Technologies (#technologies)
- Projects (#projects)
- Experience (#experience)
- Testimonials (#testimonials)
- Contact (#contact)

## 📝 Form Submission

The contact form currently logs data to the console. To add actual email functionality:

1. Install an email service library:
   ```bash
   npm install @sendgrid/mail
   ```

2. Update the `handleSubmit` function in `Contact.tsx`

## 🎯 Performance

- **Code Splitting**: Lazy loaded components
- **Image Optimization**: Optimized assets
- **CSS Minification**: Built-in Vite optimization
- **Bundle Size**: ~340KB gzipped

## 🌐 Deployment

Deploy to Vercel, Netlify, or GitHub Pages:

```bash
# Build the project
npm run build

# The 'dist' folder is ready for deployment
```

### Vercel
```bash
npm i -g vercel
vercel
```

### Netlify
Connect your GitHub repository to Netlify for auto-deployment.

## 🐛 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to submit pull requests or open issues for bugs and feature requests.

## 📞 Contact

For questions or suggestions, please open an issue or contact the maintainer.

---

Built with ❤️ using React, Three.js, and modern web technologies.
