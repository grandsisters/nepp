import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/pages/Main";
import Movie from "./components/pages/Movie";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movie" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
