import type { GlassInputWrapperProps } from "../../../lib/types/auth/login";

export const GlassInputWrapper = ({
  children,
  error,
}: GlassInputWrapperProps) => (
  <div
    className={`relative backdrop-blur-sm bg-white/5 border rounded-2xl transition-all duration-200 ${
      error
        ? "border-red-500 bg-red-500/5"
        : "border-border hover:border-primary/50 focus-within:border-primary"
    }`}
  >
    {children}
  </div>
);
