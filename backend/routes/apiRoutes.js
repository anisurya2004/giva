import { Router } from "express";
import { getAll, addNew, deleteD, updateD } from "../controllers/controller.js";

export const router = Router()

router.get("/", getAll)


router.post("/", addNew)


router.put("/:id", updateD)


router.delete("/:id", deleteD)
