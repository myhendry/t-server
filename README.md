yarn init -y
yarn add -D tslint tslint-config-prettier typescript ts-node nodemon
yarn add express apollo-server-express
yarn add mongoose
yarn add -D @types/mongoose
yarn add dotenv
yarn add -D @types/dotenv
yarn add morgan

npx tslint --init
set up tslint.json
set up tsconfig.json

In package.json, "scripts": {
"start": "nodemon --exec ts-node src/index.ts"
},
yarn start

In index.ts, import dotenv from 'dotenv';
dotenv.config()
