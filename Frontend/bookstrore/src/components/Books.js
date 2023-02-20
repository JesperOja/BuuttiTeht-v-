import React from "react";

const Books = (props) => {

    const showInfo = () => {
        if (allBooks.id === props.clickedBook) {
            props.bookID(0)
        }
        else {
            props.bookID(allBooks.id)
        }
    }

    const allBooks = props.books;

    if (allBooks.lenght === 0) {
        return (<>Such empty...</>)
    } else {
        return (
            <>
                <div onClick={showInfo}>

                    <label style={{display:"flex", textAlign:"center", alignContent:"center", width:"100px"}}>
                        Author: 
                        <div>{allBooks.author}</div>
                    </label>
                    <label style={{display:"flex"}}>
                        title: 
                        <div>{allBooks.title}</div>
                    </label>

                </div>
            </>
        )
    }

}

export default Books;