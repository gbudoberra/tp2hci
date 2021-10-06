<template>
  <v-hover v-if="doHover" v-slot="{ hover }">
    <v-card color="white" raised outlined rounded="xl" :to="toLink"
            :elevation="hover ? 12 : 2"
            :class="{ 'on-hover': hover }"
    >
      <slot name="body">
        Empty
      </slot>
    </v-card>
  </v-hover>
  <v-card v-else color="white" raised outlined rounded="xl" :to="toLink"
  >
    <slot name="body">
      Empty
    </slot>
  </v-card>
</template>

<script>
export default {
  name: "routineMainCard",
  data: () => ({
    transparent: 'rgba(255, 255, 255, 0)',
  }),
  props: ['toLink', 'doHover']
}
</script>

<style scoped>
.v-card {
  transition: opacity .4s ease-in-out;
}
.v-card:not(.on-hover) {
  opacity: 0.9;
}
.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>