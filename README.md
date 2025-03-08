# Next.js Mobile App

This is a mobile-optimized [Next.js](https://nextjs.org) application with responsive design, interactive elements, and a hamburger menu for mobile navigation.

## Features

- Responsive design optimized for mobile devices
- Interactive hamburger menu for mobile navigation
- Click animations for buttons and interactive elements
- Reusable components (Navbar, Footer)
- Multiple page routes (QR, Grants, Commissions, Thank You)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── public/          # Static assets
├── src/
│   ├── app/         # Next.js app directory
│   │   ├── page.tsx # Home page
│   │   ├── qr/      # QR page
│   │   ├── grants/  # Grants page
│   │   ├── commissions/ # Commissions page
│   │   ├── thank-you/   # Thank you page
│   │   └── layout.tsx   # Root layout
│   └── components/  # Reusable components
│       ├── Navbar.tsx   # Navigation bar with mobile menu
│       └── Footer.tsx   # Reusable footer component
├── next.config.js   # Next.js configuration
└── vercel.json      # Vercel deployment configuration
```

## Customization

- Update colors and styling in the respective component files
- Modify the Navbar links in `src/components/Navbar.tsx`
- Customize the Footer in `src/components/Footer.tsx`

## Deploy on Vercel

### Option 1: Automatic Deployment (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Sign up or log in to [Vercel](https://vercel.com)
3. Click "New Project" and import your repository
4. Vercel will automatically detect Next.js and configure the build settings
5. Click "Deploy"

### Option 2: Manual Deployment using Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Log in to Vercel:
   ```bash
   vercel login
   ```

3. Deploy from your project directory:
   ```bash
   vercel
   ```

4. Follow the prompts to complete the deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

For more details, check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).
