import express, {Express, Response, Request} from "express";
import path from "path";

const app : Express = express();

// Express config
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "../views"));
app.set( "view engine", "ejs" );

/**
 * Primary app routes.
*/
app.get('/', (req : Request, res : Response) => {
    console.log(`dirname: ${path.join( __dirname, "views" )}`);
    res.render( "index" );
});

app.get('/create', (req : Request, res : Response) => {
    res.send('Going to create session');
})
export default app;