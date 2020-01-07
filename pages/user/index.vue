<template>
  <v-layout>
    <v-container fluid>
      <user-card />
    </v-container>
  </v-layout>
</template>

<script>
import gql from 'graphql-tag'
import UserCard from '@/components/UserCard'
const users = gql`
  query users {
    users {
      id
      userName
      password
      firstName
      lastName
      userType
    }
  }
`

export default {
  components: {
    UserCard
  },
  data: () => ({
    loading: 0
  }),
  apollo: {
    $loadingKey: 'loading',
    users: {
      query: users
    }
  }
}
</script>
