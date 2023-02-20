import { useDispatch } from "react-redux";
import { createBook, changeBook, delBook } from "../reducers/bookReducer";
import { TextField, Button } from "@mui/material";
import TextareaAutosize from "@mui/base/TextareaAutosize";

const BookForm = (props) => {
  const dispatch = useDispatch();
  const thisBook = props.book;

  const newBook = (event) => {
    event.preventDefault();

    const modifiedBook = {
      author: event.target.author.value,
      title: event.target.title.value,
      description: event.target.description.value,
    };

    event.target.author.value = "";
    event.target.title.value = "";
    event.target.description.value = "";

    dispatch(createBook(modifiedBook));
  };

  const modifyBook = (event) => {
    event.preventDefault();

    const modifiedBook = {
      author: event.target.author.value,
      title: event.target.title.value,
      description: event.target.description.value,
    };

    dispatch(changeBook(Number(thisBook.id), modifiedBook));
  };

  const deleteThisBook = () => {
    if (
      window.confirm(`Are you sure you want to delete this book: Author: 
        ${thisBook.author}, Title: ${thisBook.title}`)
    ) {
      dispatch(delBook(thisBook.id));
    }
  };

  const formInputStyle = {
    width: "100%",
    padding: "4px",
  };

  const textAreaStyling = {
    width: "97%",
    fontSize: "18px",
    paddingTop: "8px",
    paddingLeft: "15px",
    marginTop: "4px",
  };

  const formStyle = {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    padding: "4px",
  };

  return (
    <>
      <form
        style={formStyle}
        onSubmit={(e) => {
          if (e.nativeEvent.submitter.name === "AddBook") newBook(e);
          if (e.nativeEvent.submitter.name === "EditBook") modifyBook(e);
          if (e.nativeEvent.submitter.name === "delete") deleteThisBook();
        }}
      >
        <div style={formInputStyle}>
          <TextField
            label="Author"
            name="author"
            placeholder="author"
            fullWidth={true}
            defaultValue={thisBook.author}
            required
          />
        </div>
        <div style={formInputStyle}>
          <TextField
            label="Title"
            name="title"
            placeholder="Title"
            fullWidth={true}
            defaultValue={thisBook.title}
            required
          />
        </div>
        <div style={formInputStyle}>
          <label>
            Description:
            <TextareaAutosize
              name="description"
              placeholder="Description"
              minRows={3}
              style={textAreaStyling}
              defaultValue={thisBook.description}
            />
          </label>
        </div>
        <div style={{ width: "100%", padding: "4px", textAlign: "center" }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            name="AddBook"
            style={{ margin: "3px" }}
          >
            Save New
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            name="EditBook"
            style={{ margin: "3px" }}
          >
            Save
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            name="delete"
            style={{ margin: "3px" }}
          >
            Delete Book
          </Button>
        </div>
      </form>
    </>
  );
};

export default BookForm;
