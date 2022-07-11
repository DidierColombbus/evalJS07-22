let reponse = '';

let i = 0;

while ((reponse != 'oui') && (reponse != 'Oui') && (reponse != 'ouais') && (reponse != 'ouaip')  && (reponse != 'vi') && (reponse != 'ok') && (reponse != 'oki') && (reponse != 'non') && (reponse != 'Non') && (reponse != 'nan') && (reponse != 'nop') && (reponse != 'nein') && (reponse != 'no') && (reponse != 'négatif')) {
    reponse = prompt('Bonjour, jouons ensemble au ni oui ni non ! Pas de blagues, les petits filous, on évite d\'utiliser des variantes comme "Oui", "ouais", "ouaip", "vi", "ok", "oki" ou "Non", "nan", "nop", "nein", "no" ou "négatif". Êtes-vous d\'accord ?');
    i++;
} 

document.querySelector('h2').innerHTML = 'Vous avez perdu ! Ahaha !! ahah ! ah... On recommence ?';

let titre = document.querySelector('h2')

titre.style.borderColor = 'yellow';
titre.style.color = 'orange';


