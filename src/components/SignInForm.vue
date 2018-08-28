<template>
  <v-card-text>
    <v-flex d-flex justify-start>
      <div class="subheading text-xs-left font-weight-bold">Sign In</div>
    </v-flex>
    <v-flex mb-4 mx-4>
      <v-flex pt-2>
        <v-btn block class="text-capitalize">Sign In using Facebook</v-btn>
      </v-flex>
      <v-flex pt-2>
        <v-btn block class="text-capitalize">Sign In using Google</v-btn>
      </v-flex>
    </v-flex>
    <v-divider></v-divider>
    <v-flex my-4 mx-4>
      <v-form>
        <v-alert
          color="error"
          icon="warning"
          outline
          v-for="(error, index) in errors"
          :key="index"
          :value="error"
          style="border:none !important"
        >
          {{error}}
        </v-alert>
        <v-text-field
          type="email"
          v-model="email"
          prepend-inner-icon="mail"
          placeholder="Email"
          autofocus
          single-line
          outline
          required
          color="active"
        ></v-text-field>
        <v-text-field
          type="password"
          v-model="password"
          prepend-inner-icon="lock"
          placeholder="Password"
          single-line
          outline
          required
          color="active"
        ></v-text-field>
        <v-btn 
          block
          dark
          color="active"
          class="text-capitalize"
          :loading="pending"
          :disabled="pending"
          @click="submit"
        >
          Sign In
          <v-progress-circular
            slot="loader"
            color="active"
            indeterminate
          ></v-progress-circular>
        </v-btn>
      </v-form>
      <div class="pt-3">
        <p>
          Doesn't have an account?
          <a class="active--text" @click="$emit('toSignUp')">
            Sign Up
          </a> 
          here
        </p>
      </div>
    </v-flex>
  </v-card-text>
</template>

<script>
export default {
  name: "SignInForm",
  data() {
    return {
      email: "",
      password: "",
      errors: {}
    };
  },
  methods: {
    submit() {
      this.$store
        .dispatch("signin", {
          email: this.email,
          password: this.password
        })
        .catch(err => {
          if (err.response.status === 400) {
            this.errors = err.response.data;
          } else {
            console.log(err);
          }
        });
    }
  },
  computed: {
    pending() {
      return this.$store.getters.pending;
    },
    authenticated() {
      return this.$store.getters.authenticated;
    }
  }
};
</script>

<style>
</style>
