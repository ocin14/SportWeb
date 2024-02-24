<template>
  <img class="logo" src="../assets/logoff.png">
  <h2 style="color:#a4652d">Sign Up</h2>
  <div class="register">
  <input type="text" placeholder="Name">
  <input type="text" placeholder="Email">
  <input type="text" placeholder="Password">
  <button>Sign Up</button>
  </div>
</template>

<script>
export default {
    name:'RegisterForm'
}
</script>

<style>
.logo{
  width: 15%;
}
.register input{
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
.register button{
  width: 320px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #d6bea4;
  background: #d6bea4;
  color: #fff;
  cursor: pointer;
}
</style>