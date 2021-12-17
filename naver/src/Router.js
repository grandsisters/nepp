import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main, Movie, Book, BookDetail } from "./components/pages";
import { TopNav } from "./components/organisms";

const Router = () => {
  return (
    <BrowserRouter>
      <TopNav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Movie" element={<Movie />} />
        <Route path="/Book" element={<Book />} />
        <Route path="/Book/:isbn" element={<BookDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
