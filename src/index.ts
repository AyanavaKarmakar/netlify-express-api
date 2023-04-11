import express, { Router } from "express";
import { json } from "body-parser";

const app = express();
app.use(json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server is listening at ${PORT}!`);
});

const router = Router();

router.get("/api/welcome", (req, res) => {
  return res.send("welcome");
});

router.get("/api/todo", (req, res) => {
  return res.send("the todo");
});

app.use(router);
