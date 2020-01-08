import gql from 'graphql-tag'

export const UPDATE_USER_MUTATION = gql`
  mutation updateUser($username: String!, $params: UpdateUserInput) {
    updateUser(username: $username, params: $params) {
      username
      personalInfo {
        firstnameTH
        lastnameTH
        DOB
      }
    }
  }
`
