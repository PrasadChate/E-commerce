import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";
import categoryRoutes from "./routes/CategoryRoutes.js";
//configure env
dotenv.config();
//database config
connectDB();
//rest objects
const app = express();
//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);
//rest api
app.get("/", (req, res) => {
  res.send("<h1><b>Welcome to our website</b></h1>");
});
//PORT
const PORT = process.env.PORT || 8080; //react runs on 8080 port  || 8080 is written for worst case
//run listen
app.listen(PORT, () => {
  console.log(
    `server is running on mode ${process.env.DEV_MODE} on port ${PORT}`.bgCyan
      .white
  );
});
