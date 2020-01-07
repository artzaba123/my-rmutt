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

  input CreateUserInput {
    userName: String!
    password: String!
  }

  input UpdateUserInput {
    firstName: String
    lastName: String
  }

  extend type Mutation {
    createUser(params: CreateUserInput): User!
    updateUser(userName: String!, params: UpdateUserInput): User!
    deleteUser(userName: String!): User!
  }
`
