let arbuz = "123123";
function privet(arbuz){
    const perdni = arbuz.split('').reverse().join('')
    return arbuz === perdni;
}
let arbuzec = privet(arbuz);
function privetik(bool123){
    return bool123.toString().split('').reverse().join('');
}
const dol = privetik(arbuzec);
console.log(dol);