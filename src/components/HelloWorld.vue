<template class="hello">
  <!-- <v-container fill-height grid-list-md> -->
  <v-container>
    <v-layout row wrap align-center text-center>
      <v-flex xs12 sm3>
        <h1 class="display-1 font-weight-thin my-5">
          👋 Hello World 🌎
        </h1>
      </v-flex>
      <v-flex xs12 sm6>
        <v-img
          alt="Daniel Dwyer"
          :src="require('../assets/full.gif')"
          contain
        />
        <!-- TODO move v-list into modules directory (currently does not exist) -->
        <v-list
          color="#fafafa"
          dense
          :style="roleADexStyle"
        >
          <v-list-item >
            <v-list-item-icon
              @click="showPhone = !showPhone"
            >
              <v-icon color="primary">mdi-phone</v-icon>
            </v-list-item-icon>

            <v-list-item-content
              v-if="showPhone"
            >
              <v-list-item-title>(970) 231-6297</v-list-item-title>
              <v-list-item-subtitle>Mobile</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-content
              v-if="!showPhone"
            >
              <v-list-item-subtitle>
                click <v-icon
                  color="secondary"
                  @click="showPhone = !showPhone"
                >
                  mdi-phone
                </v-icon> to expand
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider inset></v-divider>

          <v-list-item >
            <v-list-item-icon
              @click="showEmail = !showEmail"
            >
              <v-icon color="primary">mdi-email</v-icon>
            </v-list-item-icon>

            <v-list-item-content
              v-if="showEmail"
            >
              <v-list-item-title>danielpatrickdwyer@gmail.com</v-list-item-title>
              <v-list-item-subtitle>Personal</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-content
              v-if="!showEmail"
            >
              <v-list-item-subtitle>
                click <v-icon
                        color="secondary"
                        @click="showEmail = !showEmail"
                      >
                        mdi-email
                      </v-icon> to expand
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider inset></v-divider>

          <v-list-item >
            <v-list-item-icon
              @click="showAddress = !showAddress"
            >
              <v-icon color="primary">mdi-map-marker</v-icon>
            </v-list-item-icon>

            <v-list-item-content
              v-if="showAddress"
            >
              <v-list-item-title>East 117th Street</v-list-item-title>
              <v-list-item-subtitle>New York, New York 10035</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-content
              v-if="!showAddress"
            >
              <v-list-item-subtitle>
                click <v-icon
                        color="secondary"
                        @click="showAddress = !showAddress"
                      >
                        mdi-map-marker
                      </v-icon> to expand
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <span
          v-if="showPhone ===false && showEmail === false && showAddress === false"
          class="subtitle-2"
          @click="showPhone = true;showEmail = true;showAddress = true;"
        >
          expand all
          <v-icon
            color="secondary"
          >
           mdi-phone
          </v-icon>
          <v-icon
            color="secondary"
          >
           mdi-email
          </v-icon>
          <v-icon
            color="secondary"
          >
           mdi-map-marker
          </v-icon>
        </span>
      </v-flex>
      <v-flex xs12 sm3>
        <h1 class="display-1 font-weight-thin my-5">
          I'm Daniel Dwyer
        </h1>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data: () => ({
    showPhone: false,
    showEmail: false,
    showAddress: false,
    roleADexStyle: 'border-top-left-radius: 0;border-top-right-radius: 0;border: 4px solid #2196F3; border-top: 0;border-right: 6px solid #4CAF50;',
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.example-class {
  color: red;
}
</style>
