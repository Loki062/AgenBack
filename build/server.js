import { PrismaClient } from "@prisma/client";
import express from "express";
import cors from "cors";

const app = express();
const prisma = new PrismaClient();

// Endpoint para a raiz
app.get("/", (req, res) => {
  res.send("Welcome to the API!");
});

// Middleware
app.use(express.json());
app.use(cors());

// Endpoint para criar agendamentos
app.post("/create-appointments", async (req, res) => {
  const { name, inital_date, final_Date, room } = req.body;

  try {
    const appointments = await prisma.appointments.create({
      data: {
        name,
        inital_date,
        final_Date,
        room,
      },
    });
    res.json(appointments);
  } catch (error) {
    console.error("Erro ao criar agendamento:", error);
    res.status(500).json({ error: "Erro ao criar agendamento" });
  }
});

// Endpoint para obter todos os agendamentos
app.get("/Appointments", async (req, res) => {
  try {
    const bookings = await prisma.appointments.findMany();
    res.json(bookings);
  } catch (error) {
    console.error("Erro ao buscar agendamentos:", error);
    res.status(500).json({ error: "Erro ao buscar agendamentos" });
  }
});

const port = 3333;

app.listen(process.env.PORT || port, () => console.log("server listening on"));
