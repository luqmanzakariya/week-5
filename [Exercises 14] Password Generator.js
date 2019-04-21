function changeVocals (str) {
  //code di sini
  var change = '';
  for (var i=0; i<str.length; i++){
    if (str[i] == 'a'){
      change += 'b';
    } else if (str[i] == 'i'){
      change += 'j';
    } else if (str[i] == 'u'){
      change += 'v';
    } else if (str[i]=='e'){
      change += 'f';
    } else if (str[i] == 'o'){
      change += 'p';
    } else if (str[i] == 'A'){
      change += 'B';
    } else if (str[i] == 'I'){
      change += 'J';
    } else if (str[i] == 'U'){
      change += 'V';
    } else if (str[i] == 'e'){
      change += 'F'
    } else if (str[i] == 'O'){
      change += 'p';
    } else {
      change += str[i];
    }
  }
  return change;
}

function reverseWord (str) {
  //code di sini
  var reverse = '';
  for (var i = str.length-1; i>=0; i--){
    reverse += str[i];
  }
  return reverse;
}

function setLowerUpperCase (str) {
  //code di sini
  var besar = str.toUpperCase();
  var kecil = str.toLowerCase();
  var balik = '';
  for (var i=0; i<str.length; i++){
    if (str[i] == besar[i]){
      balik += kecil[i];
    } else if (str[i] == kecil[i]){
      balik += besar[i];
    } else {
      balik += str[i];
    }
  }
  return balik;
}

function removeSpaces (str) {
  //code di sini
  var space = str.split(' ').join('');
  return space;
}

function passwordGenerator (name) {
  //code di sini
  if (name.length <5){
    return 'Minimal karakter yang diinputkan adalah 5 karakter';
  }
  var result= removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))));
  return result;



}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'