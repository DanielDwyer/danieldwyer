import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: '#2196F3',
        secondary: '#4CAF50',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#ee44aa',
        success: '#424242',
        warning: '#FFC107',
      },
    },
  },
});
