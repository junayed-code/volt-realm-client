import { Navigate, Outlet } from "react-router-dom";
import { Loading } from "../components";
import { useAuth } from "../hooks";

export default function ProtectRoutes() {
  const { currentUser, loading } = useAuth();

  if (loading) return <Loading />;

  return currentUser ? <Outlet /> : <Navigate to="/login" replace={true} />;
}
