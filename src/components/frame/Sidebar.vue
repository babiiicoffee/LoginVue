<template>
  <v-divider>
    <v-card>
      <v-navigation-drawer v-model="drawer" :mini-variant.sync="mini" permanent>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
          </v-list-item-avatar>

          <v-list-item-title>Judilyn But-anon</v-list-item-title>

          <v-btn icon @click.stop="mini = !mini">
            <!-- <v-icon>mdi-chevron-left</v-icon> -->
          </v-btn>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense>
          <v-list-item v-for="item in items" :key="item.title" link>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content> 
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </v-divider>
</template>

<script>
// src/plugins/vuetify.js

import Vue from "vue";
import Vuetify, {
  VCard,
  VRating,
  VToolbar,
  VDivider,
  VNavigationDrawer,
  VListItem,
  VListItemAvatar,VListItemContent,
} from "vuetify/lib";
import { Ripple } from "vuetify/lib/directives";

Vue.use(Vuetify, {
  components: {
    VCard,
    VRating,
    VToolbar,
    VDivider,
    VNavigationDrawer,
    VListItem,
    VListItemAvatar,
    VListItemContent,
  },
  directives: {
    Ripple
  }
});

const opts = {
  name: "sidebar",
  path: "/sidebar",
  data() {
    return {
      drawer: true,
      items: [
        { title: "Home", icon: "mdi-home-city" },
        { title: "My Account", icon: "mdi-account" },
        { title: "Users", icon: "mdi-account-group-outline" }
      ],
      mini: true
    };
  }
};

export default new Vuetify(opts);
// export default {
//   name:'sidebar',
//   path: '/sidebar',
//   data () {
//     return {
//       drawer: true,
//       items: [
//         { title: 'Home', icon: 'mdi-home-city' },
//         { title: 'My Account', icon: 'mdi-account' },
//         { title: 'Users', icon: 'mdi-account-group-outline' },
//       ],
//       mini: true,
//     }
//   },
// }
</script>