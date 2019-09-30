<template>
  <div class="container">
    <mdb-card>
      <mdb-card-body>
        <form>
          <p class="jumbotron h4 text-center py-4">Sign up</p>
          <div class="grey-text">
            <mdb-input label="Your name" icon="user" group type="text" validate error="wrong" success="right"/>
            <mdb-input label="Your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
            <mdb-input label="Confirm your email" icon="exclamation-triangle" group type="text" validate error="wrong" success="right"/>
            <mdb-input label="Your password" icon="lock" group type="password" validate/>
          </div>
          <div class="text-center py-4 mt-3">
            <mdb-btn @click="redirect('/dashboard')"  class="btn btn-success" type="submit">Register</mdb-btn>
          </div>
        </form>
      </mdb-card-body>
    </mdb-card>
  </div>
</template>


<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'
  import ROUTER from "src/router";
  import { mdbInput, mdbBtn, mdbCard, mdbCardBody } from 'mdbvue';

export default {
  name: "register",
  path: "/register",
    components: {
      mdbInput,
      mdbBtn,
      mdbCard,
      mdbCardBody
    },
  date() {
    return {
      input: {
        username: "",
        password: "",
        email: ""
      }
    };
  },
  methods: {
    redirect(route) {
      ROUTER.replace(route);
    }
  }
};
</script>
