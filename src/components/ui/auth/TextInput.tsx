import { GlassInputWrapper } from "./glassInputWrapper";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const TextInput = ({ label, ...props }: TextInputProps) => (
  <div>
    <label className="text-sm font-medium text-muted-foreground">{label}</label>
    <GlassInputWrapper>
      <input
        {...props}
        className="w-full bg-transparent p-4 text-sm rounded-2xl"
      />
    </GlassInputWrapper>
  </div>
);
