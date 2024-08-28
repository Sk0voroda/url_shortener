import { Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthProvider";

export const Layout = () => {
  const { user } = useAuth();

  console.log(user);

  return (
    <>
      <div>header</div>
      <Outlet />
    </>
  );
};
