var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementsByClassName("menu-main")[0].style.left = "0";
  } else {
    document.getElementsByClassName("menu-main")[0].style.left = "-100%";
  }
  prevScrollpos = currentScrollPos;
}

//Prérequis
function buttonAppearText(NBbtn) {
    var buttonClick = document.getElementsByClassName("card-content")[NBbtn-1];
    var listElt = document.getElementsByClassName("card-content");
    var listText = document.getElementsByClassName("card-text");

    for (var i = 0; i < listText.length; i++) {
        listText[i].style.display = "none";
        listElt[i].style.backgroundColor = "#151515";
        listElt[i].style.boxShadow = "16px 0 #151515, -16px 0 #151515, 0 -16px #151515, 0 16px #151515, 4px 0 0 8px #151515, -4px 0 0 8px #151515, 0 -4px 0 8px #151515, 0 4px 0 8px #151515, 20px 0 white, -20px 0 white, 0 -20px white, 0 20px white, 0 0 0 12px white, 0 8px 0 8px white, 0 -8px 0 8px white, 8px 0 0 8px white, -8px 0 0 8px white";
    };
    listText[NBbtn-1].style.display = "block";
    buttonClick.style.backgroundColor = "#707070";
    buttonClick.style.boxShadow = "16px 0 #707070, -16px 0 #707070, 0 -16px #707070, 0 16px #707070, 4px 0 0 8px #707070, -4px 0 0 8px #707070, 0 -4px 0 8px #707070, 0 4px 0 8px #707070, 20px 0 white, -20px 0 white, 0 -20px white, 0 20px white, 0 0 0 12px white, 0 8px 0 8px white, 0 -8px 0 8px white, 8px 0 0 8px white, -8px 0 0 8px white";
}

/*--------|Texte qui apparait|--------*/
var i = 0;
var txt = 'Bienvenue sur le site présentant l\'institut universitaire technologique (IUT) de Dijon. Nous sommes trois étudiants en formation pour obtenir le diplôme universitaire technologique (DUT) d\'informatique. Ce site a donc pour but de vous présenter les différents aspects de celui-ci.'; /* The text */
var speed = 25; /* En millisecondes */

window.onload = function typeWriter() {
  if (i < txt.length) {
    document.getElementById("sans-text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}