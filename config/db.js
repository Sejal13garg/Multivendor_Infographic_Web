import mongoose from "mongoose";
mongoose
  .connect("mongodb://localhost:27017/Infographic_web", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected succesfull");
  })
  .catch((error) => {
    console.log(error);
  });
