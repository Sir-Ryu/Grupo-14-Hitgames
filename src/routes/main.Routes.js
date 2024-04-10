const express = require("express")
const router = express.Router()

router.get("/", (req, res) => res.send("ok desde router"))
router.get("/login", (req, res) => res.send("ok desde login"))

module.exports = router
