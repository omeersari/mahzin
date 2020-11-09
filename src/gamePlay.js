export const STATUSSES = {
  0: { VALUE: "empty", BACKGROUND: "white" },
  1: { VALUE: "soldier", BACKGROUND: "red", URL: "https://giantbomb1.cbsistatic.com/uploads/scale_small/9/97089/2996317-adol.png" },
  2: { VALUE: "sword", BACKGROUND: "blue", URL: "https://c0.klipartz.com/pngpicture/119/699/gratis-png-espada-cruzada-espada.png" },
  3: { VALUE: "hp", BACKGROUND: "lightblue", URL: "https://png.pngitem.com/pimgs/s/154-1545278_pixel-heart-png-transparent-png.png" },
  4: { VALUE: "gate", BACKGROUND: "yellow", URL: "https://banner2.cleanpng.com/20180425/law/kisspng-electric-gates-computer-icons-clip-art-gates-5ae026d3c4a0d4.9090137915246394438054.jpg" }
};

let soldier = 6;
let sword = 2;
let hp = 2;
let gate = 1;

export let matrix = [];
for (let i = 0; i < 5; i++) {
  matrix[i] = [];
  for (let j = 0; j < 5; j++) {
    matrix[i][j] = undefined;
  }
}

while (soldier > 0) {
  let i = Math.floor(Math.random() * 5);
  let j = Math.floor(Math.random() * 5);
  if (matrix[i][j] === undefined) {
    matrix[i][j] = 1;
    soldier--;
  }
}

while (sword > 0) {
  let i = Math.floor(Math.random() * 5);
  let j = Math.floor(Math.random() * 5);
  if (matrix[i][j] === undefined) {
    matrix[i][j] = 2;
    sword--;
  }
}

while (hp > 0) {
  let i = Math.floor(Math.random() * 5);
  let j = Math.floor(Math.random() * 5);
  if (matrix[i][j] === undefined) {
    matrix[i][j] = 3;
    hp--;
  }
}

while (gate > 0) {
  let i = Math.floor(Math.random() * 5);
  let j = Math.floor(Math.random() * 5);
  if (matrix[i][j] === undefined) {
    matrix[i][j] = 4;
    gate--;
  }
}

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    if (matrix[i][j] === undefined) {
      matrix[i][j] = 0;
    }
  }
}


