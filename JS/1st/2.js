var input = prompt("정수 하나를 입력해주세요");

if( typeof input != Number || input % 1 != 0 ) {
    alert("정수가 아닙니다.");
}
else if ( input % 3 == 0 ) {
    alert("입력한 숫자는 3의 배수입니다.");
}
else {
    alert("입력한 숫자는 3의 배수가 아닙니다.");
}