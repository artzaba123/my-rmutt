// const consola = require('consola')

module.exports = {
  Query: {
    hello: () => 'Hello World',
    users: (_, __, { models: { userModel } }) => userModel.find().exec(),
    user: (_, { userName }, { models: { userModel } }) =>
      userModel.findOne({ userName }).exec()
  },
  Mutation: {
    createUser: (_, { params }, { models: { userModel } }) =>
      userModel.create(params),
    updateUser: (_, { userName, params }, { models: { userModel } }) =>
      userModel.findOneAndUpdate({ userName }, params, { new: true }).exec(),
    deleteUser: (_, { userName }, { models: { userModel } }) =>
      userModel.findOneAndDelete({ userName }).exec()
  }
}
