<template>
  <footer>
    <nav id="nav_footer">
      <router-link tag="li" class="item" to="/propos">Contact</router-link>
      <router-link tag="li" class="item" to="/propos">A Propos</router-link>
      <router-link tag="li" class="item" to="/propos">nos associations</router-link>
      <router-link tag="li" class="item" to="/propos">Mentions légales</router-link>
      <router-link tag="li" class="item" to="/propos">Agenda</router-link>
    </nav>
    <hr>
    <div id="bottom">
      <Logo/>
      <nav id="reseau_sociaux">
            <a href="#">
              <img class="reseau" src="@/assets/images/IMG/facebook-square.svg">
            </a>
            <a href="#">
              <img class="reseau" src="@/assets/images/IMG/linkedin-in.svg">
            </a>
            <a href="#">
              <img class="reseau" src="@/assets/images/IMG/twitter.svg">
            </a>
      </nav>
    </div>
  </footer>
</template>

<script>
import Logo from "@/components/Logo.vue";
export default {
  name: "MyFooter",
  components: {
    Logo
  },
  props: {
    msg: String
  }
};
</script>

<style lang="scss" scoped>
hr {
  margin-top: 46px;
}
#nav_footer {
  width: 100%;
  display:flex;
  flex-direction: row;
  justify-content: space-around;
}
.item {
  justify-content: space-around;
}
#bottom {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}
#reseau_sociaux {
  width: 5%;
  display:flex;
  margin-left: 40%;
  justify-content: space-around;
}

.reseau {
    width: 50%;
  height: 100px;
}
// .reseau {
//   width: 22px;
//   height: 22px;
// }

// #nav_footer {
//   max-width: 75%;
//   margin: 0 auto;
// }

// #nav_footer .list {
//   display: flex;
//   & > .item {
//       flex: 1;
//   }
// }

// #bottom {
//   display: flex;
//    justify-content: space-between;
//  & > * {
//      width: 50%;
//  }
// }


// #reseau_sociaux {
//     display: flex;
//     align-items: center;
// }

// #reseau_sociaux .list {
//     display: flex;
// }
</style>
