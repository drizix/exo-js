//exo 1

let arrayJoyD = ["Ian Curtis" ,
  "Bernard Sumner" ,
  "Peter Hook" ,
  "Stephen Morris" ,
  "Terry Mason" ,
  "Tony Tabac" ,
  "Steve Brotherdale"
  ]

console.log("Dans le groupe Joy Division il y a "+arrayJoyD.length+" personnes.");
console.log(arrayJoyD[arrayJoyD.length-1]);

//Exo 3

let arraySupertramp = ["Supertramp",
  "Indelibly Stamped",
  "Crime of the Century",
  "Crisis? What Crisis?",
  "Even in the Quietest Moments…",
  "Breakfast in America"
  ]

console.log(arraySupertramp.slice(0,4));
console.log(arraySupertramp.slice(-3));
console.log(arraySupertramp.slice(2,5));
console.log(arraySupertramp.slice(-3,-1));

//exo 5

function lfAlbum(arg){
  let returnBolAlbum = arraySupertramp.includes(arg);
  let returnFalse = "il n y a pas l'album "+arg;
  let returnTrue = "l'album "+arg+" existe."; 
  if( returnBolAlbum == false){
    return returnFalse;
  }

  return returnTrue;
}

console.log(lfAlbum("Hello world"));
console.log(lfAlbum("Crime of the Century"));

// exo 7
// Créez une fonction qui prend en paramètre un tableau et qui affiche en console tous les éléments de ce tableau.

function parcourirTableau(arg1,arg2){
  let value = "";
  for (let index = 0; index < arg2; index++) {
    value = value+arg1[index]+"|";
  }
  return value;
}

let exo7 = parcourirTableau(arraySupertramp,arraySupertramp.length)
console.log(exo7);

// exo 8
// Créez une fonction qui prend en paramètre un 
// tableau de nombres et qui renvoie une copie de ce 
// tableau dans laquelle tous les nombres ont été augmentés de 1.

let numberArray = [1,2,3,4,5,6,7];

function add1FromArray(arg1,arg2){
  let value = [];
  for (let index = 0; index < arg2; index++) {
    value.push(arg1[index]+1);
  }
  return value;
}

let exo8 = add1FromArray(numberArray,numberArray.length);
console.log(exo8);

// exo 9
// Créez une fonction qui prend en paramètre un tableau de nombres et qui, 
// pour tous les éléments de ce tableau, 
// affiche si cet élément est pair ou non.

function pairOrNotPair(arg1,arg2){
  let value = "";
  for (let index = 0; index < arg2; index++) {
    let calcule = arg1[index]%2;
    if(calcule == 1){
      value = value+"|"+"impair";
    }else{
      value = value+"|"+"pair";
    }
  }
  return value;
}

let exo9 = pairOrNotPair(numberArray,numberArray.length);
console.log(exo9);

// exo 10
// Créez une fonction qui prend en paramètre un tableau de nombres, 
// et qui retourne la somme des éléments de ce tableau.

function sommeArray(arg1,arg2){
  let calculeSomme = 0;
  for (let index = 0; index < arg2; index++) {
    calculeSomme = calculeSomme+arg1[index];
  }
  return calculeSomme;
}

let exo10 = sommeArray(numberArray,numberArray.length);
console.log(exo10);

// exo 11
// Créez une fonction qui prend en paramètre un tableau de nombres 
// et qui renvoie le nombre d’éléments pairs de ce tableau.

function pairNumberArray(arg1,arg2){
  let nbEltPair = 0;
  for (let index = 0; index < arg2; index++) {
    if(arg1[index]%2 == 0){
      nbEltPair = nbEltPair+1;
    }
  }
  return nbEltPair;
}

let exo11 = pairNumberArray(numberArray,numberArray.length);
console.log(exo11);

// exo 12 
// Créez une fonction qui prend en paramètre un tableau de 
// nombres et qui renvoie la valeur maximum de ce tableau.

function valMaxArray(arg1,arg2){
  let valMax = 0;
  for (let index = 0; index < arg2; index++) {
      if( arg1[index] > valMax){
        valMax = arg1[index];
      }
    }
  return valMax;
}

let exo12 = valMaxArray(numberArray,numberArray.length);
console.log(exo12);

// Exercice 13 :
// Créez une fonction qui prend en paramètre un 
// tableau de nombres et qui affiche la valeur maximum 
// et minimum de ce tableau.

function MaxAndMinArray(arg1,arg2){
  let valMax =0;
  let valMin =0;
  for (let index = 0; index < arg2; index++) {
    if( arg1[index] > valMax){
      valMax = arg1[index];
    }
    if( arg1[index] < valMin){
      valMin = arg1[index];
    }
  }
  return "la valeur min est : "+valMin+" et la valeur max est : "+valMax;
}

let exo13 = MaxAndMinArray(numberArray,numberArray.length);
console.log(exo13);

// Exercice 14 :
// Créez une fonction qui prend en paramètre un tableau de nombres 
// et qui renvoie vrai si ce tableau est ordonné dans l’ordre croissant, 
// faux si ce n’est pas le cas.

function ascArray(arg1,arg2){
  let valBol = true;
  for (let index = 0; index < arg2; index++) {
    if(arg1[index] > arg1[index+1]){
      valBol = false;
    }
  }
  return valBol;
}

let numberArray2 = [1,4,7,2,8];
let exo14 = ascArray(numberArray,numberArray.length);
console.log(exo14);
let exo14v2 = ascArray(numberArray2,numberArray2.length);
console.log(exo14v2);


// Exercice 15 :
// Créez une fonction qui prend en paramètre un tableau de nombres et qui retourne 
// un autre tableau de nombres constitué des éléments du tableau passé en paramètre. 
// Dans le tableau retourné, chaque élément n'a qu'une seule occurrence.

function copyArray(arg1,arg2){
  let newArray = [];
  for (let index = 0; index < arg2; index++) {
    newArray.push(arg1[index]);
  }
  return newArray;
}

let exo15 = copyArray(numberArray,numberArray.length);
console.log(exo15);

// Exercice 16 :
// Créez une fonction qui prend en paramètre un tableau de nombres et qui retourne un 
// autre tableau de nombres constitué des éléments du tableau passé en paramètre. 
// Dans le tableau retourné, l'ordre des éléments est inversé.

function copyArrayReverse(arg1,arg2){
  let newArray = [];
  for (let index = 0; index < arg2; index++) {
    newArray.push(arg1[index]);
  }
  let reverseArray = newArray.reverse();
  return reverseArray;
}

let exo16 = copyArrayReverse(numberArray,numberArray.length);
console.log(exo16);

// Exercice 17 :
// Créez une fonction qui prend en paramètres deux tableaux de nombres et qui retourne un tableau 
// correspondant à la concaténation des deux tableaux d'entiers passés en paramètres.

function concatArray(arg1,arg2){
  let array = [];
  for (let index = 0; index < arg1.length; index++){
    array.push(arg1[index]);
  }
  for (let index2 = 0; index2 < arg2.length; index2++){
    array.push(arg2[index2]);
  }
  return array;
}

let exo17 = concatArray(numberArray,numberArray2);
console.log(exo17);

// Exercice 18 :
// Créez une fonction qui prend en paramètre un tableau de chaînes de caractères, 
// qui copie dans un nouveau tableau tous les éléments du tableau passé en paramètre 
// commençant par une voyelle.

function onlyVoyelleArray(arg1){
  let newArray =[];
  let firstChar = "";
  for (let index = 0; index < arg1.length; index++) {
    firstChar = arg1[index].charAt(0);
    if(firstChar === "a" || firstChar === "e" || firstChar === "i" || firstChar === "o" || firstChar === "u" || firstChar === "y"){
      newArray.push(arg1[index]);
    }
  }
  return newArray;
}

let charArray = ["arbre","bouteille","index","outils","yeux","nez"]
let exo18 = onlyVoyelleArray(charArray);
console.log(exo18);

// eco 19:
/////////////////////////
////////////////////////