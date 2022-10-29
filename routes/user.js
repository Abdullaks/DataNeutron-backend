const express = require("express");
const router = express.Router();
const console = require("console");

const { addData, updateData } = require("../controller/user");

router.post("/add", addData);
router.put("/:id", updateData);


module.exports=router