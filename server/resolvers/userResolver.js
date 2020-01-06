// const consola = require('consola')

module.exports = {
  Query: {
    hello: () => 'Hello World',
    users: (_, __, { models: { userModel } }) => userModel.find().exec(),
    user: (_, { userName }, { models: { userModel } }) =>
      userModel.findOne({ userName }).exec()
  },
  Mutation: {
    createUser: (_, { userName, password }, { models: { userModel } }) =>
      userModel.create({ userName, password }),
    updateUser: (
      _,
      { userName, firstName, lastName },
      { models: { userModel } }
    ) =>
      userModel
        .findOneAndUpdate({ userName }, { firstName, lastName }, { new: true })
        .exec(),
    deleteUser: (_, { userName }, { models: { userModel } }) =>
      userModel.findOneAndDelete({ userName }).exec()
  }
}
