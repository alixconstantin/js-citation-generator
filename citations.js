
let citations = [
  ["La vie est un mystère qu'il faut vivre, et non un problème à résoudre.", "Gandhi"],
  ["Le plus grand risque est de ne prendre aucun risque.", "Mark Zuckerberg"],
  ["Méritez votre statut de leader chaque jour.", "Mickael Jordan"],
  ["Soyez le changement que vous voulez voir dans le monde.", "Gandhi"],
  ["A chaque fois que vous vous retrouvez du même côté que la majorité, il est temps de prendre du recul, et de réfléchir.", "Mark Twain"],
  ["Seulement ceux qui prendront le risque d’aller trop loin découvriront jusqu’où on peut aller.", "T.S Elliot"],
  ["Le succès c’est tomber sept fois, se relever huit.", "Proverbe japonais"],
  ["Dans vingt ans vous serez plus déçus par les choses que vous n’avez pas faites que par celles que vous avez faites. Alors sortez des sentiers battus. Mettez les voiles. Explorez. Rêvez. Découvrez.", "Mark Twain"],
  ["Si vous attendez pour agir, tout ce que vous gagnerez, avec le temps, c’est de l’âge.", "Brian Tracy"],
  ["Quand on concentre son attention sur un seul projet, l’esprit suggère constamment des idées et des améliorations qui lui échapperaient s’il était occupé avec plusieurs projets en même temps.", "P.T. Barnum"],
  ["Se dédier à faire tout ce que l’on peut pour aider les autres à obtenir ce qu’ils veulent, c’est la clé du succès.", "Brian Sher"],
  ["Si vous pensez que vous êtes trop petit pour avoir de l’impact, essayez d’aller au lit avec un moustique.", "Anita Roddick"],
  ["Ne jugez pas chaque jour sur ce que vous récoltez, mais sur les graines que vous semez.", "Robert Louis Stevenson"],
  ["L’action est la clé fondamentale de tout succès.", "Pablo Picasso"],
  ["Le succès, c’est se promener d’échecs en échecs tout en restant motivé.", "Winston Churchill"],
  ["Votre avenir est créé par ce que vous faîtes aujourd’hui, pas demain.", "Robert T. Kiyosaki"],
  ["Ne vous découragez pas, c’est souvent la dernière clef du trousseau qui ouvre la porte.", "Zig Ziglar"],
  ["Pour gagner votre vie, apprenez à l’école. Pour gagner une fortune, apprenez par vous-même.", "Brian Tracy"],
  ["Les gagnants trouvent des moyens, les perdants des excuses…", "F. D. Roosevelt"],
  ["Vous n’êtes jamais trop vieux pour vous fixer de nouveaux buts, ou rendre vos rêves réalité.", "C.S. Lewis"],
  ["Un pessimiste voit la difficulté dans chaque opportunité. Un optimiste voit une opportunité dans chaque difficulté.", "Winston Churchill"]
];


let nouveau   = document.querySelector('#nouveau'); // DOM du bouton pour une nouvelle citation
let citation  = document.querySelector('#citation');// DOM de la citation
let auteur    = document.querySelector('#auteur');  // DOM de l'auteur de la citation

let dernier   = 0;       // initialisation de la dernière citation émise, ici 0
let nombreAleatoire = 0; // initialisation de la variable d'un nombre aléatoire pour générer aléatoirement une citation


// Fonction permettant de générer un nombre aléatoire ENTIER 
function genererNombreEntier(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// Evènement " cliquer " sur le bouton 'Nouvelle citation'
nouveau.addEventListener('click', () => {
  do {
    nombreAleatoire = genererNombreEntier(citations.length); // genere un nombre aléatoire entier a partir de la longueur du tableau
  } while (nombreAleatoire == dernier) // Tant que le nombre Aleatoire est égale a la dernière citation ( pour pas tomber 2 fois sur la même )
    
  citation.textContent = citations[nombreAleatoire][0]; // Change le contenue, index( du nombre aléatoire) citation [0] du tableau a 2 dimensions 
  auteur.textContent   = citations[nombreAleatoire][1]; // Change le contenue, index( du nombre aléatoire) auteur [1]  du tableau a 2 dimensions
  dernier              = nombreAleatoire;               // dernier = nombreAleatoire, pour éviter une répétition de citation, grâce au Do..While
});