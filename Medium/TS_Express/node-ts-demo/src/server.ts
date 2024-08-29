import express from "express";
import personRouter from "./routes/person.route";
import { json } from "body-parser";

const server = express();
const PORT = 3333;
server.use(json());

server.use("/persons", personRouter);
server.listen(PORT, () => console.log(`Server is started at port ${PORT}`));
