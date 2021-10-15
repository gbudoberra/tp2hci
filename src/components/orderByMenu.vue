<template>
  <v-menu
      top
      offset-y
      open-on-hover
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn fab fixed bottom v-bind="attrs" v-on="on"> <v-icon>mdi-order-alphabetical-ascending</v-icon> </v-btn>
    </template>

    <v-list>
      <v-list-item-title align="center" class="text-h6">Order by:</v-list-item-title>
      <v-list-item
          v-for="item in items" :key="item"
      >
        <v-btn plain :class="routines.orderBy===item?'active':null" @click="updateOrderBy(item)">{{item}}</v-btn>
      </v-list-item>
    </v-list>
    <v-list>
      <v-list-item-title align="center" class="text-h6">Direction</v-list-item-title>
      <v-list-item
          v-for="item in ['asc', 'desc']" :key="item"
      >
        <v-btn plain :class="routines.direction===item?'active':null" @click="updateDirection(item)">
          <v-icon v-if="item==='asc'">mdi-sort-ascending</v-icon>
          <v-icon v-if="item==='desc'">mdi-sort-descending</v-icon>
        </v-btn>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import {mapState} from "vuex";
import {store} from "../store";

export default {
  name: "filterOrderMenu",
  data() {
    return {
      items: ['date','score', 'difficulty', 'name']
    }
  },
  props:['dispatchToUpdate'],
  computed:{
    ...mapState({
      routines: 'routines'
}),
  },
  methods:{
    updateOrderBy(orderBy){
      store.commit('setOrderBy', orderBy)
      store.dispatch(this.$props.dispatchToUpdate)
    },
    updateDirection(direc){
      store.commit('setDirection', direc)
      store.dispatch(this.$props.dispatchToUpdate)
    },
  }
}
</script>

<style scoped>
.active{
  background: lightblue;
  font-size: medium;
  font-style: italic;
}
.activeIcon{
  color: red;
}
</style>