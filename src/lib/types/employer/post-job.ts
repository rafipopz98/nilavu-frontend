export interface Question {
  id: string;
  questionText: string;
  answerType: "number" | "boolean";
  preferredAnswer: number | boolean;
}

export interface JobFormData {
  title: string;
  description: string;
  employmentType: "full-time" | "part-time";
  workMode: string;
  salary: number;
  experienceLevel: "fresher" | "beginner" | "intermediate" | "expert";
  yearsOfExperience: number;
  timings: "flexible" | "structured";
  workingDays: string[];
  startTime: string;
  endTime: string;
  timeZone: string;
  minimumEducation: string;
  skills: string[];
  questions: Question[];
}
