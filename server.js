const express = require('express');
const graphqlHttp = require('express-graphql');
const MySchema = require('./schema');
const config = require('./config');

const app = express();

//Graphql setup
app.use('/graphql', graphqlHttp({
    schema: MySchema,
    graphiql: true
}));



app.listen(config.PORT, () => {
    console.log(`Server running on port ${config.PORT}`);
});