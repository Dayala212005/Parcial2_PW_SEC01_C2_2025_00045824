import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataPath = path.join(__dirname, "../data/cuentas.json");

const cuentas = JSON.parse(fs.readFileSync(dataPath, "utf-8"));

export const obtenerCuentas = (req, res) => {
  res.json({
    count: cuentas.length,
    data: cuentas
  });
};

export const obtenerCuentaPorId = (req, res) => {
  const { id } = req.params;
  const cuenta = cuentas.find(c => c._id === id);

  if (cuenta) {
    res.json({ finded: true, account: cuenta });
  } else {
    res.json({ finded: false, account: null });
  }
};

export const buscarCuentaPorParametro = (req, res) => {
  const { param } = req.query;
  const resultados = cuentas.filter(
    c =>
      c._id === param ||
      c.client.toLowerCase().includes(param.toLowerCase()) ||
      c.gender.toLowerCase() === param.toLowerCase()
  );

  if (resultados.length === 1) {
    res.json({ finded: true, account: resultados[0] });
  } else if (resultados.length > 1) {
    res.json({ finded: true, data: resultados });
  } else {
    res.json({ finded: false, account: null });
  }
};

export const obtenerBalanceTotal = (req, res) => {
  
  const cuentasActivas = cuentas.filter(c => c.isActive);

  if (cuentasActivas.length === 0) {
    return res.json({
      status: false,
      accountBalance: 0
    });
  }

  const total = cuentasActivas.reduce((acc, c) => {
    const monto = parseFloat(c.balance.replace(/[$,]/g, ""));
    return acc + monto;
  }, 0);

  res.json({
    status: true,
    accountBalance: total.toFixed(2)
  });
};