<template class="hello">
  <!-- <v-container fill-height grid-list-md> -->
  <v-container grid-list-md>
    <v-layout row wrap align-center text-center>
      <v-flex xs12>
        <div>
          <span class="welcome-1">Welcome </span>
          <span class="welcome-2">歡迎光臨  </span>
          <span class="welcome-3">Bienvenue </span>
          <span class="welcome-4">Aloha </span>
          <span class="welcome-5">ようこそ </span>
          <span class="welcome-6">Bienvenido </span>
          <span class="welcome-7">Maeva </span>
          <span class="welcome-8">ཕེབས་པར་དགའ་བསུ་ཞུ།  </span>
          <span class="welcome-9">Ngiyakwemukela </span>
          <span class="welcome-10">Bine ai venit </span>
          <span class="welcome-11">Добро пожаловать! </span>
          <span class="welcome-12">Velkommen </span>
        </div>
        <br />
        <div class="title">
          Hey there, I am glad you stopped by.
          My contact information, if needed, is listed above, feel
          free to reach out, I would love to hear from you. My intention for this
          website is to showcase the skills and experiences I have gained while working
          as a Full Stack JavaScript Developer. As you will see, I love getting my hands
          dirty with both back and front end challenges. In my almost four years working
          as a Full Stack developer, I have been able to contribute to a large variety of
          codebases, utilize fun and exciting frameworks and libraries, and most
          importantly work with some great and passionate folks. With a can-do attitude,
          the right team, and a proper
          culture any problem can be a joy to solve.
        </div>
        <br />
        <div class="title">
          When I am not crushing some code at Flux Work in New York City,
          I am most likely spending time with my
          lovely wife Lydia and our two year old black lab-mix, Marcy.
          My hobbies include table tennis, traveling, cycling, music, and hiking.
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Welcome',
  props: {
    msg: String,
  },
  data: () => ({}),
  created() {
    // TODO fun CSS/DOM Manip. with welcome texts
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.example-class {
  color: red;
}
</style>
