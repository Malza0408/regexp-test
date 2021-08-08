const str = `
010-1234-5678
parkjh04080@gmail.com
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brwon fox jumps over the lazy dog.
abbcccdddd
`;

let regexp = /fox/gi;
// console.log(regexp.test(str)); // true

// regexp = /MALZA/gi;
// console.log(regexp.test(str)); // false

// console.log(str.replace(regexp, 'AAA'));
// console.log(str); // 원본이 바뀌지는 않았다. 결과를 다시 str 에 넣어주면 된다.

// ----------------------------------------------------------------------------------

// 정규표현식에서 기능으로 해석이 되는 특수문자의 앞에는 \ 를 붙여준다.
// . 을 찾아본다.
console.log(str.match(/\./gi)); // 4개 나온다.
// $ sign 앞에 있는 하나의 단어로 해당하는 줄이 끝나는 부분을 찾아서 끝나는 부분을 일치시킨다.
// 문장의 끝 지점을 의미하므로 현재 문장에서 ` 기호 앞은 아무것도 없다.
console.log(str.match(/\.$/gi)); // null 이 나온다.
console.log(str.match(/\.$/gim)); // 각 줄에서 마침표를 찾아준다. 하나가 나온다. dog.

// g flag 는 전체적으로 찾는것이다. 줄 마다 보는 것이 아니다.
// m flag 는 각 줄마다 찾는 것이다.

console.log(str.match(/h../g)); // ["h04", "htt", "he ", "he "]

console.log(str.match(/fox|dog/g)); // ["fox", "dog"]
console.log(str.match(/https?/g)); // ["http"]
console.log(str.match(/d{2}/g)); // ["dd", "dd"]
console.log(str.match(/d{2,}/g)); // ["dddd"]
console.log(str.match(/d{2,3}/g)); // ["ddd"]
console.log(str.match(/\b\w{2,3}\b/g)); // \w : 숫자를 포함한 알파벳
// \b \b : 앞뒤에 숫자나 알파벳이 아닌 경우에 가져온다.
// ["010", "com", "www", "com", "The", "fox", "the", "dog"]

console.log(str.match(/[fox]/g)); // f, o, x 하나씩 다 찾는다.
console.log(str.match(/[0-9]{1,}/g));
// 0~9 까지 숫자중 1개 이상 연속되는 모든것들
// 010, 1234, 5678 등
console.log(str.match(/[a-z]{1,}/g));
// a~z 까지 알파벳중 1개이상 연속되는 모든것들

console.log(str.match(/\s/g)); // ["frozen", "fox"]

console.log(str.match(/.{1,}(?=@)/g));
console.log(str.match(/(?<=@).{1,}/g));
