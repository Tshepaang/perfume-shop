const express = require("express");
const Review = require("../models/Review");
const router = express.Router();

router.get("/:productId", async (req, res) => {
  const reviews = await Review.find({ productId: req.params.productId });
  res.json(reviews);
});

router.post("/", async (req, res) => {
  const review = new Review(req.body);
  await review.save();
  res.json(review);
});

module.exports = router;
