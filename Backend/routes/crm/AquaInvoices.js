const express = require("express");
const Server = express.Router();
const {
  createInvoice,
  sendIndividualInvoice,
  updateInvoice,
  deleteInvoice,
  getInvoices,
} = require("../../controllers/crm/Aquainvoices");

Server.post("/create-invoice", createInvoice);
Server.get("/invoice/:no", sendIndividualInvoice);
Server.get("/all-invoices", getInvoices);
Server.put("/invoice/:no", updateInvoice);
Server.delete("/invoice/:no", deleteInvoice);

module.exports = Server;
