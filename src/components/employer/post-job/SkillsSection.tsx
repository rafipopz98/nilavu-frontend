import { useState } from "react";
import { X, Plus, Code } from "lucide-react";
import type { JobFormData } from "../../../lib/types/employer/post-job";

interface SkillsSectionProps {
  formData: JobFormData;
  updateField: (field: keyof JobFormData, value: any) => void;
}

export const SkillsSection = ({
  formData,
  updateField,
}: SkillsSectionProps) => {
  const [skillInput, setSkillInput] = useState("");

  const addSkill = () => {
    const trimmed = skillInput.trim();
    if (trimmed) {
      updateField("skills", [...(formData.skills || []), trimmed]);
      setSkillInput("");
    }
  };

  const removeSkill = (index: number) => {
    updateField(
      "skills",
      formData.skills.filter((_, i) => i !== index)
    );
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addSkill();
    }
  };

  return (
    <section className="bg-white dark:bg-card border border-border rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
      {/* Header */}
      <header className="flex items-center gap-4 mb-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
          <Code className="text-primary" size={22} />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-foreground leading-tight">
            Required Skills
          </h2>
          <p className="text-sm text-muted-foreground">
            Add the key skills relevant to this position.
          </p>
        </div>
      </header>

      {/* Skill input */}
      <div className="flex items-center gap-3 mb-5">
        <input
          type="text"
          value={skillInput}
          onChange={(e) => setSkillInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="e.g. React, TypeScript, UI/UX..."
          className="flex-1 px-4 py-3 border border-input rounded-lg text-sm bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary/50 outline-none transition"
        />
        <button
          type="button"
          onClick={addSkill}
          className="inline-flex items-center gap-2 px-4 py-3 bg-primary text-primary-foreground rounded-lg font-medium text-sm transition hover:bg-primary/90 focus:ring-2 focus:ring-primary/30 focus:outline-none"
        >
          <Plus size={16} />
          <span>Add</span>
        </button>
      </div>

      {/* Skills list */}
      {formData.skills.length > 0 ? (
        <ul className="flex flex-wrap gap-2.5">
          {formData.skills.map((skill, index) => (
            <li
              key={index}
              className="flex items-center gap-2 px-3.5 py-2 bg-muted text-foreground rounded-lg border border-border text-sm font-medium group transition hover:bg-muted/70"
            >
              <span>{skill}</span>
              <button
                type="button"
                onClick={() => removeSkill(index)}
                className="opacity-60 group-hover:opacity-100 transition p-0.5 hover:text-destructive"
              >
                <X size={14} strokeWidth={2} />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="border border-dashed border-border rounded-lg py-10 text-center text-muted-foreground bg-muted/10">
          <Code size={36} className="mx-auto mb-3 opacity-40" />
          <p className="font-medium">No skills added yet</p>
          <p className="text-sm mt-1">Add skills using the field above</p>
        </div>
      )}
    </section>
  );
};
