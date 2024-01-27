import express from "express";
import pg from "pg";
import dotenv from "dotenv";
// console.log(dotenv);

dotenv.config({ path: "../.env" });

const { PORT, DATABASE_URL } = process.env;
console.log("PORT", PORT, "DB_URL", DATABASE_URL);

const client = new pg.Client({
  connectionString: DATABASE_URL,
});

(async () => {
  try {
    await client.connect();
    console.log("connected to PSQL DB");
  } catch (error) {
    console.error("error connecting");
  }
})();

const app = express();

app.use(express.json());

app.get("/api/words", (req, res) => {
  client
    .query("SELECT * FROM words")
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.error("Error executing query:", error);
      res.status(500).json({ error: "Internal Server Error" });
    });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
