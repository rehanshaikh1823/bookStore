import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import "../styles/Books.css";
import Book from "./Book";
import booksContext from "./context";
const Books = () => {
  let params = useParams();

  console.log(params);
  const allBooks = useContext(booksContext);

  const [items, setItems] = useState()


  useEffect(() => {
    setItems(allBooks?.filter(item => item.category.indexOf(`${params.category}`) !== -1))
  }, [allBooks, params.category])

  console.log(items);

  return (
    <div className="books">
      <Grid container spacing={3}>
        {
          items?.length > 0 ?
            items?.map(({ author, bookId, description, imgUrl, price, publisher, title, category, review
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
            )) :
            allBooks?.map(({ author, bookId, description, imgUrl, price, publisher, title, category, review
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
