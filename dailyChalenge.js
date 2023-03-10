

//premiere methode
/*
Le code utilise l'événement keydown pour détecter lorsque l'utilisateur appuie sur une touche du clavier.
La fonction validateLetterInput() est appelée et reçoit l'objet Event en tant qu'argument.
Elle récupère la valeur du code de touche en utilisant l'objet Event et vérifie si la touche
enfoncée est une lettre en comparant sa valeur à l'intervalle de valeurs de codes de touche des lettres.
Si la touche enfoncée est une lettre, la fonction renvoie true pour autoriser la saisie, sinon elle renvoie false pour la bloquer.
La fonction autorise également la touche Backspace, Tab, Delete et Escape en vérifiant si le code
de touche correspond à l'un de ces codes. Toutes les autres touches sont bloquées.

*/
function validateLetterInput(event) {
    // Obtenir la valeur du code de touche
    var keyCode = event.keyCode || event.which;

    // Autoriser la saisie si la touche enfoncée est une lettre
    if (keyCode >= 65 && keyCode <= 90) {
        return true;
    }

    // Autoriser la touche Backspace, Tab, Delete et Escape
    if (keyCode == 8 || keyCode == 9 || keyCode == 46 || keyCode == 27) {
        return true;
    }

    // Désactiver toutes les autres touches
    return false;
}

//Deuxieme methode
/*
Le code utilise l'événement input pour détecter lorsque l'utilisateur entre des caractères dans le champ de saisie.
La fonction filterLetterInput() est appelée et reçoit l'objet Event en tant qu'argument.
Elle récupère la valeur de l'input et utilise une expression régulière pour remplacer tous les

*/



function filterLetterInput(event) {
    // Récupérer la valeur de l'input
    var inputValue = event.target.value;

     // Filtrer les caractères qui ne sont pas des lettres
    var filteredValue = inputValue.replace(/[^a-zA-Z]/gi, '');

    // Mettre à jour la valeur de l'input
    event.target.value = filteredValue;
}

