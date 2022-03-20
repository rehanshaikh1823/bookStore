import mongoose from "mongoose";

const booksSchema = mongoose.Schema({

});

// collection inside the database
export default mongoose.model("books", booksSchema);
