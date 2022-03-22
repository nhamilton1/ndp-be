const router = require("express").Router();
const Asics = require("./models/asic-miners-model");
const { asicData } = require('./asic-miners-middleware')

router.get("/", async (req, res, next) => {
  try {
    const asicMiners = await Asics.getAll();
    res.json(asicMiners);
  } catch (err) {
    next(err);
  }
});

router.get("/asics-scheduler", asicData, async (req, res, next) => {
  try {
    const asicMiners = await Asics.getAll();
    res.json(asicMiners);
  } catch (err) {
    next(err);
  }
});

module.exports = router;