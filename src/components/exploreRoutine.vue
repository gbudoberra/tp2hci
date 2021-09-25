<template>
  <v-container>

    <v-container>
      <v-row fluid
          v-for="routine in routines"
             :key="routine.id"
      >
        <v-col>

          <v-card color="white" raised outlined rounded="xl" :to="'/routine/' + routine.id">
<!--            HAY QUE VER COMO VAMOS A MOSTRAR LAS RUTINAS INDIVIDUALMENTE  (invente una view) -->

            <v-container>

              <v-row>

                <v-col cols="1">
                  <v-card max-width="20" rounded="pill" flat height="100%" :color=routine.color></v-card>
                </v-col>

                <v-col>

              <v-card-title class="text-h5" v-text="routine.title">RTitle</v-card-title>

              <v-card-subtitle v-text="routine.description">RDescription</v-card-subtitle>

                  <v-card-text >
                    <div>Duration: {{routine.duration}}</div>
                    <div>Difficulty: {{routine.difficulty}}</div>
                    <div>
                      <v-icon :class="routine.rating>0 ? 'active' : 'notActive'">mdi-star</v-icon>
                      <v-icon :class="routine.rating>1 ? 'active' : 'notActive'">mdi-star</v-icon>
                      <v-icon :class="routine.rating>2 ? 'active' : 'notActive'">mdi-star</v-icon>
                      <v-icon :class="routine.rating>3 ? 'active' : 'notActive'">mdi-star</v-icon>
                      <v-icon :class="routine.rating>4 ? 'active' : 'notActive'">mdi-star</v-icon>
                    </div>
                  </v-card-text>

              <v-card-actions class="justify-start">

                <v-col cols="12" sm="3">

                  <v-btn icon color="#FAC710" @click.prevent="favs(routine.id)">
                    <v-icon size="50" class="active" v-if="favRoutines.includes(routine.id)">mdi-star</v-icon>
                    <v-icon v-else color="black" size="50">mdi-star-outline</v-icon>
                  </v-btn>

                </v-col>

              </v-card-actions>

            </v-col>

                <v-col align="end" align-self="center">

              <v-avatar align="end" class="justify-end" size="100">

                <v-img :src=routine.pPic></v-img>

              </v-avatar>

              <v-subheader v-text="routine.pName" class="justify-end">Profile Name</v-subheader>

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
        id:1,
        title: 'My routine 1',
        description: 'Esta es mi primer rutina.',
        duration:'01:30',
        difficulty: 'Easy',
        rating: 4,
        color: 'blue',
        pPic: 'https://cdn.vuetifyjs.com/images/profiles/marcus.jpg',
        pName: 'Esteban Quito'
      },
      {
        id:2,
        title: 'My routine 2',
        description: 'Esta es mi segunda rutina.',
        duration:'30:00',
        difficulty: 'Hard',
        rating: 2,
        color: 'green',
        pPic: 'https://cdn.vuetifyjs.com/images/profiles/marcus.jpg',
        pName: 'Juan Pedro'
      },
      {
        id:3,
        title: 'My routine 3',
        description: 'Esta es mi tercera rutina.',
        duration:'09:20',
        difficulty: 'Hard',
        rating: 0,
        color: 'red',
        pPic: 'https://cdn.vuetifyjs.com/images/profiles/marcus.jpg',
        pName: 'Pedro Juan'
      },
      {
        id:4,
        title: 'My routine 4',
        description: 'Esta es mi cuarta rutina.',
        duration:'17:00',
        difficulty: 'Medium',
        rating: 5,
        color: 'brown',
        pPic: 'https://cdn.vuetifyjs.com/images/profiles/marcus.jpg',
        pName: 'Bad Bunny'
      },
    ],
    // Esto deberia ser un array general o algo así
    favRoutines: [
        1, 3, 9
    ]
  }),
  methods:{
    favs(int){
      if(this.favRoutines.includes(int))
        this.favRoutines.splice(this.favRoutines.indexOf(int), 1);
      else this.favRoutines.push(int);
    },
  },
}

</script>

<style scoped>
.notActive{
  color: black;
}
.active{
  color: #FFC933;
}


</style>