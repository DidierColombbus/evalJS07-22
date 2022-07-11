// On commence par définir une variable pour y entrer un réponse oui, non ou autre. Donc quotes vides.

let reponse = '';

// On débute l'itération à 0.

let i = 0;

// Boucle while demandée, ici avec ni oui ni non grâce à un opérateur != ainsi à chaque fois qu'on entre quelque chose qui n'est pas dans les conditions de la boucle while, le prompt se recharge. Si on entre un mot présent dans les conditions, le h2 s'affiche avec un texte "Vous avez perdu !". J'ai rajouté des conditions.

while ((reponse != 'oui') && (reponse != 'Oui') && (reponse != 'ouais') && (reponse != 'ouaip')  && (reponse != 'vi') && (reponse != 'ok') && (reponse != 'oki') && (reponse != 'non') && (reponse != 'Non') && (reponse != 'nan') && (reponse != 'nop') && (reponse != 'nein') && (reponse != 'no') && (reponse != 'négatif')) {
    reponse = prompt('Bonjour, jouons ensemble au ni oui ni non ! Pas de blagues, les petits filous, on évite d\'utiliser des variantes comme "Oui", "ouais", "ouaip", "vi", "ok", "oki" ou "Non", "nan", "nop", "nein", "no" ou "négatif". Êtes-vous d\'accord ?');
    i++;
} 

// L'affichage de "Vous avez perdu !":

document.querySelector('h2').innerHTML = 'Vous avez perdu ! Ahaha !! ahah ! ah... On recommence ?';

// Du CSS avec JS:

let titre = document.querySelector('h2')

titre.style.borderColor = 'yellow';
titre.style.color = 'orange';


