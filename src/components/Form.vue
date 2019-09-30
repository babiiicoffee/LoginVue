<template>
  <div class="login">
    <mdb-container>
    <mdb-row>
      <mdb-col size="12" class="text-center mb-5">
        <mdb-btn v-on:click.native="showModal = true" color="info">Login</mdb-btn>
        <mdb-modal :show="showModal" @close="showModal = false" cascade class="text-left">
          <mdb-modal-header  id="header" class="secondary-color white-text">
            <h2 class="text-center">Login</h2>
          </mdb-modal-header>
          <mdb-modal-body class="grey-text">
            <mdb-input size="sm" name="username" v-model="input.username" icon="user" group type="text" validate error="wrong" success="right" placeholder="Username"/>
            <mdb-input size="sm" name="password" v-model="input.password" icon="key" group type="password" validate error="wrong" success="right" placeholder="************"/>
          </mdb-modal-body>
          <mdb-modal-footer>
            <mdb-btn color="secondary" v-on:click.native="showModal = false">Close</mdb-btn>
            <mdb-btn color="primary"  v-on:click="login()" type="submit">Login</mdb-btn>
          </mdb-modal-footer>
        </mdb-modal>
      </mdb-col>
    </mdb-row>
  </mdb-container>
</div>
  
</template>

<script>
import { mdbContainer, mdbRow} from 'mdbvue';
export default {
  name: 'Form',
  components: {
      mdbContainer,
      mdbRow
    },
  
  data(){
    return {
      showModal: false,
        input: {
              username: "",
              password: ""
            }
      }
  },
  props: {
    msg: String
  },
  methods: {
    login(){
      if(this.input.username != "jude" && this.input.password != "jude" || this.input.username == "" && this.input.password == ""){
        this.$swal.fire("Username or Password","Incorrect!","error");
      }else{
        this.$swal.fire("Welcome "+ this.input.username ,"" ,"success")
      }
    },
  },
}


</script>

<style scoped>

#header{
  position: relative;
}
</style>

