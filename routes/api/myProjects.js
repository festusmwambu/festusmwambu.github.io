const router = require("express").Router();
const projectsController = require("../../controller/myProjectsController");

router.route("/")
  .get(projectsController.findAll)
  .post(projectsController.create);

router
  .route("/:id")
  .get(projectsController.findById)
  .put(projectsController.update)
  .delete(projectsController.remove);

router
  .route("/name/:location")
  .get(projectsController.findAllByName)
  .put(projectsController.update)

module.exports = router;
