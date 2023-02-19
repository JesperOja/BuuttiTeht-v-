import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initializeBooks } from "./reducers/bookReducer";
import Books from "./components/Books";
import BookForm from "./components/BookForm";
import { Container, Grid } from "@mui/material";


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
      <h1>Book store</h1>
      <Grid container spacing={0} direction="column"
      >
      {booksInOrder.map(book => 
      <div >
        <Grid item xs={2} maxWidth={200} key={book.id} style={{display:"flex"}}>
          <Books books={book} bookID={setClicked} clickedBook={clickedBook}/>
        </Grid>
        <Grid item xs={1} style={{display:"flex"}}>
          {clickedBook === book.id 
          &&
          <BookForm book={book} />
        }</Grid>
        </div>
      )}
      </Grid>
    </Container>
  );
}

export default App;
