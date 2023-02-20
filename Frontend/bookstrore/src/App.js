import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initializeBooks } from "./reducers/bookReducer";
import Books from "./components/Books";
import BookForm from "./components/BookForm";
import { Container } from "@mui/material";

const App = () => {
  const [clickedBook, setClicked] = useState(0);

  const dispatch = useDispatch();
  const allBooks = useSelector((state) => state.books);

  const booksInOrder = [...allBooks].sort((a, b) => a.id - b.id);
  
  useEffect(() => {
    dispatch(initializeBooks());
  }, [dispatch]);

  return (
    <Container>
      <h1 style={{ textAlign: "center" }}>Book store</h1>

      {booksInOrder.map((book) => (
        <div
          key={book.id}
          style={{
            display: "flex",
            flexWrap: "wrap",
            height: "60px",
            padding: "10px",
          }}
        >
          <div
            style={{
              width: "45%",
              height: "100%",
              border: "3px solid blue",
              borderRadius: "20px",
              margin: "3px",
            }}
          >
            <Books books={book} bookID={setClicked} clickedBook={clickedBook} />
          </div>

          {clickedBook === book.id && (
            <div
              style={{
                width: "50%",
                border: "3px solid black",
                borderRadius: "20px",
                padding: "10px",
                margin: "3px",
              }}
            >
              <BookForm book={book} />
            </div>
          )}
        </div>
      ))}
    </Container>
  );
};

export default App;
