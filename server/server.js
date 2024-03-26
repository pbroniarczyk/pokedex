import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import pokemonRouter from "./routes/pokemon.js";

dotenv.config();

const PORT = process.env.PORT || 8000;
const app = express();

console.log("SERVER ---- ", process.env.DATABASE);

app.use(cors());
app.use(express.json());

app.use("/", pokemonRouter);

app.listen(PORT, () => {
  console.log("LISTEN ---- ", process.env.DATABASE);
  console.log(`Server is running on port: ${PORT}`);
});
