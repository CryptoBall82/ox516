// src/components/layout/logo.tsx
import { ShieldCheck } from 'lucide-react';
import Link from 'next/link';

interface LogoProps {
  className?: string;
  iconColorClassName?: string;
  textColorClassName?: string;
}

export function Logo({ className, iconColorClassName = "text-accent", textColorClassName = "text-white" }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-2 group transition-opacity hover:opacity-80 ${className}`}>
      <ShieldCheck className={`h-8 w-8 ${iconColorClassName}`} />
      <span className={`text-2xl font-bold ${textColorClassName}`}>OfficiaX</span>
    </Link>
  );
}
