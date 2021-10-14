<template>
<div>
    <v-container>
        <v-row>
        <v-col >
            <h1 align="center">Welcome to TrainMe!</h1>
            <h3 align="center">Here we will teach you through the different sections of our webpage</h3>
        </v-col>
        </v-row>

        <h2>- Explore:</h2>
        <p>Here is where you will find all the other routines created by our community. Each routine is unique and has the following details:</p>
        <v-container>
            <v-col>
                <routine-main-card :do-hover="true">
                    <template v-slot:body>
                        <v-container>

                            <v-row>

                                <v-col cols="1">
                                    <color-pill :color="'blue'"></color-pill>
                                </v-col>

                                <v-col>

                                    <v-card-title class="text-h5" v-text="'Routine Title'">RTitle</v-card-title>

                                    <v-card-subtitle v-text="'Routine Description'">RDescription</v-card-subtitle>

                                    <v-card-text >
                                        <div>Difficulty: 'Advanced/Expert/Rookie'</div>
                                        <div>
                                            <rating-stars :routine-rating="3"></rating-stars>
                                        </div>
                                    </v-card-text>

                                    <v-card-actions class="justify-start">


                                    </v-card-actions>
                                </v-col>

                                <v-col align="end" align-self="center" cols="3">
                                    <main-card-avatar :p-name="'Creator name'" :pic-src="'https://i.stack.imgur.com/34AD2.jpg'"></main-card-avatar>
                                </v-col>

                            </v-row>

                        </v-container>
                    </template>
                </routine-main-card>
            </v-col>
        </v-container>
        <p>You can see more information about each routine by clicking its card, and from there you will land on the "Details" page</p>
        <h1>poner la pagina de detalles de un usuario diferente al logeado</h1>


        <h2>&nbsp;</h2>
        <h2>- My Routines:</h2>
        <p>Right here is where all your routines are stored. You can also create a new one by clicking on the
            <v-btn
            large
            dark color="blue darken-4" rounded>
            NEW ROUTINE
        </v-btn>. (You can choose the color that is displayed to the left of the routine card!)
        </p>
        <p>Check the detail of your routine by clicking the
            <v-btn fab x-small color="blue-grey lighten-3" >
            <v-icon>
                visibility
            </v-icon>
        </v-btn>&nbsp;on the top right corner, wich will take you to the following view:</p>
        <v-row>
            <v-col cols="1"/>
            <v-col>
                <routine-title-card color-back="indigo lighten-5" :color="'blue'" :title="'Title'"></routine-title-card>
            </v-col>
        </v-row>
        <h1>Agregar la vista de detalle de una rutina editable</h1>
        <h2>&nbsp;</h2>
        <h2>- Profile:</h2>
        <p>Here you can see and edit all your personal information: Name, Last Name, Phone number, Email and Profile Photo</p>
        <p>You can also view, edit, add and delete the exercises you created</p>

    </v-container>
</div>
</template>

<script>
import ratingStars from "../components/cardComplements/ratingStars";
import MainCardAvatar from "../components/cardComplements/mainCardAvatar";
import RoutineTitleCard from "../components/routineDetailTitleCard"
// import FavBtn from "../components/cardComplements/favBtn";
import ColorPill from "../components/cardComplements/colorPill";
import RoutineMainCard from "../components/mainCard";
export default {
  name: "settings",
    components: {RoutineMainCard, ratingStars, ColorPill, MainCardAvatar, RoutineTitleCard}
}
</script>

<style scoped>

</style>