let arbuz = "Арбуз, арбуз, привет!";
function perdni(arbuz){
    const oyblat = arbuz.split('').reverse().join('');
    return arbuz === oyblat;
}
const arbuzarbuz = perdni(arbuz);
console.log(arbuzarbuz);