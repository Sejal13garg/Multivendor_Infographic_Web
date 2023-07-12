import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import authRoutes from "./routes/authRoute.js";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());

app.use(express.json());
app.use(morgan("dev"));
import("./config/db.js");

app.use("/api/v1/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("<h1>Welocme  to my world</h1>");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("server running on port", PORT);
});
