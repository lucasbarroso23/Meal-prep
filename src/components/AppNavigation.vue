<template>
  <span>
    <v-navigation-drawer
      app
      v-model="drawer"
      class="brown lighten-2"
      dark
      disable-resize-watcher
    >
      <v-list>
        <template v-for="(item, index) in items">
          <v-list-tile :key="index">
            <v-list-tile-content>
              {{ item.title }}
            </v-list-tile-content>
          </v-list-tile>
          <v-divider :key="`divider-${index}`"></v-divider>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app color="brown darken-4" dark>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <router-link to="/">
        <v-toolbar-title>{{ appTitle }}</v-toolbar-title>
      </router-link>
      <v-btn class="hidden-sm-and-down" to="/menu" flat>Menu</v-btn>
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <v-btn class="hidden-sm-and-down" to="/sign-in" flat>SIGN IN</v-btn>
      <v-btn class="hidden-sm-and-down" color="brown lighten-3" to="/join"
        >JOIN</v-btn
      >
    </v-toolbar>
  </span>
</template>

<script>
export default {
  name: 'AppNavigation',
  data() {
    return {
      appTitle: 'MealPrep',
      drawer: false,
      items: [{ title: 'Menu' }, { title: 'Sign In' }, { title: 'Join' }],
    };
  },
};
</script>

<style scoped>
a {
  color: white !important;
  text-decoration: none;
}
</style>
