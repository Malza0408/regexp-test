const str = `
010-1234-5678
parkjh04080@gmail.com
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brwon fox jumps over the lazy dog.
abbcccdddd
`;

let regexp = /\.$/gim;
console.log(str.match(regexp));
