import React from "react";

const Books = (props) => {
  const showInfo = () => {
    if (allBooks.id === props.clickedBook) {
      props.bookID(0);
    } else {
      props.bookID(allBooks.id);
    }
  };

  const allBooks = props.books;

  const bookStyle = {
    display: "flex",
    width: "100%",
    fontSize: "23px",
    padding: "1px",
    marginLeft: "15px",
  };

  if (allBooks.lenght === 0) {
    return <>Such empty...</>;
  } else {
    return (
      <>
        <div onClick={showInfo} style={{ width: "100%" }}>
          <label style={bookStyle}>
            Author:
            <div style={bookStyle}>{allBooks.author}</div>
          </label>
          <label style={bookStyle}>
            Title:
            <div style={bookStyle}>{allBooks.title}</div>
          </label>
        </div>
      </>
    );
  }
};

export default Books;
