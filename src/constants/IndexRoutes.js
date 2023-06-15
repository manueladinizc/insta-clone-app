// export const DASHBOARD = '/';
// export const LOGIN = '/login';
// export const SIGN_UP = '/signup';
// export const PROFILE = '/p/:username';
// export const NOT_FOUND = '/not-found';

// import Login from "../pages/login";
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const LazyLogin = lazy(() => import("../pages/login"));

export default function IndexRoutes() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/login" element={<LazyLogin />} />
        </Routes>
      </Suspense>
    </Router>
  );
}