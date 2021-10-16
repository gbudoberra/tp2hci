<template>
  <div>
    <v-container>


          <h1 align="center" class="align-center">Welcome to TrainMe!</h1>
          <h3 align="center">Here we will teach you how to navigate the different sections of our website</h3>



          <h1>First Steps: Log in or Sign Up</h1>
          <v-spacer/>

          <p >If you already have an account click here   <login-btn/> if you need an account click here <sign-up-btn/></p>

        <p > When creating your account you need to verify your email by clicking the link in the email you received or by entering your email and the code.</p>


          <p >
            If you want the second option click the following button: <v-btn rounded color="primary" to="/verifyEmail">Verify email</v-btn>
          </p>
      <h1>Routines</h1>
      <p>Routines are the main object in TrainMe app. Routines will guide you through your training.</p>
      <p>- Routines have a Name, Detail, Difficulty, Color, Score and User. They can be public or private. They consist on cycles.</p>
      <p>- Cycles have a Name, Detail, Type (Warmup, Exercise, CoolDown), order (Determines the order of execution) and Repetitions. They consist on exercises.</p>
      <p>- Exercises have Name, Detail and Type (Exercise or Rest). Exercises are NOT unique in each cycle. Users create them and then add them to cycles.</p>


        <h1  align="center">Sections</h1>


        <p >TrainMe counts with 4 sections (Explore, Favorites, MyRoutines and Help) you can access on the left navigation menu and a fifth section related to your profile which you can access by clicking your username on the top-right of the webpage (Only if you are already logged in).</p>


      <h2>Explore</h2>
      <p>Here is where you will find all the other routines created by our community. Each routine is unique and has the
        following details:</p>
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

                    <v-card-text>
                      <div>Difficulty: 'Advanced/Expert/Rookie'</div>
                      <div>
                        <rating-stars :routine-rating="3"></rating-stars>
                      </div>
                    </v-card-text>

                    <v-card-actions class="justify-start">


                    </v-card-actions>
                  </v-col>

                  <v-col align="end" align-self="center" cols="3">
                    <main-card-avatar :p-name="'Creator name'"
                                      :pic-src="'https://i.stack.imgur.com/34AD2.jpg'"></main-card-avatar>
                  </v-col>

                </v-row>

              </v-container>
            </template>
          </routine-main-card>
        </v-col>
      </v-container>
      <p>On the bottom right you will find this button: <v-btn fab><v-icon>mdi-order-alphabetical-ascending</v-icon></v-btn> This button will help you order your routines by Name, Difficulty, Date or Score. you can also decide if it is ascending or descending</p>
      <p>You can see more information about each routine by clicking its card, and from there you will land on the
        "Details" page.</p>
      <h2>Routine Detail</h2>
      <p>The image below shows the detail of a routine that one can find on explore which does not belong to me.</p>
      <list>
        <v-list-item-title>Here you can:</v-list-item-title>
        <v-list-item>- Set the current routine as favorite by clicking the heart next to the title</v-list-item>
        <v-list-item>- Review the current routine with the button:   <v-btn rounded outlined>REVIEW</v-btn></v-list-item>
        <v-list-item>- Navigate through the cycles with its corresponding exercises of the routine</v-list-item>
      </list>
      <v-img src="../assets/routineDetail.png"/>



      <h2>My Routines:</h2>
      <p>Here is where you can find all the routines you created and where you create new ones by clicking on:
        <v-btn
            large
            dark class="accent" rounded>
          CREATE ROUTINE
        </v-btn>
      </p>
      <p>(You can choose the color that is displayed to the left of the routine card!)</p>
      <p>This is how one of your routines looks like in this section:</p>
      <v-img src="../assets/myRoutineCard.png"/>

      <p>Check the detail of your routine by clicking
        <v-btn rounded outlined>
          DETAILS
        </v-btn>
      </p>
      <h2>My Own Routine Detail</h2>
      <p>You will notice that this view is slightly different to the detail view of routines from other users.</p>
      <v-list>
        <v-list-item-title>Here you can:</v-list-item-title>
        <v-list-item>On the routine title card. You can edit the routine <v-icon>edit</v-icon>, delete the routine<v-icon>delete</v-icon> or set as favorite <v-icon color="red">mdi-heart</v-icon>.</v-list-item>
        <v-list-item>As regards cycles, you can add new ones <v-btn class="accent" rounded>ADD CYCLE</v-btn>. Or you can edit one <v-btn outlined rounded class="accent white--text"><v-icon>edit</v-icon></v-btn> or Delete one <v-btn rounded outlined><v-icon>delete</v-icon></v-btn></v-list-item>
        <v-list-item>As regards exercises, you can add new ones <v-btn class="accent" rounded><v-icon>add</v-icon></v-btn>. Or you can remove them from the cycle <v-btn rounded outlined><v-icon>delete</v-icon></v-btn></v-list-item>
        <p>IMPORTANT: Exercises can only be created in the Profile section. To add them to a cycle you need to create them first on profile section.</p>
      </v-list>
      <v-img src="../assets/myRoutineDetailView.png"/>
      <h2>Favorites</h2>
      <p>Favorites sections display all the routines you have marked as favorites through time. Routines can be yours or from other users.</p>
      <p>Example of favorite section:</p>
      <v-img src="../assets/favorites.png"/>
      <h2>Profile</h2>
      <p>Here you can see and edit all your personal information: Name, Last Name, Phone number, Email and Profile
        Photo</p>
      <p>You can also view, edit, add and delete the exercises you created.</p>
      <p>Example of profile section:</p>
      <v-img src="../assets/profile.png"/>
    </v-container>
  </div>
</template>

<script>
import ratingStars from "../components/cardComplements/ratingStars";
import MainCardAvatar from "../components/cardComplements/mainCardAvatar";
import ColorPill from "../components/cardComplements/colorPill";
import RoutineMainCard from "../components/mainCard";
import LoginBtn from "../components/loginBtn";
import SignUpBtn from "../components/signUpBtn";


export default {
  name: "settings",
  components: {

    SignUpBtn, LoginBtn, RoutineMainCard, ratingStars, ColorPill, MainCardAvatar}
}
</script>

<style scoped>

</style>