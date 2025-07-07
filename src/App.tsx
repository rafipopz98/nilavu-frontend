import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./layouts/PrivateAuth";
import Login from "./pages/Auth/Login";
import TalentDashboard from "./pages/talent/dashboard";
import { ROUTER } from "./lib/routes";
import ProtectedLayout from "./layouts/ProtectedLayout";
import { TALENT_ROUTES } from "./lib/routes/TalentRoutes";
import SignUP from "./pages/Auth/SignUP";
import FindJobs from "./pages/talent/FindJobs";
import AppliedJobs from "./pages/talent/AppliedJobs";
import JobOffers from "./pages/talent/JobOffer";

const App = () => {
  return (
    <div className="px-4">
      <Routes>
        {/* Public routes */}
        <Route path={ROUTER.AUTH.SIGN_IN} element={<Login />} />
        <Route path={ROUTER.AUTH.SIGN_UP} element={<SignUP />} />
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
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
