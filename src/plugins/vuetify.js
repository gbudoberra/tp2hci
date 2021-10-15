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
                primary: '#009688',
                secondary: '#607D8B',
                accent: '#004D40',

            },
            dark:{
                primary: '#011b86',
                secondary: '#0372ab',
                accent: '#ffffff',
            }
        },
    },
});