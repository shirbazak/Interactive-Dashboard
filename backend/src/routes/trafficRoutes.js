const express = require("express");
const router = express.Router();
const controller = require("../controllers/trafficController");
const { verifyUser, checkEditor } = require("../middlewares/authMiddleware");

router.use(verifyUser);
router.get("/", controller.getTraffic);
router.post("/", checkEditor, controller.addTraffic);
router.put("/:id", checkEditor, controller.updateTraffic);
router.delete("/:id", checkEditor, controller.deleteTraffic);

module.exports = router;
