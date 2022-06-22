const express = require("express");
const router = express.Router();
const computersController = require("../controllers/computer");

// routes for machines
router.get("/", computersController.getComputers);
router.get("/:id", computersController.getComputer);
router.post("/create", computersController.createComputer);
router.put("/:id", computersController.updateComputer);
router.delete("/:id", computersController.deleteComputer);

module.exports = router;
