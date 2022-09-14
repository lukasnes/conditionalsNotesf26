let pikachuHealth = 100
let gengarHealth = 250

let pikachuAttack = 20
let gengarAttack = 30

if(gengarAttack < pikachuAttack){
    console.log("Pikachu is stronger")
} else if(pikachuAttack < gengarAttack){
    console.log("Gengar is stronger")
} else {
    console.log("They're equally strong")
}

gengarHealth = gengarHealth - pikachuAttack
console.log(gengarHealth)

gengarHealth -= pikachuAttack
console.log(gengarHealth)

gengarHealth++
console.log(gengarHealth)

gengarHealth--
console.log(gengarHealth)

console.log("=========================================")

// for(i = 20; i >= 0; i -= 2){
//     console.log(i)
// }

for(i = 0; i < 3; i++){
    pikachuHealth -= gengarAttack
    console.log(`Pikachu's health is now ${pikachuHealth}`)
}

gengarFainted = false
console.log("========================")

while(gengarFainted !== true){
    gengarHealth -= pikachuAttack
    console.log(`Gengar's Health is now ${gengarHealth}`)
    if(gengarHealth <= 0){
        gengarFainted = true
    }
}

console.log("Gengar fainted!")



let catName = "Tigger"
let catAge = 1
let catColor = "orange"

console.log(`My cat's name is ${catName}, his fur is ${catColor}, and his age is ${catAge}`)
            //   0     1        2        3         fruits.length
let fruits = ["banana","apple"]
console.log("=========" + fruits.length + "===============")
let fruitStr = "I really like "

for(i = 0; i < fruits.length; i++){
    if(i !== fruits.length - 1){
        fruitStr += `${fruits[i]}, `
    } else {
        fruitStr += `and ${fruits[i]}.`
    }


    // if(i === fruits.length - 1){
    //     fruitStr += `and ${fruits[i]}`
    // } else {
    //     fruitStr += `${fruits[i]}, `
    // }
}
console.log(fruitStr)


console.log("1" != 1, "1" !== 1)

console.log(!false)