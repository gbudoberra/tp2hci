<template>
    <div>
    <v-btn icon x-large color="red" @click="unFav" v-if="isFav">
      <v-icon > mdi-heart</v-icon>
    </v-btn>
        <v-btn icon x-large color="red" @click="fav" v-if="!isFav">
        <v-icon >mdi-heart-outline</v-icon>
    </v-btn>
</div>
</template>

<script>

import {store} from "../../store";

export default {
  name: "favBtn",
  data: () => ({
      isFav: false
  }),

  methods: {
      async fav() {
          try {
              await store.dispatch('favRoutine', {id: this.$props.routineId})
              // this.errorMsg = 'Routine Faved'
              // this.alert = true
              this.isFav = true
          } catch (e) {
              console.log('error de faveado', e)
          }
      },
      async unFav() {
          try {
              await store.dispatch('unFavRoutine', {id: this.$props.routineId})
              this.isFav = false
          } catch (e) {
              console.log('error de unfaveado', e)
          }
      }
  },
      async created(){
        let result = await store.dispatch('getFavs', {pNum:0, items:1})
          console.log('resultado es esto: ', result)
          if(result.totalCount === 0) {
              this.isFav = false
              return
          }
          result = await store.dispatch('getFavs', {pNum:0, items:result.totalCount})
          console.log('resul segundo', result)
          for (let i=0; i <result.totalCount;i++){
            if (result.content[i].id === this.$props.routineId) {
                this.isFav = true
                return
            }
        }
        this.isFav = false
      },
  props: ['routineId'],
}
</script>

<style scoped>

</style>