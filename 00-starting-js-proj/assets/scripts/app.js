// import { apiKey } from './util.js';
// import apiKey from "./util.js";
// import * as util from 'util.js"

//import { apiKey, abc as content } from "./util.js";

// console.log(util.apiKey)
// console.log(apiKey, content);

// const userMessage = "hello world!";

// console.log(userMessage);
// console.log(userMessage);

// function createGreeting(userName, message = "hello!") {
//   //   console.log(userName);
//   //   console.log(message);
//   return "Hi, I am " + userName + ". " + message;
// }

// const greeting1 = createGreeting("Begana");
// console.log(greeting1);

// const greeting2 = createGreeting("max", "what's up");
// console.log(greeting2);

// export default (userName, message) => {
//   console.log("hello");
//   return userName + message;
// };

// const user = {
//   name: "Begana",
//   age: 35,
//   greet() {
//     console.log("Hello!");
//     console.log(this.age);
//   },
// };

// console.log(user.name);
// user.greet();

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log("Hi!");
//   }
// }

// const user1 = new User("manuel", 35);
// console.log(user1);
// user1.greet();

// const hobbies = ["reading", "sports", "cooking"];

// const index = hobbies.findIndex((item) => item === "sports");
// console.log(index);

// const editedHobbies = hobbies.map((item) => ({ text: item }));
// console.log(editedHobbies);

// const [firstName, lastName] = ["Begana", "Choi"];
// // const firstName = userNameData[0];
// // const lastName = userNameData[1];

// console.log(firstName, lastName);

// // have to use the same property name to distructure this
// const { name: userName, age } = {
//   name: "Begana",
//   age: 34,
// };

// console.log(userName, age);

// const hobbies = ["Sports", "Cooking"];
// const user = {
//   name: "Begana",
//   age: 35,
// };

// const newHobbies = ["Reading"];

// const mergedHobbies = [...hobbies, ...newHobbies];
// console.log(mergedHobbies);

// const extendedUser = {
//   isAdmin: true,
//   ...user,
// };

// console.log(extendedUser);

// const hobbies = ["Sports", "Cooking"];

// for (const hobby of hobbies) {
//   console.log(hobby);
// }

// function handleTimeout() {
//   console.log("Timed out!");
// }

// const handleTimeout2 = () => {
//   console.log("Timed out.. again!");
// };

// setTimeout(handleTimeout2, 2000);
// setTimeout(handleTimeout, 3000);
// setTimeout(() => {
//   console.log("More timing out....");
// }, 4000);

// function greeter(greetFn) {
//   greetFn();
// }

// greeter(() => console.log("Hi"));

function init() {
  function greet() {
    console.log("Hi");
  }

  greet();
}

init();
