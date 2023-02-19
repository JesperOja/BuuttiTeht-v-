import { useDispatch } from "react-redux";
import { addBook } from "../reducers/bookReducer";

const BookForm = () => {

    const dispatch = useDispatch()

    const modifyBook = (event) => {
        event.preventDefault();

        const modifiedBook = {
            author: event.target.author.value,
            title: event.target.title.value,
            description: event.target.description.value
        }

        event.target.author.value = ""
        event.target.title.value = ""
        event.target.description.value = ""
        
        addBook(modifiedBook);
    }
    return (
        <>
            <form onSubmit={modifyBook}>
                <label>Author: 
                    <input name="author" placeholder="author" />
                </label>

                <label>Title: 
                    <input name="title" placeholder="title" />
                </label>

                <label>Description: 
                    <textarea name="description" placeholder="Description" rows={3} cols={7} />
                </label>

                <button type="submit">Add book</button>
            </form>
        </>
    )
}

export default BookForm