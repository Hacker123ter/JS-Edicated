const arb = "racecar";
function fun(arb){
    const arbuzik = arb.split('').reverse().join('');
    return arb === arbuzik;
}
console.log(fun(arb));