import { Check } from "lucide-react";
import type { RoleCardProps } from "../../../lib/types/auth/sign-up";

const RoleCard: React.FC<RoleCardProps> = ({
  icon: Icon,
  title,
  description,
  isSelected,
  onClick,
  error = false,
}) => (
  <button
    type="button"
    onClick={onClick}
    className={`relative flex flex-col items-start rounded-2xl p-6 border text-center transition-colors ${
      isSelected
        ? "border-primary bg-primary/10"
        : error
        ? "border-red-500"
        : "border-border hover:bg-secondary"
    }`}
  >
    <Icon className="w-6 h-6 mb-6" />
    <span className="font-medium">{title}</span>
    {description && (
      <span className="text-sm text-muted-foreground mt-1 text-left">
        {description}
      </span>
    )}
    {isSelected && (
      <div className="absolute top-3 right-3">
        <Check className="w-5 h-5 text-primary" />
      </div>
    )}
  </button>
);

export default RoleCard;
