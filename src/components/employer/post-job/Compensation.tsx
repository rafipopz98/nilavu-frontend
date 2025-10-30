import type { JobFormData } from "../../../lib/types/employer/post-job";
import { DollarSign, TrendingUp, GraduationCap } from "lucide-react";

interface CompensationSectionProps {
  formData: JobFormData;
  updateField: (field: keyof JobFormData, value: any) => void;
}

export const CompensationSection = ({
  formData,
  updateField,
}: CompensationSectionProps) => {
  return (
    <section className="bg-card border border-border/60 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-border/50 px-6 py-5 bg-muted/30 rounded-t-xl">
        <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-accent/15">
          <DollarSign className="text-accent" size={22} />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-foreground">
            Compensation & Experience
          </h2>
          <p className="text-sm text-muted-foreground leading-tight">
            Define salary and experience criteria clearly
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="px-6 py-6 space-y-6">
        {/* Salary */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
            <DollarSign size={15} className="text-muted-foreground" />
            Annual Salary (USD)
            <span className="text-accent font-semibold">*</span>
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
              $
            </span>
            <input
              type="number"
              value={formData.salary || ""}
              onChange={(e) =>
                updateField("salary", parseFloat(e.target.value))
              }
              placeholder="e.g. 120000"
              className="w-full pl-8 pr-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>
        </div>

        {/* Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
              <TrendingUp size={15} className="text-muted-foreground" />
              Experience Level
              <span className="text-accent font-semibold">*</span>
            </label>
            <select
              value={formData.experienceLevel}
              onChange={(e) => updateField("experienceLevel", e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            >
              <option value="">Select level</option>
              <option value="fresher">Fresher</option>
              <option value="beginner">Beginner (1-2 years)</option>
              <option value="intermediate">Intermediate (3-5 years)</option>
              <option value="expert">Expert (5+ years)</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">
              Years of Experience
              <span className="text-accent font-semibold">*</span>
            </label>
            <input
              type="number"
              value={formData.yearsOfExperience || ""}
              onChange={(e) =>
                updateField("yearsOfExperience", parseFloat(e.target.value))
              }
              placeholder="e.g. 3"
              className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>
        </div>

        {/* Education */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
            <GraduationCap size={15} className="text-muted-foreground" />
            Minimum Education
            <span className="text-accent font-semibold">*</span>
          </label>
          <input
            type="text"
            value={formData.minimumEducation}
            onChange={(e) => updateField("minimumEducation", e.target.value)}
            placeholder="e.g. Bachelor's in Computer Science"
            className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>
      </div>
    </section>
  );
};
