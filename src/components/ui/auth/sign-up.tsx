import React, { useState, useCallback, useMemo } from "react";
import { Briefcase, Users, ArrowLeft } from "lucide-react";
import {
  useFormValidation,
  type FormData,
  type RoleOptions,
  type SignUpPageProps,
  type ValidationErrors,
} from "../../../lib/types/auth/sign-up";
import { GoogleIcon } from "../../../assets/icons/googleIcon";
import RoleCard from "./RoleCard";
import FormInput from "./FormInput";
import ProgressStepper from "./Stepper";

// Main SignUp Component
export const SignUpPage: React.FC<SignUpPageProps> = ({
  heroImageSrc,
  onSignUp,
  onGoogleSignUp,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [role, setRole] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<ValidationErrors>({});

  const [form, setForm] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const { validateStep1, validateStep2 } = useFormValidation();

  const roleOptions = useMemo<RoleOptions[]>(
    () => [
      {
        id: "talent",
        icon: Briefcase,
        title: "Get a Job",
        description: "Find your dream opportunity",
      },
      {
        id: "employer",
        icon: Users,
        title: "Hire Talent",
        description: "Build your perfect team",
      },
    ],
    []
  );

  const updateForm = useCallback(
    (field: keyof FormData, value: string) => {
      setForm((prev) => ({ ...prev, [field]: value }));
      // Clear error when user starts typing
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    },
    [errors]
  );

  const handleStep1Continue = useCallback(() => {
    const validationErrors = validateStep1(form.firstName, role);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setCurrentStep(2);
  }, [form.firstName, role, validateStep1]);

  const handleStep2Submit = useCallback(async () => {
    const validationErrors = validateStep2(form);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setIsLoading(true);
      await onSignUp?.({ ...form, role });
    } catch (error) {
      setErrors({ submit: "Failed to create account. Please try again." });
    } finally {
      setIsLoading(false);
    }
  }, [form, role, validateStep2, onSignUp]);

  const handleGoogleSignUp = useCallback(async () => {
    try {
      setIsLoading(true);
      await onGoogleSignUp?.();
    } catch (error) {
      setErrors({ google: "Failed to sign up with Google. Please try again." });
    } finally {
      setIsLoading(false);
    }
  }, [onGoogleSignUp]);

  const handlePurposeSelect = useCallback(
    (selectedPurpose: string) => {
      setRole(selectedPurpose);
      if (errors.role) {
        setErrors((prev) => ({ ...prev, purpose: undefined }));
      }
    },
    [errors.role]
  );

  const handleBackToStep1 = useCallback(() => {
    setCurrentStep(1);
    setErrors({});
  }, []);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row font-geist">
      {/* Left Section - Form */}
      <section className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          {/* Logo */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <img src="/logo.svg" alt="logo" width={55} height={55} />
            <h1 className="animate-element animate-delay-100 text-2xl md:text-3xl font-semibold leading-tight">
              Nilavu
            </h1>
          </div>

          {/* Step 1: Welcome & Purpose Selection */}
          {currentStep === 1 && (
            <div className="space-y-6">
              {/* Greeting */}
              <div className="flex items-center gap-2 text-muted-foreground whitespace-nowrap">
                <span className="text-2xl">👋</span>
                <span className="text-2xl">Hi</span>
                <input
                  type="text"
                  value={form.firstName}
                  onChange={(e) => updateForm("firstName", e.target.value)}
                  placeholder="First name"
                  className={`border-b outline-none px-1 font-medium transition-colors ${
                    errors.firstName
                      ? "border-red-500 text-red-600 placeholder-red-400"
                      : "border-primary/50 focus:border-primary text-foreground"
                  } bg-transparent`}
                />
                <span className="text-2xl">! Tell us why you're here.</span>
              </div>

              {/* Purpose Selection */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                {roleOptions.map((option) => (
                  <RoleCard
                    key={option.id}
                    icon={option.icon}
                    title={option.title}
                    isSelected={role === option.id}
                    onClick={() => handlePurposeSelect(option.id)}
                    error={!!errors.role}
                  />
                ))}
              </div>

              {errors.role && (
                <p className="text-red-500 text-sm text-center animate-element animate-delay-100">
                  {errors.role}
                </p>
              )}

              <button
                type="button"
                onClick={handleStep1Continue}
                disabled={isLoading}
                className="mt-6 w-full rounded-2xl bg-primary py-4 text-primary-foreground disabled:opacity-50 transition-all hover:opacity-90"
              >
                Continue
              </button>

              <p className="text-center text-sm mt-4">
                Have an account?{" "}
                <button
                  type="button"
                  className="text-violet-400 hover:underline"
                >
                  Log in
                </button>
              </p>
            </div>
          )}

          {/* Step 2: Account Creation */}
          {currentStep === 2 && (
            <div className="space-y-6">
              {/* Header with back button */}
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={handleBackToStep1}
                  className="p-2 rounded-full hover:bg-secondary transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 text-muted-foreground" />
                </button>
                <h2 className="text-2xl font-semibold">Create your account</h2>
              </div>

              <div className="space-y-3">
                {/* Name Fields - Single Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="animate-element animate-delay-400">
                    <FormInput
                      label="First name"
                      placeholder="Enter your first name"
                      value={form.firstName}
                      onChange={(e) => updateForm("firstName", e.target.value)}
                      error={errors.firstName}
                    />
                  </div>
                  <div className="animate-element animate-delay-400">
                    <FormInput
                      label="Last name"
                      placeholder="Enter your last name"
                      value={form.lastName}
                      onChange={(e) => updateForm("lastName", e.target.value)}
                      error={errors.lastName}
                    />
                  </div>
                </div>

                <div className="animate-element animate-delay-400">
                  <FormInput
                    label="Email"
                    type="email"
                    placeholder="Enter your email address"
                    value={form.email}
                    onChange={(e) => updateForm("email", e.target.value)}
                    error={errors.email}
                  />
                </div>

                <div className="animate-element animate-delay-400">
                  <FormInput
                    label="Password"
                    placeholder="Enter your password"
                    value={form.password}
                    onChange={(e) => updateForm("password", e.target.value)}
                    error={errors.password}
                    showPasswordToggle
                    showPassword={showPassword}
                    onTogglePassword={() => setShowPassword(!showPassword)}
                  />
                </div>
              </div>

              {errors.submit && (
                <p className="text-red-500 text-sm text-center animate-element animate-delay-100">
                  {errors.submit}
                </p>
              )}

              <button
                type="button"
                onClick={handleStep2Submit}
                disabled={isLoading}
                className="w-full rounded-2xl bg-primary py-4 text-primary-foreground cursor-pointer disabled:opacity-50 transition-all hover:opacity-90 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Creating Account...
                  </>
                ) : (
                  "Sign Up"
                )}
              </button>

              {/* Divider */}
              <div className="animate-element animate-delay-700 relative flex items-center justify-center">
                <span className="w-full border-t border-border"></span>
                <span className="px-4 text-sm text-muted-foreground bg-background absolute">
                  Or continue with
                </span>
              </div>

              {/* Google Sign Up */}
              <button
                type="button"
                onClick={handleGoogleSignUp}
                disabled={isLoading}
                className="animate-element animate-delay-800 w-full flex items-center justify-center gap-3 border border-border rounded-2xl py-4 hover:bg-secondary transition-colors disabled:opacity-50"
              >
                <GoogleIcon />
                Continue with Google
              </button>

              {errors.google && (
                <p className="text-red-500 text-sm text-center animate-element animate-delay-100">
                  {errors.google}
                </p>
              )}

              <p className="text-center text-sm mt-4">
                Have an account?{" "}
                <button
                  type="button"
                  className="text-violet-400 hover:underline"
                >
                  Log in
                </button>
              </p>
            </div>
          )}

          {/* Progress Stepper */}
          <ProgressStepper currentStep={currentStep} totalSteps={2} />
        </div>
      </section>

      {/* Right Section - Hero Image */}
      {heroImageSrc && (
        <section className="hidden lg:block flex-1 relative p-4">
          <div
            className="absolute inset-4 rounded-3xl bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImageSrc})` }}
          ></div>
        </section>
      )}
    </div>
  );
};
