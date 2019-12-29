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
        <span class="title">
          Venison porchetta tenderloin landjaeger beef filet mignon
          pork chop short loin burgdoggen ham hock sirloin picanha t-bone turducken.
           Drumstick cupim beef ribs strip steak, alcatra ribeye prosciutto kevin.
           T-bone beef ribs bresaola, ham hock short loin fatback shoulder.
           Picanha ground round tail tongue, flank shank doner shoulder venison short
           loin drumstick. Ribeye jerky chislic prosciutto, chuck pork loin turducken jowl.
        </span>
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
