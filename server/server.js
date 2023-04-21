import express from "express";
import config from "../db/config.js";
import morgan from "morgan";
import userRouter from "../routes/users.routes.js";

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/users", userRouter);

app.use((err, req, res, next) => {
    console.error(err);
    res.json({ name: err.name, msg: err.message })
})

app.get("/", (req, res) => {
    res.send("Hello There! Please go to /users in order to access data.");
})

app.listen(config.port, console.log(`Server listening on port ${config.port}`));