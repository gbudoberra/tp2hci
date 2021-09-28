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
                primary: '#BBDEFB',
                secondary: '#769FCD',
                accent: '#000000',

            },
            dark:{
                primary: '#01135e',
                secondary: '#0372ab',
                accent: '#ffffff',
            }
        },
    },
});