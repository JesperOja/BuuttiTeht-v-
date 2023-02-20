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
                <div onClick={showInfo} style={{textAlign:"center", width:"400px"}}>

                    <label style={{display:"flex", width:"100%", fontSize:"23px", padding:"1px"}}>
                        Author: 
                        <div style={{display:"flex", fontSize:"23px", padding:"1px"}}>{allBooks.author}</div>
                    </label>
                    <label style={{display:"flex",width:"100%", fontSize:"23px", padding:"1px"}}>
                        title: 
                        <div style={{display:"flex", fontSize:"23px", padding:"1px"}}>{allBooks.title}</div>
                    </label>

                </div>
            </>
        )
    }

}

export default Books;