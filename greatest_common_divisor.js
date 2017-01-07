// find the greatest common divisor of 2 numbers

var numberA = 4;
var numberB = 8;

while (numberA !== numberB) {
    if (numberA > numberB) numberA = numberA - numberB;
    else numberB = numberB - numberA;
}

var MCD = numberA;
console.log(MCD);