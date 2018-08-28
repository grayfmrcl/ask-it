<template>
  <v-card-text>
    <v-flex 
      xs12
      v-if="registered"
    >
      <v-card-title class="title">Registration complete.</v-card-title>
      <v-card-title class="subheading">You can login now</v-card-title>
      <v-btn
        color="active"
        dark
        block
        @click="$emit('signupSuccess')"
      >OK</v-btn>
    </v-flex>
    <v-flex 
      xs12
      v-else
    >
        <v-flex d-flex justify-start>
        <div class="subheading text-xs-left font-weight-bold">Sign Up</div>
      </v-flex>
      <v-flex mb-4 mx-4>
        <v-flex pt-2>
          <v-btn block class="text-capitalize">Sign Up using Facebook</v-btn>
        </v-flex>
        <v-flex pt-2>
          <v-btn block class="text-capitalize">Sign Up using Google</v-btn>
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
            {{error.message}}
        </v-alert>
          <v-text-field
            v-model="name"
            prepend-inner-icon="perm_identity"
            placeholder="Name"
            autofocus
            single-line
            outline
            required
            color="active"
          ></v-text-field>
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
            color="active" 
            dark 
            block
            class="text-capitalize"
            @click="submit"
          >Create My Account</v-btn>
        </v-form>
        <div class="pt-3">
          <p>
            Already have an account?
            <a class="active--text" @click="$emit('toSignIn')">
              Sign In
            </a> 
            here
          </p>
        </div>
      </v-flex>
    </v-flex>
  </v-card-text>
</template>

<script>
export default {
  name: "SignUpForm",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      errors: {},
      registered: false
    };
  },
  methods: {
    submit() {
      this.$store
        .dispatch("signup", {
          name: this.name,
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.registered = true;
        })
        .catch(err => {
          console.log(err);
          if (err.response.status === 400) {
            this.errors = err.response.data;
          } else {
            console.log(err);
          }
        });
    }
  }
};
</script>

<style>
</style>
