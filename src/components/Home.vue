<template>
  <div>
    <!-- Desktop -->
    <div class="d-none d-md-block">
      <div class="row mt-4">
        <div class="col-md-6">
          <div class="d-flex h-100">
            <div class="justify-content-center align-self-center">
              <h3><strong>Welcome on</strong><br> FitFun Website</h3>
              <p>"Enjoy your life"</p>
              <router-link class="btn btn-lg btn-success" to="/Foods" style="background-color: #B80000;">Pesan <b-icon-arrow-right></b-icon-arrow-right></router-link>
            </div>
          </div>
        </div>
        <div class="img">
          <img src="../assets/Fitness stats-bro.svg"  >
        </div>
      </div>
    </div>
  </div>
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
  img{
    height: 600px;
    padding-left: 130px;
  }
</style>