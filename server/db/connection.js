import { MongoClient, ServerApiVersion } from "mongodb";

console.log("CONNECTION ---- ", process.env.DATABASE);

const uri = process.env.DATABASE;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

try {
  await client.connect();
  await client.db("poke_data").command({ ping: 1 });
  console.log("Pinged your deployment. You successfully connected to MongoDB!");
} catch (error) {
  console.error(error);
}

let db = client.db("poke_data");

export default db;
