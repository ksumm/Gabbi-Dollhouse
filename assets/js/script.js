const section = document.querySelector("section");
let perfectMatch = 0;

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


//Attach the tiles to the game-container - initial code was taken from: https://www.youtube.com/watch?v=-tlb4tv4mC4 and adapted
let game = document.getElementById("game");
  game.appendChild(tile);
  tile.appendChild(face);
  tile.appendChild(back);
  tile.addEventListener('click', (e) => {
     tile.classList.toggle("toggleTile");
     checkTiles(e);
    });
  tile.addEventListener('click', (e) => {
    document.getElementById('sound').play(); // gets element with id 'sound' and plays the audio file
  })  
  });
};

//Check Tiles Match - initial code was taken from: https://www.youtube.com/watch?v=-tlb4tv4mC4 and adapted

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
        perfectMatch += 1;
        console.log(perfectMatch);
        document.getElementById('success').play(); // gets element with id 'success' and plays the audio file
      });
     

    } else {
      
      flippedTiles.forEach((tile) => {

        tile.classList.remove("flipped");
        setTimeout(() => tile.classList.remove("toggleTile"), 900);

     });
    }
    addMove();

    if(perfectMatch === 16){ //
      document.querySelector(".win").style.display = "block";
      document.getElementById('winner').play();

    }
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

const newGameButton = document.querySelector(".new-game");

newGameButton.addEventListener("click", () => {
  document.querySelector(".win").style.display="none";
  scoreContainer.innerHTML = 0;
  moves = 0;
  game.innerHTML = '';
  tileGenerator();
});

//Score count function

let scoreContainer = document.getElementById("moves");

let moves = 0;
scoreContainer.innerHTML = 0;
console.log(scoreContainer);

function addMove() {
  moves++;
  scoreContainer.innerHTML = moves;
}

// How to play

document.getElementById("rules-link").addEventListener("click", function(){
  document.querySelector(".rules-container").style.display="block";
}
);

document.querySelector(".lets-go").addEventListener('click', function(){
  document.querySelector(".rules-container").style.display="none";
});

//Sound Off

  function soundOff() {

  let control = document.querySelector(".sound-control");
  control.addEventListener('click', soundOff());

    document.getElementById('winner').pause();
    document.getElementById('success').pause();
    document.getElementById('sound').pause();
  }

 












