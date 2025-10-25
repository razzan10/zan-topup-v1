import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./routes/products.routes.js";
import PurchaseRoutes from "./routes/purchase.routes.js";
import UploadRoutes from "./routes/upload.routes.js";

const app = express();

dotenv.config();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

app.get("/api", (req, res) => {
  res.send("hello world");
});

app.use("/products", productRoutes);
app.use("/:id", PurchaseRoutes);
app.use("/upload", UploadRoutes);

app.listen(PORT, () => {
  console.log("Express API running in port:" + PORT);
});
