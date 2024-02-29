<template>
  <router-view />
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
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
