import { json, urlencoded } from "body-parser";
import express, {Express, Response, Request} from "express";
import path from "path";

import * as homeController from "./controller/home";
import * as sessionController from "./controller/session";

const app : Express = express();

// Express config
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "../views"));
app.set( "view engine", "ejs" );
app.use(json());
app.use(urlencoded({extended: true}));

/**
 * Primary app routes.
*/
app.get("/", homeController.index);
app.post("/create", sessionController.createSession);

export default app;