import { createSlice } from "@reduxjs/toolkit"
import bookService from '../services/bookService'

const bookSlice = createSlice({
    name: "books",
    initialState: [],
    reducers: {
        appendBook(state, action){
            state.push(action.payload);
        },
        allBooks(state, action){
            return action.payload;
        },
        updateBook(state, action){
            const book = action.payload;

            return state.map(a => a.id === book.id ? book : a)
        }
    }
})

export const addBook = (newBook) => {
    return async dispatch => {
        const addBook = await bookService.addBook(newBook)
        dispatch(appendBook(addBook));
    }
}

export const initializeBooks = () => {
    return async dispatch => {
        const books = await bookService.getAll();
        dispatch(allBooks(books));
    }
}

export const editBook = (book) => {
    return async dispatch => {
        const updatedBook = await bookService.editBook(book.id, book);
        dispatch(updateBook(updatedBook));
    }
}

export const getBook = (id) => {
    return async dispatch => {
        const book = await bookService.getOne(id);
        dispatch(updateBook(book));
    }
}

export const { appendBook, allBooks, updateBook } = bookSlice.actions;
export default bookSlice.reducer;