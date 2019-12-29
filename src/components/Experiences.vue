<template>
  <v-container>
    <v-layout row wrap align-center text-center>
        <v-flex xs12>
          <div>
            <span class="display-1 font-weight-bold">
              Experiences
            </span>
            <span class="font-weight-thin subtitle-1">
              The purpose of life is to live it, to taste experience to the utmost,
              to reach out eagerly and without fear for newer and richer experience.
            </span>
            <br />
            <span class="font-weight-bold subtitle-1">
              - Eleanor Roosevelt
            </span>
            <br />
            <span class="title" style="color: gray">
              These experiences have made me who I am
            </span>
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
            :disabled="isSeecondaryButtonDisabled"
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
    isSeecondaryButtonDisabled: false,
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
        paragraphA: 'Alcatra pastrami hamburger pork belly. Rump short ribs meatloaf chislic doner beef salami buffalo. Strip steak andouille capicola leberkas spare ribs salami. Pork andouille spare ribs cupim, frankfurter tail turducken capicola flank corned beef tongue. Chislic porchetta chuck hamburger cow beef.',
        paragraphB: 'Alcatra pastrami hamburger pork belly. Rump short ribs meatloaf chislic doner beef salami buffalo. Strip steak andouille capicola leberkas spare ribs salami. Pork andouille spare ribs cupim, frankfurter tail turducken capicola flank corned beef tongue. Chislic porchetta chuck hamburger cow beef.',
      },
      {
        name: 'Itemize',
        imagePath: '../assets/itemize.jpg',
        role: 'Lead React Developer',
        time: '2018',
        location: 'New York, New York',
        paragraphA: 'Alcatra pastrami hamburger pork belly. Rump short ribs meatloaf chislic doner beef salami buffalo. Strip steak andouille capicola leberkas spare ribs salami. Pork andouille spare ribs cupim, frankfurter tail turducken capicola flank corned beef tongue. Chislic porchetta chuck hamburger cow beef.',
        paragraphB: 'Alcatra pastrami hamburger pork belly. Rump short ribs meatloaf chislic doner beef salami buffalo. Strip steak andouille capicola leberkas spare ribs salami. Pork andouille spare ribs cupim, frankfurter tail turducken capicola flank corned beef tongue. Chislic porchetta chuck hamburger cow beef.',
      },
      {
        name: 'Madwire Media',
        imagePath: '../assets/madwire.svg',
        role: 'Full Stack Developer',
        time: 'October 2016 to June 2018',
        location: 'Fort Collins, Colorado',
        paragraphA: 'Alcatra pastrami hamburger pork belly. Rump short ribs meatloaf chislic doner beef salami buffalo. Strip steak andouille capicola leberkas spare ribs salami. Pork andouille spare ribs cupim, frankfurter tail turducken capicola flank corned beef tongue. Chislic porchetta chuck hamburger cow beef.',
        paragraphB: 'Alcatra pastrami hamburger pork belly. Rump short ribs meatloaf chislic doner beef salami buffalo. Strip steak andouille capicola leberkas spare ribs salami. Pork andouille spare ribs cupim, frankfurter tail turducken capicola flank corned beef tongue. Chislic porchetta chuck hamburger cow beef.',
      },
    ],
  }),
  methods: {
    expand(value) {
      if (value === 'all') {
        if (this.mainActionText === 'Expand All') {
          this.mainActionText = 'Close All';
          this.expanded = this.companies;
          this.isSeecondaryButtonDisabled = true;
        } else if (this.mainActionText === 'Close All') {
          this.mainActionText = 'Expand All';
          this.expanded = [];
          this.isSeecondaryButtonDisabled = false;
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
