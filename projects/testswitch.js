let heroXP = 400
let level = ""

switch (479) {
  case 100:
    level= "ferro";
    break;
  case 101 && 200:
    level= "metal";
    break;
  case 201 && 400:
    level= "bronze";
    break;
  case 401 && 700:
    level= "prata";
    break;
  case 701 && 900:
    level= "ouro";
    break;
  case 901 && 1000: 
    level= "diamante";
    break;
}
console.log ("está no nivel" + level)

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  
}