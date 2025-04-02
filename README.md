# Next.js Portfolio Website

A modern, responsive portfolio website built with Next.js, featuring dark mode, contact form with MongoDB integration, and email notifications. This

![Portfolio Preview](https://v0.dev/placeholder.svg?height=300&width=600&text=Portfolio+Preview)

## 📋 Features

### Core Features

- **Responsive Design**:

  - Fully responsive layout that adapts to mobile, tablet, and desktop viewports
  - Mobile-first approach with progressive enhancement
  - Custom breakpoints at 768px and 1024px for optimal viewing experience

- **Dark/Light Mode**:

  - Toggle between dark and light themes with smooth transitions
  - Persists user preference using localStorage
  - Respects user's system preference on first visit
  - Custom color variables for each theme

- **Smooth Animations**:

  - Section animations on scroll for enhanced user experience
  - Subtle hover effects on interactive elements
  - Optimized for performance with CSS transitions
  - Glow effects on profile image     

- **Contact Form**:

  - Form validation on both client and server side
  - MongoDB storage of all submissions
  - Email notifications using Nodemailer
  - Success/error feedback to users
  - Protection against spam submissions

- **Modern UI Components**:
  - Custom-designed cards for projects
  - Interactive tabs for skills section
  - Timeline display for education and experience
  - Social media integration
  - WhatsApp floating button for direct contact

### Technical Features

- **Next.js App Router**:

  - Modern routing system with improved performance
  - Server components for improved SEO and initial load time
  - API routes for backend functionality
  - Optimized image loading with Next.js Image component

- **Performance Optimizations**:

  - Code splitting for reduced bundle size
  - Server-side rendering for improved SEO
  - Optimized image loading with width and height attributes
  - Minimal dependencies to reduce JavaScript payload

- **Accessibility**:

  - Semantic HTML structure
  - ARIA attributes where appropriate
  - Keyboard navigation support
  - Color contrast compliance
  - Screen reader friendly content

- **SEO Enhancements**:
  - Proper meta tags
  - Semantic HTML
  - Optimized page load speed
  - Structured data for rich snippets
  - Proper heading hierarchy

## 🛠️ Technologies Used

### Frontend

- **Next.js 14**:

  - App Router for modern routing
  - Server Components for improved performance
  - Image optimization
  - Font optimization

- **React 18**:

  - Functional components with hooks
  - Context API for state management
  - Suspense for improved loading states
  - Strict Mode for identifying potential problems

- **CSS**:

  - Custom CSS variables for theming
  - Responsive design with media queries
  - CSS animations and transitions
  - No external CSS frameworks (as requested)

- **JavaScript**:
  - ES6+ features
  - Async/await for asynchronous operations
  - Event handling for interactive elements
  - Form validation

### Backend

- **Next.js API Routes**:

  - RESTful API endpoints
  - Server-side validation
  - Error handling
  - Rate limiting capabilities

- **MongoDB**:

  - Document database for storing contact form submissions
  - Connection pooling for improved performance
  - Proper error handling and reconnection logic
  - Data validation

- **Nodemailer**:
  - Email sending functionality
  - HTML and plain text email templates
  - SMTP configuration
  - Error handling for failed email delivery

### Development Tools

- **TypeScript**:

  - Static type checking
  - Enhanced IDE support
  - Better code documentation
  - Improved team collaboration

- **ESLint**:

  - Code quality enforcement
  - Consistent code style
  - Error prevention
  - Best practices enforcement

- **Git**:
  - Version control
  - Collaborative development
  - Change history tracking
  - Deployment integration

## 🚀 Getting Started

### Detailed Prerequisites

- **Node.js 18.x or later**:

  - Required for running Next.js applications
  - LTS version recommended for stability
  - Installation: [https://nodejs.org/](https://nodejs.org/)
  - Verify installation with `node -v`

- **npm or yarn**:

  - Package managers for installing dependencies
  - npm comes with Node.js installation
  - Yarn can be installed with `npm install -g yarn`
  - Verify with `npm -v` or `yarn -v`

- **MongoDB Account**:

  - Required for storing contact form submissions
  - Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
  - Set up a cluster and get your connection string
  - Create a database named "portfolio" (or your preferred name)

- **Email SMTP Server Access**:

  - Required for sending email notifications
  - Options include Gmail, SendGrid, Mailgun, etc.
  - Gather SMTP host, port, username, and password
  - If using Gmail, you may need to create an app password

- **Code Editor**:
  - Visual Studio Code recommended
  - Extensions: ESLint, Prettier, and TypeScript
