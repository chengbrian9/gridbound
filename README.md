# Gridbound Engineering Notebook - Mobile Web App

This is the mobile-optimized web application for [Gridbound](https://gridbound.com), an engineering notebook company. Built with [Next.js](https://nextjs.org), this application provides a responsive user experience with intuitive navigation for mobile users.

## About Gridbound

Gridbound provides high-quality engineering notebooks designed for professionals and students. Our web application allows users to:
- Learn about our products
- Scan QR codes on physical notebooks
- Apply for grants and commissions
- Access digital resources related to our notebooks

## Features

- Mobile-first responsive design
- Easy navigation with hamburger menu on mobile devices
- Interactive elements with visual feedback
- Consistent branding across all pages
- Key sections: Home, QR code scanning, Grants program, Commissions

## Getting Started for Developers

Follow these simple steps to set up the development environment:

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd nextjs-mobile-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **View the application**
   Open [http://localhost:3000](http://localhost:3000) in your browser to see the application running locally.

The page will automatically update as you make changes to the code.

## Project Structure

The codebase is organized in a standard Next.js App Router structure:

```
├── public/          # Static assets (images, icons, etc.)
├── src/
│   ├── app/         # Next.js app directory (pages)
│   │   ├── page.tsx # Home page
│   │   ├── qr/      # QR code scanning functionality
│   │   ├── grants/  # Gridbound grants program
│   │   ├── commissions/ # Commission request page
│   │   └── layout.tsx   # Root layout with common elements
│   └── components/  # Reusable components
│       ├── Navbar.tsx   # Navigation with mobile menu
│       └── Footer.tsx   # Site footer
├── next.config.js   # Next.js configuration
└── vercel.json      # Deployment configuration
```

This structure follows Next.js best practices and makes it easy to locate and modify specific parts of the application.

## Common Development Tasks

### Styling and Branding
- Gridbound brand colors and styling are defined in component files
- To update the color scheme, modify the CSS variables in the respective components
- All styling follows Gridbound's brand guidelines

### Navigation
- To add or modify navigation links, edit `src/components/Navbar.tsx`
- The mobile menu (hamburger) is automatically responsive

### Content Updates
- Page content is defined in the respective page files under `src/app/`
- Update text, images, and layout directly in these files
- For reusable content, consider creating new components in `src/components/`

## Deployment

The Gridbound web application is deployed using Vercel, which provides a seamless deployment experience for Next.js applications.

### Deployment Process

1. **Prepare for deployment**
   - Ensure all changes are committed to the repository
   - Run tests locally to verify functionality: `npm test`

2. **Deploy to production**
   - The main branch is automatically deployed to production when changes are pushed
   - Preview deployments are created for pull requests

3. **Manual deployment (if needed)**
   - Install Vercel CLI: `npm install -g vercel`
   - Log in: `vercel login`
   - Deploy: `vercel`

### Environment Variables

For local development with API integrations, create a `.env.local` file with the necessary environment variables (see `.env.example` for reference).

### Troubleshooting Deployment

If you encounter issues during deployment:
1. Check the build logs in the Vercel dashboard
2. Verify that all dependencies are correctly installed
3. Ensure environment variables are properly configured

For more details, refer to the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).
