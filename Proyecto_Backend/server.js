import express from "express";
import cors from "cors";
import cuentasRoutes from "./routes/cuentas.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/cuentas", cuentasRoutes);

const PORT = 3130;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));