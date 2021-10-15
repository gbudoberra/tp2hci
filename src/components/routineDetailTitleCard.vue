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
                                <fav-btn :routine-id="id"></fav-btn>
                            </v-col>
                            <v-col align-self="center" v-if="isMyRoutine">
                                <pop-up-edit-routine title="Edit Routine">
                                    <template v-slot:formSlot>
                                        <create-routine-form :routine-already-exists=true :id="id"
                                                             :name="title" :color="color" :difficulty="difficulty"
                                                             :isPublic="isPublic"
                                                             :detail="detail"/>
                                    </template>
                                </pop-up-edit-routine>
                            </v-col>
                            <v-col v-if="isMyRoutine" align-self="center"><v-btn @click="deleteRoutine(id)" outlined rounded x-large plain ><v-icon>mdi-delete</v-icon></v-btn></v-col>
                            <!--            <v-col align-self="center" v-if="isMyRoutine"><v-btn outlined rounded x-large plain><v-icon>edit</v-icon></v-btn></v-col>-->
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
import createRoutineForm from "./Forms/createRoutineForm";
import {store} from "../store";

export default {
    name: "routineDetailTitleCard",
    components: {PopUpEditRoutine, RoutineMainCard, FavBtn, ColorPill, createRoutineForm},
    props: ['color', 'title', 'id', 'colorBack', 'isMyRoutine', 'isPublic', 'detail', 'difficulty'],
    methods: {
        async deleteRoutine(id){
            console.log(id)
            await store.dispatch('delete', {id: id})
            return this.$router.go(-1);
        }
    }
}
</script>

<style scoped>
</style>