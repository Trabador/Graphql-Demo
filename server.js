const express = require('express');
const graphqlHttp = require('express-graphql');
const MySchema = require('./schema');
const config = require('./config');
const cors = require('cors');

const app = express();

//cors setup
app.use(cors());    

//Graphql setup
app.use('/graphql', graphqlHttp({
    schema: MySchema,
    graphiql: true
}));



app.listen(config.PORT, () => {
    console.log(`Server running on port ${config.PORT}`);
});