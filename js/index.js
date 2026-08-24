const root = document.getElementById("root");
// const Title = () => (
//   <span id="spanid">
//     Hello React world
//     <br />
//   </span>
// );
// const span = React.createElement(
//   "span",
//   { id: "span-id" },
//   "Hello React world",
// );

// const Btn = () => (
//   <button
//     onClick={() => {
//       console.log("clicked");
//     }}
//   >
//     Click me
//   </button>
// );
// const btn = React.createElement(
//   "button",
//   {
//     onClick: () => {
//       console.log("clicked");
//     },
//   },
//   "Click me",
// );
function Container() {
  const [counter, setCounter] = React.useState(0);
  const onClick = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h3>Total clicks: {counter}</h3>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

ReactDOM.render(<Container />, root);

// function render() {
//   ReactDOM.render(<Container />, root);
// }

// const container = React.createElement("div", null, [Title, btn]);
