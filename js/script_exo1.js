//exo1
function average(arg1,arg2,arg3,arg4){
  let result = (arg1+arg2+arg3+arg4)/4;
  return result; 
}

let myCalcule = average(10,15,17,20);

console.log(myCalcule);

//exo1.2
function convertEuroToDollar(arg1){
  let result = arg1*1.234;
  return result
}

let myPrice = convertEuroToDollar(110);

console.log(myPrice);

//exo1.3
function testHightValue(arg1,arg2){
  if(arg1 == arg2){
    return "erreur de saisi, vous avez entré deux fois la même valeur !"
  }else{
    if(arg1 > arg2){
      return arg1;
    }else{
      return arg2;
    }
  }
}

let test1 = testHightValue(20,10);
let test2 = testHightValue(5,10);
let test3 = testHightValue(10,10);
console.log(test1);
console.log(test2);
console.log(test3);

//exo1.4


function testHightLength(arg1,arg2){
  let length1 = arg1.length;
  let length2 = arg2.length;
  if(length1 == length2){
    return "erreur de saisi, vous avez entré deux mots avec le même nombre de caractères !"
  }else{
    if(length1 > length2){
      return arg1;
    }else{
      return arg2;
    }
  }
}

let test4 = testHightLength('abcd','abcdefghi');
let test5 = testHightLength('hbfwhbfwbwfbfwd','abcdefghi');
let test6 = testHightLength('abcdefghi','abcdefghi');

console.log(test4);
console.log(test5);
console.log(test6);

//exo1.5

function testLessThanthreeNumber(arg1,arg2,arg3){
  if(arg1 < arg2 && arg1 < arg3){
    return arg1;
  }else if(arg2 < arg1 && arg2 < arg3){
    return arg2;
  }else if(arg3 < arg1 && arg3 < arg2){
    return arg3;
  }
}

let test7 = testLessThanthreeNumber(5,10,15);
let test8 = testLessThanthreeNumber(10,7,15);
let test9 = testLessThanthreeNumber(15,10,8);

console.log(test7);
console.log(test8);
console.log(test9);

//exo1.6

function isVowel(arg){
  if(arg == 'a' || arg == 'e' || arg == 'i' || arg == 'o' || arg == 'u' || arg == 'y'){
    return true;
  }else{
    return false;
  }
}

let test10 = isVowel('e');
let test11 = isVowel('c');

console.log(test10);
console.log(test11);
