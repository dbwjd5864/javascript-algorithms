function solution(n, times) {
    let answer = 0;
    // 입국 심사를 기다리는 사람 수가 1,000,000,000명 이하이기 때문에 순차 탐색으로는 불가능

    // 정답이 될 수 있는 최댓값: 심사관의 최대 심사시간 * 사람 수
    // 즉 Math.max(...times) * n
    let left = 1;
    let right = Math.max(...times) * n;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let count = 0;

        times.forEach((time) => {
            // count : 심사관 한 사람당 주어진 시간 (mid) 동안 심사할 수 있는 사람 수를 더한 값
            count += Math.floor(mid / time);
        });

        // 심사할 수 있는 사람 수 (count)가 실제로 주어진 사람 수 (n)보다 많다는 것은 주어진 시간(mid)이 너무 많다는 것이기 때문에 right를 -1
        // 그와 반대되는 경우에는 left를 +1
        // count와 n이 같은 경우를 체크하는 이유는 주어진 사람 수를 체크할 수 있는 경우가 많을 수 있는데 이중에서 최소 시간을 구하기 위해서
        if (count >= n) {
            answer = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return answer;
}