/*
    NESTED ELEMENTS:-
    let's try to create this structure using React:
        <div id="parent">
            <div id="child">
                <h1></h1>
            </div>
        </div>
    ReactElement(Object) => HTML(Browser Understands)
 */
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hi, I'm a H1 tag!"),
    React.createElement("h1", {}, "Hi, I'm a H1 tag!"),
  ])
);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);

// console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(parent);
