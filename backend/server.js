import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import Books from "./dbBooks.js";
// app config
dotenv.config();
const app = express();
const port = process.env.PORT || 9000;

//middlewares
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*"),
        res.setHeader("Access-Control-Allow-Headers", "*"),
        next();
});

//DB config

// const connection_url = process.env.CONNECTION_URL;
const connection_url = "mongodb+srv://rehanshaikh:rehanshaikh@cluster0.ffia7.mongodb.net/booksstoredb?retryWrites=true&w=majority";

mongoose.connect(connection_url);

// //api endpoints

app.get("/", (req, res) => {
    Books.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    });
});

// app.get("/v1/posts", (req, res) => res.status(200).send(data));

// app.get("/v2/posts", (req, res) => {
//   Videos.find((err, data) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.status(200).send(data);
//     }
//   });
// });

// app.post("/v2/posts", (req, res) => {
//   // adding data to database
//   const dbVideos = req.body;
//   Videos.create(dbVideos, (err, data) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.status(201).send(data);
//     }
//   });
// });

// listen
app.listen(port, () => console.log(`listining on localhost : ${port}`));
