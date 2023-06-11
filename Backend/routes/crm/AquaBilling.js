const express = require("express");
const Server = express.Router();
const {
  createBilling,
  updateBilling,
  getAllBilling,
  deleteBilling,
} = require("../../controllers/crm/AquaBilling");

Server.post("/create-billing", createBilling);
Server.put("/update-billing/:no", updateBilling);
Server.get("/get-all-billing", getAllBilling);
Server.delete("/delete-billing/:no", deleteBilling);

module.exports = Server;
