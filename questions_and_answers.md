1. Question.

let greeting;<br>
greetign = {};<br>
console.log(greeting);<br>

* A: {}<br>
* B: ReferenceError: greetign is not defined<br>
* C: undefined<br>
<details>
  <summary>Answer</summary>
  Answer: A:{}<br>
  Explanation => First the value of the greeting variable was undefined, then its value was changed to an empty object
</details>

2. Question.

function sum(a, b) {
  return a + b;
}

sum(1, "2");
* A: NaN
* B: TypeError
* C: "12"
* D: 3

<details>
  <summary>Answer</summary>
  Answer: C:"12"<br>
  Explanation => A number and a string are sent as parameters to the function. We know that if we add strings to numbers, they sit side by side. As a result, the return value here is 12.
</details>

3. Question.

const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);

* A: ['🍕', '🍫', '🥑', '🍔']
* B: ['🍝', '🍫', '🥑', '🍔']
* C: ['🍝', '🍕', '🍫', '🥑', '🍔']
* D: ReferenceError

<details>
  <summary>Answer</summary>
  Answer: A: ['🍕', '🍫', '🥑', '🍔']<br>
  Explanation => Here, there is no reference in the favoriteFood property of the info object, only taking the value of the frist index of the food array. As a result, even if the value of the favoriteFood property is changed, there is no change in the food array.
</details>

4. Question.

function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());

* A: Hi there,
* B: Hi there, undefined
* C: Hi there, null
* D: ReferenceError

<details>
  <summary>Answer</summary>
  Answer: B: Hi there, undefined<br>
  Explanation => Here a variable called name has been taken in the parameter of sayHi function but no argument has been passed while calling sayHi function, so here the value of name is getting undefined. That is, the value of name has not been defined.
</details>

5. Question.

let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);

* A: 1
* B: 2
* C: 3
* D: 4

<details>
  <summary>Answer</summary>
  Answer: D: 4<br>
  Explanation => Here's the count initial value is 0 . By running forEach on and nums the value of count is incremented by 1.
</details>