<template>
    <v-container>
        <v-dialog
            v-model="dialog"
            width="500"
            overlay-color="black"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn outlined
                       rounded
                       x-large plain v-bind="attrs"
                       v-on="on"><v-icon>edit</v-icon></v-btn>
            </template>

            <v-card color="white" height="600" rounded>
                <v-card-title>{{title}}</v-card-title>
                <slot name="formSlot" v-on:dialog="dialog=false">
                    Form
                </slot>
            </v-card>

        </v-dialog>
    </v-container>
</template>

<script>
export default {
    components: {},
    data () {
        return {
            dialog: false,
        }
    },
    props: ['title']
}
</script>