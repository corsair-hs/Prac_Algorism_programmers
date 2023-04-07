/*
제일 작은 수 제거하기

정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

[4,3,2,1] -> [4,3,2]
[10] -> [-1]
*/

function solution(arr) {
    let answer = [];

    let _arr = [...arr];
    
    _arr = _arr.sort((a, b) => b - a);

    arr.splice(arr.indexOf(_arr[_arr.length-1]), 1)

    arr.length === 0 ? answer.push(-1) : answer = [...arr];

    return answer;
}

console.log(solution([4, 3, 2, 1]));
console.log(solution([10]));