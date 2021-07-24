import express from "express";
import passport from "passport";
import passportMiddleware from "./middlewares/passport";
import morgan from "morgan";
import cors from "cors";
import "./database/database";

import authRoutes from "./routes/auth.routes";
import specialRoutes from "./routes/special.routes";

const app = express();

app.set("port", process.env.PORT || 3000);

//middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(passport.initialize());
passport.use(passportMiddleware);

app.use(authRoutes);
app.use(specialRoutes);

//Starting server
app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});
