const { gql } = require('apollo-server-koa')

module.exports = gql`
  extend type Query {
    hello: String
  }
`
