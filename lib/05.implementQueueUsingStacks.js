/**

232. Implement Queue using Stacks
Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

Implement the MyQueue class:

void push(int x) Pushes element x to the back of the queue.
int pop() Removes the element from the front of the queue and returns it.
int peek() Returns the element at the front of the queue.
boolean empty() Returns true if the queue is empty, false otherwise.
Notes:

You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.


Example 1:

Input
["MyQueue", "push", "push", "peek", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 1, 1, false]

Explanation
MyQueue myQueue = new MyQueue();
myQueue.push(1); // queue is: [1]
myQueue.push(2); // queue is: [1, 2] (leftmost is front of the queue)
myQueue.peek(); // return 1
myQueue.pop(); // return 1, queue is [2]
myQueue.empty(); // return false


Constraints:

1 <= x <= 9
At most 100 calls will be made to push, pop, peek, and empty.
All the calls to pop and peek are valid.


Follow-up: Can you implement the queue such that each operation is amortized O(1) time complexity? In other words, performing n operations will take overall O(n) time even if one of those operations may take longer.
 */

/**
 * [한글 해석]
 * 232. 스택을 이용한 큐 구현
 * 2개의 스택만 사용하여 FIFO(First in first out) 큐를 구현합니다. 구현된 큐는 일반 큐(push, peek, pop, and empty)의 모든 기능을 지원해야 합니다.
 * MyQueue 클래스 구현:

  void push(int x) 요소 x를 대기열의 뒤쪽으로 누릅니다.
  int pop() 대기열 전면에서 요소를 제거하고 반환합니다.
  int peek() 대기열의 맨 앞에 있는 요소를 반환합니다.
  boolean empty() 대기열이 비어 있으면 true를 반환하고 그렇지 않으면 false를 반환합니다.

주의:

스택의 표준 작업만 사용해야 합니다. 즉, 위쪽으로 밀어서, 위에서 들여다보기/팝만, 크기, 비어있는 작업만 유효합니다.
사용자의 언어에 따라 스택이 기본적으로 지원되지 않을 수 있습니다. 스택의 표준 작업만 사용하는 한 목록 또는 데크(double-end queue)를 사용하여 스택을 시뮬레이션할 수 있습니다.


예 1:

입력
["MyQueue", "push", "push", "peek", "pop", "empty"]
[[], [1], [2], [], [], []]
산출량
[null, null, null, 1, 1, false]

설명.
My Queue my Queue = 새로운 My Queue();
myQueue.push(1); // 대기열은 [1]입니다
myQueue.push(2); // 대기열은 [1, 2](가장 왼쪽은 대기열 앞)입니다
myQueue.peek(); // 리턴 1
myQueue.pop(); // 1을 반환하고, 대기열은 [2]입니다
myQueue.empty(); // false 반환


제약 조건:

1 <= x <= 9
푸시, 팝, 엿보기 및 비우기에는 최대 100번의 전화가 걸려옵니다.
팝업 및 엿보기 통화는 모두 유효합니다.


Follow up: 각 연산이 O(1) 시간 복잡도를 상각하도록 대기열을 구현할 수 있습니까? 즉, n개의 연산을 수행하는 것은 시간이 더 오래 걸릴 수도 있지만 전체 O(n) 시간이 걸립니다.
 *
 */

export const MyQueue = function() {
  this.queue = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.queue[this.queue.length - 1] = x;
  return this.queue;
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  if (this.queue.length === 0) {
    return undefined;
  };

  const removedFirstElement = this.queue[0];
  let i = 0;

  while (i < this.queue.length - 1) {
    this.queue[i] = this.queue[i + 1];
    i++;
  }

  this.queue.length = this.queue.length - 1;

  return removedFirstElement;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  return this.queue[0];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  if (this.queue.length) {
    return true;
  }

  return false;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */