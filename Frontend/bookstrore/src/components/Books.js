import React from "react";

const Books = (props) => {

    const showInfo = () => {
        if(allBooks.id === props.clickedBook){
            props.bookID(0)
        }
        else{
        props.bookID(allBooks.id)
    }
    }
    const allBooks = props.books;

    if(allBooks.lenght === 0){
        return( <>Such empty...</>)
    }else{
        return(
        <>
            <div onClick={showInfo}>
            
                <div>
                    Author: {allBooks.author}
                </div>
                <div>
                    title: {allBooks.title}
                </div>
            
            </div>
        </>
    )
    }
    
}

export default Books;