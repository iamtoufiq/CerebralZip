import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./pages/PrivateRoute";

import PageLoader from "./components/PageLoader";
import LoadingSpinner from "./components/LoadingSpinner";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Login = lazy(() => import("./pages/Login"));


function App() {
  return (
    <>
    <PageLoader />
    <Suspense fallback={<LoadingSpinner />}>
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<Dashboard />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
    </Suspense>
    </>
  );
}

export default App;
