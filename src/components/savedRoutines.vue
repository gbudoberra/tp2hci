<template>
<v-container>
  <routine-main-card :toLink="{name: 'routineDetails', params: { id: routine.id}}">

  </routine-main-card>
</v-container>

</template>

<script>
import RoutineMainCard from "./mainCard";
export default {
  name: "savedRoutines",
  components: {RoutineMainCard}
}
</script>

<style scoped>

</style>