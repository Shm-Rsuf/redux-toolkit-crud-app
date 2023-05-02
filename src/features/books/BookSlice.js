import { createSlice } from "@reduxjs/toolkit";
const initialBooks = {
  books: [
    { id: 1, title: "Love Bangladesh", author: "Usuf" },
    { id: 2, title: "Hate India", author: "shm" },
  ],
};

export const bookSlice = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    showBooks: (state) => state,
  },
});

export const { showBooks } = bookSlice.actions;
export default bookSlice.reducer;
