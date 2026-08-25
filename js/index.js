const root = document.getElementById("root");
function Btn({ text, onClick }) {
  console.log(text, "wasrendered");
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "tomato",
        color: "white",
        padding: "10px 20px",
        border: 0,
        borderRadius: 10,
      }}
    >
      {text}
    </button>
  );
}
// const MemorizedBtn = React.memo(Btn);
Btn.propTypes = {
  text: PropTypes.number,
  onClick: PropTypes.number,
};
function App() {
  const [value, setValue] = React.useState("Save Chanes");
  const changeValue = () => {
    setValue("Revert Changes");
  };
  return (
    <div>
      <Btn text={value} onClick={changeValue} />
      <Btn text={"Confirm"} />
    </div>
  );
}

ReactDOM.render(<App />, root);
