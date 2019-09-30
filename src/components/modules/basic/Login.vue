<template>
  <div class="login">
    <div class="conatiner">
      <mdb-container>
        <mdb-row>
          <mdb-col size="12" class="text-center mb-5">
            <h2 class="text-center">Login</h2>
            <mdb-input
              size="sm"
              name="username"
              v-model="input.username"
              icon="user"
              group
              type="text"
              validate
              error="wrong"
              success="right"
              placeholder="Enter Username here..."
            />
            <mdb-input
              size="sm"
              name="password"
              v-model="input.password"
              icon="key"
              group
              type="password"
              validate
              error="wrong"
              success="right"
              placeholder="Enter password here..."
            />
            <mdb-btn color="primary" v-on:click="login()" type="submit">Login</mdb-btn>
          </mdb-col>
        </mdb-row>
      </mdb-container>
    </div>
  </div>
</template>

<script>
import ROUTER from "src/router";
import { mdbContainer, mdbRow, mdbCol, mdbBtn, mdbInput } from "mdbvue";
export default {
  name: "login",
  path: "/login",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbBtn,
    mdbInput
  },
  data() {
    return {
      input: {
        username: "",
        password: ""
      }
    };
  },
  props: {
    msg: String
  },
  tokenRequired: false,
  methods: {
    // redirect(route){
    //         ROUTER.push(route)
    //     },
    login() {
      if (this.input.username == "" && this.input.password == "") {
        this.$swal.fire("Please fill up the form", "", "error");
      } else if (this.input.username != "j" || this.input.password != "j") {
        this.$swal.fire("Username or Password", "Incorrect!", "error");
      } else {
        this.$swal.fire("Welcome " + this.input.username, "", "success");
        ROUTER.replace("./dashboard");
        this.$tokenRequired == true;
        // console.log($tokenRequired);
      }
    },

  }
};
</script>

<style scoped>
#header {
  position: relative;
}
</style>

