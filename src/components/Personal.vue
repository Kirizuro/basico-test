<template>
  <v-container>
    <v-layout text-center wrap>
      <v-flex xs12 md12>
        <h1 class="text-uppercase font-weight-light">Informações Pessoais</h1>
      </v-flex>
      <v-flex xs12 md4>
        <h3>Nome:</h3>
        <span>Claudio de Oliveira Almeida Junior</span>
      </v-flex>
      <v-flex xs12 md4>
        <h3>Endereceço:</h3>
        <span>
          Rua Artidoro Mascarenhas,
          n°142 Bloco 3 – A, apartamento 324,
          Conjunto Habitacional Professor Benedicto Cleto,
          CEP 18053-351,
          Sorocaba/SP
        </span>
      </v-flex>
      <v-flex xs12 md4 align-self-end>
        <h3>Contato:</h3>
        <span>Telefone: (15) 98804-3480</span>
        <p>Email: claudio.junior14@hotmail.com</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Personal"
};
</script>

<style lang="scss">
.info {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

.info__personal {
  font-size: 27px;
}

.foto {
  border-radius: 30px;
}
</style>
