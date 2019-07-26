<template>
  <v-container>
    <v-layout text-center wrap>
      <v-flex xs12 md12>
        <h1 class="text-uppercase font-weight-light ma-7">Informações Pessoais</h1>
      </v-flex>
      <v-flex xs12 md6>
        <h3>Endereceço:</h3>
        <span>
          Rua Artidoro Mascarenhas,
          n°142 Bloco 3 – A, apartamento 324,
          Conjunto Habitacional Professor Benedicto Cleto,
          CEP 18053-351,
          Sorocaba/SP
        </span>
      </v-flex>
      <v-flex xs12 md6>
        <h3>Contato:</h3>
        <span>Telefone: (15) 98804-3469</span>
        <p>Email: claudio.junior14@hotmail.com</p>
      </v-flex>
      <v-flex xs12 md12>
        <h1 class="text-uppercase font-weight-light ma-10">Sobre</h1>
      </v-flex>
      <v-flex xs12 md12>
        <p>
          Sou um rapaz apaixonado por tecnologia e games, desde pequeno amava passar tempo no computador aprendendo,
          porém só fui saber sobre programação aos 15 anos e lá conheci uma maneira de expandir ainda mais meu
          aprendizado e mais importante desenvolver soluções uteis que podem mudar e/ou facilitar a vida das pessoas.
        </p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Personal",
  props: {
    status: String
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

.foto {
  border-radius: 30px;
}
</style>
