import type { ProgressStepperProps } from "../../../lib/types/auth/sign-up";

const ProgressStepper: React.FC<ProgressStepperProps> = ({
  currentStep,
  totalSteps,
}) => (
  <div className="flex justify-center mt-4 space-x-2">
    {Array.from({ length: totalSteps }, (_, i) => (
      <div
        key={i}
        className={`h-1 w-1/${totalSteps} rounded-full ${
          i < currentStep ? "bg-green-400" : "bg-muted"
        }`}
      />
    ))}
  </div>
);

export default ProgressStepper;
