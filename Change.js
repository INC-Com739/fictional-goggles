'use strict';
//Click the button and change the CSS style of an element on the page.
//The element should change its background color to red to green.
let body = document.querySelector('body');
let button = document.querySelector('button');
button.onclick = function() {
  changeColor();
}
function changeColor() {
  body.style.backgroundColor = 'lightgreen';
}
// JavaScript that uses and object to store user data.
// The object should contain the following properties:
// name, age
// The object should also contain a method that returns a string like this:
// "Hello, my name is [name] and I am [age] years old."
let user = {
  name: 'John',
  age: 30,
  sayHello: function() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}
console.log(user.sayHello());