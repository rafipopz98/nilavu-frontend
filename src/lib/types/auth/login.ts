import type { LucideIcon } from "lucide-react";

export interface GlassInputWrapperProps {
  children: React.ReactNode;
  error?: boolean;
}

export interface SignInPageProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  heroImageSrc?: string;
  onSignIn?: (data: { email: string; password: string }) => void;
  onGoogleSignIn?: () => void;
  onForgotPassword?: () => void;
}

export interface RoleOption {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ValidationErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  role?: string;
}
