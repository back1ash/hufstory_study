var num1 = Number(prompt("정수를 입력해주세요."));
var num2 = Number(prompt("정수를 입력해주세요."));
var num3 = Number(prompt("정수를 입력해주세요."));

var max = Math.max(num1, num2, num3);
var min = Math.min(num1, num2, num3);
var sum = num1 + num2 + num3;
var avg = sum / 3;

alert("최대 | 최소 | 합 | 평균 ="+max+" | "+min+" | "+sum+" | "+avg);