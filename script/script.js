/*$(window).resize(function() {
  if ($(window).width() > 1200) {
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
  } else {
    console.log('< 1200')
  }
});*/



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

/*--------|Affiche chaque boite selon le bouton cliqué|--------*/
$(function() {
  $('.content-part').each(function() {
    var $thisVar = $(this);
    $(this).find('.container-content:first').show();
    $(this).find('.menu-content li:first').addClass('currentBtnBox');
    $(this).find('.menu-content li').click(function() {
      $thisVar.find('.container-content').hide();
      $thisVar.find('.menu-content li').removeClass('currentBtnBox');

      $thisVar.find('.container-content').eq($(this).index()).toggle();
      $(this).addClass('currentBtnBox');
    })
  })
})

$('img[data-enlargable]').addClass('img-enlargable').click(function(){
    var src = $(this).attr('src');
    $('<div>').css({
        background: 'RGBA(0,0,0,.5) url('+src+') no-repeat center',
        backgroundSize: 'contain',
        width:'100%', height:'100%',
        position:'fixed',
        zIndex:'10000',
        top:'0', left:'0',
        cursor: 'zoom-out'
    }).click(function(){
        $(this).remove();
    }).appendTo('body');
});