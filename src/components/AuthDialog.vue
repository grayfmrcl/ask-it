<template>
  <v-dialog 
    v-model="dialog" 
    max-width="500">
    <v-card>
      <SignInForm 
        v-if="signinForm" 
        @toSignUp="setDialog('signup')"
      />
      <SignUpForm 
        v-if="signupForm"
        @signupSuccess="closeDialog"
        @toSignIn="setDialog('signin')"
      />
    </v-card>
  </v-dialog>
</template>

<script>
import SignInForm from "@/components/SignInForm";
import SignUpForm from "@/components/SignUpForm";

export default {
  name: "AuthDialog",
  components: {
    SignInForm,
    SignUpForm
  },
  data() {
    return {
      signinForm: false,
      signupForm: false,
      dialog: false,
      snackbar: false
    };
  },
  methods: {
    setDialog(value) {
      switch (value) {
        case "signin":
          this.dialog = true;
          this.signupForm = false;
          this.signinForm = true;
          break;
        case "signup":
          this.dialog = true;
          this.signinForm = false;
          this.signupForm = true;
          break;
        default:
          break;
      }
    },
    closeDialog() {
      this.dialog = false;
      this.signinForm = false;
      this.signupForm = false;
    }
  },
  watch: {
    dialog(value) {
      if (!value) {
        this.closeDialog();
      }
    },
    authenticated(value) {
      if (value) {
        this.closeDialog();
      }
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
.loading__container {
  height: 100%;
  padding: 25% 0;
}
</style>