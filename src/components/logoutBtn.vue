<template>
  <v-row justify="end">
    <v-btn
        fab v-if="$store.state.security.isLoggedIn"
        color="primary"
        @click.stop="dialog = true"
    >
      <v-icon>logout</v-icon>
    </v-btn>

    <v-dialog
        v-model="dialog"
        max-width="290"
    >
      <v-card>
        <v-card-title class="text-h5">
          Logout? :(
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
              color="red darken-1"
              text
              @click="dialog = false"
          >
            No
          </v-btn>

          <v-btn
              color="green darken-1"
              text
              @click="dialog = false; logoutBtn();"
          >
            Yes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import {store} from "../store";

export default {
  name: "logoutBtn",
  data () {
    return {
      dialog: false,
    }
  },
  methods:{
    logoutBtn(){
      store.dispatch('security/logout')
    }
  }
}
</script>