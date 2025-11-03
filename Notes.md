
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
- JSX stands for **JavaScript XML** (JavaScript xtensible markup language).
- JSX allows you to write **HTML-Like syntax** directly inside JavaScript.
- It makes react component more **redable** and **declarative**.
- Behid the scenes, **JSX is compiled**(by tool like Babel) into standard JavaScript calls such as `React.createElement()` :
```jsx
<h1>Hello World!</h1>

// complide into js:
React.createElement("h1", {}, "Hello World!")
```
- In JSX you can call function `greet()` as well as `<greet />`
- It is a combination of HTML + JavaScript.
- You can write/embed any javascript code JSX inside `{}` within:

```jsx
const App = () => {
	const user = "Shiv";

	return (
		<h1>Hello {user}!</h1>
	)
}

export default App;
```

## Vite
- Vite is a **build tool** and **development server** for modern web projects.
- Vite helps scaffold (set up) new React, Vue, or other frontend project quickly.
- Vite provides **instant server start** and **lightning-fast HMR**(Hot Module Replacement) that stays fast regardless of app size.
- Vite **optimized the final build**  for production, using **Rollup** under the hood.
- Vite supports **ES Modules (ESM)** natively, which makes development much faster than older bundlers like Webpack.
### 🧩 How to create a new React project using Vite
```bash
# Create a new project
npm create vite@latest

# Then choose:
# > React
# > JavaScript (or TypeScript)

# Move into the project folder
cd project-name

# Install dependencies
npm install

# Start development server
npm run dev

```
## Component
- A Component is nothing but a **reusable piece of code** that represent a part of the UI.
- Components allow you to **split the UI into independent, reusable pieces**, making your code easier to manage and maintain.
- There are two types of components in React:
	- Class components : Older syntax that uses ES6 classes and lifecycle methods.
	- Functional components: Modern and preferred syntax that uses plain JavaScript functions (and React Hooks for state and side effects).

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
- Props(short for **properties**) are used to **pass data from a parent component to child component**.
- In React, **data-flows in one direction** - from **parent to child** component not the other way around.
- **Props are immutable**, meaning a child component cannot modify the props it receives.
- **Props are always passed as an object**.
	- If no data is sent, then `props = {}` (an empty object).
- `Passing data from one component to another` through multiple levels (parent → child → grandchild → etc.) is called **Props Drilling**.
	- Props drilling can make code harder to maintain — in larger apps, developers often use **Context API or state management libraries** (like Redux) to avoid it.

- When passing props:
	- Strings are passed in quotes (`' '` or `" "`).
	- Numbers, arrays, objects, and variables are passed inside curly braces `{}`.

- example:

```jsx
// Parent Component
const Parent = () => {
  const userName = "Shiv";
  const age = 25;

  return (
    <Child name={userName} age={age} />
  );
};

// Child Component
const Child = (props) => {
  return (
    <h2>
      Hello {props.name}, you are {props.age} years old.
    </h2>
  );
};

export default Parent;

```
## Lucide React
- Library for icons



## 🎨 CSS in React
### 🟩 1. Inline CSS
- Write CSS directly inside the `style` attribute as a JS object.
- Property names are in **camelCase** (e.g., `backgroundColor`, not `background-color`).
```jsx

const Button = () => {

  return (
        <button style={{
			color: "red",
			backgroundColor: "black"
		}}>
			See more...
		</button>
  )
}

export default Button
```
### 🟩 2. Internal CSS (via JS object)
- Store the style object in a variable and use it inside the `style` prop.

```jsx

const Button = () => {
  const btnStyle = {
			color: "red",
			backgroundColor: "black"
		};

  return (
    <>
        <button style={btnStyle}>See more...</button>
    </>
  )
}

export default Button

//✅ **Best for**: small components or dynamic inline styles (e.g., conditional color).
```

### 🟩 3. Global CSS (index.css)
- This file applies styles globally across your React app.
- It’s imported once in `main.jsx` or `index.js`.
- ✅ **Tip**: Use for global resets, fonts, or layout rules.

### 🟩 4. Component-level CSS
- You can make a `.css` file for each component.
- Example:
```css
src/
 └── styles/
      ├── Button.css
      └── Header.css

```
```jsx
import "./Button.css";

const Button = () => <button className="btn">See more...</button>;

```
- ⚠️ **Problem**: If two components have the same class name (.btn), styles might conflict.


- `width: fit-content;`




### 🟩 5. CSS Modules
- CSS Modules prevent style conflicts by generating unique class names automatically.

- **Setup**:
	- Each component gets its own folder:

```css
src/components/Header/
 ├── Header.jsx
 └── Header.module.css
```
- **Usage:**


```jsx
// Header.jsx
import style from "./Header.module.css"

const Header = () => {
  return (
    <>
        <div className={style.header}>
            <h1>Header</h1>
            <button className={style.btn}>Login</button>
        </div>
    </>
  )
}

export default Header
```

```css
/* Header.module.css */

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 3rem;
    background-color: #dfabab;
    margin-bottom: 1.5rem;
}

.header h1{
    color: #aa0606;
}

.btn{
    width: fit-content;
    padding: 0.7rem 1.5rem;
    border: none;
    border-radius: 0.5rem;
    font-size: 1rem;
    font-weight: 700;
    color: #fff;
    background-color: #aa0606;
    cursor: pointer;
}
```
- ✅ **Benefits**:
	- No name conflicts.
	- Scoped styling.
	- Works with media queries and pseudo-selectors (`:hover`, `:focus`, etc.).

### ⚡ Bonus Tips:
- `width: fit-content;` → makes an element only as wide as its content.
- Use **classnames** library if you need to combine multiple module classes:
```bash
npm install classnames
```
```jsx
import clsx from "classnames";
<button className={clsx(style.btn, style.active)}>Click</button>

```
- For larger projects, consider CSS-in-JS libraries like **styled-components** or **emotion**.


## TailwindCSS in React


## Interview question
- key props in map
- 100% vs 100vh height and width
- min-height and max-height and wight
- strict mode in react
- react fragment - function can return only one value
- assets and public folder
- eslint.config.js -> helps to create custom rules
- gitignore - helps to ignore file which we do not want to push on github
- scaffolding related question

- keep App.jsx empty kind of 
- browser pe component highliter

### What is Props Drilling in React?
#### 🧠 What is Props Drilling?

- **Props drilling** happens when you **pass data through multiple levels of components**, even though only a deeply nested component actually needs it.

- It’s not an error — just an **inefficient or hard-to-maintain pattern** when your app grows.

#### 💡 Why It Happens

- React’s data flow is unidirectional (top → down).
- If a deeply nested child needs data from the top-level parent, that data must be passed down through every intermediate component, even if those middle components don’t use it.

#### ⚙️ Example:
```js
// 🧩 Parent Component
const Parent = () => {
  const user = "Shiv";
  return <Child1 user={user} />;
};

// 🧩 Child 1
const Child1 = (props) => {
  return <Child2 user={props.user} />;
};

// 🧩 Child 2
const Child2 = (props) => {
  return <Child3 user={props.user} />;
};

// 🧩 Child 3 (final receiver)
const Child3 = (props) => {
  return <h2>Hello, {props.user}!</h2>;
};

export default Parent;
```
#### ⚠️ Problem
- In the example above:
	- Only Child3 actually needs the user prop
	- But we had to pass it through Child1 and Child2 unnecessarily.
	- As your app grows, this becomes harder to maintain and debug.


#### 🧩 Better Solution — Context API
- To fix props drilling, React provides the Context API, which lets you share data globally across components without passing props manually at every level.
### Why React execute any code 2 times?
- If you’re using React with Vite, Create React App, or any modern setup, you might notice that your component’s code (especially console.log() or side effects) runs twice — but only in development mode, not in production.

Here’s why 👇
#### 🧠 Reason: React Strict Mode
- React wraps your app with `<React.StrictMode>` (by default in main.jsx or index.js):
```jsx
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```
- **Strict Mode** helps you **detect potential bugs** in your components — particularly **side effects** (like API calls, subscriptions, or state mutations).
-In development mode, React **intentionally mounts, unmounts, and re-mounts components twice** to ensure:
	- Components are **pure** (no unintended side effects).
	- You’re not relying on something that shouldn’t happen only once (e.g., state mutations outside `useEffect`).


#### ⚙️ In Simple Terms
- The **double execution happens only in development**.
- It happens because of **Strict Mode**.
- It does **not** happen in the **production build**.

#### 🧩 How to stop it (for debugging only)
- If you just want to check your logic without double rendering, you can temporarily remove `<React.StrictMode>` from `main.jsx`:
```jsx
// main.jsx
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>   👈 Remove this temporarily
    <App />
  // </React.StrictMode>
);
```
But remember — you should add it back later for safer code and better debugging.




- context api and redux coding ott