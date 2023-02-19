import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initializeBooks } from "./reducers/bookReducer";
import Books from "./components/Books";
import BookForm from "./components/BookForm";

const App = () => {
  const [clickedBook, setClicked] = useState(0);

  const dispatch = useDispatch();
  const allBooks = useSelector(state => state.books)
  
  const booksInOrder = [...allBooks].sort((a, b) => a.id - b.id)
  useEffect(() => {
    dispatch(initializeBooks())
  }, [dispatch])

  return (
    <>
      <h1>Book store</h1>
      <ul>
      {booksInOrder.map(book => 
        <li key={book.id}>
          <Books books={book} bookID={setClicked} clickedBook={clickedBook}/>
          {clickedBook === book.id && <BookForm book={book} />}
        </li>
        )}
      </ul>
    </>
  );
}

export default App;
