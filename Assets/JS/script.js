// // Création de la barre de navigation sticky-top.

// // Exécution de la fonction au scroll de la page.
// window.onscroll = function() {
//     myFunction()
// };

// // Récupération de la navbar.
// let navbar = document.getElementsByClassName("navbar");

// // Récupération de la position offset de la navbar.
// let sticky = navbar.offsetTop;

// // Ajout de la class sticky à la navbar quand la position scroll est atteinte et retrait de la class quand la position est quittée.
// function myFunction() {
//     if (window.pageYOffset >= sticky) {
//         navbar.classList.add("sticky")
//     } else {
//         navbar.classList.remove("sticky");
//     }
// }