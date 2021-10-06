<template>
<routine-main-card>
  <template v-slot:body>

    <v-container>

      <v-row>

        <v-col cols="1">
          <color-pill :color="color"></color-pill>
        </v-col>


        <v-col>
          <v-card-title class="text-h4" v-text="title">RTitle</v-card-title>
        </v-col>
        <v-col cols="3" align="end" align-self="center">
          <v-row>
            <v-col><fav-btn :routine-id="id"></fav-btn></v-col>
            <v-col><v-btn>Edit</v-btn></v-col>
          </v-row>
        </v-col>
        <v-col cols="1"></v-col>


      </v-row>

    </v-container>
  </template>
</routine-main-card>
</template>

<script>
import ColorPill from "./cardComplements/colorPill";
import FavBtn from "./cardComplements/favBtn";
import RoutineMainCard from "./mainCard";
export default {
  name: "routineDetailTitleCard",
  components: {RoutineMainCard, FavBtn, ColorPill},
  props:['color', 'title', 'id']
}
</script>

<style scoped>
</style>