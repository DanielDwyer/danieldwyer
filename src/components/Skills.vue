<template>
    <v-container>
      <v-layout row wrap align-center text-center>
        <v-flex xs12>
          <div>
            <div class="display-1 font-weight-bold">
              🤹🏽 Skills
            </div>
            <span class="font-weight-thin subtitle-1 green--text">
              Ignorance and bungling with love are better than wisdom and skill without.
            </span>
            <br />
            <span class="font-weight-bold subtitle-1 blue--text">
              - Henry David Thoreau
            </span>
            <br />
          </div>
          <v-data-table
            :headers="headers"
            :items="technologies"
            :items-per-page="20"
            :hide-default-footer="true"
            class="elevation-1"
          >
            <template v-slot:item.imagePath="{ item }">
              <v-img
                v-if="item.imagePath === '../assets/javascript.svg'"
                :src="require('../assets/javascript.svg')"
                contain
                max-height="5em"
                max-width="5em"
              />
              <v-img
                v-if="item.imagePath === '../assets/aws.svg'"
                :src="require('../assets/aws.svg')"
                contain
                max-height="5em"
                max-width="5em"
              />
              <v-img
                v-if="item.imagePath === '../assets/react.svg'"
                :src="require('../assets/react.svg')"
                contain
                max-height="5em"
                max-width="5em"
              />
              <v-img
                v-if="item.imagePath === '../assets/npm.svg'"
                :src="require('../assets/npm.svg')"
                contain
                max-height="5em"
                max-width="5em"
              />
              <v-img
                v-if="item.imagePath === '../assets/cypress.svg'"
                :src="require('../assets/cypress.svg')"
                contain
                max-height="5em"
                max-width="5em"
              />
              <v-img
                v-if="item.imagePath === '../assets/atlassian.svg'"
                :src="require('../assets/atlassian.svg')"
                contain
                max-height="5em"
                max-width="5em"
              />
              <v-img
                v-if="item.imagePath === '../assets/knex.svg'"
                :src="require('../assets/knex.svg')"
                contain
                max-height="5em"
                max-width="5em"
              />
              <v-img
                v-if="item.imagePath === '../assets/nodejs.svg'"
                :src="require('../assets/nodejs.svg')"
                contain
                max-height="5em"
                max-width="5em"
              />
              <v-img
                v-if="item.imagePath === '../assets/express.svg'"
                :src="require('../assets/express.svg')"
                contain
                max-height="5em"
                max-width="5em"
              />
              <v-img
                v-if="item.imagePath === '../assets/vue.svg'"
                :src="require('../assets/vue.svg')"
                contain
                max-height="5em"
                max-width="5em"
              />
              <v-img
                v-if="item.imagePath === '../assets/vuetifyjs.svg'"
                :src="require('../assets/vuetifyjs.svg')"
                contain
                max-height="5em"
                max-width="5em"
              />
              <v-img
                v-if="item.imagePath === '../assets/docker.svg'"
                :src="require('../assets/docker.svg')"
                contain
                max-height="5em"
                max-width="5em"
              />
              <v-img
                v-if="item.imagePath === '../assets/bitbucket.svg'"
                :src="require('../assets/bitbucket.svg')"
                contain
                max-height="5em"
                max-width="5em"
              />
              <v-img
                v-if="item.imagePath === '../assets/postgresql.svg'"
                :src="require('../assets/postgresql.svg')"
                contain
                max-height="5em"
                max-width="5em"
              />
              <v-img
                v-if="item.imagePath === '../assets/linux.svg'"
                :src="require('../assets/linux.svg')"
                contain
                max-height="5em"
                max-width="5em"
              />
              <v-img
                v-if="item.imagePath === '../assets/git.svg'"
                :src="require('../assets/git.svg')"
                contain
                max-height="5em"
                max-width="5em"
              />
              <v-img
                v-if="item.imagePath === '../assets/github.svg'"
                :src="require('../assets/github.svg')"
                contain
                max-height="5em"
                max-width="5em"
              />
              <v-img
                v-if="item.imagePath === '../assets/mocha.svg'"
                :src="require('../assets/mocha.svg')"
                contain
                max-height="5em"
                max-width="5em"
              />
            </template>
          </v-data-table>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
export default {
  name: 'Skills',
  data: () => ({
    headers: [
      {
        text: 'Technology',
        align: 'left',
        sortable: false,
        value: 'name',
      },
      {
        text: '',
        align: 'center',
        sortable: false,
        value: 'imagePath',
      },
      {
        text: 'Fun Fact',
        align: 'left',
        sortable: false,
        value: 'fact',
      },
    ],
    // add: NPM
    // add section named 'want to learn', include: python
    technologies: [
      {
        name: 'JavaScript',
        imagePath: '../assets/javascript.svg',
        fact: 'Brendan Eich wrote the prototype for JavaScript in 10 days.',
      },
      {
        name: 'React',
        imagePath: '../assets/react.svg',
        fact: 'React grew out of the need at Facebook to have a more efficent, modularized, and component driven codebase.',
      },
      {
        name: 'Node Package Manager (NPM)',
        imagePath: '../assets/npm.svg',
        fact: 'More than one billion packages are downloaded each day.',
      },
      {
        name: 'Cypress.io',
        imagePath: '../assets/cypress.svg',
        fact: 'Cypress is a next generation front end testing tool built for the modern web. We address the key pain points developers and QA engineers face when testing modern applications.',
      },
      {
        name: 'Atlassian',
        imagePath: '../assets/atlassian.svg',
        fact: "Jira 1.0 was launched in 2002 as an issue tracker. It was paid for with $10,000 of credit card debt by it's two founders",
      },
      {
        name: 'Knex',
        imagePath: '../assets/knex.svg',
        fact: 'Knex.js is a query builder for relational databases including PostgreSQL, MySQL, SQLite3, and Oracle. It can be used with callbacks and promises. It supports transactions and connection pooling.',
      },
      {
        name: 'Node',
        imagePath: '../assets/nodejs.svg',
        fact: "Node.js's goal is to “provide an easy way to build scalable network programs”.",
      },
      {
        name: 'Express.js',
        imagePath: '../assets/express.svg',
        fact: 'Express.js has 6,029,250 weekly downloads, on NPM alone.',
      },
      {
        name: 'AWS',
        imagePath: '../assets/aws.svg',
        fact: 'AWS was launched in July of 2002. The first public facing service was SQS in November 2004.',
      },
      {
        name: 'Vue',
        imagePath: '../assets/vue.svg',
        fact: 'Vue.js is a progressive framework for JavaScript used to build web interfaces and one-page applications. Not just for web interfaces, Vue.js is also used both for desktop and mobile app development with Electron framework.',
      },
      {
        name: 'Vuetify',
        imagePath: '../assets/vuetifyjs.svg',
        fact: 'Vuetify is an open source MIT project for building user interfaces for web and mobile applications on top of the Vue.js framework.',
      },
      {
        name: 'Docker',
        imagePath: '../assets/docker.svg',
        fact: 'The average lifespan of a Docker container is two days.',
      },
      {
        name: 'Bit Bucket',
        imagePath: '../assets/bitbucket.svg',
        fact: 'Founded in 2008, BitBucket already has over 10 million users.',
      },
      {
        name: 'PostgreSQL',
        imagePath: '../assets/postgresql.svg',
        fact: 'Thanks to Generalized Search Tree (GiST) indexing, PostgreSQL users can create custom data types that allow them to decide what to store and how to store it.',
      },
      {
        name: 'Linux (Command Line)',
        imagePath: '../assets/linux.svg',
        fact: 'There is no place like ~.',
      },
      {
        name: 'Git',
        imagePath: '../assets/git.svg',
        fact: 'Git was created by Linus Torvalds in 2005 for development of the Linux kernel.',
      },
      {
        name: 'Git Hub',
        imagePath: '../assets/github.svg',
        fact: 'Microsoft aquired Github in 2018 for 7.5 billion dollars.',
      },
      {
        name: 'Mocha',
        imagePath: '../assets/mocha.svg',
        fact: 'Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases',
      },
    ],
  }),
};
</script>
