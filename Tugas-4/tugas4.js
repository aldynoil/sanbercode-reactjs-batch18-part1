//--Soal 1
var myState = 2;
var myState2 = 20;
console.log("LOOPING PERTAMA");
while(myState < 22) {
  console.log( myState + " - I Love Coding");
  myState+= 2; 
}
console.log("LOOPING KEDUA");
while(myState2 > 0) {
  console.log( myState2 + " - I Will Become a Frontend Developer");
  myState2-= 2; 
}

//--Soal 2
for(var deret = 1; deret < 20; deret++) {
  if(deret % 2 ==0 ){
    console.log( deret  + " - Berkualitas");
    
    }else if(deret % 3 ==0 && deret % 2 ==1){
      console.log( deret  + " - I Love Coding"); 
      
      }else{
        console.log( deret  + " - Santai");
  }
}
  //--Soal 3
  brs=''
  for (baris = 1; baris <= 7; baris++){
    brs+='#'
    console.log(brs);
    
  }

  //--Soal 4
  var kalimat = "saya sangat senang belajar javascript";
var arrayOutput = [];
var arrayValue1 = kalimat.substring(0, 5);
var arrayValue2 = kalimat.substring(5, 12);
var arrayValue3 = kalimat.substring(12, 18);
var arrayValue4 = kalimat.substring(19, 26);
var arrayValue5 = kalimat.substring(27, 37);
arrayOutput.push(arrayValue1);
arrayOutput.push(arrayValue2);
arrayOutput.push(arrayValue3);
arrayOutput.push(arrayValue4);
arrayOutput.push(arrayValue5);

console.log(arrayOutput);

//--Soal 5
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
list = daftarBuah.sort()
for (i = 0; i < daftarBuah.length; i++){
  console.log(list[i]);
}