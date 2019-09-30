
<template>
  <div class="login">
    <div class="container">
      <center>
      <mdb-card style="background-image:url('https://images.unsplash.com/photo-1562671022-81f6187ee604?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80');border-radius:15px 50px;
      width:50%">
        <mdb-card-body>
          <form>
            <p class=" h4 text-center py-4">Login</p>
            <div class="grey-text">
              <mdb-input
              value='j@gmail.com'
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right" placeholder="Your email"
              />

              <mdb-input  placeholder="Your password" icon="lock" group type="password" validate/>
            </div>
            <div class="text-center py-4 mt-3">
              <mdb-btn
                @click="redirect('/dashboard')"
                class="btn btn-success"
                type="submit"
              >Login</mdb-btn>
            </div>
          </form>
        </mdb-card-body>
      </mdb-card>
    </center>
    </div>
  </div>
</template>

<script>
import ROUTER from "src/router";
import {
  mdbBtn,
  mdbInput,
  mdbCard,
  mdbCardBody
} from "mdbvue";


export default {
  name: "login",
  path: "/login",
  components: {
    mdbBtn,
    mdbInput,
    mdbCard,
    mdbCardBody
  },
  data() {
    return {
      input: {
        username: "j@gmail.com",
        password: "jude"
      }
    };
  },
  props: {
    msg: String
  },
  tokenRequired: false,
  methods: {
    redirect(route){
            ROUTER.push(route)
        },
    login() {
      if (this.input.username == "" && this.input.password == "") {
        this.$swal.fire("Please fill up the form", "", "error");
      } else if (this.input.username != "j@gmail.com" && this.input.password != "jude") {
        this.$swal.fire("Username or Password", "Incorrect!", "error");
      } else {
        this.$swal.fire("Welcome " + this.input.username, "", "success");
        ROUTER.replace("./dashboard");
        this.$tokenRequired == true;
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



<!--
// <template>
//     <div id="login">
//         <h1>Login</h1>
//         <input type="text" name="username" v-model="input.username" placeholder="Username" value="jude"/>
//         <input type="password" name="password" v-model="input.password" placeholder="Password" />
//         <button type="button" v-on:click="login()">Login</button>
//     </div>
// </template>

// <script>
//     export default {
//         name: 'Login',
//         data() {
//             return {
//                 input: {
//                     username: "",
//                     password: ""
//                 }
//             }
//         },
//         methods: {
//             login() {
//                 if(this.input.username != "" && this.input.password != "") {
//                     if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
//                         this.$emit("authenticated", true);
//                         this.$router.replace({ name: "secure" });
//                     } else {
//                         this.$swal.fire("The username and / or password is incorrect");
//                     }
//                 } else {
//                     this.$swal.fire("A username and password must be present");
//                 }
//             }
//         }
//     }
// </script>

// <style scoped>
//     #login {
//         width: 500px;
//         border: 1px solid #CCCCCC;
//         background-color: #FFFFFF;
//         margin: auto;
//         margin-top: 200px;
//         padding: 20px;
//     }
// </style>
-->