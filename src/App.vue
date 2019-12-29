<template id="app">
  <v-app>
    <v-content>
      <HelloWorld />
      <v-divider class="divider" />
      <Welcome />
      <v-divider class="divider" />
      <Experiences />
      <v-divider class="divider" />
      <Skills />
      <v-divider class="divider" />
      <Education />
      <v-divider class="divider" />
      <Portfolio />
      <v-divider class="divider" />
    </v-content>
    <v-footer>
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
</style>
