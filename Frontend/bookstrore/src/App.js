import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initializeBooks } from "./reducers/bookReducer";
import Books from "./components/Books";
import BookForm from "./components/BookForm";
import { Container } from "@mui/material";


const App = () => {
  const [clickedBook, setClicked] = useState(0);

  const dispatch = useDispatch();
  const allBooks = useSelector(state => state.books)

  const booksInOrder = [...allBooks].sort((a, b) => a.id - b.id)
  useEffect(() => {
    dispatch(initializeBooks())
  }, [dispatch])

  return (
    <Container>
      <h1 style={{ textAlign: "center" }}>Book store</h1>

      {booksInOrder.map(book =>
        <div key={book.id} style={{ display: "flex", flexWrap:"wrap", height:"60px", padding:"10px"}}>
          <div style={{ width: "40%", textAlign: "center",height:"60px", border:"3px solid blue", margin:"3px" }}>
            <Books books={book} bookID={setClicked} clickedBook={clickedBook} />
          </div>

          {clickedBook === book.id
            &&
            <div style={{ width: "50%", textAlign: "center", border:"3px solid black", padding:"10px", margin:"3px" }}>
              <BookForm book={book} />
            </div>
          }

        </div>
      )}

    </Container>
  );
}

export default App;
