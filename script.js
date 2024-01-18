const randomNumber1 = Math.floor((Math.random()*6) + 1);
console.log(randomNumber1);
let diceImg = "images/dice" + randomNumber1 + ".png";
document.getElementsByClassName("img1")[0].setAttribute("src", diceImg);



const randomNumber2 = Math.floor((Math.random()*6) + 1);
console.log(randomNumber2);
let diceImg2 = "images/dice" + randomNumber2 + ".png";
document.getElementsByClassName("img2")[0].setAttribute("src", diceImg2);

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}else if(randomNumber2 > randomNumber1){
   document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!";
}else{
   document.querySelector("h1").innerHTML = "🚩 Draw!";
}