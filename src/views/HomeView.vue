<template>
  <div class="home">
    <Cadastro :cadastro="cadastro" />
    
  </div>
</template>

<script>
import Cadastro from "../components/Cadastro.vue";


export default {
  name: "Home",
  components: {
    Cadastro,
  },
 
}
</script>

<style scoped>

</style>