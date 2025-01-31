// import { apiKey } from './util.js';
// import apiKey from "./util.js";
// import * as util from 'util.js"

//import { apiKey, abc as content } from "./util.js";

// console.log(util.apiKey)
// console.log(apiKey, content);

// const userMessage = "hello world!";

// console.log(userMessage);
// console.log(userMessage);

function createGreeting(userName, message = "hello!") {
  //   console.log(userName);
  //   console.log(message);
  return "Hi, I am " + userName + ". " + message;
}

const greeting1 = createGreeting("Begana");
console.log(greeting1);

const greeting2 = createGreeting("max", "what's up");
console.log(greeting2);
