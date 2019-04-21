function kaliTerusRekursif(angka) {
  // you can only write your code here!
  if (String(angka).length == 1){
    return angka;
  } else {
    var kali = 1;
    for (var i=0; i<String(angka).length; i++){
      kali *= Number(String(angka)[i]);
    }
    return kaliTerusRekursif(kali);
  }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6