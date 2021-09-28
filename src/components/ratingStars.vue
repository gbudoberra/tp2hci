<template>
  <div>
  <v-icon :class="routineRating>0 ? 'active' : 'notActive'">mdi-star</v-icon>
  <v-icon :class="routineRating>1 ? 'active' : 'notActive'">mdi-star</v-icon>
  <v-icon :class="routineRating>2 ? 'active' : 'notActive'">mdi-star</v-icon>
  <v-icon :class="routineRating>3 ? 'active' : 'notActive'">mdi-star</v-icon>
  <v-icon :class="routineRating>4 ? 'active' : 'notActive'">mdi-star</v-icon>
  </div>
</template>

<script>
export default {
  name: "ratingStars",
  props:['routineRating']
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