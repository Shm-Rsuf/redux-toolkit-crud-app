import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateBook } from "./BookSlice";
const EditBook = () => {
  const location = useLocation();
  // console.log(location);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [id] = useState(location.state.id);
  const [author, setAuthor] = useState(location.state.author);
  const [title, setTitle] = useState(location.state.title);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(updateBook({ id, title, author }));
    navigate("/show-books");
  };

  return (
    <div>
      <h2>EditBook</h2>
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
        <button type="submit">Update Book</button>
      </form>
    </div>
  );
};

export default EditBook;
