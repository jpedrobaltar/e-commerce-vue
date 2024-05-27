<template>
    <div id="cadastro-tabela">
        <div>
            <div id="cadastro-tabela-heading">
                <div class="cadastro-id">#:</div>
                <div>Nome:</div>
                <div>E-mail:</div>
                <div>Senha:</div>
                <div>Ações:</div>
            </div>
        </div>
        <div id="cadastro-tabela-rows"></div>
        <div class="cadastro-tabela-row">
            <div class="cadastro-number">1</div>
            <div></div>
            <div></div>
            <div></div>
            <button class="delete-btn">Excluir</button>
        </div>
    </div>
</template>

<script>


export default {
    name: "Dashbord",
    
}
</script>

<style scoped>
#cadastro-tabela {
    max-width: 1200px;
    margin: 0 auto;
}
#cadastro-tabela-heading,
#cadastro-tabela-rows,
.cadastro-tabela-row {
    display: flex;
    flex-wrap: wrap;
}
#cadastro-tabela-heading {
    font-weight: bold;
    padding: 12px;
    border-bottom: 3px solid #333;
}
#cadastro-tabela-heading div,
.cadastro-tabela-row div {
    width: 19%;
}
.cadastro-tabela-row {
    width: 100%;
    padding: 12px;
    border-bottom: 1px solid #ccc;
}
#cadastro-tabela-heading .cadastro-id,
.cadastro-tabela-row .cadastro-number {
    width: 5%;
}
select {
    padding: 12px 6px;
    margin-right: 12px;
}
.delete-btn {
    background-color: #1206bd;
    color: #222;
    font-weight: bold;
    border: 2px solid #222;
    padding: 10px;
    font-size: 16px;
    margin: 0 auto;
    cursor: pointer;
    transition: .5s;
}
.delete-btn:hover {
    background-color: transparent;
    color: #222;
}
</style>