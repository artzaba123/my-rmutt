const { gql } = require('apollo-server-koa')

module.exports = gql`
  type User {
    id: ID!
    username: String!
    password: String!
    personalInfo: PersonalInfo
    careerInfo: CareerInfo
    userType: UserTypeEnum!
    isPublic: Boolean!
    isActive: Boolean!
  }

  type PersonalInfo {
    nickname: String
    firstnameEN: String
    lastnameEN: String
    firstnameTH: String
    lastnameTH: String
    email: String
    facebook: String
    lineID: String
    phone: String
    DOB: Date
  }

  type CareerInfo {
    email: String
    phone: String
    jobPost: String
    dapartment: String
    address: String
  }

  scalar Date

  enum UserTypeEnum {
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
    nickname: String
    firstnameEN: String
    lastnameEN: String
    firstnameTH: String
    lastnameTH: String
    email: String
    facebook: String
    lineID: String
    phone: String
    DOB: Date
  }

  input CareerInfoInput {
    email: String
    phone: String
    jobPost: String
    dapartment: String
    address: String
  }

  input UpdateUserInput {
    personalInfo: PersonalInfoInput
    careerInfo: CareerInfoInput
  }

  extend type Mutation {
    createUser(params: CreateUserInput): User!
    updateUser(username: String!, params: UpdateUserInput): User!
    deleteUser(username: String!): User!
  }
`
