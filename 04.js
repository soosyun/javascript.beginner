//if, else, else if 
//추가요구사항 :
//19살이면 수능 잘치세요 라는 문구를 보여주세요
//age === 19 (일치연산자 사용)

const age = 19;

if(age > 19) {
    console.log('환영합니다.');
} else if(age ===19) {
    console.log('수능잘치세요!');
} else {
    console.log('안녕히가세요.')
}



// 논리연산자
// || (OR) : 여러개 중 하나라도 true면 true. 즉, 모든값이 false 일때만 false를 반환
// && (AND) : 모든값이 true면 true. 즉, 하나라도 false면 false를 반환
// ! (NOT) : true면 false. false면 true. 반대값으로 바꾼다

// 스티브 잡스는 한국인이거나OR, 남자이다. true (둘 중 하나만 맞아도 참)
// 스티브 잡스는 한국인이고AND, 남자이다. false (한국인이 아니니까 거짓임)


