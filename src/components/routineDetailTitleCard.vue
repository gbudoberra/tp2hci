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
                    <v-col align-self="center">
                        <v-row>

                            <v-col align-self="center">
                                <pop-up-edit-routine title="Edit Routine" v-if="isMyRoutine" :routine-already-exists=true :id="id"
                                                     :name="title" :color="color" :difficulty="difficulty"
                                                     :isPublic="isPublic"
                                                     :detail="detail">
<!--                                    <template v-slot:formSlot>-->
<!--                                        <create-routine-form :routine-already-exists=true :id="id"-->
<!--                                                             :name="title" :color="color" :difficulty="difficulty"-->
<!--                                                             :isPublic="isPublic"-->
<!--                                                             :detail="detail"/>-->
<!--                                    </template>-->
                                </pop-up-edit-routine>
                            </v-col>
                            <v-col align-self="center">
                              <v-btn @click="dialog=true" outlined rounded x-large plain v-if="isMyRoutine">
                                <v-icon>mdi-delete</v-icon>
                                <v-dialog v-model="dialog" width="unset">
                                  <v-card width="300">
                                    <v-card-title>Delete Routine?</v-card-title>
                                    <v-card-actions>
                                      <v-spacer></v-spacer>
                                      <v-btn color="green darken-1" text @click="dialog = false; deleteRoutine(id)">YES</v-btn>
                                      <v-btn color="red darken-1" text @click="dialog = false">NO</v-btn>
                                    </v-card-actions>
                                  </v-card>
                                </v-dialog>
                              </v-btn>
                            </v-col>
                          <v-col align-self="center" cols="2">
                            <fav-btn :routine-id="id"></fav-btn>
                          </v-col>
                          <v-col align-self="center" cols="2">
                            <pop-up-review :routine-id="id"/>
                          </v-col>

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
import PopUpEditRoutine from "./popUp/popUpEditRoutine";
// import createRoutineForm from "./Forms/createRoutineForm";
import {store} from "../store";
import PopUpReview from "./popUp/popUpReview";

export default {
    name: "routineDetailTitleCard",
    components: {PopUpReview, PopUpEditRoutine, RoutineMainCard, FavBtn, ColorPill},
    props: ['color', 'title', 'id', 'isMyRoutine', 'isPublic', 'detail', 'difficulty'],
    methods: {
        async deleteRoutine(id){
            console.log(id)
            await store.dispatch('delete', {id: id})
            return this.$router.go(-1);
        }
    },
  data() {
    return {
      dialog: false
    }
  }
}
</script>

<style scoped>
</style>