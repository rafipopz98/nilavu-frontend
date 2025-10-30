import { Check } from "lucide-react";

export interface Step {
  id: number;
  title: string;
  description?: string;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
}

export const Stepper = ({ steps, currentStep }: StepperProps) => {
  const progress = (currentStep / steps.length) * 100;

  return (
    <div className="w-full">
      {/* 🖥️ Desktop / Tablet Layout */}
      <div className="hidden md:flex items-start gap-2">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isCompleted = currentStep > stepNumber;
          const isCurrent = currentStep === stepNumber;

          return (
            <div key={step.id} className="flex-1 flex flex-col gap-3">
              {/* Progress Bar */}
              <div
                className={`
                  h-1 w-full rounded-full smooth-transition
                  ${
                    isCompleted
                      ? "bg-success"
                      : isCurrent
                      ? "bg-primary"
                      : "bg-border"
                  }
                `}
              />

              {/* Title & Description */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  {isCompleted && (
                    <div className="w-4 h-4 rounded-full bg-success flex items-center justify-center">
                      <Check
                        size={12}
                        className="text-success-foreground"
                        strokeWidth={3}
                      />
                    </div>
                  )}
                  <p
                    className={`
                      text-sm font-semibold smooth-transition
                      ${
                        isCurrent
                          ? "text-primary"
                          : isCompleted
                          ? "text-foreground"
                          : "text-muted-foreground"
                      }
                    `}
                  >
                    {step.title}
                  </p>
                </div>
                {step.description && (
                  <p className="text-xs text-muted-foreground hidden lg:block">
                    {step.description}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* 📱 Mobile Layout */}
      <div className="flex flex-col gap-2 md:hidden">
        {/* Current Step Info */}
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-primary">
            Step {currentStep} of {steps.length}
          </p>
          <p className="text-sm font-medium text-muted-foreground truncate max-w-[180px] text-right">
            {steps[currentStep - 1]?.title}
          </p>
        </div>

        {/* Compact Progress Bar */}
        <div className="w-full h-1.5 bg-border rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-accent smooth-transition rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};
