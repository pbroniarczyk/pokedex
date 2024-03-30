import express from "express";
import cors from "cors";
import "dotenv/config";

import pokemonRouter from "./routes/pokemon";

const PORT = process.env.PORT || 8000;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/", pokemonRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
