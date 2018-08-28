<template>
  <v-dialog>
    <v-card>
      <v-form>
        <v-text-field
          v-model="email"
          label="E-mail"
          required
        ></v-text-field>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "AuthDialog",
  data() {
    return {
      email: "",
      password: ""
    };
  }
};
</script>

<style>
</style>
