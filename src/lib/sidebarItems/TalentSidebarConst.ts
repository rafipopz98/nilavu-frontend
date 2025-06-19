import {
  Home,
  LucideWorkflow,
  SheetIcon,
  LucideBox,
  BookmarkCheck,
  UserCircle,
  CalendarCheck,
  FileText,
  Wallet,
  Banknote,
} from "lucide-react";
import { TALENT_ROUTES } from "../routes/TalentRoutes";

export const TalentSidebar = [
  {
    label: "Dashboard",
    items: [
      {
        title: "Dashboard",
        url: TALENT_ROUTES.DASHBOARD,
        icon: Home,
      },
    ],
  },
  {
    label: "Jobs",
    items: [
      {
        title: "Find Jobs",
        url: TALENT_ROUTES.FIND_JOBS,
        icon: LucideWorkflow,
      },
      {
        title: "Applied Jobs",
        url: TALENT_ROUTES.APPLIED_JOBS,
        icon: SheetIcon,
      },
      {
        title: "Job Offers",
        url: TALENT_ROUTES.JOB_OFFERS,
        icon: LucideBox,
      },
      {
        title: "Bookmarked Jobs",
        url: TALENT_ROUTES.BOOKMARKED_JOBS,
        icon: BookmarkCheck,
      },
    ],
  },
  {
    label: "Work",
    items: [
      {
        title: "Profile",
        url: TALENT_ROUTES.PROFILE,
        icon: UserCircle,
      },
      {
        title: "Attendance Tracker",
        url: TALENT_ROUTES.ATTENDANCE_TRACKER,
        icon: CalendarCheck,
      },
      {
        title: "Invoice",
        url: TALENT_ROUTES.INVOICE,
        icon: FileText,
      },
      {
        title: "Expense",
        url: TALENT_ROUTES.EXPENSE,
        icon: Wallet,
      },
      {
        title: "Withdrawal Method",
        url: TALENT_ROUTES.WITHDRAWAL_METHOD,
        icon: Banknote,
      },
    ],
  },
];
