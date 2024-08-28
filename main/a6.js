const asd = "123";
function funk(asd){
    const dsa = asd.split('').reverse().join('');
    return asd === dsa;
}
let a1 = funk(asd);
function fun(a1){
    return a1.toString().split('').reverse().join('');
}
let arbuz = fun(a1);
console.log(arbuz);