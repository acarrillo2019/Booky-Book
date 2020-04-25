const router = require("express").Router();
const booksController = require("../../controllers/booksController");
var cors = require('cors')

router.use(cors())

router.route("/").post(booksController.saveBooks);
router.route("/").get(booksController.findSaved);
router.route("/:id").delete(booksController.remove);

module.exports = router;
