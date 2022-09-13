const router = require("express").Router();
const contactsController = require("../../controller/contactController");

router.route("/")
  .get(contactsController.findAll)
  .post(contactsController.create);

router
  .route("/:id")
  .get(contactsController.findById)
  .put(contactsController.update)
  .delete(contactsController.remove);

router
  .route("/name/:location")
  .get(contactsController.findAllByName)
  .put(contactsController.update)

module.exports = router;


module.exports = router