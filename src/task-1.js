const javaScriptDescription = 'JavaScript — мультипарадигменный язык \
программирования. Поддерживает объектно-ориентированный, императивный и \
функциональный стили. Является реализацией спецификации ECMAScript. \
JavaScript обычно используется как встраиваемый язык для программного \
доступа к объектам приложений.';

let halfIndex = Math.floor(javaScriptDescription.length / 2);

let text = javaScriptDescription.slice(0, halfIndex);
text = text.replaceAll('а', 'А');
text = text.replaceAll(' ', '');
text = text.repeat(3);

console.log(text.charAt(Math.floor(text.length / 2)));
console.log(text);

