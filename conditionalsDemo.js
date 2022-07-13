let blaziken = "Kelvin"
let gengar = "Lukas"

if(blaziken === "Lukas"){
    console.log("This is Lukas' Pokemon")
} else {
    console.log("This is Kelvin's Pokemon")
}
//camel case
let blazikenAtk = 30
let gengarAtk = 30
//snake case
// let blaziken_atk = 45
// let gengar_atk = 30
//kebab case
// let blazin-atk = 45

let blazikenHP = 200
let gengarHP = 260

if(blazikenAtk > gengarAtk) {
    // gengarHP = gengarHP - blazikenAtk
    gengarHP -= blazikenAtk
    console.log(gengarHP)
} else if (gengarAtk > blazikenAtk) {
    blazikenHP -= gengarAtk
    console.log(`Blaziken's new HP is ${blazikenHP}`)
} else {
    console.log("They both missed!")
}

let furySwipes = 35

for(i = 0; i < 3; i++){
    console.log(i);
    console.log("Blaziken used fury swipes!");
    gengarHP -= furySwipes;
    console.log(`Gengar's HP is now ${gengarHP}`);
};

console.log("---------------")

let lowKick = 60

for(i = 4; i > 0; i--){
    console.log(i)
    console.log("Gengar used low kick!")
    blazikenHP -= lowKick
    console.log("Blaziken's HP is now " + blazikenHP)
}

for(i = 1; i <= 10; i += 2){
    console.log("Odd numbers are " + i)
}

console.log("=========================")

let gengarFainted = false

while(gengarHP > 0) {
    console.log("Blaziken used fury swipes")
    gengarHP -= furySwipes
    if(gengarHP < 0){
        gengarHP = 0
        gengarFainted = true
    }
    console.log("Gengar's HP is now " + gengarHP)
    if(gengarFainted){
        console.log("Gengar has fainted")
    }
}

let boolean = false

let falseNum = 10

let falseStr = " "

let testArray = []

if(testArray){
    console.log("True")
} else {
    console.log("False")
}

let newPokemon = "Pikachu"