import React from "react";

import { useLocation, Navigate, Outlet } from "react-router-dom";

const PublicRoutes = () => {
  const location = useLocation();

  const isLogged = localStorage.getItem("accessToken");

  return isLogged ? (
    <Navigate to={"/"} state={{ location }} replace />
  ) : (
    <Outlet />
  );
};

export default React.memo(PublicRoutes);
