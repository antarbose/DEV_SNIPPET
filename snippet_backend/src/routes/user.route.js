//this route takes us to the user profile...which is now a protected route
import express from "express"
import protectRoute from "../middlewares/auth.middleware.js"
import getProfile from "../controllers/user.controller.js"
import { CreateSnip, UpdateSnippet, DeleteSnippet, ToggleFavourite} from "../controllers/snippet.controller.js"
import { GetSnip } from "../controllers/snippet.controller.js"

const router= express.Router()

router.get("/check",protectRoute,getProfile)
router.post("/snippets",protectRoute,CreateSnip)
router.get("/snippets",protectRoute,GetSnip)
router.put("/snippets/:id",protectRoute,UpdateSnippet)
router.delete(
  "/snippets/:id",
  protectRoute,
  DeleteSnippet
)

router.patch(
  "/snippets/:id/favourite",
  protectRoute,
  ToggleFavourite
)
export default router