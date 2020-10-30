
var randomNumber1  = Math.floor(Math.random()*6)+1; // random no. btw 1-6

var randomImage = "dice"+ randomNumber1 + ".png";   // dice1.png- dice6.png

var randomImageSource = "images/" + randomImage;   // images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0] ;
image1.setAttribute("src" , randomImageSource);

//image2

var randomNumber2 =Math.floor(Math.random()*6)+1;
var randomImageSource2 = "images/dice"+ randomNumber2+".png"; // images/dice1.png- images/dice6.png

document.querySelectorAll("img")[1].setAttribute("src" , randomImageSource2);

//heading text

if(randomNumber1 > randomNumber2){
   document.querySelector("h1").innerHTML =" 🚩player 1 wins!";
}
else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "player 2 wins!🚩";
}
else{
  document.querySelector("h1").innerHTML ="🏅draw!🏅";
}
