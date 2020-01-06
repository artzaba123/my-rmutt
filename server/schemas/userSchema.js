const { gql } = require('apollo-server-koa')

module.exports = gql`
  type User {
    id: ID!
    userName: String!
    password: String!
    firstName: String
    lastName: String
    userType: UserType!
  }

  enum UserType {
    USER
    ADMIN
  }

  extend type Query {
    hello: String
    users: [User!]!
    user(userName: String): User!
  }

  extend type Mutation {
    createUser(userName: String!, password: String!): User!
    updateUser(userName: String!, firstName: String, lastName: String): User!
    deleteUser(userName: String!): User!
  }
`
