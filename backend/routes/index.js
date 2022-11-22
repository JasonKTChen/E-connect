import express from "express";
const router = express.Router();

/* GET home page. */
router.get("/getData", function (req, res) {
    res.json([1, 2, 3, 4]);
});
export default router;
