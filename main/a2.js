let f = "121";
function fun(f){
    const arbuz = f.split('').reverse().join('');
    return f === arbuz;
}
let arbuzprivet = fun(f);
console.log(arbuzprivet);