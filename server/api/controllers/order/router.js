import * as express from "express";
import controller from "./controller";

export default express
  .Router()
  .post("/addorder", controller.createOrder)
  .post("/addcartorder", controller.createCartOrder)
  .get("/getorderforseller", controller.getOrderforSeller)
  .put("/statusupdate", controller.updateStatus);