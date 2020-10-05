//--Soal 1
// Luas Lingkaran
const luasLingkaran = (phi,r)=>{
    let hasill = phi*(r*r)
    return hasill
}
console.log("Luas Lingkaran adalah " +luasLingkaran(3.14,4))

// Keliling Lingkaran
const kelilingLingkaran = (phi,r)=>{
    let hasilk = 2*phi*r
    return hasilk
}
console.log("Keliling Lingkaran adalah " +kelilingLingkaran(3.14,4))

//--Soal 2
let kalimat = ""

let theString = `${kalimat.push = "saya adalah seorang front end developer"}`
console.log(theString)

//--Soal 3
const newFunction = function literal (firstName, lastName){
    return { firstName,lastName,
    fullName: function(){
        console.log(firstName + " " + lastName)
    }
    }
}
//Driver Code 
newFunction("William", "Imoh").fullName()

//--Soal 4
    // Object 
const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
}
    // Destructuring
const {firstName,lastName,destination,occupation} = newObject
    // output to console
console.log(firstName, lastName, destination, occupation)

//--Soal 5
    // deklarasi
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
    // spread operator es6
const combined = [...west,...east]
    // output to console
console.log(combined)