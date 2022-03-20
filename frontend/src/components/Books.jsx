import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import "../styles/Books.css";
import Book from "./Book";
const Books = (books) => {


  return (
    <div className="books">
      <Grid container spacing={3}>
        {
          books?.books?.map(({ author, bookId, description, imgUrl, price, publisher, title, category, review
          }) => (
            <Book
              author={author}
              bookId={bookId}
              description={description}
              imgUrl={imgUrl}
              price={price}
              publisher={publisher}
              title={title}
              category={category}
              review={review}
              key={bookId}
            />
          ))

        }
      </Grid>
    </div>
  );
};

export default Books;

// books.length !== undefined &&
