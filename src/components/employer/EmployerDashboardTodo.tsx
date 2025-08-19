import React from "react";
import {
  dummyToDos,
  typeIcons,
  type DashboardToDoProps,
} from "../../lib/types/talent/dashboard";
import { Link } from "react-router-dom";
import { ChevronRight, ClipboardList, Info } from "lucide-react";
import { Tooltip, TooltipContent } from "../ui/tooltip";
import moment from "moment";
import QuickLinks from "./QuickLinks";

const EmployerDashboardTodo: React.FC<DashboardToDoProps> = ({
  todoList = dummyToDos,
  loading = false,
}) => {
  return (
    <div className="mt-6 font-geist">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch">
        {/* To-Do List */}
        <section className="w-full lg:w-2/3 flex flex-col space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-foreground">
              Your To-Dos
              <span className="ml-2 text-xs font-normal text-muted-foreground">
                (
                {
                  todoList?.filter(
                    (todo) =>
                      todo &&
                      (typeof todo !== "object" || Object.keys(todo).length > 0)
                  ).length
                }
                )
              </span>
            </h3>
            <Link
              to="/talent/dashboard/todos"
              className="flex items-center gap-1 text-primary hover:underline"
            >
              View All
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="flex-1 rounded-2xl border border-border backdrop-blur-sm bg-background/70 overflow-auto max-h-72">
            {loading ? (
              <div className="flex items-center justify-center py-10 text-muted-foreground">
                Loading...
              </div>
            ) : todoList?.length > 0 ? (
              <ul className="divide-y divide-border">
                {todoList.map((todo, index) => (
                  <li key={index}>
                    <Link
                      to={todo.link}
                      className="block hover:bg-secondary transition"
                    >
                      <div className="flex items-center justify-between gap-4 p-4">
                        <div className="flex items-center gap-4">
                          <div
                            className={`rounded-lg p-2 ${
                              todo.completed ? "bg-green-50" : "bg-red-50"
                            }`}
                          >
                            {typeIcons[todo.type]}
                          </div>
                          <div>
                            <div className="flex items-center gap-1.5">
                              <h4 className="text-sm font-medium text-foreground">
                                {todo.title}
                              </h4>
                              {todo.tooltipText && (
                                <Tooltip>
                                  <TooltipContent side="top" className="ml-2">
                                    {todo.tooltipText}
                                    <Info className="w-3.5 h-3.5 text-muted-foreground" />
                                  </TooltipContent>
                                </Tooltip>
                              )}
                            </div>
                            <p className="text-xs text-muted-foreground">
                              {todo.description}
                            </p>
                          </div>
                        </div>
                        <div
                          className={`text-xs text-right ${
                            todo.type === "invoice"
                              ? "text-red-500"
                              : "text-muted-foreground"
                          }`}
                        >
                          {todo.type === "invoice"
                            ? `Due ${moment(todo.dueDate).format(
                                "MMM D, YYYY"
                              )}`
                            : todo.type === "job_credit_renewal"
                            ? `Renews ${moment(todo.dueDate).format(
                                "MMM D, YYYY"
                              )}`
                            : moment(todo.date).format("MMM D, YYYY")}
                        </div>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="flex flex-col items-center justify-center py-8 text-muted-foreground">
                <div className="rounded-xl bg-blue-50 p-3 mb-3">
                  <ClipboardList className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm font-medium">No To-Do's for today</p>
              </div>
            )}
          </div>
        </section>

        {/* Quick Links */}
        <section className="w-full lg:w-1/3 flex flex-col rounded-2xl border border-border backdrop-blur-sm bg-background/70">
          <div className="border-border p-3">
            <h3 className="text-lg font-semibold text-foreground">
              Quick Links
            </h3>
          </div>
          <div className="p-3 flex-1">
            <QuickLinks />
          </div>
        </section>
      </div>
    </div>
  );
};

export default EmployerDashboardTodo;
