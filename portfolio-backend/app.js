import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
// app.use(express.urlencoded({extended:true,limit:"16kb"}))
// app.use(express.static("public"))
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";

app.use("/user", userRoutes);
app.use("/post", postRoutes);
app.use("/blog", blogRoutes);

export { app };
