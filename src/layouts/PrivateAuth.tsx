import { Navigate, Outlet } from "react-router-dom";
import { ROUTER } from "../lib/routes";

export default function PrivateRoute() {
  const loggedIn = true;

  if (!loggedIn) return <Navigate to={ROUTER.AUTH.SIGN_IN} replace />;

  return <Outlet />;
}
