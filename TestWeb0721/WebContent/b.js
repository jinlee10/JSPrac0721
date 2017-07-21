/**
 * 		기본 데이터 타입 예제
 */

var num = 112.1245;
// document.write();	// actually this one's html한테 종속된거야 js에서 나중에 쓸일 많이 없을것!

console.log('num : ' + num);
console.log('num type: ' + typeof num);

// dynamic type. (java는 data type이 정적이
num = 77;	//동적 타입이라 값을넣는그순간에 타입이결정된다

console.log('num: ' + num);
console.log('num type: ' + typeof(num));

// num = false;
num = 3;

// 이거 semi boolean이래... (0 : 거짓, 그 외는 참)
// if( 4 ) ---> 이거랑 같. 4는 0이 아니니까 같음이 나온다
if(num = 4){	//if(num)이 더 깔끔하게 쓴것이다
	console.log('같음');
}else{
	console.log('다름');
}

console.log('num: ' + num);
console.log('num type: ' + typeof num);

num = 'hi';

console.log('num: ' + num);
console.log('num type: ' + typeof num);


//while(1){	//semi boolean이죠? 지원되죠? 거중에 대표값 1이라 걍 썼죠?
//	
//}

var tot;	//변수는 선언되었지만 값은 없다.

// console.log(tot1/);	// 오류나도 다음꺼 보이긴 한다? 아닌가??
console.log('ddddd');		

var a = null;
// 둘다 거짓으로 처리되지만 내부적인 값은 다르다

console.log(a);

console.log('a: ' + a);
console.log('a type: ' + typeof a);

if(a){	//if(num)이 더 깔끔하게 쓴것이다
	console.log('같음1');
}else{
	console.log('다름1');
}
