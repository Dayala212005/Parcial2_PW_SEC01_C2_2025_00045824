import express from "express";
import cors from "cors";
import cuentasApp from "./routes/cuentas.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/cuentas", cuentasApp);

const PORT = 3130;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));