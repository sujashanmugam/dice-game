var randomNumber1 =Math.floor(Math.random()*5)+1;
var randomNumber2 =Math.floor(Math.random()*5)+1;

document.querySelectorAll("img")[0].
setAttribute("src","images/dice"+ randomNumber1 +".png");


document.querySelectorAll("img")[1].
setAttribute("src","images/dice"+randomNumber2 +".png");

if(randomNumber1>randomNumber2){
  document.getElementsByTagName("h2")[0].style.display="block";
  document.getElementsByTagName("h1")[0].innerHTML="Player 1 wins";

}
else if(randomNumber1<randomNumber2)
{
  document.getElementsByTagName("h1")[0].innerHTML="Player 2 wins";
  document.getElementsByTagName("h2")[0].style.display="block";
}
else{
  document.getElementsByTagName("h1")[0].innerHTML="Match Draw";

}
