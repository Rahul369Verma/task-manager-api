import { Router } from "express";
import { add_task, change_state, delete_task, get_tasks, toggle_archive } from "./tasks_controller";

const router = Router();

router
  .post("/", add_task)
  .get("/", get_tasks)
  .delete("/:id", delete_task)
  .patch("/state", change_state)
  .patch("/archive", toggle_archive)


router
  // .get("/:id", get_hotel)

// router.delete("/remove_watchlist/:vid", remove_watchlist);
// router.get("/viewWatchlist", viewWatchlist);

export default router;
