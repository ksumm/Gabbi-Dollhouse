const section = document.querySelector("section");

// Create tiles array

const getData = () => [{name: "boxkitty", image: "./assets/images/boxkitty.png"},
  {name: "cakecat", image: "./assets/images/cakecat.png"}, 
  {name: "catrat", image: "./assets/images/catrat.png"}, 
  {name: "djcatnip", image: "./assets/images/djcatnip.png"}, 
  {name: "kittyfairy", image: "./assets/images/kittyfairy.png"}, 
  {name: "mercat", image: "./assets/images/mercat.png"}, 
  {name: "pandypaws", image: "./assets/images/pandypaws.png"}, 
  {name: "pillowcat", image: "./assets/images/pillowcat.png"},
  {name: "boxkitty", image: "./assets/images/boxkitty.png"},
  {name: "cakecat", image: "./assets/images/cakecat.png"}, 
  {name: "catrat", image: "./assets/images/catrat.png"}, 
  {name: "djcatnip", image: "./assets/images/djcatnip.png"}, 
  {name: "kittyfairy", image: "./assets/images/kittyfairy.png"}, 
  {name: "mercat", image: "./assets/images/mercat.png"}, 
  {name: "pandypaws", image: "./assets/images/pandypaws.png"}, 
  {name: "pillowcat", image: "./assets/images/pillowcat.png"} ];

//Randomize tiles

const randomize = () => {
  const tileData = getData();
  tileData.sort(() => Math.random() - 0.5);
  return tileData;
};

randomize();

//Generate tiles function 

const tileGenerator = () => {
  const tileData = randomize();

//Generate the HTML

tileData.forEach((item) => {
  const tile = document.createElement('div');
  const face = document.createElement('img');
  const back = document.createElement('div');
  tile.classList = 'tile';
  face.classList = 'face';
  back.classList = 'back';

//Attach the info to the tiles

face.src = item.image;
tile.setAttribute('name', item.name);


//Attach the tiles to the game-container
let game = document.getElementById("game");
  game.appendChild(tile);
  tile.appendChild(face);
  tile.appendChild(back);
  tile.addEventListener('click', (e) => {
     tile.classList.toggle("toggleTile");
     checkTiles(e);
    });
  });
};

//Check Tiles Match

const checkTiles = (e) => {
  const clickedTile = e.target;
  clickedTile.classList.add("flipped");
  const flippedTiles = document.querySelectorAll(".flipped");

  if(flippedTiles.length === 2){

    if(
      flippedTiles[0].getAttribute("name") === 
      flippedTiles[1].getAttribute("name")
      ) {
      
      flippedTiles.forEach((tile) => {

        tile.classList.remove("flipped");
        tile.style.pointerEvents = 'none';
      
      });

    } else {
      
      flippedTiles.forEach((tile) => {

        tile.classList.remove("flipped");
        setTimeout(() => tile.classList.remove("toggleTile"), 900);

     });
    }
    addMove();
  }
};

//Start New Game function

const startButton = document.querySelector(".start");

startButton.addEventListener("click", () => {
  scoreContainer.innerHTML = 0;
  moves = 0;
  game.innerHTML = '';
  tileGenerator();
});

tileGenerator();

//Score count function

let scoreContainer = document.getElementById("moves");

let moves = 0;
scoreContainer.innerHTML = 0;
console.log(scoreContainer);

function addMove() {
  moves++;
  scoreContainer.innerHTML = moves;
}











