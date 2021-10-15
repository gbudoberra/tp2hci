<template>
  <v-row justify="end">
    <v-btn
        v-if="$store.state.security.isLoggedIn"
        @click.stop="dialog = true"
        color="#1E3163" class="white--text" rounded large
    >
      <v-icon large>logout</v-icon>
      logout

    </v-btn>

    <v-dialog
        v-model="dialog"
        max-width="290"
    >
      <v-card>
        <v-card-title class="text-h5">
          Sign out now?
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
              @click="dialog = false; logoutBtn(); refresh();"
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
  data() {
    return {
      dialog: false,
    }
  },
  methods: {
    logoutBtn() {
      store.dispatch('security/logout')
    },
    refresh() {
      location.reload()
    }
  }
}
</script>