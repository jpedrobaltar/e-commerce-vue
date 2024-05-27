<template>
  <div class="about">
    <h1>LISTAGEM</h1>
    <ul>
      <li v-if="usuario">
        {{ usuario.nome }} - {{ usuario.email }} 
      </li>
      <li v-else>
        Nenhum usuário cadastrado.
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const usuario = ref(null);

onMounted(() => {
  const user = localStorage.getItem('user');
  if (user) {
    usuario.value = JSON.parse(user);
  }
});
</script>

<style scoped>
.about {
  max-width: 600px;
  margin: 0 auto;
}
h1 {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  text-align: center;
  margin-bottom: 20px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  background-color: #f4f4f4;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  font-family: 'Arial', sans-serif;
}
</style>

