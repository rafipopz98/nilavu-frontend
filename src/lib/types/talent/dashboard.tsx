import { Bell } from "lucide-react";
export type TodoType = "invoice" | "job_credit_renewal" | "general";

export interface ToDo {
  title: string;
  description: string;
  completed: boolean;
  type: TodoType;
  date: string;
  dueDate?: string;
  link: string;
  tooltipText?: string;
}

export interface DashboardToDoProps {
  todoList?: ToDo[];
  loading?: boolean;
}

export const typeIcons: Record<TodoType, React.ReactNode> = {
  invoice: <Bell className="w-5 h-5 text-red-500" />,
  job_credit_renewal: <Bell className="w-5 h-5 text-green-500" />,
  general: <Bell className="w-5 h-5 text-primary" />,
};

export const dummyToDos: ToDo[] = [
  {
    title: "Submit Resume",
    description: "Upload your latest resume to improve visibility.",
    completed: false,
    type: "general",
    date: new Date().toISOString(),
    link: "/jobseeker/dashboard/todos/1",
    tooltipText: "Keep your resume up to date for better matches.",
  },
  {
    title: "Invoice Pending",
    description: "You have a pending invoice due soon.",
    completed: false,
    type: "invoice",
    date: new Date().toISOString(),
    dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString(),
    link: "/jobseeker/dashboard/todos/2",
  },
  {
    title: "Renew Job Credit",
    description: "Your job credit is about to renew.",
    completed: true,
    type: "job_credit_renewal",
    date: new Date().toISOString(),
    dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    link: "/jobseeker/dashboard/todos/3",
  },
];
