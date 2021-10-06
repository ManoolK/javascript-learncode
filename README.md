# javascript-learncode

This repository contains notes and projects I've made on the JS learning course.

[Project #1. Guess the number.](/project_guess_number)   
[Project #2. Modal window.](/project_modal_window)   
[Project #3. Pig game.](/project_pig_game)   
[Project #4. Bankist App.](/project_bankist)   
[Project #5. Bankist Website.](/project_bankist_website)   
[Project #6. Mapty.](/project_mapty)  
[Project #7. Forkify.](/project_forkify)

## for VS Code   

	formatter: Prettier (opinionated)
		configure
	Set code-snippets
	Settings Sync (if use multiple computers)
	TODO Highlight
	Live server
	
## Node js  

	npm install live-server -g
	live-server
	npm install npm@latest -g					- install latest version npm and node
	
## 4 steps to solve any problem   

1. Make sure you 100% understand the problem. Ask the right questions to get a clear picture of the problem.
2. Divide and conquer: Break a big problem into smaller sub-problems.
3. Don't be afraid to do as much research as you have to.
4. For bigger problems, write pseudo-code before writing the actual code.
	
## DOM - Document Object Model  

	Structured representation of HTML document.
	
## WEB APIs - libraries, also written in JS.  

	DOM Methods and Properties are a part of it.
		Can interact with JS.
	Timers
	Fetch
	
## JS  

	High-level  
		Developer does NOT have to worry about resources, everything happens automatically
		But the programs are not so fast and optimised as low-level programs (like C).
	Garbage-collected  
		Inside the engine. Automatically cleans the memory.
	Interpreted or just-in-time (JIT) compiled  
		This happens inside the JS engine.
	Multi-paradigm  
		An approach and mindset of structuring code, which will direct coding style and technique.
			- Procedual programming
			- Object-oriented programming
			- Functional programming 
	Prototype-based object-oriented   
		Almost everything is Object, except the primitive variables.
		Ex: Array is prototype.
	First-class functions  
		Functions are simply treated as variables. We can pass them into other functions, and return them from functions.
	Dynamic  
		No data type definitions. Types becomes known at runtime.
		Data type of variable can be automatically changed.
	Single-threaded  
		JS runs in one single thread, so it can only do one thing at a time.
		Concurrency model: how the JS engine handles multiple taskes happening at the same time.
	Non-blocking event loop  
		By using event loop: takes long running tasks, executes them in the "background", 
			and puts them back in the main thread once they are finished.

## JS Engine  

	simply it is a program that executes JS code.  
		V8 Engine (google chrome, Node js)
	Contains:  
		Call stack  
			Where our code is executed, using execution context.
			"Place" where execution contexts get stacked on top of each other,
				to keep track of where we are in the execution.
			Order in which functions were called.
		Heap  
			Where objects are stored.
			Unstructured memory pool.
	
	Compilation  
		Entire code is converted into machine code at once, and written to a binary file that can
			be executed by a computer.
	Interpretation  
		Interpreter runs through the source code and executes it line by line.
	Just-in-time (JIT) compilation  
		Entire code is converted into machine code at once, then executed immediately.
		No portable file after compilation and execution happens immediately after compilation.
	
	Steps:  
		Parsing into an Abstract Syntax Tree (AST). Check syntax errors.
		Compilation. Takes the AST and compiles it into a Machine Code.
		Execution. Happens in Call Stack.
		|
		Optimization.	During execution!
		|
		Compilation
		|
		...
		
## JS Runtime in the browser 

- JS Engine
- WEB APIs (in Browser)  
		DOM, Timers, Fetch API, ...
		Functionalities provided to the engine, accessible on window object.
- C++ Bindings & Thread pool (in Node JS)
- Callback queue  
		click, timer, data, ...
- Event loop  
		Takes the callback function from the callback queue and puts them in the call stack.

## Execution  

	Creation of global execution context.
	Execution of top-level code.
	Execution of functions and waiting for callbacks (ex.: click event).

	Inside execution context:
		Variable Environment (VE)
		Scope chain
			Order in which functions are written in the code.
		this keyword

### Scope chain  

	Scoping: How our program's variables are organized and accessed by the JS enjine.
	Lexical scoping: Scoping is controlled by placement of functions and blocks in the code.
	Scope: Space or environment in which a certain varible is declared. 
		There is:
			global scope,
				Outside if any function or block.
			function scope and 
				Also called local scope.
			block scope (ES6).
				HOWEVER, this only applies to let and const variables.
				Functions are also block scoped (only in strict mode).
	Scope of a varible: Region of our code where a certain variable can be accessed.

	let and const 	:  block-scoped
	var 			:  function-scoped

	Scope chain VS. Call stack
		Order in which functions are WRITTEN IN THE CODE.
			Has NOTHING to do with order in which functions were CALLED!
		VS.
		Order in which functions were CALLED.
	
### Variable environment  

	Hoisting: Makes some types of variables sccessible/usable in the code before they are actually declered.
		"Variables lifted to the top of their scope."
		Before execution, code is scanned for variable declarations, and for each variablee, 
			a new property is created in the variable environment object.
		- Using functions before actual declaration.
		variables created with var will create a window object.

TDZ - Temporal Dead Zone.  
	Zone before the variable declaration in which we can't use this variable.  
	Cannot access the variable before initialization.  
- Makes it easier to avoid and catch errors.
- Makes const variables actually work.
	
### *this* keyword

Special variable that is created for every execution context (every function).  
Takes the value of (points to) the "owner" of the function in which the *this* keyword is used.  
*this* does NOT point to the function itself, and also NOT the its vaiable environment!  
- global scope: window
- regular function: undefined (in strict mode)
- arrow function: window (
- inside of the method -> function: object of the owner (method)

### arguments keyword  

arrow function does not have *this* keyword
	
## Primitives VS. Objects (Reference Types)  

	Primitives  
		Number
		String
		Boolean
		Undefined
		Null
		Symbol
		BigInt
	Objects  
		Object literal
		Arrays
		Functions
		Many more...
	
	Primitives stored in Call stack
		Identifier points to the address, not to the value.
		The value in the certain address is immutable.
	Objects (Reference values) stored in Heap
		Identifier points to the memory address in the Call stack, 
			but the value points to the memory in the Heap.
		This is another variable in the Stack that holds the referense to the same peace of memory in the Heap.
	
	Object.assign({}, copied_varible)	(except a nested objects)

## IIFE - Immedeately Invoked Function Expressions  

## Closures  	
	is the closed-over varible environment of the execution context in which a function was created,
		even after that execution context is gone.
	Happens automatically in sertain situations.
	Makes a function remember all the vars that existed when the function was created.
	VE attached to the function, exactly as it was at the time and place the function was created.

Splice - mutates original Array. Delete selected elements.  
Sort - mutates original Array and works alphabetically.  

## Numbers

Rounding decimals 

	toFixed return a string!  

Remainder operator is helpfull to check even/odd.  
The biggest number: 2 ** 53 - 1 = MAX_SAFE_INTEGER.  
BIG int - reg. number + 'n' at the end.  

	Don't mix with regular numbers.  
	`Math` doesn't work with bigint.  

	Number.parseFloat or Number.parseInt


## Dates and Times

Months start from 0.  

### Internationalization

Intl  

	options: style {unit, percent, currency}  
	
			 day, month, year, ...  

### Timers

Timeout in ms.  

setTimeout  
setInterval  

## Advanced DOM and Events

- Allows to make JS interact with the browser;  
- We can:
	* write JS to create, modify and delete HTML elements;
	* set style, classes and attributes;
	* listen and respond to events;
- DOM tree is generated from an HTML document, which we can then interact with;
- DOM is a very complex API that contains lots of methods and properties to interact with the DOM tree.  

### Selecting, creating and deleting  

#### Selecting
	document.documentElement
	document.head

	document.querySelector(All)	=> NodeList
	document.getElementById
	document.getElementsByTagName => Live HTMLCollection
	document.getElementsByClassname => Live HTMLCollection
	document.querySelectorAll('img[data-src]') - selects all the images which have the property 'data-src'

#### Creating and inserting
	.insertAdjacentHTML

	const message = document.createElement('div');
	message.classList.add('cookie-message');
	message.textContent = 'Some text';
	message.innerHTML = '<button>Got it</button>';
	header.prepend(message);  // adds element as the first child of header
	header.append(message.cloneNode(true));  // adds copy of the element as the last child of header
	header.before(message);
	header.after(message);

#### Deleting
	message.remove();
	message.parentElement.removeChild(message);

### Styles and Attributes

	getComputedStyle(message).color;
	document.documentElement.style.setProperty('--color-primary', 'orangered');

	message.src => absolute value
	message.getAttribute('src') => like in the HTML code

	// Data attributes like *data-*version-number
	message.dataset.versionNumber

### Smooth scrolling
	getBoundingClientRect - relative to visible viewport
	We need a current scroll absolute position to the document: window.pageYOffset and pageXOffset!
		current position + current scroll

	Modern way: object.scrollIntoView

### Types of Events and Event Handlers
	h1.addEventListener('mouseenter', function (e) {});
	h1.onmouseenter = function (e) {};						- old school

HTML variant (old school)  
	<h1 onclick="alert('HTML alert')">

#### Event propagation (Bubbling and Capturing)
Click event from document => (capturing phase) => to Target (target phase) =>  
When event happens => goes back to event root (bubbling phase) through all parent elements with their event listeners!  

Target - element where the event happens  
Current target - the parent element where the event bubbles  

	e.stopPropagation();  // not a good idea, in general

#### DOM Traversing
Going downwards: child  

```javascript
	const child = h1.querySelectorAll(".highlight");
	const directChild1 = h1.childNodes;
	const directChild2 = h1.children;
	h1.firstElementChild.style.color = "white";
	h1.lastElementChild.style.color = "orangered";
```

Going upwards: parents  

	const parent = h1.parentNode;
	const parent2 = h1.parentElement;

Not a direct parent  

	h1.closest(".header").style.background = "var(--gradient-secondary)";

Sideways: siblings  

	const siblingElLeft = h1.previousElementSibling;
	const siblingElRight = h1.nextElementSibling;
	const siblingLeft = h1.previousSibling;
	const siblingRight = h1.nextSibling;

All siblings  

	const allSiblings = h1.parentElement.children;

#### Intersection Observer API

```javascript
	new IntersectionObserver(obsCallback, obsOptions)

	const obsOptions = {
		root: null,
		threshold: 0,
		rootMargin: `-10px`,
	}

	const obsCallback = function (entries, observer) {}; 

	observer.unobserve(entry.target);
```

#### Lifecycle DOM Events

*DOMContentLoaded* - fired as soon as the HTML is completely parsed. Not wait for images and other external resources.  

*load* - fired by the *window* as soon as not only the HTML is parsed but also all images and external resources.  

*beforeunload* - fired by the *window* before user is about to leave the page.  

### Script loading

	Regular	| HEAD | Parsing HTML | Waiting...           | Finish parsing HTML
	                              | Fetch script Execute |
	        | BODY END | Parsing HTML | Fetch script Execute

	async | HEAD | Parsing HTML | Waiting | Finish parsing HTML
	               Fetch script | Execute |

	defer | HEAD | Parsing HTML | Execute
	               Fetch script 

Using *async* and *defer* at the end of the body makes no sense.  

Use *async* for 3-rd-party scripts where order doen't matter (Google Analytics).  
Use *defer* when the order matters, including a library.  

## OOP in JavaScript

**Prototype** as Class.  
- Objects are **linked** to a prototype object.  
- **Prototypal inheritance**: The prototype contains methods (behavior) that are **accessible to all objects linked to that prototype**;  
- Behavior is **delegated** to the linked prototype object.  

3 ways of implementing prototypal inheritance:  
 * Constructor functions
 * ES6 Classes
  - Modern way, but works like constructor functions
 * Object.create()
  - Easiest way of linking an object to a prototype object.
  
### Constructor functions  

Arrow function is not work as a constructor function (it doesn't have *this* keyword)!  
To call these functions we use *new* key word.  

The *new* operator steps:
1. A new {} empty object is created.
2. *this* keyword in constructor function call is set to the new object.
3. The newly created object is linked (__proto__ property) to the constructor function's prototype property.  
`__proto__ === SomeObject.prototype`
4. The new object is automatically returned from the constuctor function call.

Never create a method directly inside a constructor function. This would be terrible for the perfomance of our code.  
Add methods to prototype property.

#### Inheritance

```javascript
const Child = function(arg1, arg2, arg3) {
	Parent.call(this, arg1, arg2);
	this.prop3 = arg3;
};
Child.prototype = Object.create(Parent.prototype);
```

### Prototypes
.prototypeOfLinkedObjects  

**Prototype chain** is a series of links between objects, linked through prototypes (Similar to the scope chain).  

### ES6 Classes

class expression `const Person = class {}`  
class declaration `class Person {}`  

All of the methods that we write in the class outside of the `constructor()` will be on the prototype of the object.  

1. Classes are NOT hoisted.
2. Classes are first-class citizens.
3. Classes are executed in strict mode.

Getters and Setter are very useful in data validation.  

#### Inheritance

```javascript
class Child extends Parent {
	constructor(arg1, arg2, arg3) {
		super(arg1, arg2);
		this.prop3 = arg3;
	}
}
```

### Object.create
We can set the prototype of objects manually to any object that we want.  
In this case we don't need any constructor function at all.  

#### Inheritance

```javascript
const ChildProto = Object.create(ParentProto);
ChildProto.init = function (arg1, arg2, arg3) {
  ParentProto.init.call(this, arg1, arg2);
  this.prop3 = arg3;
};
const inst = Object.create(ChildProto);
```

### Encapsulation

Class fields:  
- public fields (on the instance not on the prototypes)
- private fields (# makes fields private)
- public methods
- private methods (#)
- static version

## Asynchronous JavaScript

Asynchronous code is executed **after a task that runs in the "background" finishes**.  
Asynchronous code is **non-blocking**.  
Execution doesn't wait for an asynchronous task to finish its work.  
Callback functions alone do **NOT** make code asynchtonous!  

### AJAX
**A**synchronous **J**avaScript **A**nd **X**ML allows us to communicate with remote web servers in an **asynchronous way**. With AJAX calls, we can **request data** from web servers dynamically.  

### Promises
An object that is used as a placeholder for the future result of an asynchronous operation.  
A container for an asynchronously delivered value.  
A container for a future value.  
We no longer need to rely on events and callbacks passed into asynchronous functions to handle asynchronous results. Instead of nesting callbacks, we can **chain promises** for a sequence of asynchronous operations: **escaping callback hell**.  

States:  
PENDING (Before the future calue is available)  
|  
ASYNC TASK  
|  
SETTLED (Asynchronous task **has finished**)
|  
1. FULFILLED (Success! The value is now **available**)  
2. REJECTED (An **error** happened)  

We are able **handle** these different states in our code!  

BUILD PROMISE (E.g. Fetch API returns promise)  
|
CONSUME PROMISE (When we already have a promise. E.g. promise returned from Fetch API)  

**Microtasks queue**. Like callback queue, but for callbacks related to **promises**. Has **priority** over regular callback queue!  

### Async/Await

```javascript
 const myFunc = async function (attr) {
  const perem = await fetch(`link`);
  if(!perem.ok) throw new Error(msg);
};
```

### Promise Combinators: race, allSettled and any
race - the first in time  
allSettled - even if one rejected  
any - first fulfilled  

## Modules

**Develpment** (modules and 3rd-party package)  
**Build process** (bundling - join all modules into one file => transpiling/polyfilling - convert modern JavaScript back to ES5 *BABEL*) *webpack* or *Parcel*  
**Production** (JavaScript bundle)  

**Module**:  
* Reusable piece of code that **encapsulates** implementation details;
* Usually a **standalone file**, but it doesn't have to be.

Advatages:  
* **Compose software**: Modules are small building blocks that we put together to build complex applications;  
* **Isolate components**: Modules can be developed in isolation without thinking about the entire codebase;  
* **Abstract code**: Implement low-level code in modules and import these abstractions into other modules;  
* **Organized code**: Modules naturally lead to a more organized codebase;  
* **Reuse code**: Modules allow us to easily reuse the same code, even across multiple projects.  

ES6 Modules VS. SCRIPT:  
1. **Top-level variables** ES6: Scoped to module; SCPT: Global
2. **Default mode** ES6: Strict mode; SCPT: "Sloppy" mode
3. **Top-level *this*** ES6: undefined; SCPT: window object
4. **Imports and exports** ES6: YES; SCPT: NO
5. **HTML linking** ```ES6: <script type="module">; SCPT: <script>```  
6. **File downloading** ES6: Asynchronous; SCPT: Synchronous  

### CommonJS Modules

work in node js.  
```JavaScript
// Export
export.myFunction = function(arg1, arg2) {
	console.log(arg1, arg2);
};

// Import
const { myFunction } = require('./moduleFile.js');
```

### Bundling with Parcel and NPM Script

localy
```terminal
npm i parcel --save-dev
npm i parcel@next -D  // install a better version
```

Run for local installations: 
```terminal
npx parcel index.html // initial entrance
```

Apply changes without page reloading
```javascript
if(module.hot) {
	module.hot.accept()
}
```  

To support all old browsers
```terminal
npm i core-js regenerator-runtime
```
```javascript
import 'core-js/stable';
import 'regenerator-runtime/runtime';
```
  
## Modern and clean code

### OOP
* Use ES6 classes
* Encapsulate data and **don't mutate** it from outside the class
* Implement method chaining
* Do **not** use arrow functions as methods (in regular objects)  

### Avoid nested code
* Use early `return` (guard clauses)
* Use ternary (conditional) or logical operators instead of `if`
* Use multiple `if` instead of `if/else-if`
* Avoid `for` loops, use array methods instead
* Avoid callback-based asynchronous APIs  

### Asynchronous code
* Consume promises with async/await for best readability
* Whenever possible, run promises in **parallel** (`Promise.all`)
* Handle errors and promise rejections  

### Declarative code

The "What to do" principal.  

### Functional programming

* Declarative programming paradigm
* Based on the idea of writing software by combining many **pure functions**, avoiding **side effects** and **mutating** data.  

* **Side effect**: Modification (mutation) of any data **outside** of the function (mutating external varibles, logging to console, writing to DOM, etc.)  

* **Pure function**: Function without side effects. Does not depend on external varibles. **Given the same inputs, always returns the same outputs**.  

* **Immutability**: State (data) is **never** modified! Instead, state is **copied** and the copy is mutated and returned.  

Examples: React, Redux  

**TECHNIQUES**
- Try to avoid data mutations
- Use built-in methods that don't produce side effects
- Do data transformations with methods such as `.map()`, `.filter()` and `.reduce()`
- Try to avoid side effects in functions: this is of cource not always possible!

**DECLARATIVE SYNTAX**
- Use array and object destructuring
- Use the spread operator `(...)`
- Use the ternary (conditional) operator
- Use template literals

## Architecture

Structure, Maintainability, Expandability  

- We can create our own architecture.  
- We can use a well-established architecture pattern like MVC (model-view-controller), MVP (model view presenter), Flux, etc.  
- We can use a framework like React, Angular, Vue, Svelte, etc.  

### Components

* Business logic
	- Code that **solves the actual business problem**;
	- Directly related to what business does and what it needs;
	- **Example**: sending messages, storing transactions, calculating taxes, ...
* State
	- Essentially **stores all the data** about the application;
	- Should be the "single source of truth";
	- UI should be kept in sync with the state;
	- State libraries exist. (Readux, Mapex)
* HTTP Library
	- Responsible for making and receiving AJAX requests;
	- Optional but almost always necessary in real-world apps.
* Application logic (Router)
	- Code that is only concerned about the **implementation of application itself**;
	- Handles navigation and UI events.
* Presentation logic (UI Layer)
	- Code that is concerned about the **visible part** of the application;
	- Essentially displays application state.

### Event handling in MVC: Publisher-subscriber pattern

- Code that knows when to react: PUBLISHER  
- Code that wants to react: SUBSCRIBER  
- Subscribe to publisher by passing in the subscriber function  
