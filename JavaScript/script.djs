
let password = document.getElementById("password")
let text = document.getElementById("text")
let generate = document.getElementById("generate")
let Range = document.getElementById("range")
// let includeuppercase = document.getElementById("include-uppercase")
// let includelowercase = document.getElementById("include-lowercase")
// let includenumbers = document.getElementById("include-numbers")
// let includesymbols = document.getElementById("include-symbols") 


function RandomGenerate(){



let CharSet = {
   uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
   lowercase: "abcdefghijklmnopqrstuvwxyz",
   numbers: "1234567890",
   symbols:      "¬!£$%^&*()_+=-}{][@"
}


let SelectCharSet = [
    // document.getElementById("include-uppercase").checked && CharSet.uppercase,
    // document.getElementById("include-lowercase").checked &&  CharSet.lowercase,
    // document.getElementById("include-numbers").checked &&  CharSet.numbers,
    // document.getElementById("include-symbols").checked && 
     CharSet.symbols,
     CharSet.uppercase,
     CharSet.lowercase,
     CharSet.numbers
]


let Range = document.getElementById("range")
// Range.value = "100"
let FinalPassword = []
// console.log(FinalPassword.length)

let a = ""

for (let i =0; i < 9; i++) {
    
    let RandomCharSetIndex = Math.floor(Math.random() * SelectCharSet.length)
    let RandomCharSet = SelectCharSet[RandomCharSetIndex]


 


     FinalPassword.push(RandomCharSet)
    FinalPassword = Math.floor(Math.random() * RandomCharSet.length)
   FinalPassword = RandomCharSet[FinalPassword]
     password.innerHTML += FinalPassword
}
// console.log(FinalPassword)








}
// function clicked() {

//     for (let i = 0; i < 5; i++) {
//         let RandomUppercase =  Math.floor(Math.random() * uppercase.length)
//         let RandU = uppercase[RandomUppercase]
//         FianlUppercase.push(RandU)
//         // FianlUppercase.split()
//         password.innerHTML = "Password" + FianlUppercase
        
        
//     }

//     // console.log(FianlUppercase)
//     // FianlUppercase = []

    
//     // let RandomNumbers = Math.floor(Math.random() * Numbers.length)
//     // let RandN = Numbers[RandomNumbers]
//     // newtext = text.value
//     // let setText = newtext.split(" ")
//     // text.value = setText.join(RandN)
//     // // console.log(RandomNumbers)

//     // password.innerHTML = "Password" + text.value
//     // text.value = ""



// }

