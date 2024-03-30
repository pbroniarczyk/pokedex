import express from "express";
import { ObjectId } from "mongodb";

import db from "../db/connection";
import Pokemon from "../models/Pokemon.js";

const router = express.Router();

router.get("/pokemon", async (_, res) => {
  let colletion = await db.collection("pokemon");
  let results = await colletion.find({}).toArray();
  const newPokemonList = results.map((pokemonItem) => new Pokemon(pokemonItem));
  res.send(newPokemonList).status(200);
});

router.get("/pokemon/:id", async (req, res) => {
  let collection = await db.collection("pokemon");
  let query = { _id: new ObjectId(req.params.id) };
  let results = await collection.findOne(query);
  res.send(new Pokemon(results)).status(200);
});

export default router;
