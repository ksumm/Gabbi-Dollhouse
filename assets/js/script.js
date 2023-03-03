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

//Generate tiles function 

const tileGenerator = () => {
  const tileData = randomize();

//Generate the HTML
tileData.forEach(item => {
  const tile = document.createElement('div');
  const face = document.createElement('img');
  const back = document.createElement('div');
  tile.classList = 'tile';
  face.classList = 'face';
  back.classList = 'back';

//Attach the info to the tiles

face.src = item.image;

//Attach the tiles to the game-container
let section = document.getElementById("section");
section.appendChild(tile);
tile.appendChild(face);
tile.appendChild(back);
});


};

tileGenerator();







