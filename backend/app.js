import express from "express";
import path, { dirname } from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import { fileURLToPath } from "url";
import cors from "cors";
import indexRouter from "./routes/index.js";
import cardsRouter from "./routes/cards.js";
import usersRouter from "./routes/users.js";
import signuprouter from "./routes/signup.js";
import session from "express-session";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// setup
const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../frontend/build")));
app.use(
    session({
        secret: "wayne",
        cookie: {
            maxAge: 60000,
        },
    })
);

app.use("/", indexRouter);
app.use("/", cardsRouter);
app.use("/", usersRouter);
app.use("/", signuprouter);

app.listen(PORT, () => {
    console.log(`RUN http://localhost:${PORT}`);
});

export default app;
