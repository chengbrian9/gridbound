/**
 * Common TypeScript interfaces and types
 */

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'outline';
  className?: string;
}

export interface FooterProps {
  showDonationLink?: boolean;
  contactEmail?: string;
}

export interface BackButtonProps {
  href: string;
}

export interface PageHeaderProps {
  title: string;
  href: string;
}
