const express = require("express")
const expressGraphQL = require("express-graphql").graphqlHTTP
const glue = require('schemaglue') 
const { makeExecutableSchema } = require('@graphql-tools/schema')
require('dotenv').config();
const app = express();

const { schema, resolver } = glue('./src/graphql')

const executableSchema = makeExecutableSchema ({
    typeDefs: schema,
    resolvers: resolver
});

app.use('/graphql', expressGraphQL({
    schema: executableSchema,
    graphiql: true
}));

app.listen(5000, () => console.log("Server is running on http://localhost:5000/graphql ...")) ;