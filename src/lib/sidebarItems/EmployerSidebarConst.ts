import {
  LayoutDashboard,
  Users,
  UserPlus,
  Briefcase,
  ClipboardList,
  Hourglass,
  Receipt,
  DollarSign,
  CalendarDays,
  Clock,
  Bell,
  User,
} from "lucide-react";
import { EMPLOYER_ROUTES } from "../routes/EmployerRoutes";

export const EmployerSidebar = [
  {
    label: "Dashboard",
    items: [
      {
        title: "Dashboard",
        url: EMPLOYER_ROUTES.DASHBOARD,
        icon: LayoutDashboard,
      },
    ],
  },
  {
    label: "Build Your Team",
    items: [
      {
        title: "Add Seats",
        url: EMPLOYER_ROUTES.ADD_SEATS,
        icon: UserPlus,
      },
      {
        title: "Post Jobs",
        url: EMPLOYER_ROUTES.POST_JOBS,
        icon: Briefcase,
      },
      {
        title: "All Jobs",
        url: EMPLOYER_ROUTES.ALL_JOBS,
        icon: ClipboardList,
      },
      {
        title: "Pending Hires",
        url: EMPLOYER_ROUTES.PENDING_HIRES,
        icon: Hourglass,
      },
    ],
  },
  {
    label: "Manage Staff",
    items: [
      {
        title: "My Team",
        url: EMPLOYER_ROUTES.MY_TEAM,
        icon: Users,
      },
      {
        title: "Invoices",
        url: EMPLOYER_ROUTES.INVOICES,
        icon: Receipt,
      },
      {
        title: "Expense",
        url: EMPLOYER_ROUTES.EXPENSE,
        icon: DollarSign,
      },
      {
        title: "Attendance Tracker",
        url: EMPLOYER_ROUTES.ATTENDANCE_TRACKER,
        icon: CalendarDays,
      },
      {
        title: "Time Off",
        url: EMPLOYER_ROUTES.TIME_OFF,
        icon: Clock,
      },
    ],
  },
  {
    label: "Account",
    items: [
      {
        title: "Profile",
        url: EMPLOYER_ROUTES.PROFILE,
        icon: User,
      },
      {
        title: "Manage Notifications",
        url: EMPLOYER_ROUTES.NOTIFICATIONS,
        icon: Bell,
      },
    ],
  },
];
