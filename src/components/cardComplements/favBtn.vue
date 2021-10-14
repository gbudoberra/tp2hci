<template>
  <v-btn icon x-large color="#FAC710" @click.prevent="">
<!--    <v-icon size="50" class="active" v-if="favRoutines.includes(routineId)">mdi-star</v-icon>-->
<!--    <v-icon v-else color="black" size="50">mdi-star-outline</v-icon>-->
    <v-icon>mdi-star</v-icon>
  </v-btn>
</template>

<script>

export default {
  name: "favBtn",
  data: () => ({

  }),

  methods:{

  },
  props: ['routineId'],
}
</script>

<style scoped>

</style>