import mongoose from "mongoose";

mongoose
  .connect("mongodb://127.0.0.1:27017/mern", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connection succesfull....."))
  .catch((err) => console.log(err));
