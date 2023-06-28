import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import userRoutes from "./routes/users.js";
const app = express();
const port = 5000;
app.use(bodyParser.json());
app.use(cors()); //without cors we can not see the output
app.use("/", userRoutes);
app.get("/", (req, res) => res.send("Hello from Express"));
app.all("*", (req, res) => res.send("that route doesn't exist"));
app.listen(port, () =>
  console.log(`Server is listening on post:
http://localhost:${port}`)
);
