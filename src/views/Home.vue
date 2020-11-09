<template>
  <Container>
    <div class="home">
      <Info />
      <div class="playerName" v-if="isStarted === false">
        <input
          type="text"
          placeholder="Enter your name"
          v-model.lazy="currentPlayer"
        />
      </div>
      <div>
        <button
          @click="startGame"
          v-if="isStarted === false"
          class="startButton"
        >
          Start
        </button>
      </div>
      <GameBoard v-if="isStarted" />
    </div>
  </Container>

</template>

<script>
// @ is an alias to /src

import Info from "@/components/Info";
import GameBoard from "@/components/GameBoard";
import Container from "@/components/Container";

import { mapGetters } from 'vuex'

export default {
  name: "Home",
  components: {
    Info,
    GameBoard,
    Container
  },
  methods: {
    startGame() {
      this.$store.commit("startGame", this.currentPlayer);
    }
  },
  computed: {
    currentPlayer: {
      get(){return this.$store.getters.currentPlayer},
      set(value) {this.$store.commit("PlayerName", value);}
    },
    ...mapGetters(["isStarted"])
  }
};
</script>

<style scoped>
.playerName input {
  padding: 10px;
}

.startButton {
  padding: 30px;
  background-color: lightgreen;
  color: black;
  border: 1px solid green;
  border-radius: 3px;
  text-transform: uppercase;
  font-size: 2em;
  margin-top: 100px;
}

.startButton:hover {
  cursor: pointer;
}
</style>
