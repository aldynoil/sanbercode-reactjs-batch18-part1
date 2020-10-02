//--Soal 1
function sambutan(){
    console.log("Hallo Sanbers");
  }
  sambutan();
  
  //--Soal 2
  function kalikan(num1, num2) {
    return num1 * num2
  }
  
  var num1 = 12
  var num2 = 4
  
  var hasilKali = kalikan(num1, num2);
  console.log(hasilKali) ;
  
  //--Soal 3
  function introduce(name, age, address, hobby){
    return name + age + address + hobby
  }
  var name = "John";
  var age = 30;
  var address = "Jalan belum jadi";
  var hobby = "Gaming";
  
  var perkenalan = 
      introduce("Nama saya "+name,", umur saya ",age+" Tahun, alamat saya di ",address+", dan saya punya hobby yaitu "+hobby+"!");
  console.log(perkenalan)
  
  //--Soal 4
  var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992]
  var arrayDaftarPesertav2 = {
    nama : "Asep",
    jenis_kelamin : "Laki-Laki",
    hobi : "Baca Buku",
    tahun_lahir : 1992
    
  }
  // Test
  // console.log("Data Peserta: "+arrayDaftarPesertav2.nama+" "+arrayDaftarPesertav2.jenis_kelamin+" "+arrayDaftarPesertav2.hobi+" "+arrayDaftarPesertav2.tahun_lahir )
  // Test
  
  //--Soal 5
  var buah = [{nama:"Strawberry",warna:"Merah",ada_bijinya:"Tidak",harga:9000},
              {nama:"Jeruk",warna:"Oranye",ada_bijinya:"Ada",harga:8000},
              {nama:"Semangka",warna:"Hijau & Merah",ada_bijinya:"Ada",harga:10000},
              {nama:"Pisang",warna:"Kuning",ada_bijinya:"Tidak",harga:5000}]
  console.log(buah[0])
  
  //--Soal 6
  var dataFilm=[];
  function film(nama, durasi, genre, tahun){
    dataFilm.push({nama: "One Piece: Gold", durasi: "2 jam", genre: "laga/animasi", tahun: "2016"}),
    dataFilm.push({nama: "One Piece: Stampede", durasi: "1 jam 41 m", genre: "laga/animasi", tahun: "2019"})
  }
  film("nama", "durasi", "genre", "tahun");
  console.log(dataFilm)