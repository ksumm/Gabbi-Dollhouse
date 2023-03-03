// Create tiles array

const getData = () => [{name: "boxkitty", image: "boxkitty.jpg"},
  {name: "cakecat", image: "cakecat.png"}, 
  {name: "catrat", image: "catrat.png"}, 
  {name: "djcatnip", image: "djcatnip.png"}, 
  {name: "kittyfairy", image: "kittyfairy.png"}, 
  {name: "mercat", image: "mercat.png"}, 
  {name: "pandypaws", image: "pandypaws.png"}, 
  {name: "pillowcat", image: "pillowcat.png"},
  {name: "boxkitty", image: "boxkitty.jpg"},
  {name: "cakecat", image: "cakecat.png"}, 
  {name: "catrat", image: "catrat.png"}, 
  {name: "djcatnip", image: "djcatnip.png"}, 
  {name: "kittyfairy", image: "kittyfairy.png"}, 
  {name: "mercat", image: "mercat.png"}, 
  {name: "pandypaws", image: "pandypaws.png"}, 
  {name: "pillowcat", image: "pillowcat.png"} ];


//Randomize tiles

const randomize = () => {
  const tileData = getData();
  tileData.sort(() => Math.random() - 0.5);
  console.log(tileData);
};

randomize();  







