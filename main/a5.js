let sss = "321ss123";
function fun(sss){
    const arb = sss.split('').reverse().join('');
    return sss === arb;
}
const asd = fun(sss);
function fun2(asd){
    return asd.toString().split('').reverse().join('');
}
const dsa = fun2(asd);
console.log(dsa);