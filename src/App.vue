<template id="app">
  <v-app>
    <v-content>
      <HelloWorld />
      <v-divider class="divider" />
      <Welcome />
      <v-divider class="divider" />
      <Experiences />
      <div @click="scrollTo" class="top">
        TOP<v-icon color="primary">mdi-apple-keyboard-shift</v-icon>
      </div>
      <v-divider class="divider-special" />
      <Skills />
      <div @click="scrollTo" class="top">
        TOP<v-icon color="primary">mdi-apple-keyboard-shift</v-icon>
      </div>
      <v-divider class="divider-special" />
      <Portfolio />
      <div @click="scrollTo" class="top">
        TOP<v-icon color="primary">mdi-apple-keyboard-shift</v-icon>
      </div>
      <v-divider class="divider-special" />
      <Education />
      <div @click="scrollTo" class="top">
        TOP<v-icon color="primary">mdi-apple-keyboard-shift</v-icon>
      </div>
    </v-content>
    <v-footer color="secondary" class="display-1 font-weight-thin">
      <span>DPD</span>
      <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Welcome from './components/Welcome.vue';
import Experiences from './components/Experiences.vue';
import Skills from './components/Skills.vue';
import Education from './components/Education.vue';
import Portfolio from './components/Portfolio.vue';

export default {
  name: 'app',
  components: {
    HelloWorld,
    Welcome,
    Experiences,
    Skills,
    Education,
    Portfolio,
  },
  methods: {
    scrollTo() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: white;
}
.divider {
  margin: 7.5em;
}
.divider-special {
  margin: 0 7.5em 7.5em 7.5em;
}
.top {
  padding-top: 7.5em;
}
</style>
