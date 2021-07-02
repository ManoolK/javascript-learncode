# javascript-learncode

This repository contains notes and projects I've made on the JS learning course.

[Project #1. Guess the number.](/project_guess_number)   
[Project #2. Modal window.](/project_modal_window)   
[Project #3. Pig game.](/project_pig_game)   
[Project #4. Bankist.](/project_bankist)   

#### for VS Code   
	formatter: Prettier (opinionated)
		configure
	Set code-snippets
	Settings Sync (if use multiple computers)
	TODO Highlight
	Live server
	
#### Node js  
	npm install live-server -g
	live-server
	npm install npm@latest -g					- install latest version npm and node
	
### 4 steps to solve any problem   
1. Make sure you 100% understand the problem. Ask the right questions to get a clear picture of the problem.
2. Divide and conquer: Break a big problem into smaller sub-problems.
3. Don't be afraid to do as much research as you have to.
4. For bigger problems, write pseudo-code before writing the actual code.
	
#### DOM - Document Object Model  
	Structured representation of HTML document.
	
#### WEB APIs - libraries, also written in JS.  
	DOM Methods and Properties are a part of it.
		Can interact with JS.
	Timers
	Fetch
	
#### JS  
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

#### JS Engine  
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
		
### JS Runtime in the browser  
- JS Engine
- WEB APIs (in Browser)  
		DOM, Timers, Fetch API, ...
		Functionalities provided to the engine, accessible on window object.
- C++ Bindings & Thread pool (in Node JS)
- Callback queue  
		click, timer, data, ...
- Event loop  
		Takes the callback function from the callback queue and puts them in the call stack.

#### Execution  
	Creation of global execution context.
	Execution of top-level code.
	Execution of functions and waiting for callbacks (ex.: click event).

	Inside execution context:
		Variable Environment (VE)
		Scope chain
			Order in which functions are written in the code.
		this keyword

#### Scope chain  
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
	
#### Variable environment  
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
	Special variable tha is created for every execution context (every function).
	Takes the value of (points to) the "owner" of the function in which the this keyword is used.
	this does NOT point to the function itself, and also NOT the its vaiable environment!
	- global scope: window
	- regular function: undefined (in strict mode)
	- arrow function: window (
	- inside of the method -> function: object of the owner (method)

#### arguments keyword  
	arrow function does not have this keyword
	
#### Primitives VS. Objects (Reference Types)  
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

#### IIFE - Immedeately Invoked Function Expressions  

#### Closures  	
	is the closed-over varible environment of the execution context in which a function was created,
		even after that execution context is gone.
	Happens automatically in sertain situations.
	Makes a function remember all the vars that existed when the function was created.
	VE attached to the function, exactly as it was at the time and place the function was created.

Splice - mutates original Array. Delete selected elements.  
Sort - mutates original Array and works alphabetically.  