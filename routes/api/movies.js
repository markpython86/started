const router = require("express").Router();
const moviesController = require("../../controllers/moviesController.js");

// Matches with "/api/movies"
router.route("/")
  .get(moviesController.findAll)
  .post(moviesController.create);

// Matches with "/api/movies/:id"
router
  .route("/:id")
  .get(moviesController.findById)
  .put(moviesController.update)
  .delete(moviesController.remove);

router
  .route("/search/:searched")
  .get(moviesController.search)

module.exports = router;
