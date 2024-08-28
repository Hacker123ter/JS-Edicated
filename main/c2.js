const text = "Абра кодабра";
function x(text){
    const words = text.split(' ');
    let long = '';
    for (let word of words){
        if (word.length > long.length) {
            long = word;
        }
    }
    return long;
}
const z = x(text);
function n(z){
    return z.toString().split('').reverse().join('');
}
const arbuz = n(z);
function y(arbuz){
    const c = arbuz.toString().split('').reverse().join('');
    return arbuz === c;
}
const arbuz2 = y(arbuz);
function v(arbuz2){
    return arbuz2.toString().split('').reverse().join('');
}
const arbuz3 = v(arbuz2);
const arbuz4 = arbuz + arbuz3
function b(arbuz4){
    return arbuz4.toString().split('').reverse().join('');
}
const arbuz5 = b(arbuz4);
function m(arbuz5){
    return arbuz5.length;
}
const arbuz6 = m(arbuz5);
console.log(arbuz6);