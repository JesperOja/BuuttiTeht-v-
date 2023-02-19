import { createSlice } from "@reduxjs/toolkit"
import {addBook, getAll, editBook, getOne, deleteBook} from '../services/bookService'

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

export const createBook = (newBook) => {
    return async dispatch => {
        const addedBook = await addBook(newBook)
        dispatch(appendBook(addedBook));
    }
}

export const initializeBooks = () => {
    return async dispatch => {
        const books = await getAll();
        dispatch(allBooks(books));
    }
}

export const changeBook = (id, book) => {
    return async dispatch => {
        const updatedBook = await editBook(id, book);
        dispatch(updateBook(updatedBook));
    }
}

export const getBook = (id) => {
    return async dispatch => {
        const book = await getOne(id);
        dispatch(updateBook(book));
    }
}

export const delBook = (id) => {
    return async dispatch => {
        await deleteBook(id)
        const books = await getAll()
        dispatch(allBooks(books))
    }
}

export const { appendBook, allBooks, updateBook } = bookSlice.actions;
export default bookSlice.reducer;