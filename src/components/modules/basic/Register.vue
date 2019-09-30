<template>
  <div class="register">
    <div class="container" >
      <center>
      <mdb-card style="background-image:url('https://images.unsplash.com/photo-1562671022-81f6187ee604?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80');border-radius:15px 50px;
      width:50%">
        <mdb-card-body>
          <form>
            <p class="h4 text-center py-4">Sign up</p>
            <div class="grey-text">
              <mdb-input
                placeholder="Your name"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <mdb-input
                placeholder="Your email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <mdb-input
                placeholder="Confirm your email"
                icon="exclamation-triangle"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <mdb-input placeholder="Your password" icon="lock" group type="password" validate/>
            </div>
            <div class="text-center py-4 mt-3">
              <mdb-btn
                @click="redirect('/dashboard')"
                class="btn btn-success"
                type="submit"
              >Register</mdb-btn>
            </div>
          </form>
        </mdb-card-body>
      </mdb-card>
      </center>
    </div>
  </div>
</template>


<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import ROUTER from "src/router";
import { mdbInput, mdbBtn, mdbCard, mdbCardBody } from "mdbvue";

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
