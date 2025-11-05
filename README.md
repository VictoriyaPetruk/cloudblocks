# Cloud Blocks - Next.js TypeScript App

A modern Next.js TypeScript application for Cloud Blocks, a DevOps Co-Pilot platform.

## Features

- **Modern React Architecture**: Built with Next.js 14 and TypeScript
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Email Integration**: EmailJS integration for newsletter subscriptions
- **Interactive Components**: Smooth animations and hover effects
- **SEO Optimized**: Server-side rendering and meta tags

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Main homepage component
│   ├── layout.tsx       # Root layout
│   └── globals.css      # Global styles
├── components/          # Reusable components (if needed)
└── lib/                 # Utility functions (if needed)
```

## Features Implemented

### 🎨 Design & UI
- **Hero Section**: Eye-catching landing with call-to-action buttons
- **Features Grid**: Four key features with icons and descriptions
- **Cloud Support**: AWS, Azure, GCP integration showcase
- **Architecture Demo**: Embedded Loom video for solution architect workflow
- **Pricing Section**: Early adopter pricing with feature list
- **Newsletter Signup**: EmailJS integration for lead capture
- **Footer**: Complete site navigation and legal links

### 📱 Responsive Design
- **Mobile Menu**: Hamburger menu for mobile devices
- **Grid Layouts**: Responsive grid systems for all screen sizes
- **Touch-Friendly**: Optimized for mobile interactions
- **Performance**: Optimized images and lazy loading

### 🔧 Technical Features
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first CSS framework
- **Next.js Image**: Optimized image loading and performance
- **EmailJS**: Email subscription functionality
- **SEO Ready**: Meta tags and structured data

## Email Integration

The application includes EmailJS integration for newsletter subscriptions:

- **Service ID**: `service_6pgksdi`
- **Templates**: Welcome and confirmation emails
- **Public Key**: `4SYMi98c8zlBSQXnp`

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Customization
- **Colors**: Update Tailwind config for brand colors
- **Content**: Modify the page.tsx component for content changes
- **Images**: Replace images in `/public/img/` directory
- **Email**: Update EmailJS configuration for different email service

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

All rights reserved. © 2024 Cloud Blocks.