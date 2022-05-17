function solution(numbers) {
    numbers = numbers.map(num => num.toString()).sort((a,b) =>  {
        return (b+a) - (a+b);
    });

    return numbers[0] === '0' ? "0" : numbers.join("");
}