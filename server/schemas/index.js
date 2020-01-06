const { gql } = require('apollo-server-koa')
const userSchema = require('./userSchema')

const linkSchema = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
`

module.exports = [linkSchema, userSchema]
