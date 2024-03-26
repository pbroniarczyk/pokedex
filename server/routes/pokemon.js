import express from "express";
import { ObjectId } from "mongodb";

import db from "../db/connection.js";

const router = express.Router();

router.get("/pokemon", async (req, res, next) => {
  let colletion = await db.collection("pokemon");
  let results = await colletion.find({}).toArray();
  res.send(results).status(200);
});

router.get("/pokemon/:id", async (req, res, next) => {
  let collection = await db.collection("pokemon");
  let query = { _id: new ObjectId(req.params.id) };
  let results = await collection.findOne(query);
  res.send(results).status(200);
});

export default router;
