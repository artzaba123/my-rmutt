const { GraphQLDate } = require('graphql-iso-date')
module.exports = {
  Query: {
    hello: () => 'Hello World',
    users: (_, __, { models: { userModel } }) => userModel.find().exec(),
    user: (_, { username }, { models: { userModel } }) =>
      userModel.findOne({ username }).exec()
  },
  Mutation: {
    createUser: (_, { params }, { models: { userModel } }) =>
      userModel.create(params),
    updateUser: (_, { username, params }, { models: { userModel } }) =>
      userModel.findOneAndUpdate({ username }, params, { new: true }).exec(),
    deleteUser: (_, { username }, { models: { userModel } }) =>
      userModel.findOneAndDelete({ username }).exec()
  },
  Date: GraphQLDate
}
