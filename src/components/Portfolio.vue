<template>
    <v-container>
      <v-layout row wrap align-center text-center>
        <v-flex xs12>
          <div>
            <span class="display-1 font-weight-bold">
              My Portfolio
            </span>
            <span class="font-weight-thin subtitle-1">
              Brisket boudin short loin tail cupim. Kevin doner pig venison meatball.
              Pork pastrami salami sausage, meatloaf brisket chicken pork loin landjaeger
              andouille kevin pancetta. Shank spare ribs chuck picanha fatback pork belly
              chicken drumstick tongue pork chop kielbasa. Swine pork loin cupim chislic
              hamburger pig jerky tail. Turkey chicken pig shank porchetta ribeye
              cupim pork chop salami flank prosciutto.
            </span>
          </div>
          <v-data-table
            :headers="headers"
            :items="projects"
            :items-per-page="20"
            :hide-default-footer="true"
            class="elevation-1"
          >
            <template v-slot:item.imagePath="{ item }">
              <v-img
                v-if="item.imagePath === '../assets/flux.png'"
                :src="require('../assets/flux.png')"
                contain
                max-height="10em"
                max-width="10em"
                @click="openProject('https://www.fluxwork.co/')"
              />
              <v-img
                v-if="item.imagePath === '../assets/itemize.jpg'"
                :src="require('../assets/itemize.jpg')"
                contain
                max-height="10em"
                max-width="10em"
                @click="openProject('https://itemize.com/automated-accounts-itemize-retriever/')"
              />
              <v-img
                v-if="item.imagePath === '../assets/topRatedLocal.png'"
                :src="require('../assets/topRatedLocal.png')"
                contain
                max-height="10em"
                max-width="10em"
                @click="openProject('https://www.topratedlocal.com/')"
              />
              <v-img
                v-if="item.imagePath === '../assets/marketing360.png'"
                :src="require('../assets/marketing360.png')"
                contain
                max-height="10em"
                max-width="10em"
                @click="openProject('https://www.marketing360.com/')"
              />
            </template>
          </v-data-table>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
export default {
  name: 'Portfolio',
  data: () => ({
    headers: [
      {
        text: 'Name',
        align: 'left',
        sortable: false,
        value: 'name',
      },
      {
        text: '',
        align: 'left',
        sortable: false,
        value: 'imagePath',
      },
      {
        text: 'Description',
        align: 'left',
        sortable: false,
        value: 'fact',
      },
    ],
    projects: [
      {
        name: 'Flux Mobility',
        imagePath: '../assets/flux.png',
        fact: 'Bacon ipsum dolor amet biltong brisket tenderloin, rump filet mignon jowl hamburger shoulder landjaeger corned.',
      },
      {
        name: 'Itemize Retriever',
        imagePath: '../assets/itemize.jpg',
        level: '⭐⭐⭐⭐',
        fact: 'AWS was launched in July of 2002. The first public facing service was SQS in November 2004.',
      },
      {
        name: 'Top Rated Local®',
        imagePath: '../assets/topRatedLocal.png',
        level: '⭐⭐⭐⭐',
        fact: 'React grew out of the need at Facebook to have a more efficent, modularized, and component driven codebase.',
      },
      {
        name: 'Marketing 360®',
        imagePath: '../assets/marketing360.png',
        level: '⭐⭐⭐⭐',
        fact: "Jira 1.0 was launched in 2002 as an issue tracker. It was paid for with $10,000 of credit card debt by it's two founders",
      },
    ],
  }),
  methods: {
    openProject(projectPath) {
      window.open(projectPath, '_blank');
    },
  },
};
</script>
