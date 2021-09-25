<template>
  <v-container
>

    <v-container>
      <v-row fluid
          v-for="routine in routines"
             :key="routine.title">
        <v-col>
          <v-card
              color="white"
              raised
              outlined
              rounded="xl"
          >
            <v-container>
              <v-row justify="space-around">
                <v-col cols="1">
                  <v-card max-width="20" rounded="pill" flat height="100%" :color=routine.color></v-card>
                </v-col>
                <v-col >
              <v-card-title class="text-h5" v-text="routine.title"></v-card-title>

              <v-card-subtitle v-text="routine.description"></v-card-subtitle>

              <v-card-actions class="justify-start">
                <v-col
                    cols="12"
                    sm="3"
                >
                  <v-btn
                      icon
                      color="#FAC710"
                  >
                    <v-icon
                    size="50"
                    >mdi-star</v-icon>
                  </v-btn>
                </v-col>
              </v-card-actions>
            </v-col>

            <v-col align="end"
                   align-self="center"
            >
              <v-avatar
                align="end"
                class="justify-end"
                color="black"
                size="100"
            >
              <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
            </v-avatar>
            </v-col>
              </v-row>
            </v-container>

          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: "exploreRoutine",
  data: () => ({
    routines: [
      {
        title: 'My routine 1',
        description: 'Esta es mi primer rutina.',
        color: 'blue',
      },
      {
        title: 'My routine 2',
        description: 'Esta es mi segunda rutina.',
        color: 'green',
      },
    ],
  }),
}

</script>

<style scoped>

</style>