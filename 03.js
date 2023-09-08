// 2. 문자 : string(문자열 = 문자의 나열)
// '' = "" 작은따옴표나 큰따옴표로 감싸줘야 문자열이 된다

let str = "Hello World!";
// console.log(str);
// console.log(str.typeof str);

// 2-1. 문자열 길이 확인하기
console.log(str.length); 

// 2-2. 문자열 결합하기 (concatenation)
let str1 = "Hello, ";
let str2 = "World!";
let result = str1.concat(str2);
// console.log(result);

// 2-3. 문자열 자르기
let str3 = "Hello, World!"
// console.log(str3.substring(7, 5));
// console.log(str3.slice(7, 12));

// 2-4. 문자열 검색
