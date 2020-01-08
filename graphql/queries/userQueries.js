import gql from 'graphql-tag'

export const GET_USER_BY_ID = gql`
  query userById($username: String!) {
    user(username: $username) {
      id
      personalInfo {
        firstnameTH
        lastnameTH
        phone
        email
        facebook
        lineID
        showPhone
      }
    }
  }
`
