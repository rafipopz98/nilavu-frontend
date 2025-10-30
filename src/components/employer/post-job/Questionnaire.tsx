import { Trash2, Plus, HelpCircle } from "lucide-react";
import type {
  JobFormData,
  Question,
} from "../../../lib/types/employer/post-job";

interface QuestionsSectionProps {
  formData: JobFormData;
  updateField: (field: keyof JobFormData, value: any) => void;
}

export const QuestionsSection = ({
  formData,
  updateField,
}: QuestionsSectionProps) => {
  const addQuestion = () => {
    const newQuestion: Question = {
      id: Date.now().toString(),
      questionText: "",
      answerType: "boolean",
      preferredAnswer: true,
    };
    updateField("questions", [...(formData.questions || []), newQuestion]);
  };

  const updateQuestion = (index: number, field: keyof Question, value: any) => {
    const newQuestions = [...(formData.questions || [])];
    newQuestions[index] = { ...newQuestions[index], [field]: value };
    updateField("questions", newQuestions);
  };

  const removeQuestion = (index: number) => {
    const newQuestions = formData.questions.filter((_, i) => i !== index);
    updateField("questions", newQuestions);
  };

  return (
    <div className="bg-card border border-border/60 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <HelpCircle className="text-primary" size={20} />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-foreground">
              Screening Questions
            </h2>
            <p className="text-sm text-muted-foreground">
              Add short questions to filter applicants effectively
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={addQuestion}
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md font-medium transition hover:bg-primary/90 active:scale-[0.98]"
        >
          <Plus size={16} />
          <span>Add Question</span>
        </button>
      </div>

      {/* Body */}
      <div className="space-y-4">
        {formData.questions.length === 0 ? (
          <div className="text-center py-10 text-muted-foreground border border-dashed border-border/70 rounded-lg bg-muted/10">
            <HelpCircle size={32} className="mx-auto mb-2 opacity-40" />
            <p className="font-medium">No screening questions yet</p>
            <p className="text-sm mt-1">
              Click{" "}
              <span className="font-semibold text-primary">Add Question</span>{" "}
              to create one
            </p>
          </div>
        ) : (
          formData.questions.map((question, index) => (
            <div
              key={question.id}
              className="p-4 bg-background border border-border/70 rounded-lg transition-colors hover:border-primary/40"
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <input
                  type="text"
                  value={question.questionText}
                  onChange={(e) =>
                    updateQuestion(index, "questionText", e.target.value)
                  }
                  placeholder="Enter your screening question"
                  className="flex-1 px-3 py-2 text-sm bg-background border border-border rounded-md focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                />
                <button
                  type="button"
                  onClick={() => removeQuestion(index)}
                  className="p-2 text-destructive hover:bg-destructive/10 rounded-md transition"
                  title="Remove question"
                >
                  <Trash2 size={16} />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <select
                  value={question.answerType}
                  onChange={(e) => {
                    const type = e.target.value as "number" | "boolean";
                    const newPreferred = type === "boolean" ? true : 0;
                    const newQuestions = [...(formData.questions || [])];
                    newQuestions[index] = {
                      ...newQuestions[index],
                      answerType: type,
                      preferredAnswer: newPreferred,
                    };
                    updateField("questions", newQuestions);
                  }}
                  className="px-3 py-2 text-sm bg-background border border-border rounded-md focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                >
                  <option value="boolean">Yes / No</option>
                  <option value="number">Number</option>
                </select>

                {question.answerType === "boolean" ? (
                  <select
                    value={String(question.preferredAnswer)}
                    onChange={(e) =>
                      updateQuestion(
                        index,
                        "preferredAnswer",
                        e.target.value === "true"
                      )
                    }
                    className="px-3 py-2 text-sm bg-background border border-border rounded-md focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                  >
                    <option value="true">Preferred: Yes</option>
                    <option value="false">Preferred: No</option>
                  </select>
                ) : (
                  <input
                    type="number"
                    value={
                      typeof question.preferredAnswer === "number"
                        ? question.preferredAnswer
                        : ""
                    }
                    onChange={(e) =>
                      updateQuestion(
                        index,
                        "preferredAnswer",
                        e.target.value === "" ? false : Number(e.target.value)
                      )
                    }
                    placeholder="Preferred number"
                    className="px-3 py-2 text-sm bg-background border border-border rounded-md focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                  />
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
