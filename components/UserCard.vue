<template>
  <v-card max-width="50%">
    <v-container fluid>
      <v-row>
        <v-col cols="4">
          <v-img
            src="https://picsum.photos/510/300?random"
            aspect-ratio="1.7"
            width="150"
            height="160"
            class="ma-2"
          ></v-img
        ></v-col>
        <v-col cols="8">
          <v-card-title
            >Name :{{ user.firstnameEN }} Lastname :{{
              user.lastnameEN
            }}</v-card-title
          >
          <v-card-text class="text--primary">
            <div>หน่วยงาน :</div>
            <div>ฝ่าย :</div>
            <div>คามเชี่ยวชาญ :</div>
            <div>ตำแหน่งสายงาน (ก.พ.) :</div>
          </v-card-text>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    user: {
      firstnameEN: 'art',
      lastnameEN: 'nahee'
    }
  })
}
</script>
