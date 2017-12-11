
var myPix = new Array("img/brb.gif",
                      "img/sharkbate.gif",
                      "img/dreamydragon.gif",
                      "img/emojiwalk.gif",
                      "img/astronaut.gif",
                      "img/doggy.gif");

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("myPicture").src = myPix[randomNum];
}

choosePic();
