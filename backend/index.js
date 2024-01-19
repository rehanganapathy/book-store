// imports and requires
import express from "express";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

// creating an express app
const app = express();
const URL = "mongodb+srv://rehan-ganapathy:reuse1234@cluster0.2pwie.mongodb.net/?retryWrites=true&w=majority";

app.use(
  cors()
  //  origin: "https://book-store-kkb3.vercel.app/",
   //  methods: ["GET", "POST", "PUT", "DELETE"],
  //   allowedHeaders: ["Content-Type"],
  //
);

// adding middleware for parsing Json
app.use(express.json());

// router handler for routes
app.use("/books", booksRoute);

// setting GET request on root ("/")
app.get("/", (req, res) => {
  console.log(req);
  res.send('Hello World')
  return res.status(200);
});

// setting up the mongoDB cluster (connect to DB)
mongoose
  .connect(URL)
  .then(() => {
    console.log("successfully connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

// listening to the events
app.listen(5555, () => {
  console.log(`listening on port ${5555}`);
});
