let text = "asd";
function x(text){
    const words = text.split(' ');
    let long = '';
    for (let word of words) {
        if (word.length > long.length){
            long = word
        }
    }
    return long;
}
const x1 = x(text);
console.log(x1);
