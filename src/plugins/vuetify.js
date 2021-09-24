import Vue from "vue";
import Vuetify from "vuetify";
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: true,
        themes: {
            light: {
                primary: '#0e6aef',
                secondary: '#009688',
                accent: '#f403e0',
            },
            dark:{
                primary: '#4159d2',
                secondary: '#03a9f4',
                accent: '#00ffff',
            }
        },
    },
});