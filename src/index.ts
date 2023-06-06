import express, { Express, Request, Response } from 'express';
import fetch from 'node-fetch';
import "dotenv/config";
import { configDotenv } from 'dotenv';

const app: Express = express();
const port = 3000;
configDotenv();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.status(200).send({"message": "Hello Currency API with exchangeRate-API"});
});

app.get("/healthCheck", (req: Request, res: Response) => {
    res.status(200).send("OK");
});

// your API key
const API_KEY = process.env.EXCHANGERATES_API_KEY; 
const COUNTRY_CODE_DEFAULT = process.env.COUNTRY_CODE_DEFAULT ?? "aud";
const BASE_URL = "https://v6.exchangerate-api.com/v6/";

app.get("/exchangeRates/default", (req: Request, res: Response) => {
    const url = `${BASE_URL}/${API_KEY}/latest/${COUNTRY_CODE_DEFAULT}`;
    fetch(url)
    .then(resp => resp.json())
    .then(data => {
        res.status(200).send(data);
    });
});

app.get("/exchangeRates/:country_code", (req: Request, res: Response) => {
    const cCode = (req.params && req.params.country_code) ?? COUNTRY_CODE_DEFAULT;
    const url = `${BASE_URL}/${API_KEY}/latest/${cCode}`;
    fetch(url)
    .then(resp => resp.json())
    .then(data => {
        res.status(200).send(data);
    });
});

app.get("/convert/:from_code/:amount/to/:to_code", async (req: Request, res: Response) => {
    const fromCode = req.params && req.params.from_code;
    let toCode = req.params && req.params.to_code;
    let amount = req.params && req.params.amount;
    if(!fromCode || !toCode || !amount) {
        res.status(400).send("Insufficient params supplied");
    }
    
    //const amount
    const url = `${BASE_URL}/${API_KEY}/latest/${fromCode}`;
    const resp1 = await fetch(url);
    const data = await resp1.json();
    fetch(url)
    .then(resp => resp.json())
    .then(data => {
        const conversionRate = data.conversion_rates[toCode.toUpperCase()];
        const convertedVal = Number(amount) * Number(conversionRate);
        res.status(200).send({"conversion": convertedVal});
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})