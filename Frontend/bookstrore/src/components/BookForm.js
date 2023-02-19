import { useDispatch } from "react-redux";
import { createBook,changeBook, delBook } from "../reducers/bookReducer";


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
        if(window.confirm(`Are you sure you want to delete this book: Author: ${thisBook.author}, Title: ${thisBook.title}`)){
            dispatch(delBook(thisBook.id))
        }
    }
            return (
                <>
                    <form onSubmit={(e) => {if(e.nativeEvent.submitter.name ==="AddBook")newBook(e)
                                                if(e.nativeEvent.submitter.name ==="EditBook")modifyBook(e)
                                                if(e.nativeEvent.submitter.name ==="delete")deleteThisBook()} }>
                        <label>Author: 
                            <input name="author" placeholder="author" defaultValue={thisBook.author}/>
                        </label>
        
                        <label>Title: 
                            <input name="title" placeholder="Title" defaultValue={thisBook.title}/>
                        </label>
        
                        <label>Description: 
                            <textarea name="description" placeholder="Description" rows={6} cols={15} defaultValue={thisBook.description}/>
                        </label>
        
                        <button type="submit" name="AddBook">Save New</button>
                        <button type="submit" name="EditBook">Save</button>
                        <button name="delete">Delete Book</button>
                    </form>
                </>
            )
        
    
    
}

export default BookForm