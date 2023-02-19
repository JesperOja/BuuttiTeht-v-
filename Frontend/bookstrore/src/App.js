import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initializeBooks } from "./reducers/bookReducer";
import BookForm from "./components/BookForm";
import Books from "./components/Books";

const App = () => {
  const dispatch = useDispatch();
  const allBooks = useSelector(state => state.books)

  useEffect(() => {
    dispatch(initializeBooks())
  }, [])


  return (
    <>
      <h1>Book store</h1>
      <BookForm />
      <Books books={allBooks}/>
    </>
  );
}

export default App;
