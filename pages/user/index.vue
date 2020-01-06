<template>
  <v-layout>
    <v-flex class="text-center">
      <p>Hello</p>
      <v-card v-for="user in users" :key="user.id">
        <p>{{ user.id }}</p>
        <p>{{ user.userName }}</p>
        <p>{{ user.firstName }}</p>
        <p>{{ user.lastName }}</p>
        <p>{{ user.userType }}</p>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import gql from 'graphql-tag'

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
