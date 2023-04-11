import express, { Router } from "express";
import { json } from "body-parser";
import ServerlessHttp from "serverless-http";

const app = express();
app.use(json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server is listening at ${PORT}!`);
});

const router = Router();

router.get("/welcome", (req, res) => {
  return res.send("welcome");
});

router.get("/todo", (req, res) => {
  return res.send("the todo");
});

app.use("/.netlify/functions/index", router);

export const handler = ServerlessHttp(app);
