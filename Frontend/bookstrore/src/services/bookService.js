import axios from "axios";

const baseUrl = '/api/books';

export const getAll = async () => {
    const response = await axios.get(baseUrl);
    return response.data;
}

export const getOne = async (id) => {
    const response = await axios.get(`${baseUrl}/${id}`);
    return response.data;
}

export const editBook = async (id, book) => {
    const request = await axios.put(`${baseUrl}/${id}`, book);
    return request.then(response => response.data);
}

export const deleteBook = async (id) => {
    const request = await axios.delete(`${baseUrl}/${id}`);
    return request.then(response => response.data);
}

export const addBook = async (book) => {
    const response = await axios.post(baseUrl, book);
    return response.data;
}