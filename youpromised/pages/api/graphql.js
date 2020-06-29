import knex from "knex";
import { ApolloServer, gql } from 'apollo-server-micro'
import { schema } from '../../apollo/schema'

const db = knex({
  client: "postgres",
  connection: {
    host: process.env.POSTGRES_HOST,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB
  }
});

const apolloServer = new ApolloServer({ schema })

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({ path: '/api/graphql' })

// const apolloServer = new ApolloServer({ schema, context => { db } })
// // const apolloServer = new ApolloServer({ typeDefs, resolvers, context => { db })


// export default apolloServer.createHandler({ path: '/api/graphql' })
