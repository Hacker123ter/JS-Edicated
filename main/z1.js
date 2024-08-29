const text = "Text какой-то рандомный текст, всем привет, с вами я! (Hacker123ter) так же известный как dw363!"
function x(text){
    const slova = text.split(' ');
    let dlina = '';
    for (let word of slova){
      if (word.length > dlina.length){
          dlina = word;
      }
    }
    return dlina;
}
const vivod = x(text);
console.log(vivod);