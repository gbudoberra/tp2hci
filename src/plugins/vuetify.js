import Vue from "vue";
import Vuetify from "vuetify";
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: false,
        themes: {
            light: {
                primary: '#769FCD',
                secondary: '#BBDEFB',
                accent: '#000000',

            },
            dark:{
                primary: '#011b86',
                secondary: '#0372ab',
                accent: '#ffffff',
            }
        },
    },
});