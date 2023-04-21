import express from "express";
import users from "../controllers/user.controller.js";

const router = express.Router();

router.get("/:id?", async(req, res, next) => {
    let { id } = req.params;
    let data;

    if (id) {
        data = await users.findOne(id);
    } else {
        data = await users.findAll();
    }

    res.json(data);
});

router.post("/", async(req, res, next) => {
    let user = req.body;
    let data = await users.addOne(user);
    res.json(data);
});

router.put("/:id", async(req, res, next) => {
    let { id } = req.params;
    let usersDTO = req.body;
    let data = await users.updateOne(id, usersDTO);
    res.json(data);
});

router.delete("/:id", async(req, res, next) => {
    let { id } = req.params;
    let data = await users.removeOne(id);
    res.json(data);
});



export default router;