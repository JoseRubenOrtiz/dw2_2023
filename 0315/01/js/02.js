console.log("02.js enlazado");
console.log("ejercicio2");
console.log("la palabra 'saippuakivikauppias', es un palindromo?");
string= "saippuakivikauppias";

function reverseString(str) {
  let arrStr = str.split("");

  return arrStr.reverse().join("");
}
x=reverseString(string);

if (x==string){
  console.log("La palabra "+string+" Si es un palindromo");
}else {
  console.log("La palabra "+string+" no es un palindromo");
  console.log("")
}

