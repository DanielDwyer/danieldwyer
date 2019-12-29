<template>
    <v-container>
      <v-layout row wrap align-center text-center>
        <v-flex xs12>
          <div>
            <span class="display-1 font-weight-bold">
              My Portfolio
            </span>
            <span class="font-weight-thin subtitle-1">
              Management is doing things right; leadership is doing the right things.
            </span>
            <br />
            <span class="font-weight-bold subtitle-1">
              - Peter F. Drucker
            </span>
            <br />
            <br />
            <span class="title" style="color: gray">
              These  are the projects to which I have made my largest contributions
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
        text: 'Description (click a logo to visit)',
        align: 'left',
        sortable: false,
        value: 'fact',
      },
    ],
    projects: [
      {
        name: 'Flux Mobility',
        imagePath: '../assets/flux.png',
        fact: 'Flux is an employee success platform that enables talent growth by identifying talents skills and experiences and then placing that talent in correspondding roles and projects. I have helped build the platform from the ground up! ',
      },
      {
        name: 'Itemize Retriever',
        imagePath: '../assets/itemize.jpg',
        fact: "Itemize's Retriever is summed up as: 'Itemize Retriever is a friendly, easy-to-use automated invoice and payables system that simplifies tedious and time-consuming manual data entry.' I was responsible for the front end development lifecycle from creation to launch.",
      },
      {
        name: 'Top Rated Local®',
        imagePath: '../assets/topRatedLocal.png',
        fact: "The Top Rated Local® motto is: 'Everyday, we analyze ratings & reviews from hundreds of verified review sites online and then rank businesses based on their overall Rating Score™. This allows you to quickly and confidently find the truly Top Rated Local® businesses in your area.' I contributed the core functionality that, operating via queueing systems, would aggregate and normalize the ratings (internet wide) for a particular business.",
      },
      {
        name: 'Marketing 360®',
        imagePath: '../assets/marketing360.png',
        fact: "The Marketing 360® motto is: 'The #1 marketing platform® for small business. Everything You Need to Grow Your Business. Fuel your brand® with the #1 marketing platform® for small business. Best part is, we do everything for you.' I worked on integrating a UTM tracking script within a variety of e-commerce platforms that are managed by Marketing 360®.",
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
