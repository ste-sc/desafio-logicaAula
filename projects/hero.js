//variaveis 
let heroName = "Stella"
let heroXP = 7479
let level = ""

//loop 
for (let count = 0; count <= heroXP; count++) {
//decisão e operadores
     if (heroXP <= 1000) {
          level = "Ferro"     
}
if (heroXP >=1001 && heroXP <=2000) {
     level = "Bronze"
}
if (heroXP >=2001 && heroXP <=5000) {
     level = "Prata"
}
if (heroXP >=5001 && heroXP <=7000) {
     level = "Ouro"
}
if (heroXP >=7001 && heroXP <=8000) {
     level = "Platina"      
}
if (heroXP >=8001 && heroXP <=9000) {
     level = "Ascendente"
}
if (heroXP >=9001 && heroXP <=10000) {
     level = "Imortal"
}
if (heroXP >=10001) {
     level = "Radiante"
}
}
//output 
console.log("O herói de nome " + heroName + " está no nível " + level)