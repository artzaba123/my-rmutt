<template>
  <v-layout>
    <div>
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
              v-model="firstname"
              outlined
              label="ชื่อ"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="lastname"
              outlined
              label="นามสกุล"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="telephone"
              outlined
              label="เบอร์ติดต่อ"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-switch
              v-model="switch1"
              :label="`${switch1 ? 'เผยแพร่' : 'ไม่เผยแพร่'}`"
            ></v-switch>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="email"
              :rule="emailRules"
              outlined
              label="E-mail"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="facebook"
              outlined
              label="Facebook"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="lineid"
              outlined
              label="Line ID"
            ></v-text-field>
          </v-col>
          <v-col cols="12"> <v-btn>ยืนยัน</v-btn></v-col>
        </v-row>
      </v-container>
    </div>
  </v-layout>
</template>
<script>
export default {
  data() {
    return { switch1: true }
  },
  email: '',
  emailRules: [
    (v) => !!v || 'E-mail is required',
    (v) => /.+@.+/.test(v) || 'E-mail must be valid'
  ]
}
</script>
