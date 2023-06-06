# NodeJS Currency Conversion API with Typescript

Simple currency conversion API built with Nodejs, express and Typescript.

# Installation instructions
1. clone the repo 
2. cd node_typescript_currency_conversion_api
3. npm install
4. add .env file
```
touch .env
```
5. add the variables to our .env file
```
EXCHANGERATES_API_KEY=<your key>
COUNTRY_CODE_DEFAULT=usd
```
6. You can register and get your API key from [ExchangeRate-API]
7. start the API by typing this on your command line
```
npm run devRun
```
8. and enjoy currency conversions

# REST API endpoints
```
/exchangeRates/default // default country code you have set in env file
/exchangeRates/:country_code // country code passed as path parameter
/convert/:from_code/:amount/to/:to_code // convert amount from one country code to another e.g. /convert/usd/100/to/inr -> convert 100 $us to Indian rs
```