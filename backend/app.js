import express from "express";
import path, { dirname } from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import { fileURLToPath } from "url";
import session from "express-session";

import indexRouter from "./routes/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// setup
const app = express();
const PORT = process.env.PORT || 3001;

app.use(
    session({
        secret: "wayne",
        cookie: {
            maxAge: 60000,
        },
    })
);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../frontend/build")));

app.use("/", indexRouter);

app.listen(PORT, () => {
    console.log(`RUN http://localhost:${PORT}`);
});

export default app;
