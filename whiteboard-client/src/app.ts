import exp from "constants";
import express, { Express, Response, Request } from "express";

const app: Express = express();

// Express config
app.set("port", process.env.PORT || 3000);
app.use(express.static("./src/public"));

/**
 * Primary app routes.
 */
app.get("/", (req: Request, res: Response) => {
  res.send("Hello from server");
});

export default app;
