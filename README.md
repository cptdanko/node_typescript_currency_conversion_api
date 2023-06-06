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

# Any help?
If you have difficulty understanding anything about this repo, feel free to reach out to me through this Github account or at bhuman@mydaytodo.com or bhuman.soni@gmail.com

# Tutorials
The following tutorials came to be while working on this repo, [AWS DynamoDB how to], [AWS DynamoDB query by non-primary] and you can find more at https://www.mydaytodo.com/blog/

# More great tutorials and code samples
I will be writing a detailed tutorial on how to work with this repo on my blog. Until then refer to [my blog] for other tutorials and "how-to" articles with detailed code samples.

If you like what I am doing, you can [buy me a coffee]

Click on the next link for more info on the [software engineering career journey] of the author.

[AWS DynamoDB query by non-primary]: https://mydaytodo.com/how-to-query-dynamodb-with-non-primary-key-column/
[AWS DynamoDB how to]: https://mydaytodo.com/aws-dynamodb-typescript-how-to/
[frontend in the repo]: https://github.com/cptdanko/react_typescript_todo_list
[native iOS app]: https://apps.apple.com/au/app/my-day-to-do-smart-task-list/id1020072048
[line 16]: https://github.com/cptdanko/nodetypescriptcrudnotes/blob/main/src/db.ts#L16
[my blog]: https://mydaytodo.com/blog/
[line 17]: https://github.com/cptdanko/nodetypescriptcrudnotes/blob/main/src/db.ts#L17
[AWS docs]: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-envvars.html
[blogpost]: https://mydaytodo.com/blog/
[this blog]: https://mydaytodo.com/blog/
[buy me a coffee]: https://www.buymeacoffee.com/bhumansoni
[software engineering career journey]: https://mydaytodo.com/the-3-stages-of-a-software-engineering-career/
[ExchangeRate-API]: https://www.exchangerate-api.com/
