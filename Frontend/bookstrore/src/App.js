import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initializeBooks } from "./reducers/bookReducer";
import Books from "./components/Books";
import BookForm from "./components/BookForm";
import { Container } from "@mui/material";
import Notification from "./components/Notification";

const App = () => {
  const [clickedBook, setClicked] = useState(0);

  const dispatch = useDispatch();
  const allBooks = useSelector((state) => state.books);
  
  useEffect(() => {
    dispatch(initializeBooks());
  }, [dispatch]);

  if (allBooks.length === 0) {
    return (
      <Container>
        <h1 style={{ textAlign: "center" }}>Book store</h1>
        <Notification />
        <BookForm book={null}/>
      </Container>
    );
  } else {
    const booksInOrder = [...allBooks].sort((a, b) => a.id - b.id);

    return (
      <Container>
        <h1 style={{ textAlign: "center" }}>Book store</h1>
        <Notification />
        {booksInOrder.map((book) => (
          <div
            key={book.id}
            style={{
              display: "flex",
              flexWrap: "wrap",
              height: "100%",
              padding: "10px",
            }}
          >
            <div
              style={{
                width: "44%",
                height: "100%",
                border: "3px solid blue",
                borderRadius: "20px",
                margin: "3px",
                padding: "10px",
              }}
            >
              <Books
                books={book}
                bookID={setClicked}
                clickedBook={clickedBook}
              />
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
  }
};

export default App;
