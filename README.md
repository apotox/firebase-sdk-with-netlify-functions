# firebase-sdk-with-netlify-functions
use Firebase Admin with Netlify lambda functions


on this project I have created two parts, the first is the front-end page (static content) and the second is the backend which is a lambda function calls firebase rest api using firebaseSDK library


## webpack.server.js
this is the most important part, bundling a Nodejs Function for Netlify function or AWS Lambda with Webpack,One of the major challenges when working with serverless functions is bundling all your node_modules into one zip file, but in my case when I tried to bundle firebase SDK with my lambda function I faced a lot of errors and missed requirements.., so decided to move the big external dependencies into a new package.json file inside “lambda” folder with the help of generate-json-webpack-plugin webpack plugin. and I edited the package.json build script ,
so after the “yarn build: server” I change the directory by the command “cd dist/server/” and then “yarn install”,
this will create a new node_modules into the lambda folder and netlify will zip it using zip-it-and-ship-it to AWS lambda function.

[full story on medium](https://medium.com/@saphidev/use-firebase-admin-with-netlify-lambda-functions-free-483d3b390e3a)
