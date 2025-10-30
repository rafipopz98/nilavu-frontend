import { useState } from "react";
import { ChevronLeft, ChevronRight, Send } from "lucide-react";
import { Stepper, type Step } from "../../components/basic/Stepper";
import type { JobFormData } from "../../lib/types/employer/post-job";
import { BasicInfoSection } from "../../components/employer/post-job/BasicInfo";
import { CompensationSection } from "../../components/employer/post-job/Compensation";
import { ScheduleSection } from "../../components/employer/post-job/Schedule";
import { SkillsSection } from "../../components/employer/post-job/SkillsSection";
import { QuestionsSection } from "../../components/employer/post-job/Questionnaire";

const STEPS: Step[] = [
  { id: 1, title: "Basic Info", description: "Job title & description" },
  { id: 2, title: "Compensation", description: "Salary & experience" },
  { id: 3, title: "Schedule", description: "Working hours" },
  { id: 4, title: "Skills", description: "Required skills" },
  { id: 5, title: "Questions", description: "Screening questions" },
];

const PostJob = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<JobFormData>({
    title: "",
    description: "",
    employmentType: "full-time",
    workMode: "remote",
    salary: 0,
    experienceLevel: "intermediate",
    yearsOfExperience: 0,
    timings: "flexible",
    workingDays: [],
    startTime: "",
    endTime: "",
    minimumEducation: "",
    skills: [],
    timeZone: "",
    questions: [],
  });

  const updateField = (field: keyof JobFormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < STEPS.length) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <BasicInfoSection formData={formData} updateField={updateField} />
        );
      case 2:
        return (
          <CompensationSection formData={formData} updateField={updateField} />
        );
      case 3:
        return (
          <ScheduleSection formData={formData} updateField={updateField} />
        );
      case 4:
        return <SkillsSection formData={formData} updateField={updateField} />;
      case 5:
        return (
          <QuestionsSection formData={formData} updateField={updateField} />
        );
      default:
        return null;
    }
  };

  const isLastStep = currentStep === STEPS.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="border-b border-border/50 sticky top-0 z-10 backdrop-blur-sm bg-card/95">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
          <div className="flex items-center gap-3 mb-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                Post a New Job
              </h1>
              <p className="text-sm text-muted-foreground">
                Step {currentStep} of {STEPS.length}
              </p>
            </div>
          </div>

          {/* Stepper */}
          <Stepper steps={STEPS} currentStep={currentStep} />
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        <form onSubmit={handleSubmit}>
          {/* Step Content with Animation */}
          <div className="mb-8 animate-fade-in">{renderStepContent()}</div>

          {/* Navigation Footer */}
          <div className="sticky bottom-0 bg-gradient-to-t from-background via-background to-transparent pt-6 pb-4">
            <div className="bg-card rounded-2xl p-6 shadow-lg border border-border/50">
              <div className="flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={handlePrevious}
                  disabled={currentStep === 1}
                  className={`
                    flex items-center gap-2 px-5 py-3 rounded-xl font-semibold
                    smooth-transition
                    ${
                      currentStep === 1
                        ? "opacity-40 cursor-not-allowed bg-muted text-muted-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-soft hover:shadow-medium active:scale-95"
                    }
                  `}
                >
                  <ChevronLeft size={20} />
                  <span className="hidden sm:inline">Previous</span>
                </button>

                {/* Next/Submit Button */}
                <div className="flex items-center gap-3">
                  {isLastStep ? (
                    <button
                      type="submit"
                      className="
                        flex items-center gap-2 px-8 py-3 rounded-xl font-semibold
                        bg-gradient-to-r from-success to-success/90
                        text-success-foreground shadow-medium
                        hover:shadow-lg hover:from-success/90 hover:to-success/80
                        smooth-transition active:scale-95
                      "
                    >
                      <Send size={20} />
                      <span>Post Job</span>
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="
                        flex items-center gap-2 px-8 py-3 rounded-xl font-semibold
                        bg-gradient-to-r from-primary to-primary/90
                        text-primary-foreground shadow-medium
                        hover:shadow-lg hover:from-primary/90 hover:to-primary/80
                        smooth-transition active:scale-95
                      "
                    >
                      <span>Next Step</span>
                      <ChevronRight size={20} />
                    </button>
                  )}
                </div>
              </div>

              {/* Progress Indicator */}
              <div className="mt-4 flex items-center gap-2">
                <div className="flex-1 h-1.5 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent smooth-transition rounded-full"
                    style={{ width: `${(currentStep / STEPS.length) * 100}%` }}
                  />
                </div>
                <span className="text-xs font-medium text-muted-foreground min-w-[45px] text-right">
                  {Math.round((currentStep / STEPS.length) * 100)}%
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostJob;
