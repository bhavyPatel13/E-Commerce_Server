import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import { CreateTables } from "./utils/createTables.js";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
import { router } from "./router/authRoutes.js";
import { config } from "dotenv";

config({path : "./config/config.env"})

const app = express();

app.use(cors({
    origin: [process.env.FRONTEND_URL, process.env.DASHBOARD_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(fileUpload({
    tempFileDir: "./uploads",
    useTempFiles: true
}));

app.use("/api/v1/auth", router);

CreateTables();
app.use(errorMiddleware);

export default app;