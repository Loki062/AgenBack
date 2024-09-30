"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const prisma = new client_1.PrismaClient();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.post("/create-appointments", async (req, res) => {
    const { name, inital_date, final_Date, room } = req.body;
    const appointments = await prisma.appointments.create({
        data: {
            name,
            inital_date,
            final_Date,
            room,
        },
    });
    res.json(appointments);
});
const port = 3333;
app.listen(process.env.PORT || port, () => console.log("server listening on"));
