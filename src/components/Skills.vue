<template>
    <v-container>
      <v-layout row wrap align-center text-center>
        <v-flex xs12>
          <div>
            <span class="display-1 font-weight-bold">
              Skills
            </span>
            <span class="font-weight-thin subtitle-1">
              Ignorance and bungling with love are better than wisdom and skill without.
            </span>
            <br />
            <span class="font-weight-bold subtitle-1">
              - Henry David Thoreau
            </span>
            <br />
            <span class="title" style="color: gray">
              These are the tools and technologies I am skilled at
            </span>
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
                v-if="item.imagePath === '../assets/vue.svg'"
                :src="require('../assets/vue.svg')"
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
        name: 'AWS',
        imagePath: '../assets/aws.svg',
        fact: 'AWS was launched in July of 2002. The first public facing service was SQS in November 2004.',
      },
      {
        name: 'React',
        imagePath: '../assets/react.svg',
        fact: 'React grew out of the need at Facebook to have a more efficent, modularized, and component driven codebase.',
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
        fact: "Node.js's goal is to “provide an easy way to build scalable network programs”",
      },
      {
        name: 'Vue',
        imagePath: '../assets/vue.svg',
        fact: 'Vue is known to be super easy to learn.',
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
        fact: 'Before we had windows, we had the command line.',
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
    ],
  }),
};
</script>
