<template>
  <img class="logo" src="../assets/logoff.png">
  <h2 style="color:#a4652d">Sign Up</h2>
  <div class="register">
  <input type="text" v-model="name" placeholder="Name">
  <input type="text" v-model="email" placeholder="Email">
  <input type="text" v-model="password" placeholder="Password">
  <button v-on:click="signup">Sign Up</button>
  <p>
    <router-link to="/login">Login</router-link>
  </p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'RegisterForm',
    data(){
      return{
        name:'',
        email:'',
        password:''
      }
    },
    methods:{
      async signup(){
        let result = await axios.post("http://localhost:3000/user",{
       email:this.email,
       password:this.password,
       name:this.name
        });
        console.warn(result);
        if(result.status==201){
          localStorage.setItem("user-info",JSON.stringify(result.data))
          this.$router.push({name: 'Home'})
        }
      }
    },
    mounted(){
      let user = localStorage.getItem('user-info');
      if(user){
        this.$router.push({name: 'Home'})
      }
    }
}
</script>

<style>
.logo{
  width: 15%;
}
.login input{
  width: 300px;
  height: 40px;
  border-radius: 5px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid #a4652d;
}
.login button{
  width: 320px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #d6bea4;
  background: #d6bea4;
  color: #fff;
  cursor: pointer;
}
</style>