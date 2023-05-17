import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import {
  ProtectedRoutes,
  PublicRoutes,
  authRoutes,
  userRoutes,
} from "./routes";

console.log(authRoutes)

const App = () => {
  return (
    <>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            {userRoutes &&
              userRoutes?.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  element={route.component}
                />
              ))}
          </Route>

          <Route element={<PublicRoutes />}>
            {authRoutes &&
              authRoutes?.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  element={route.component}
                />
              ))}
          </Route>
        </Routes>
      </React.Suspense>
      <ToastContainer />
    </>
  );
};

export default App;
