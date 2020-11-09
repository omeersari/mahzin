<template>
  <div class="info">
    <div class="men">
      <h1>Men</h1>
    </div>
    <div v-if="currentPlayer">
      <h1>{{currentPlayer}}</h1>
    </div>
    <div class="golds">
      <h1>Gold</h1>
      <i class="fas fa-coins"></i> 10.000
    </div>
  </div>
</template>

<script>

import {mapGetters} from 'vuex'

export default {
  name: "Info",
  computed: {
    ...mapGetters(["currentPlayer"])
  }
};
</script>

<style scoped>

.info {
  display: flex;
  justify-content: space-between;
}
</style>
