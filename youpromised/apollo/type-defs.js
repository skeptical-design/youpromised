import gql from 'graphql-tag'

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    status: String!
  }

  type Query {
    viewer: User
  }
`
// type Query {
//   users: [User!]!
// }
// type User {
//   id: Int!
//   firstName: String
// }