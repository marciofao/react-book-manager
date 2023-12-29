import axios from "axios"

const booksAPI = axios.create({baseURL: "https://localhost:8000/books"})

function getBooks(){
    const response = booksAPI.get("/")
    return response.data
}

export{
    getBooks
}