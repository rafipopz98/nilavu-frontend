import { Navigate, Route, Routes } from "react-router-dom";
import PrivateRoute from "./layouts/PrivateAuth";
import TalentDashboard from "./pages/talent/dashboard";
import { ROUTER } from "./lib/routes";
import ProtectedLayout from "./layouts/ProtectedLayout";
import { TALENT_ROUTES } from "./lib/routes/TalentRoutes";
import FindJobs from "./pages/talent/FindJobs";
import AppliedJobs from "./pages/talent/AppliedJobs";
import JobOffers from "./pages/talent/JobOffer";
import BookmarkedJobs from "./pages/talent/BookmarkedJobs";
import TalentProfile from "./pages/talent/Profile";
import TimeTracker from "./pages/talent/TimeTracker";
import Invoice from "./pages/talent/Invoice";
import { EMPLOYER_ROUTES } from "./lib/routes/EmployerRoutes";
import EmployerDashboard from "./pages/employer/Dashboard";
import Bonus from "./pages/talent/Bonus";
import LeaveRequest from "./pages/talent/LeaveRequest";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/SignIn";
import AddSeatsPage from "./pages/employer/AddSeats";
import PostJob from "./pages/employer/PostJob";

const App = () => {
  return (
    <div className="px-4">
      <Routes>
        {/* Public routes */}
        <Route
          path="*"
          element={<Navigate to={ROUTER.AUTH.SIGN_IN} replace />}
        />
        <Route path={ROUTER.AUTH.SIGN_IN} element={<Login />} />
        <Route path={ROUTER.AUTH.SIGN_UP} element={<Register />} />
        {/* Protected routes */}
        <Route element={<PrivateRoute />}>
          <Route element={<ProtectedLayout />}>
            <Route
              path={TALENT_ROUTES.DASHBOARD}
              element={<TalentDashboard />}
            />
            <Route path={TALENT_ROUTES.FIND_JOBS} element={<FindJobs />} />
            <Route
              path={TALENT_ROUTES.APPLIED_JOBS}
              element={<AppliedJobs />}
            />
            <Route path={TALENT_ROUTES.JOB_OFFERS} element={<JobOffers />} />
            <Route
              path={TALENT_ROUTES.BOOKMARKED_JOBS}
              element={<BookmarkedJobs />}
            />
            <Route path={TALENT_ROUTES.PROFILE} element={<TalentProfile />} />
            <Route
              path={TALENT_ROUTES.TIME_TRACKER}
              element={<TimeTracker />}
            />
            <Route path={TALENT_ROUTES.INVOICE} element={<Invoice />} />
            <Route path={TALENT_ROUTES.BONUS} element={<Bonus />} />
            <Route
              path={TALENT_ROUTES.LEAVE_REQUEST}
              element={<LeaveRequest />}
            />

            <Route
              path={EMPLOYER_ROUTES.DASHBOARD}
              element={<EmployerDashboard />}
            />
            <Route
              path={EMPLOYER_ROUTES.ADD_SEATS}
              element={<AddSeatsPage />}
            />
            <Route path={EMPLOYER_ROUTES.POST_JOBS} element={<PostJob />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
