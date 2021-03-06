<template>
  <v-container>
    <v-layout row wrap align-center text-center>
        <v-flex xs12>
          <div>
            <div class="display-1 font-weight-bold">
              👨‍💻 Experiences
            </div>
            <span class="headline blue--text">
              The purpose of life is to live it, to taste experience to the utmost,
              to reach out eagerly and without fear for newer and richer experience.
            </span>
            <br />
            <span class="font-weight-bold headline green--text">
              - Eleanor Roosevelt
            </span>
            <br />
          </div>
          <v-btn
            small
            color="primary"
            class="ma-3"
            @click="expand('all')"
            :disabled="isMainButtonDisabled"
          >
            {{ mainActionText }}
          </v-btn>
          <v-btn
            small
            color="secondary"
            class="ma-3"
            @click="expand('present')"
            :disabled="isSecondaryButtonDisabled"
          >
            {{ secondaryActionText }}
          </v-btn>
          <v-data-table
            :headers="headers"
            :items="companies"
            :items-per-page="20"
            :hide-default-footer="true"
            :expanded.sync="expanded"
            item-key="name"
            show-expand
            class="elevation-1"
          >
            <template v-slot:item.name="{ item }">
              {{ item.name }}
              <v-chip v-if="item.name === 'Flux Work'" color="green" dark>Present Employer</v-chip>
            </template>
            <template v-slot:item.imagePath="{ item }">
              <v-img
                v-if="item.imagePath === '../assets/flux.png'"
                :src="require('../assets/flux.png')"
                contain
                max-height="10em"
                max-width="10em"
              />
              <v-img
                v-if="item.imagePath === '../assets/itemize.jpg'"
                :src="require('../assets/itemize.jpg')"
                contain
                max-height="10em"
                max-width="10em"
              />
              <v-img
                v-if="item.imagePath === '../assets/madwire.svg'"
                :src="require('../assets/madwire.png')"
                contain
                max-height="10em"
                max-width="10em"
              />
            </template>
            <template v-slot:expanded-item="{ item }">
              <td :colspan="12">
                <v-card
                  class="ma-2 pa-5"
                >
                  <v-img
                    v-if="item.imagePath === '../assets/flux.png'"
                    :src="require('../assets/flux.png')"
                    contain
                    max-height="15em"
                    max-width="15em"
                  />
                  <v-img
                    v-if="item.imagePath === '../assets/itemize.jpg'"
                    :src="require('../assets/itemize.jpg')"
                    contain
                    max-height="15em"
                    max-width="15em"
                    class="ma-5"
                  />
                  <v-img
                    v-if="item.imagePath === '../assets/madwire.svg'"
                    :src="require('../assets/madwire.png')"
                    contain
                    max-height="15em"
                    max-width="15em"
                    class="ma-5"
                  />
                  <v-card-text class="text-left">
                    <div>📅{{ item.time }}</div>
                    <p>📍{{ item.location }}</p>
                    <p class="text--primary display-1 font-weight-bold">
                      {{ item.role }}
                    </p>
                    <div class="black--text font-weight-thin subtitle-1">
                      {{ item.paragraphA }}
                      <br />
                      <br />
                      {{ item.paragraphB }}
                    </div>
                  </v-card-text>
                </v-card>
              </td>
            </template>
          </v-data-table>
        </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  name: 'Experiences',
  data: () => ({
    expanded: [],
    mainActionText: 'Expand All',
    isMainButtonDisabled: false,
    secondaryActionText: 'Expand Present Experience',
    isSecondaryButtonDisabled: false,
    singleExpand: false,
    headers: [
      {
        text: 'Experience',
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
        text: 'Role',
        align: 'left',
        sortable: false,
        value: 'role',
      },
      {
        text: 'Period',
        align: 'left',
        sortable: false,
        value: 'time',
      },
    ],
    companies: [
      {
        name: 'Flux Work',
        imagePath: '../assets/flux.png',
        role: 'Full Stack Engineer',
        time: "January '19 to Present",
        location: 'New York, New York',
        paragraphA: 'At Flux, I work on a small, distributed, and growing team (I joined as the fourth engineer). Working within a JavaScript ecosystem, we are building an enterprise-scale modern platform using Vue.js, Node.js, and PostgreSQL; all hosted on AWS. Flux is an employee success platform that enables talent growth and performance through engagement, advocacy and safe, intelligent connection of best-fit employees to the evolving work needs of a business as they happen (aligning the right talent for the right opportunity).',
        paragraphB: 'Having never worked at a start-up before working at Flux, I was thrilled and amazed to see that opportunities are endless -- I can build and develop as much as my heart desires (we gained about 7,000 users in the past year, so there is lots of product to build). The themes of learning and growth have been paramount for me here at Flux. I am blessed to be surrounded by a wise team with a proven track record.',
      },
      {
        name: 'Itemize',
        imagePath: '../assets/itemize.jpg',
        role: 'Lead React Developer',
        time: '2018',
        location: 'New York, New York',
        paragraphA: "Upon arriving in New York City, I contracted to work for Itemize, a financial technology AI data extraction operation. The project I oversaw, Itemize Retriever, consisted of planning and implementing a web-based platform (Node.js and React.js) that crawls (eliminating the need for the user to take action) Itemize user’s machines for incoming expenses, i.e. receipts and folios, and adding the functionality to allow  for the bulk uploading of expense documents. Those expenses, existing in various formats, have their values extracted, captured, and then made available in the desired format of the user. I managed two offshore resources who assisted with the project's development.",
        paragraphB: '',
      },
      {
        name: 'Madwire Media',
        imagePath: '../assets/madwire.svg',
        role: 'Full Stack Developer',
        time: 'October 2016 to June 2018',
        location: 'Fort Collins, Colorado',
        paragraphA: 'Before relocating to NYC, and fresh out of bootcamp, I began my journey in technology as a Junior Full Stack Developer at Madwire Media in Fort Collins, Colorado. Madwire Media is a digital marketing agency specializing in custom software solutions for small to medium-sized businesses. On a team of about 35 developers, we took lots of pride in our language agnostic Agile development environment, which gives the developer the freedom to choose which technology to use on a per-project basis. My passion and expertise at Madwire became building and consuming servers and APIs using Node.js and Express.js.',
        paragraphB: 'Just like my current employer Flux, Madwire is undergoing very fast-paced growth, both in terms of our customer base and employees. I was able to leverage Madwire’s growth, by taking on projects that at another company would be reserved for someone my senior, and make numerous significant contributions to enterprise-level software solutions while building my  foundation as a developer.',
      },
    ],
  }),
  watch: {
    expanded() {
      const expandedNames = this.expanded.map(c => c.name);
      if (expandedNames.includes('Flux Work') && this.expanded.length === 1) {
        this.secondaryActionText = 'Close Present Experience';
        this.mainActionText = 'Expand All';
      } else if (expandedNames.includes('Flux Work') && this.expanded.length > 1) {
        this.secondaryActionText = 'Close Present Experience';
        this.mainActionText = 'Close All';
      } else {
        this.secondaryActionText = 'Expand Present Experience';
        this.mainActionText = 'Expand All';
      }
    },
  },
  methods: {
    expand(value) {
      if (value === 'all') {
        if (this.mainActionText === 'Expand All') {
          this.mainActionText = 'Close All';
          this.expanded = this.companies;
          this.isSecondaryButtonDisabled = true;
        } else if (this.mainActionText === 'Close All') {
          this.mainActionText = 'Expand All';
          this.expanded = [];
          this.isSecondaryButtonDisabled = false;
        }
      } else if (value === 'present') {
        if (this.secondaryActionText === 'Expand Present Experience') {
          this.secondaryActionText = 'Close Present Experience';
          this.expanded = [this.companies[0]];
        } else if (this.secondaryActionText === 'Close Present Experience') {
          this.secondaryActionText = 'Expand Present Experience';
          this.expanded = [];
        }
      }
    },
  },
};
</script>

<style>
.v-data-table-header-mobile__wrapper {
  display: none;
}
</style>
