const express = require("express");
const {
  summaryController,
  paragraphController,
  chatbotController,
  jsconverterController,
  scifiImageController,
  animeImageController,
  emailController,
  lofiImageController,
} = require("../controllers/openaiController");

const router = express.Router();

//route
router.post("/summary", summaryController);
router.post("/paragraph", paragraphController);
router.post("/chatbot", chatbotController);
router.post("/js-converter", jsconverterController);
router.post("/scifi-image", scifiImageController);
router.post("/anime-image", animeImageController);
router.post("/lofi-image", lofiImageController);
router.post("/email", emailController);

module.exports = router;
