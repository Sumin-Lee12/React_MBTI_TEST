import { BrowserRouter, Navigate, Outlet, Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import TestPage from "../pages/TestPage";
import TestResultPage from "../pages/TestResultPage";
import MainLayout from "../components/layout/MainLayout";
import useAuthStore from "../zustand/useAuthStore";

const PublicRoute = () => {
  const isLogin = useAuthStore((state) => state.isLogin);
  return <>{!isLogin ? <Outlet /> : <Navigate to="/" />}</>;
};

const ProtectedRoute = () => {
  const isLogin = useAuthStore((state) => state.isLogin);
  return <>{isLogin ? <Outlet /> : <Navigate to="/login" />}</>;
};


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute/>}>
          <Route element={<MainLayout/>}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
        </Route>
        <Route element={<ProtectedRoute/>}>
          <Route element={<MainLayout/>}>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/testpage" element={<TestPage />} />
            <Route path="/testresultpage" element={<TestResultPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
