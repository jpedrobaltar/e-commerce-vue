<template>
    <div>
        <h1>Cadastro de usuários</h1>
        <form id="cadastro" @submit.prevent="fetchCadastro">
            <label for="nome">Digite seu nome:</label> <br>
            <input type="text" name="nome" v-model="nome" placeholder="Nome"> <br> <br>
            <label for="text">Digite seu E-mail:</label> <br>
            <input type="text" name="email" v-model="email" placeholder="E-mail"> <br> <br>
            <label for="password">Digite sua senha:</label> <br>
            <input type="password" name="senha" v-model="senha" placeholder="Senha"> <br> <br>
            <input type="submit" class="submit-btn" value="Cadastrar">
        </form>
    </div>
</template>

<script setup>
import { ref } from "vue";
import api from "@/services/api.ts";

const nome = ref("");
const email = ref("");
const senha = ref("");

const fetchCadastro = async () => {
    console.log(email.value);
    console.log(senha.value);
    console.log(nome.value);

    const data = {
        'nome': nome.value,
        'email': email.value,
        'password': senha.value,
        'administrador': 'false',
    };

    try {
        const response = await api.post("/usuarios", data);
        localStorage.setItem('user', JSON.stringify(data));
        console.log("User saved:", data);
    } catch (error) {
        console.error("Error fetching cadastro:", error);
    }
};
</script>

<style scoped>
#cadastro {
    max-width: 400px;
    margin: 0 auto;
}
h1 {
    max-width: 400px;
    margin: 0 auto;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
label {
    font-weight: bold;
    margin-bottom: 15px;
    color: #222;
    padding: 5px 10px;
    border-left: 4px solid #1206bd;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.submit-btn {
    background-color: #1206bd;
    color: #222;
    font-weight: bold;
    border: 2px solid #222;
    padding: 5px;
    font-size: 16px;
    margin: 0 auto;
    cursor: pointer;
    transition: .5s;
}
</style>
