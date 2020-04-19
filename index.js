// DICEE 1


var dicee=Math.random();
dicee=(dicee*6)+1;
dicee=Math.floor(dicee);
// alert(dicee);
if(dicee===6)
{
  document.querySelector(".img1").setAttribute("src","dice6.png");
}
else if (dicee===5) {
  document.querySelector(".img1").setAttribute("src","dice5.png");
}
else if (dicee===4) {
  document.querySelector(".img1").setAttribute("src","dice4.png");
}
else if (dicee===3) {
  document.querySelector(".img1").setAttribute("src","dice3.png");
}
else if (dicee===2) {
  document.querySelector(".img1").setAttribute("src","dice2.png");
}
else if (dicee===1) {
  document.querySelector(".img1").setAttribute("src","dice1.png");
}
  // DICEE 2
  var dicee2=Math.random();
  dicee2=(dicee2*6)+1;
  dicee2=Math.floor(dicee2);
  // alert(dicee2);
  if(dicee2===6)
  {
    document.querySelector(".img2").setAttribute("src","dice6.png");
  }
  else if (dicee2===5) {
    document.querySelector(".img2").setAttribute("src","dice5.png");
  }
  else if (dicee2===4) {
    document.querySelector(".img2").setAttribute("src","dice4.png");
  }
  else if (dicee2===3) {
    document.querySelector(".img2").setAttribute("src","dice3.png");
  }
  else if (dicee2===2) {
    document.querySelector(".img2").setAttribute("src","dice2.png");
  }
  else if (dicee2===1) {
    document.querySelector(".img2").setAttribute("src","dice1.png");
  }

  if(dicee>dicee2){
    document.querySelector("h1").textContent="Player 1 wins";
  }
  else if(dicee===dicee2){
    document.querySelector("h1").textContent="Hmm,this never happened!?";
  }
  else {
    document.querySelector("h1").textContent="Player 2 wins";
  }
