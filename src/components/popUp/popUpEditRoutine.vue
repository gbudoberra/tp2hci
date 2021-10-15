<template>
    <v-container>
        <v-dialog
            v-model="dialog"
            width="500"
            overlay-color="black"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                       fab
                       x-large plain v-bind="attrs"
                       v-on="on"><v-icon>edit</v-icon></v-btn>
            </template>

            <v-card color="white" height="600" rounded>
                <v-card-title>{{title}}</v-card-title>
              <create-routine-form :routine-already-exists=true :id="id" v-on:dialogDisable="dialog=false"
                                   :name="name" :color="color" :difficulty="difficulty" :isPublic="isPublic" :detail="detail"/>
            </v-card>

        </v-dialog>
    </v-container>
</template>

<script>
import CreateRoutineForm from "../Forms/createRoutineForm";
export default {
    components: {CreateRoutineForm},
    data () {
        return {
            dialog: false,
        }
    },
  props: ['name', 'detail', 'difficulty', 'isPublic', 'color', 'routineAlreadyExists', 'id', 'title'],
}
</script>