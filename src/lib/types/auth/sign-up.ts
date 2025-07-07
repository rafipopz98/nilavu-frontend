import type { LucideIcon } from "lucide-react";
import { useCallback } from "react";

export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface SignUpData extends FormData {
  role: string;
}

export interface ValidationErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  role?: string;
  submit?: string;
  google?: string;
}

export interface RoleOptions {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface SignUpPageProps {
  heroImageSrc?: string;
  onSignUp?: (data: SignUpData) => Promise<void> | void;
  onGoogleSignUp?: () => Promise<void> | void;
}

export interface FormInputProps {
  label: string;
  error?: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showPasswordToggle?: boolean;
  showPassword?: boolean;
  onTogglePassword?: () => void;
  className?: string;
}

export interface RoleCardProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  isSelected: boolean;
  onClick: () => void;
  error?: boolean;
}

export interface ProgressStepperProps {
  currentStep: number;
  totalSteps: number;
}

export const useFormValidation = () => {
  const validateStep1 = useCallback(
    (firstName: string, purpose: string): ValidationErrors => {
      const errors: ValidationErrors = {};
      if (!firstName.trim()) {
        errors.firstName = "First name is required";
      }
      if (!purpose) {
        errors.role = "Please select your role";
      }
      return errors;
    },
    []
  );

  const validateStep2 = useCallback((form: FormData): ValidationErrors => {
    const errors: ValidationErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!form.firstName.trim()) {
      errors.firstName = "First name is required";
    }
    if (!form.lastName.trim()) {
      errors.lastName = "Last name is required";
    }
    if (!form.email.trim()) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(form.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!form.password) {
      errors.password = "Password is required";
    } else if (form.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }

    return errors;
  }, []);

  return { validateStep1, validateStep2 };
};
