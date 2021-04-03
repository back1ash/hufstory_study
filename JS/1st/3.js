var grade = prompt("몇학년입니까?");
var score = prompt("점수를 입력하세요.");

switch (grade) {
    case '4':
        if ( score >= 70 ) { alert("합격입니다."); }
        else { alert("불합격입니다."); }
        break;
    default:
        if ( score >= 60 ) { alert("합격입니다."); }
        else { alert("불합격입니다."); }
        break;
}