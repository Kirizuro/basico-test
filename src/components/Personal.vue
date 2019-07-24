<template>
  <div class="info">
    <h2>Informações Pessoais</h2>
    <h3>Nome:</h3>
    <p class="info__personal">{{ name }}</p>
    <h3>Contato:</h3>

    <h3>Endereço:</h3>
    <p
      class="info__personal"
    >Rua Artidoro Mascarenhas, n°142 Bloco 3 – A, apartamento 324, Conjunto Habitacional Professor Benedicto Cleto, CEP 18053-351, Sorocaba/SP;</p>
    <h3>Sobre Mim</h3>
    <blockquote></blockquote>
  </div>
</template>

<script>
export default {
  name: "Personal",
  props: {
    name: String
  }
};
</script>

<style lang="scss">
.info {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

.info__personal {
  font-size: 27px;
}
</style>
