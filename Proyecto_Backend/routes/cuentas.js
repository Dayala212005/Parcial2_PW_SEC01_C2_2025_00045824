import express from "express";
import {
  obtenerCuentas,
  obtenerCuentaPorId,
  buscarCuentaPorParametro,
  obtenerBalanceTotal
} from "../controller/cuentasController.js";

const router = express.Router();

router.get("/", obtenerCuentas);

router.get("/:id", obtenerCuentaPorId);

router.get("/query/param", buscarCuentaPorParametro);

router.get("/balance/total", obtenerBalanceTotal);

export default router;
