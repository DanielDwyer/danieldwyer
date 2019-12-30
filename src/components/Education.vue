<template>
    <v-container>
      <v-layout row wrap align-center text-center>
        <v-flex xs12>
          <div>
            <div class="display-1 font-weight-bold">
              🎓 Education
            </div>
            <span class="font-weight-thin subtitle-1 green--text">
              Education is the passport to the future, for tomorrow
              belongs to those who prepare for it today.
            </span>
            <br />
            <span class="font-weight-bold subtitle-1 blue--text">
              - Malcolm X
            </span>
            <br />
          </div>
          <v-data-table
            :headers="headers"
            :items="schools"
            :items-per-page="20"
            :hide-default-footer="true"
            :expanded.sync="expanded"
            item-key="name"
            show-expand
            class="elevation-1"
          >
            <template v-slot:item.name="{ item }">
              {{ item.name }}
              <v-chip v-if="item.name === 'Galvanize'" color="green" dark>Certificate</v-chip>
              <v-chip
                v-if="item.imagePath === '../assets/paulsmiths.png'"
                color="blue" dark
              >
                Bachelor's
              </v-chip>
            </template>
            <template v-slot:item.imagePath="{ item }">
              <v-img
                v-if="item.imagePath === '../assets/galvanize.png'"
                :src="require('../assets/galvanize.png')"
                contain
                max-height="10em"
                max-width="10em"
              />
              <v-img
                v-if="item.imagePath === '../assets/paulsmiths.png'"
                :src="require('../assets/paulsmiths.png')"
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
                    v-if="item.imagePath === '../assets/galvanize.png'"
                    :src="require('../assets/galvanize.png')"
                    contain
                    max-height="15em"
                    max-width="15em"
                  />
                  <v-img
                    v-if="item.imagePath === '../assets/paulsmiths.png'"
                    :src="require('../assets/paulsmiths.png')"
                    contain
                    max-height="15em"
                    max-width="15em"
                  />
                  <v-card-text class="text-left">
                    <div>📅{{ item.time }}</div>
                    <p>📍{{ item.location }}</p>
                    <p class="text--primary display-1 font-weight-bold">
                      {{ item.major }}
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
  name: 'Education',
  data: () => ({
    expanded: [{
      name: 'Galvanize',
      imagePath: '../assets/galvanize.png',
      major: 'Full Stack Web Immersive Bootcamp',
      time: "October '16",
      location: 'Fort Collins, Colorado',
      paragraphA: 'Galvanize offered me the skills that when paired with that can do attitude, make any problem solvable. To find success as a developer requires the constant investment in learning new technologies and skills and Galvanize helped me form a foundation of which to build upon.',
      paragraphB: 'On top of having four dedicated instructors, Galvanize presents their students with the opportunity to interact with start ups and successful, proven organizations through their coworking environment. I was inspired by observing the tech businesses, located within the Galvanize coworking space, work through their daily struggles and celebrate their successes. I instantly knew, I was in the right field and right from the start loved working with code.',
    },
    {
      name: "Paul Smith's College",
      imagePath: '../assets/paulsmiths.png',
      major: 'Recreation',
      time: "December '12",
      location: 'Paul Smiths, New York',
      paragraphA: "I received my Bachelor's Degree in December 2012 from Paul Smith' s College, located in the heart of the Adirondacks in Northern New York. Living in the Adirondacks allowed me to pair my studies with the outdoor pursuits that I call passions. I graduated with a 3.93 GPA. I am very proud of the many challenges that I was able to turn into accomplishments during my time in the Adirondacks.",
      paragraphB: "The Adirondacks, home to the 1932 and 1980 Olympics, are home to 46 peaks that top out at 4,000 feet or higher (according to measurements from the 1800’s). There is a club, The 46ers, for folks adventurous enough to summit them all. Proudly, I am member # 6826. Life is the 'Dacks is all about outdoor adventures. Paul Smith’s College mission statement, ‘Its all about the experience‘, couldn’t be more on point. The forests, mountains, and lakes were our classrooms. The scholastic and personal lessons and accomplishments from my time in the Adirondacks have really made me into the man I am today.",
    }],
    singleExpand: false,
    headers: [
      {
        text: 'School',
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
        text: 'Major',
        align: 'left',
        sortable: false,
        value: 'major',
      },
      {
        text: 'Graduated',
        align: 'left',
        sortable: false,
        value: 'time',
      },
    ],
    schools: [
      {
        name: 'Galvanize',
        imagePath: '../assets/galvanize.png',
        major: 'Full Stack Web Immersive Bootcamp',
        time: "October '16",
        location: 'Fort Collins, Colorado',
        paragraphA: 'Galvanize offered me the skills that when paired with that can do attitude, make any problem solvable. To find success as a developer requires the constant investment in learning new technologies and skills and Galvanize helped me form a foundation of which to build upon.',
        paragraphB: 'On top of having four dedicated instructors, Galvanize presents their students with the opportunity to interact with start ups and successful, proven organizations through their coworking environment. I was inspired by observing the tech businesses, located within the Galvanize coworking space, work through their daily struggles and celebrate their successes. I instantly knew, I was in the right field and right from the start loved working with code.',
      },
      {
        name: "Paul Smith's College",
        imagePath: '../assets/paulsmiths.png',
        major: 'Recreation',
        time: "December '12",
        location: 'Paul Smiths, New York',
        paragraphA: "I received my Bachelor's Degree in December 2012 from Paul Smith' s College, located in the heart of the Adirondacks in Northern New York. Living in the Adirondacks allowed me to pair my studies with the outdoor pursuits that I call passions. I graduated with a 3.93 GPA. I am very proud of the many challenges that I was able to turn into accomplishments during my time in the Adirondacks.",
        paragraphB: "The Adirondacks, home to the 1932 and 1980 Olympics, are home to 46 peaks that top out at 4,000 feet or higher (according to measurements from the 1800’s). The is a club, The 46ers, for folks adventurous enough to summit them all. Proudly, I am member # 6826. Life is the 'Dacks is all about outdoor adventures. Paul Smith’s College mission statement, ‘Its all about the experience‘, couldn’t be more on point. The forests, mountains, and lakes were our classrooms. The scholastic and personal lessons and accomplishments from my time in the Adirondacks have really made me into the man I am today.",
      },
    ],
  }),
};
</script>
