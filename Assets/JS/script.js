// Création de la barre de navigation sticky-top.

// Exécution de la fonction au scroll de la page.
window.onscroll = function () {
    myFunction()
};

// Récupération de la navbar.
var navbar = document.getElementById("navbar");

// Récupération de la position offset de la navbar.
var sticky = navbar.offsetTop;

// Ajout de la class sticky à la navbar quand la position scroll est atteinte et retrait de la class quand la position est quittée.
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        if ($('.navbar').hasClass('sticky')) {
            navbar.classList.remove("sticky");
        }
    }
}



// Création de la timeline de la rubrique expérience.

(function () {

    'use strict';

    // Définition de variable.
    var items = document.querySelectorAll(".timeline li");

    // Vérification si un élément est dans le viewport.
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
            if (isElementInViewport(items[i])) {
                items[i].classList.add("in-view");
            }
        }
    }

    // Ecoute d'évènements.
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);

})();



// Fonction pour faire réduire la navbar une fois le click effectué (à mettre à la fin du JS).

$(function () {
    $('#navbarSupportedContent').on('click', '.nav-item', function () {
        $('#navbarSupportedContent').toggleClass('show');
    })
})