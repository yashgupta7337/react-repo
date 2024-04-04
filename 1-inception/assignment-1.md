# Inception: Assignment 1 and notes

## React - Introduction

- By default, browsers understand HTML and Javascript, as the engine is embedded in them but it doesn’t understand React. (at least without a reference to it)
- CDN - Content Delivery Network has React and ReactDOM hosted in it and it pushes all the resources required to use React into the browser. To import react, add CDN links to HTML mail file. These links has source code of React and ReactDOM, developed by Facebook developers.
- `react.development.js` - core of js, `react-dom.development.js` - (bridge) code for Document Object Model. These files are separated because of which React can be used not only on desktop, but on mobiles and etc.

```jsx
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```

- React is a JS library but in the end it is just JS code.
- To create an element (to be precise, it is a React element which is a JS object):

```jsx
// React.createElement("<tag_type>", {object}, "content");
const heading = React.createElement("h1", {}, "Hello World from React!");
// heading is an object / React Element
// {}, "Hello World from React!" -> props
// {} (eg. {id: "heading"}) -> attribute
// "Hello World from React!" -> children which will go inside the H1 tag
```

- To add this element to the root and render:

```jsx
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
// root.render() takes an object (react element)
```

- Together, these 3 lines shows a `H1` tag on browser.
- But writing JS code inside HTML is cumbersome and reduces code readability.
- Create `App.js` file and shift code to this file
- Imp: Most costly operation on the browser is adding or removing DOM nodes from the DOM tree. As React only uses JS and in-built helper functions, it improves the performance efficiency.

```jsx
const heading = React.createElement(
  "h1",
  {
    /*attribute*/
  },
  "Hello World from React!"
);
```

- Second parameter in `createElement` is an object. It assigns attribute to that element. For eg:

```jsx
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);
```

- Hence, now our element has an `id = “heading”`

---

## Nested Elements using React

```jsx
// let's try to create this structure using React
<div id="parent">
  <div id="child">
    <h1></h1>
  </div>
</div>
```

- Create a parent object:

```jsx
const parent = React.createElement("div", { id: "parent" });
```

- as the content of parent object will be an object with id as child:

```jsx
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" })
);
```

- as the content of child object will be an object with tag H1, so the final code is:

```jsx
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "Hi!")
  )
);
```

- Again, remember: `ReactElement(Object) => HTML(Browser Understands)`
- If we want to put siblings together, we can pass third argument as an array

```jsx
<div id="parent">
  <div id="child">
    <h1>I'm a H1 tag</h1>
    <h1>I'm a H1 tag</h1>
  </div>
</div>
```

```jsx
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm a H1 tag"),
    React.createElement("h1", {}, "I'm a H1 tag"),
  ])
);
```

- But if the complexity of the elements increases, even this react code would become untidy. Therefore, `JSX` exists.
- Note: in the root div, if there’s already some code inside it (html file), then `root.render()` will replace it with React code.
- Assignment 1
  ### What is Emmet?
  Emmet is a plugin for many popular text editors and IDEs, designed to improve HTML and CSS workflow. It enables users to write HTML and CSS code using abbreviated syntax, which is then expanded into full code snippets. This tool significantly speeds up the coding process by allowing developers to type less while producing more code, enhancing productivity and efficiency.
  ### Difference between a Library and a Framework?
  - **Library**: A library is a collection of reusable code snippets or functions that a developer can call upon to perform specific tasks without writing the code from scratch. It acts as a helper or utility for developers to solve common problems in their code. The key characteristic of a library is that the calling code is in control of when and how to use the library.
  - **Framework**: A framework, on the other hand, provides a foundation or scaffold for developing software applications. It dictates the architecture and flow of the application, with pre-defined templates and functions that developers must fit their code into. The framework is in control, and the code you write gets called by the framework when needed. This is often summarized as "Inversion of Control".
  ### What is CDN? Why do we use it?
  A Content Delivery Network (CDN) is a network of servers distributed geographically, designed to deliver internet content more efficiently to users. CDNs store a cached version of content in multiple locations to ensure content is delivered faster to users, no matter where they are. We use CDNs to reduce latency, increase content delivery speed, and improve website load times, thereby enhancing user experience. They are especially beneficial for delivering large files, such as videos, large images, and web application scripts.
  ### Why is React known as React?
  React is known as "React" because it was designed to be reactive, meaning it can update and render the right components efficiently in response to data changes. This reactivity makes building complex user interfaces more manageable by automatically updating the view whenever the underlying data changes, without requiring the developer to explicitly write code to handle these updates. The name "React" succinctly captures this fundamental aspect of the library's behavior.
  ### What is crossorigin in script tag?
  The `crossorigin` attribute in a `<script>` tag is used to configure how the browser handles CORS (Cross-Origin Resource Sharing) requests for the script. It supports scenarios where scripts are loaded from a different domain than the one serving the web page, enabling more secure and controlled sharing of resources across different origins. It has three possible values:
  - `anonymous`: The browser will perform a CORS request without sending user credentials (like cookies or authentication data). If the server doesn't provide the appropriate CORS headers, the browser will block the resource.
  - `use-credentials`: The browser will include user credentials in the CORS request. Again, if the server doesn't allow for credentials or CORS headers are missing or incorrect, the resource will be blocked.
  - Omitting the attribute: The script is fetched without CORS request headers, and the browser's same-origin policy will apply.
  ### Difference between React and ReactDOM
  - **React** is the core library that contains the components, the virtual DOM, and the core algorithms for React's diffing algorithm. It is concerned with how components are defined and how they interact with each other.
  - **ReactDOM** is a complementary library to React that provides DOM-specific methods to enable the rendering of components to the web page. Essentially, it acts as the glue between React's components and the browser's DOM, allowing React to update the DOM to reflect the application's state.
  ### Difference between react.development.js and react.production.js files via CDN
  - **`react.development.js`**: This is the unminified version of React intended for use during the development process. It includes additional warnings, error messages, and helps with debugging. It's larger and slower than the production version, making it unsuitable for deployment in production environments.
  - **`react.production.js`**: This version is minified and optimized for production. It has unnecessary code removed, including development warnings and verbose error messages, to reduce the file size and improve loading times and performance. It's intended to be used when deploying your application to production.
  Using the appropriate version ensures that developers have the necessary tools and feedback for development, while end-users experience a faster, more efficient application in production.
  - **async vs defer attributes in Javascript - [URL](https://www.youtube.com/watch?v=IrHmpdORLu8)**
  ![Screenshot 2024-04-04 at 3.29.41 PM.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/4385a302-181a-45da-9ce8-2f8526ed578e/a8c9cd11-b0a2-46fb-9732-30f541e95589/Screenshot_2024-04-04_at_3.29.41_PM.png)
  - Black - HTML code parsing by the browser line by line.
  - Blue - JS code fetching by the network line by line.
  - Red - JS code executing by the browser line by line.
  - Summary:
    - Without both async and defer: HTML code parsing begins, browser/network identifies script tag and it starts fetching it. After the fetching is done, it starts executing it. Once done, it continues the remaining HTML parsing.
    - async: HTML and script parsing happens simultaneously. After the fetching is done, it pauses HTML parsing and starts executing the script. Once done, it continues the remaining HTML parsing.
    - defer: async: HTML and script parsing happens simultaneously. After the fetching is done, it first completes HTML parsing. Once done, then only it starts executing the script.
  - What to use when?
    - `async doesn’t guarantee order of execution but defer does.` If we have mulitple scripts dependent on each other, then in case of async, it is not guaranteed that the script will be executed in a particular order. `In this case, defer should be used.`
    - In case of `loading external scripts`, it makes sense to use `async`.
