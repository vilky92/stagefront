<template>
    <header id="header_main">
        <Logo />
        <NavMain />
        <Button/>
    </header>
</template>

<script>
import Logo from "@/components/Logo.vue";
import NavMain from "@/components/NavMain.vue";
import Button from "@/components/RegisterButton.vue";

export default {
  components: {
    Logo,
    NavMain,
    Button
  }
}
</script>

<style lang="scss" scoped>
#header_main {
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 138px;
  margin-bottom: 48px;
}
</style>
