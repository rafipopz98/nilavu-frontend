import { Eye, EyeOff } from "lucide-react";
import type { FormInputProps } from "../../../lib/types/auth/sign-up";
import { GlassInputWrapper } from "./glassInputWrapper";

const FormInput: React.FC<FormInputProps> = ({
  label,
  error,
  type = "text",
  placeholder,
  value,
  onChange,
  showPasswordToggle = false,
  showPassword,
  onTogglePassword,
  className = "",
  ...props
}) => (
  <div className={`space-y-2 ${className}`}>
    <label className="text-sm font-medium text-muted-foreground">{label}</label>
    <GlassInputWrapper error={!!error}>
      <div className="relative">
        <input
          type={
            showPasswordToggle ? (showPassword ? "text" : "password") : type
          }
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full bg-transparent p-4 text-sm rounded-2xl outline-none text-foreground placeholder-muted-foreground ${
            showPasswordToggle ? "pr-12" : ""
          } ${error ? "text-red-600" : ""}`}
          {...props}
        />
        {showPasswordToggle && onTogglePassword && (
          <button
            type="button"
            onClick={onTogglePassword}
            className="absolute inset-y-0 right-3 flex items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            {showPassword ? (
              <EyeOff className="w-5 h-5" />
            ) : (
              <Eye className="w-5 h-5" />
            )}
          </button>
        )}
      </div>
    </GlassInputWrapper>
    {error && (
      <p className="text-red-500 text-xs mt-1 animate-element animate-delay-100">
        {error}
      </p>
    )}
  </div>
);

export default FormInput;
