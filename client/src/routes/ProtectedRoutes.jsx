import React from "react";

import { useLocation, Navigate, Outlet } from "react-router-dom";
// import useGetTablePermissions from "../helpers/useGetTablePermissions";

const ProtectedRoutes = () => {
  const location = useLocation();

  const isLogged = localStorage.getItem("accessToken");

  return isLogged ? (
    <>
      <Outlet />
    </>
  ) : (
    <>
      <Navigate to={"/login"} state={{ location }} replace />
    </>
  );
};

export default React.memo(ProtectedRoutes);
