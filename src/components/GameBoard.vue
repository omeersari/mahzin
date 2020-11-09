<template>
  <div class="gameBoard">
    <div class="left">
      <template v-for="item in matrix">
        <template v-for="box in item">
          <div v-if="isOpened"
            :key="box.id"
            class="box"
            :class="STATUSSES[box].BACKGROUND"
          ></div>
          <div @click="openIt(box)" class="box" :key="box.id" v-else>

          </div>
        </template>
      </template>
    </div>
    <div class="menu">
      <div>
        <h3><i class="fas fa-heart"></i> HP:</h3>
      </div>
      <div>
        <h3>My attack range:</h3>
      </div>
      <div>
        <h3>Enemy attack range:</h3>
      </div>
      <div>
        <h3>Evasion bonus:</h3>
      </div>
      <div class="actions">
        <div>
          <button class="show">Show</button>
        </div>
        <div>
          <button class="heal">
            Heal
          </button>
        </div>
      </div>
      <div class="abandonDiv">
        <button class="abandon">
          Abandon Run
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { STATUSSES, matrix } from "../gamePlay";
export default {
  name: "GameBoard",
  data() {
    return {
      STATUSSES,
      matrix,
      isOpened: false,
    };
  },
  methods: {
    openIt() {
      this.isOpened = true
    }
  },
  components: {}
};
</script>

<style scoped>
.gameBoard {
  display: grid;
  grid-template-columns: 5fr 1fr;
}

.left {
  display: grid;
  margin-top: 20px;
  grid-template-columns: repeat(5, 140px);
  grid-template-rows: repeat(5, 140px);
  grid-gap: 0;
  grid-auto-flow: row;
}

.box {
  padding: 40px;
  background-color: whitesmoke;
  border: 3px solid gray;
}

.menu {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.actions {
  display: flex;
  justify-content: center;
}
.heal {
  padding: 20px;
  background-color: lightgreen;
  border: 1px solid green;
  font-size: 1em;
  border-radius: 3px;
  margin-left: 15px;
}

.show {
  padding: 20px;
  background-color: lightcoral;
  border: 1px solid red;
  font-size: 1em;
  border-radius: 3px;
}

.abandon {
  background-color: black;
  color: white;
  padding: 20px;
  margin-top: 10px;
  width: 172px;
}

.blue {
  background: url("https://c0.klipartz.com/pngpicture/119/699/gratis-png-espada-cruzada-espada.png")
    no-repeat center rgba(0, 88, 255, 0.5);
  background-size: cover;
}

.red {
  background-color: red;
  background-image: url("https://giantbomb1.cbsistatic.com/uploads/scale_small/9/97089/2996317-adol.png");
}

.white {
  background-color: white;
}

.yellow {
  background-color: yellow;
  background-image: url("https://banner2.cleanpng.com/20180425/law/kisspng-electric-gates-computer-icons-clip-art-gates-5ae026d3c4a0d4.9090137915246394438054.jpg");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
}

.lightblue {
  background-color: lightblue;
  background-image: url("https://png.pngitem.com/pimgs/s/154-1545278_pixel-heart-png-transparent-png.png");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
}
</style>
