import { useDispatch } from "react-redux";
import { createBook, changeBook, delBook } from "../reducers/bookReducer";
import { Input, TextField, FormLabel, Button } from "@mui/material";

const BookForm = (props) => {

    const dispatch = useDispatch()
    const thisBook = props.book

    const newBook = (event) => {
        event.preventDefault();

        const modifiedBook = {
            author: event.target.author.value,
            title: event.target.title.value,
            description: event.target.description.value
        }

        event.target.author.value = ""
        event.target.title.value = ""
        event.target.description.value = ""

        dispatch(createBook(modifiedBook))
    }

    const modifyBook = (event) => {
        event.preventDefault();

        const modifiedBook = {
            author: event.target.author.value,
            title: event.target.title.value,
            description: event.target.description.value
        }

        dispatch(changeBook(Number(thisBook.id), modifiedBook))
    }

    const deleteThisBook = () => {
        if (window.confirm(`Are you sure you want to delete this book: Author: 
        ${thisBook.author}, Title: ${thisBook.title}`)) {
            dispatch(delBook(thisBook.id))
        }
    }
    return (
        <>
            <form style={{ display: "flex", flexWrap: "wrap", width: "100%", padding:"2px" }} 
            onSubmit={(e) => {
                if (e.nativeEvent.submitter.name === "AddBook") newBook(e)
                if (e.nativeEvent.submitter.name === "EditBook") modifyBook(e)
                if (e.nativeEvent.submitter.name === "delete") deleteThisBook()
            }}>
                <div style={{ width: "80%", padding:"2px" }}>
                    <FormLabel>Author:
                        <Input name="author" placeholder="author" defaultValue={thisBook.author} />
                    </FormLabel>
                </div>
                <div style={{ width: "80%", padding:"2px" }}>
                    <FormLabel>Title:
                        <Input name="title" placeholder="Title" defaultValue={thisBook.title} />
                    </FormLabel>
                </div>
                <div style={{ width: "80%", padding:"2px" }}>
                    <FormLabel style={{textAlign:"left"}}>Description:
                        <TextField multilane="true" name="description" placeholder="Description" rows={6} maxRows={10} defaultValue={thisBook.description} />
                    </FormLabel>
                </div>
                <div>
                    <Button type="submit" name="AddBook">Save New</Button>
                    <Button type="submit" name="EditBook">Save</Button>
                    <Button type="submit" name="delete">Delete Book</Button>
                </div>
            </form>
        </>
    )



}

export default BookForm