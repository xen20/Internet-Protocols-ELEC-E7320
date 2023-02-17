import express, {Application, Request, Response} from "express";

const app : Application = express();

const PORT : number = 3000;

app.get('/', (req : Request, res : Response) => {
    res.send('Sup nigga');
})

app.listen(PORT, (): void => {
    console.log(`App listening to ${PORT}`);
})
