import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { GlassInputWrapper } from "./glassInputWrapper";

interface PasswordInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const PasswordInput = ({ value, onChange }: PasswordInputProps) => {
  const [show, setShow] = useState(false);
  return (
    <GlassInputWrapper>
      <div className="relative">
        <input
          type={show ? "text" : "password"}
          placeholder="Enter your password"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-transparent p-4 pr-12 text-sm rounded-2xl"
        />
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute inset-y-0 right-3 flex items-center"
        >
          {show ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
        </button>
      </div>
    </GlassInputWrapper>
  );
};
