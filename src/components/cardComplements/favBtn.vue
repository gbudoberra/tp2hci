<template>
    <div>
    <v-btn icon x-large color="red" @click="fav">
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn icon x-large color="red" @click="unFav">
        <v-icon>mdi-heart-outline</v-icon>
    </v-btn>
</div>
</template>

<script>

import {store} from "../../store";

export default {
  name: "favBtn",
  data: () => ({
  }),

  methods:{
    async fav(){
        try{
            await store.dispatch('favRoutine', {id: this.$props.routineId})
        }catch (e) {
            console.log('error de faveado', e)
        }
    },
      async unFav(){
          try{
              await store.dispatch('unFavRoutine', {id: this.$props.routineId})
          }catch (e) {
              console.log('error de unfaveado', e)
          }
      },
      created(){
        if (store.state.favorites === null){
            store.dispatch('getAllFavorites')
        }
        for (let i in store.state.favorites){
            if (i.id === this.$props.routineId) {
                this.isFav = true
                return
            }
        }
        this.isFav = false
      }
  },
  props: ['routineId'],
}
</script>

<style scoped>

</style>