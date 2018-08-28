<template>
  <v-app id="app">
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-items>
        <v-btn dark flat to="/">Ask IT</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-divider vertical></v-divider>
        <v-btn flat to="/signin">
          <v-icon>exit_to_app</v-icon> Sign In
        </v-btn>
        <v-divider vertical></v-divider>
        <v-btn flat to="/signup">
          <v-icon>person_add</v-icon> Sign Up
        </v-btn>
        <v-divider vertical></v-divider>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer></v-footer>
  </v-app>
</template>

<script>
export default {};
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
