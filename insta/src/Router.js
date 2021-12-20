import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./components/pages";
import { Signup } from "./components/pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
