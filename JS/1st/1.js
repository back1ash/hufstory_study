var in_int = prompt('정수 하나를 입력해주세요. ');
if (typeof in_int != Number || in_int % 1 != 0) { 
    alert("정수가 아닙니다!");
}
else if (in_int >= 50) {
    alert("입력한 숫자는 50 이상입니다.");
}
else {
    alert("입력한 숫자는 50 미만입니다.");
}