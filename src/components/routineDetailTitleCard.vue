<template>
<v-card color="white" raised outlined rounded="xl">
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
</v-card>
</template>

<script>
import ColorPill from "./colorPill";
import FavBtn from "./favBtn";
export default {
  name: "routineDetailTitleCard",
  components: {FavBtn, ColorPill},
  props:['color', 'title', 'id']
}
</script>

<style scoped>
</style>