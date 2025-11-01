
# React  Everything

# Introduction to React
## What is ReactJS?
- React.js is a JavaScript library.
- React is used to create complex UI (Frontend).
- React.js was initially developed by Jordan Walke, a software engineer at Facebook, and was first deployed on Facebook's News Feed in 2011.
- It was then publicly open-sourced in May 2013 at JSConf US. In 2015, Facebook further expanded its capabilities by launching React Native, a framework for building native mobile applications using React principles.


## Library
- GSAP ( for animation )
- Lenis ( for smooth scrolling )
- ReactJS ( for creating UI )

## Framework
- Angular
- NextJS


## Import & Export in JavaScript (ES Modules)

### 1. Enabling Modules
- To use `import` and `export` in the browser, you must specify that your script is a **module** by adding `type="module"`in `<script>` tag. 
 ```js
<script type="module" src="app.js"></script>
```
- Otherwise it will through error:
```js
	SyntaxError: Cannot use import statement outside a module
```
### 2. Types of Import/Export	
- These are of two main types:
	- Named import/export
	- Default import/export
	
### Named export
- To export a variable or function as a named export you have to write `export` in front of variable or function name ( as prefix ). eg:
```js
	export var a = 20;
	export function greet(){
		console.log("Hello user!");
	}
```
- You can also export all together at the end:
```js
	const a = 20;
	function greet() {
	  console.log("Hello user!");
	}
	export { a, greet };

 ``` 
### Named import
- When importing named exports, use **curly braces**  `{}` and ensure the names **exactly match** those exported. 
```js
import {a, greet} from "./filename.js"

console.log(a);
greet();
```
- You can not change the name of variable and functions. Other wise it will throw error:
```js
SyntaxError: The requested module './app.js' does not provide an export named 'b'
```

### Default export
- A module can have **only one default export**.
- With default export we can only export one variable or function from one file and for others you can use named export.
```js
	export var a = 20;
	function greet(){
		console.log("Hello user!");
	}

	export default greet;
```
- Or
```js
	const a = 20;
	function greet() {
	  console.log("Hello user!");
	}

	export { a };
	export default greet;
```
### Default import
- When importing a default export, you don’t use `{}` — and you can rename it freely.
- Write variable and function names directly.
- Variable and function name can be anything, means it is not necessary that import variable name should not be same as export variable name.
```js
import greet, {a} from "./filename.js"
// or
import greetings from "./filename.js"

console.log(a);
greet(); // or
greetings();
```


## Real DOM vs Virtual DOM 
- Real DOM is actual DOM.
- Problem with Real DOM is when user perform some action ( for example user want to change text of a heading on button click ) it reload entire DOM.
- To solve this problem React came up with a concept called **Virtual DOM**.
- Virtual DOM basically create a copy of Real DOM and when any change happens in first it happens in virtual DOM and it compares with Real DOM and it re-render only modified part of Real DOM, not entire Real DOM
- That's why it is too fast.

## JSX (JavaScript XML)
- It is a combination of HTML + JavaScript.
- You can write HTML in JavaScript.
- In JSX you can call function `greet()` as well as `<greet />`

## Vite??
- Vite is a bundler which helps to create scaffolding of react project.
```bash
npm create vite@larest
```
## Component
- Component is nothing but a piece of code which creates reusable UI.
- There are two types of components in React:
	- class component
	- functional component

### Function Components

```js
const App = () => {
	return (
		<>
			<h1>Hello from functional components</h1>
		</>
	)
}

export default App;
```

## Props and Props drilling 01:25:55
- Props are nothing but properties which is used to pass data from parent to child component.
- In react data-flow is one way you can only send data from parent to child component not child to parent.
- passing data from one component to another is called props drilling.
- pass string in '' and number/array/variable {}
- React prints anything in console two times because of strict mode.
- props is an object
- if you are not sending any data then props = {}
- example:
## Interview question

- strict mode in react
- react fragment - function can return only one value
- assets and public folder
- eslint.config.js -> helps to create custom rules
- gitignore - helps to ignore file which we do not want to push on github
- scaffolding related question

- keep App.jsx empty kind of 
- browser pe component highliter
- {exp} in JSX


- context api and redux coding ott