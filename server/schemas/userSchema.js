const { gql } = require('apollo-server-koa')

module.exports = gql`
  type User {
    id: ID!
    username: String!
    password: String!
    personalInfo: PersonalInfo
    userType: UserType!
    isPublic: Boolean!
    isActive: Boolean!
  }

  type PersonalInfo {
    firstnameEN: String
    lastnameEN: String
  }

  enum UserType {
    USER
    ADMIN
  }

  extend type Query {
    hello: String
    users: [User!]!
    user(username: String): User!
  }

  input CreateUserInput {
    username: String!
    password: String!
  }

  input PersonalInfoInput {
    firstnameEN: String
    lastnameEN: String
  }

  input UpdateUserInput {
    personalInfo: PersonalInfoInput
  }

  extend type Mutation {
    createUser(params: CreateUserInput): User!
    updateUser(username: String!, params: UpdateUserInput): User!
    deleteUser(username: String!): User!
  }
`
