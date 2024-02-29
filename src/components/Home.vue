<template>
  <h1>Hello, Welcome on fitfun website</h1>
  <h2>enjoy your life</h2>
</template>

<script>
export default {
    name:'HomeKu',
    mounted(){
      let user = localStorage.getItem('user-info');
      if(!user){
        this.$router.push({name: 'SignUp'})
      }
    }
}
</script>

<style>

</style>