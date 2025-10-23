import express from "express";
import {
  obtenerCuentas,
  obtenerCuentaPorId,
  buscarCuentaPorParametro,
  obtenerBalanceTotal
} from "../controller/cuentasController.js";

const app = express();

app.get("/", obtenerCuentas);

app.get("/:id", obtenerCuentaPorId);

app.get("/query/param", buscarCuentaPorParametro);

app.get("/balance/total", obtenerBalanceTotal);

export default app;
