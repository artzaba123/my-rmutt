<template>
  <v-layout>
    <div v-if="!this.$apollo.loading">
      <h1>
        ข้อมูลส่วนตัว
      </h1>

      <v-container fluid>
        <v-col cols="10">
          <v-img
            src="https://picsum.photos/510/300?random"
            aspect-ratio="1.7"
            width="200"
            height="200"
            class="ma-2"
          ></v-img>
        </v-col>
        <v-col cols="2" class="ma-2"> <v-btn>แทรกรูปภาพ</v-btn></v-col>
        <v-row align="center">
          <v-col cols="12" sm="6">
            <v-select :items="items" label="ตำแหน่งทางวิชาการ"></v-select>
          </v-col>
          <v-col cols="12" sm="6">
            <v-select :items="items" label="ตำแหน่งสายงาน (ก.พ.)"></v-select>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="user.personalInfo.firstnameTH"
              outlined
              label="ชื่อ"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="user.personalInfo.lastnameTH"
              outlined
              label="นามสกุล"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="user.personalInfo.phone"
              outlined
              label="เบอร์ติดต่อ"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-switch
              v-model="user.personalInfo.showPhone"
              :label="`${switch1 ? 'เผยแพร่' : 'ไม่เผยแพร่'}`"
            ></v-switch>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="user.personalInfo.email"
              outlined
              label="E-mail"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="user.personalInfo.facebook"
              outlined
              label="Facebook"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="user.personalInfo.lineID"
              outlined
              label="Line ID"
            ></v-text-field>
          </v-col>
          <v-col cols="12"> <v-btn @click="updateUser">ยืนยัน</v-btn></v-col>
        </v-row>
      </v-container>
    </div>
    <div v-else>Loading...</div>
  </v-layout>
</template>
<script>
import { GET_USER_BY_ID } from '@/graphql/queries/userQueries'
import { UPDATE_USER_MUTATION } from '@/graphql/mutations/userMutation'

export default {
  apollo: {
    user: {
      query: GET_USER_BY_ID,
      variables: {
        username: 'tao'
      }
    }
  },
  data: () => ({
    switch1: true,
    loading: true,
    user: []
  }),

  methods: {
    async updateUser() {
      // eslint-disable-next-line no-console
      const newUser = this.user
      delete newUser.__typename
      delete newUser.personalInfo.__typename
      delete newUser.id
      try {
        const res = await this.$apollo.mutate({
          mutation: UPDATE_USER_MUTATION,
          variables: {
            username: 'tao',
            params: newUser
          }
        })
        // eslint-disable-next-line no-console
        console.log(res)
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(JSON.parse(JSON.stringify(error)))
      }
    }
  }
}
</script>
