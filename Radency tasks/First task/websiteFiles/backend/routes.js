const express = require("express");
const router = express.Router();

router.get("", async (req, res, next) => {
  try {
    console.log(res);
  } catch (err) {
    next(err);
  }
});
