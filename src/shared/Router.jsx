import { BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import TestPage from "../pages/TestPage";
import TestResultPage from "../pages/TestResultPage";

const Router = () => {

  
  return (
    <BrowserRouter>
      <Routes>
        <Route >
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/testpage" element={<TestPage />} />
          <Route path="/testresultpage" element={<TestResultPage />} />
        </Route>
        <Route path="/signup" element={<Login />} />
        <Route path="/login" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
