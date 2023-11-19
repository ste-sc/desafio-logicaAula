
function calcular(wins, defeats) {
    saldoRank = wins - defeats;
    level = ""

    if (wins <= 10) {
       level = "Ferro"
    } else if (wins >=11 && wins <= 20){
       level = "Bronze"
    } else if (wins >=21 && wins <= 50){
       level = "Prata"
    } else if (wins >=51 && wins <= 80){
       level = "Ouro"
    } else if (wins >=81 && wins <= 90){
       level = "Diamante"
    } else if (wins >=91 && wins <= 100){
       level = "Lendário"   
    } else {
       level = "Imortal"
}
}
calcular (79, 44)
finalMessage = ("O Herói tem um saldo de " + saldoRank + " vitórias e está no nivel " + level)
console.log (finalMessage)