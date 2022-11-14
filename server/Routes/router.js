import Express from "express";
import { getdbname, getPosts } from "../controllers/gets.js";
import { addNewRecipe } from "../controllers/posts.js";
const router = Express.Router();

router.get("/", getPosts);
router.post("/", addNewRecipe);
router.get("/a", getdbname);

export default router;
