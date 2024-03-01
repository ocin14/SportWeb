<template>
    <img class="logo" src="../assets/logoff.png">
  <h2 style="color:#a4652d">Login</h2>
  <div class="login">
  <input type="text" v-model="email" placeholder="Email">
  <input type="text" v-model="password" placeholder="Password">
  <button v-on:click="login">Login</button>
  <p>
    <router-link to="/SignUp">SignUp</router-link>
  </p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    name:'loginKuy',
    data(){
      return{
        email:'',
        password:''
      }
    },
    methods:{
      async login(){
        let result = await axios.get(
          `http://localhost:3000/user?email=${this.email}&password=${this.password}`
        )

        if(result.status==200 && result.data.length>0){
          localStorage.setItem("user-info",JSON.stringify(result.data[0]))
          this.$router.push({name: 'Home'})
        }

        console.warn(result)
      }
    },
    mounted(){
      let user = localStorage.getItem('user-info');
      if(user){
        this.$router.push({name: 'Home'})
      }
    }
};
</script>

<style>

</style>