# Krysalis International School Website

## Overview

This is a modern, responsive website for Krysalis International School, a premium CBSE institution. The application is built as a full-stack web application using React for the frontend and Express.js for the backend, with a focus on creating an elegant, trustworthy, and engaging user experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Library**: Radix UI components with shadcn/ui design system
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Animations**: Framer Motion for smooth, engaging animations
- **State Management**: React Query (TanStack Query) for server state management
- **Routing**: Wouter for lightweight client-side routing

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Service**: Neon Database (serverless PostgreSQL)
- **API Style**: RESTful endpoints with JSON responses

## Key Components

### Frontend Components
- **Navigation**: Sticky header with smooth scrolling navigation
- **Hero Section**: Full-screen landing with animated elements and CTAs
- **About Section**: Vision/mission cards with glassmorphism effects
- **Academics**: Tabbed interface showcasing different grade levels
- **Facilities**: Grid layout highlighting school infrastructure
- **Gallery**: Responsive image gallery with hover effects
- **Contact Form**: Interactive form with validation and feedback
- **Testimonials**: Auto-rotating testimonial slider
- **Footer**: Comprehensive footer with social links and newsletter signup

### Backend Endpoints
- **Contact Form**: `POST /api/contact` - Handles contact form submissions
- **Newsletter**: `POST /api/newsletter` - Manages newsletter subscriptions
- **Error Handling**: Centralized error handling with proper HTTP status codes

### Database Schema
- **Users Table**: Basic user structure with username/password (using Drizzle ORM)
- **Schema Location**: `shared/schema.ts` for type-safe database operations
- **Migrations**: Handled through Drizzle Kit with PostgreSQL dialect

## Data Flow

1. **Frontend to Backend**: API calls use fetch with proper error handling
2. **Form Submissions**: Contact and newsletter forms POST to respective endpoints
3. **Database Operations**: Drizzle ORM handles all database interactions
4. **Response Handling**: Structured JSON responses with success/error states
5. **State Management**: React Query manages caching and synchronization

## External Dependencies

### UI and Styling
- **Radix UI**: Accessible, unstyled UI primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for React
- **Lucide React**: Icon library
- **Google Fonts**: Inter font family

### Development Tools
- **Vite**: Build tool with development server
- **TypeScript**: Type safety and better development experience
- **ESLint**: Code linting and formatting
- **PostCSS**: CSS processing with Tailwind

### Backend Dependencies
- **Express.js**: Web framework for Node.js
- **Drizzle ORM**: Type-safe database toolkit
- **Neon Database**: Serverless PostgreSQL database
- **Zod**: Schema validation library

## Deployment Strategy

### Build Process
1. **Development**: `npm run dev` - Starts both frontend and backend in development mode
2. **Build**: `npm run build` - Creates optimized production build
3. **Production**: `npm run start` - Runs the production server

### File Structure
- **Client Code**: `client/` directory contains React application
- **Server Code**: `server/` directory contains Express.js backend
- **Shared Code**: `shared/` directory contains common types and schemas
- **Build Output**: `dist/` directory for production builds

### Environment Configuration
- **Database**: Requires `DATABASE_URL` environment variable
- **Development**: Uses Vite dev server with HMR
- **Production**: Serves static files from Express server

### Key Features
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Performance**: Optimized images, lazy loading, and efficient animations
- **Accessibility**: ARIA labels, keyboard navigation, and semantic HTML
- **SEO**: Proper meta tags, structured data, and semantic markup
- **Modern UX**: Glassmorphism effects, smooth animations, and interactive elements

The architecture prioritizes developer experience with TypeScript throughout, modern tooling, and a clean separation of concerns between frontend and backend components.