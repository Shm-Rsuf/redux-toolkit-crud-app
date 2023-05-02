import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Navbar from "../layouts/Navbar";
import BooksView from "../features/books/BooksView";
import AddBooks from "../features/books/AddBooks";
const Index = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show-books" element={<BooksView />} />
          <Route path="/add-book" element={<AddBooks />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default Index;
