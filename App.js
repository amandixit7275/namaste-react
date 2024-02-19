/* <div id="parent">
  <div id="child">
    <h1>This is the React Tag</h1>
  </div>
</div>; */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is the h1 tag"),
    React.createElement("h2", {}, "This is the h1 tag"),
  ])
);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
