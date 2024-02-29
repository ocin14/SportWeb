<template>
    <img class="logo" src="../assets/logoff.png">
  <h2 style="color:#a4652d">Login</h2>
  <div class="register">
  <input type="text" v-model="email" placeholder="Email">
  <input type="text" v-model="password" placeholder="Password">
  <button>Login</button>
  <p>
    <router-link to="/SignUp">SignUp</router-link>
  </p>
  </div>
</template>

<script>
export default {
    name:'loginKuy'
}
</script>

<style>

</style>