var randomnumber= Math.floor(Math.random( ) *6) + 1; 

var randomimage="dice" + randomnumber + ".png";

var randomimagelocaton="./images/"+ randomimage;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomimagelocaton);

var randomnumber2= Math.floor(Math.random( ) *6) + 1; 

var randomimage2="dice" + randomnumber2 + ".png";

var randomimagelocaton2="./images/"+ randomimage2;

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",randomimagelocaton2);

if(randomnumber>randomimage2){
    document.querySelector("h1").innerHTML="🚩 Refresh Me";
}
else if( randomimage==randomimage2){
    document.querySelector("h1").innerHTML="🚩 Tie 🚩";
}
else{
    document.querySelector("h1").innerHTML="Refresh Me 🚩";
}