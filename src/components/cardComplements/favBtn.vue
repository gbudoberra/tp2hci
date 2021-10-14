<template>
    <div>
    <v-btn icon x-large color="red" @click="fav">
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn icon x-large color="red" @click="unFav">
        <v-icon>mdi-heart-off-outline</v-icon>
    </v-btn>
        <v-alert type="succes"
                 v-model="alert"
                 dismissible
        >
            {{this.errorMsg}}
        </v-alert>
</div>
</template>

<script>

import {store} from "../../store";

export default {
  name: "favBtn",
  data: () => ({
      errorMsg: null,
      alert: false
  }),

  methods:{
    async fav(){
        try{
            await store.dispatch('favRoutine', {id: this.$props.routineId})
            this.errorMsg = 'Routine Faved'
            this.alert = true
        }catch (e) {
            this.errorMsg = 'Routine Faved'
            this.alert = true
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