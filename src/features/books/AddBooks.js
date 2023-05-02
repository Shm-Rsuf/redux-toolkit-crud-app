import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addBook } from "./BookSlice";
import { useNavigate } from "react-router-dom";

const AddBooks = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const numOfBooks = useSelector((state) => state.bookReducer.books.length);

  const handleSubmit = (e) => {
    e.preventDefault();

    const book = { id: numOfBooks + 1, title, author };
    dispatch(addBook(book));
    navigate("/show-books");
  };

  return (
    <div>
      <h2>Add Books</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="title">Title : </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-field">
          <label htmlFor="author">Author : </label>
          <input
            type="text"
            id="author"
            name="author"
            value={author}
            required
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBooks;
