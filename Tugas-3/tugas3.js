//--Soal 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

console.log(kataPertama.concat(" " +kataKedua.replace("senang", "Senang")+ " " +kataKetiga+ " " +kataKeempat.toUpperCase()));

// --Soal 2
var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

console.log(parseInt(kataPertama) + parseInt(kataKedua) + parseInt(kataKetiga) + parseInt(kataKeempat));

//--Soal 3
var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4, 14);
var kataKetiga = kalimat.substring(15, 18);
var kataKeempat = kalimat.substring(19, 24);
var kataKelima = kalimat.substring(25, 31);

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);

// --Soal 4
var nilai = 79;
if (nilai >= 80) {
    console.log("Indexnya A");
} else if (nilai >= 70 && nilai < 80) {
    console.log("Indexnya B");
} else if (nilai >= 60 && nilai < 70) {
    console.log("Indexnya C");
}else if (nilai >= 50 && nilai < 60) {
    console.log("Indexnya D");
} else { 
    console.log("Indexnya E");
}

//--Soal 5
var tanggal = 27;
var bulan = 4;
var tahun = 1998;

switch(bulan) {
  case 1:   { console.log('Channel 1'); break; }
  case 2:   { console.log('Channel 2'); break; }
  case 3:   { console.log('Channel 3'); break; }
  case 4:   { console.log(tanggal+ " " +bulan+ " " +tahun); break; }
  default:  { console.log('Channel 5'); }}