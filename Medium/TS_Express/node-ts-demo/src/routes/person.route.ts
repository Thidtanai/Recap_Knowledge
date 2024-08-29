import {
  getPersons,
  createPerson,
  updatePerson,
  deletePerson,
} from "../controllers/person.controller";
import { Router } from "express";
const router = Router();

router.get("/", getPersons);
router.post("/", createPerson);
router.patch("/:id", updatePerson);
router.delete("/:id", deletePerson);

export default router;
