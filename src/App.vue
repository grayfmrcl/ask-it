<template>
  <v-app id="app">
    <v-toolbar color="primary" dark fixed app>
      <v-toolbar-title>Ask IT</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>

        <v-divider vertical></v-divider>
        <v-btn flat
          v-if="!authenticated"
          @click="showAuthDialog('signin')">
          <v-icon>exit_to_app</v-icon>
          Sign In
        </v-btn>

        <v-divider vertical></v-divider>
        <v-btn flat
          v-if="!authenticated"
          @click="showAuthDialog('signup')">
          <v-icon>person_add</v-icon>
          Sign Up
        </v-btn>

        <v-divider vertical></v-divider>
        <v-btn flat
          v-if="authenticated"
          @click="signout">
          <v-icon>settings_power</v-icon>
          Sign Out
        </v-btn>

        <v-divider vertical></v-divider>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view/>
      <AuthDialog ref="authDialog" />
    </v-content>
    <v-footer></v-footer>
  </v-app>
</template>

<script>
import AuthDialog from "@/components/AuthDialog";

export default {
  components: {
    AuthDialog
  },
  methods: {
    showAuthDialog(value) {
      this.$refs.authDialog.setDialog(value);
    },
    signout() {
      this.$store.dispatch("signout");
    }
  },
  computed: {
    authenticated() {
      return this.$store.getters.authenticated;
    }
  }
};
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

.text-capitalize {
  text-transform: capitalize;
}
</style>
