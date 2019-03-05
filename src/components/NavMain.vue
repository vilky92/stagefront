<template>
  <nav id="nav">
      <router-link tag="li" class="item" to="/">Home</router-link>
      <router-link tag="li" class="item" to="/propos">A Propos</router-link>
      <router-link tag="li" class="item" to="/evenements">Evenements</router-link>
      <router-link tag="li" class="item" to="/connecter">Se connecter</router-link>
      <router-link tag="button" class="inscription" to="/inscrire">S'inscrire</router-link>
  </nav> 
</template>

<script>
export default {
  
};
</script>

<style lang="scss" scoped>

 #nav {
   display: flex;
   width: 100%;
   flex-direction:row;
   justify-content: space-between;
   align-items:center;
  color: grey;
  font-size: 15px;
  margin-left: 40%;
   }

.item {
  width: 20%;
  text-align:center;
  cursor: pointer;
}
  .inscription {
    background: #0078e1;
    width: 159px;
    height: 55px;
    border-radius: 8px;
    padding: 0 25px;
    color: white;
    font-weight: 500;
    outline: none;
    border: none;
    cursor: pointer;
}
















</style>
