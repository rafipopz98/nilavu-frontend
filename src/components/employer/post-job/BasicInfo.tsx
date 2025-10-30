import type { JobFormData } from "../../../lib/types/employer/post-job";
import { Briefcase, FileText } from "lucide-react";

interface BasicInfoSectionProps {
  formData: JobFormData;
  updateField: (field: keyof JobFormData, value: any) => void;
}

export const BasicInfoSection = ({
  formData,
  updateField,
}: BasicInfoSectionProps) => {
  return (
    <section className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
      {/* Header */}
      <header className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
          <Briefcase className="text-primary" size={20} />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-foreground leading-tight">
            Basic Information
          </h2>
          <p className="text-sm text-muted-foreground">
            Provide the essential details for this role
          </p>
        </div>
      </header>

      {/* Form Fields */}
      <div className="space-y-6">
        {/* Job Title */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Job Title <span className="text-accent">*</span>
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => updateField("title", e.target.value)}
            placeholder="e.g. Senior Frontend Developer"
            className="w-full px-3.5 py-3 bg-background border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
          />
        </div>

        {/* Description */}
        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
            <FileText size={16} className="text-muted-foreground" />
            Job Description <span className="text-accent">*</span>
          </label>
          <textarea
            value={formData.description}
            onChange={(e) => updateField("description", e.target.value)}
            placeholder="Describe the role, responsibilities, and what makes this opportunity unique..."
            rows={6}
            className="w-full px-3.5 py-3 bg-background border border-border rounded-md text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
          />
        </div>

        {/* Employment Type */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Employment Type <span className="text-accent">*</span>
            </label>
            <select
              value={formData.employmentType}
              onChange={(e) => updateField("employmentType", e.target.value)}
              className="w-full px-3.5 py-3 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
            >
              <option value="">Select type</option>
              <option value="full-time">Full-time</option>
              <option value="part-time">Part-time</option>
              <option value="contract">Contract</option>
              <option value="internship">Internship</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};
