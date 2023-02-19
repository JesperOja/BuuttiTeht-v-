import React, { useEffect } from "react";



const Books = (books) => {
    


    return(
        <>
            <ul>
               {books.map(book => {
                <li>
                    {book.author} : {book.title}
                </li>
               })} 
            </ul>
        </>
    )
}

export default Books;