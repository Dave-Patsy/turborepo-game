import { PrismaClient } from "database";
import express from "express"

const prisma = new PrismaClient();
const app = express();
const port = 8080; // default port to listen

// define a route handler for the default home page
// @ts-ignore
app.get("/", async (req, res) => {
  const posts = await prisma.todo.findMany()
  res.json(posts)
  // res.send("Hello world!");
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
