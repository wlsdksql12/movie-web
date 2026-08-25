const root = document.getElementById("root");

function MinutesToHours() {
  const [amount, setAmount] = React.useState();
  const [MinutesToHours, setMinutesToHours] = React.useState(false);
  const onChange = (e) => {
    setAmount(e.target.value);
  };
  const reset = (e) => {
    setAmount(0);
  };
  const onMinutesToHours = (e) => {
    reset();
    setMinutesToHours((current) => !current);
  };
  return (
    <div>
      <h1>Minutes & Hours</h1>
      <div>
        <label htmlFor="minutes">Minutes: </label>
        <input
          id="minutes"
          placeholder="Minutes"
          type="number"
          value={MinutesToHours ? amount * 60 : amount}
          onChange={onChange}
          disabled={MinutesToHours}
        />
      </div>

      <div>
        <label htmlFor="hours">Hours: </label>
        <input
          id="hours"
          placeholder="Hours"
          type="number"
          value={MinutesToHours ? amount : Math.round(amount / 60)}
          onChange={onChange}
          disabled={!MinutesToHours}
        />
      </div>
      <button onClick={reset}>Reset</button>
      <button onClick={onMinutesToHours}>
        {MinutesToHours ? "Minutes" : "Hours"}
      </button>
    </div>
  );
}
function KmToMiles() {
  const [amount, setAmount] = React.useState();
  const [KmToMiles, setKmToMiles] = React.useState(false);
  const onChange = (e) => {
    setAmount(e.target.value);
  };
  const reset = (e) => {
    setAmount(0);
  };
  const onKmToMiles = (e) => {
    reset();
    setKmToMiles((current) => !current);
  };
  return (
    <div>
      <h1>Km & Miles</h1>
      <div>
        <label htmlFor="minutes">Km: </label>
        <input
          id="Km"
          placeholder="Km"
          type="number"
          value={KmToMiles ? amount * 1.61 : amount}
          onChange={onChange}
          disabled={KmToMiles}
        />
      </div>

      <div>
        <label htmlFor="hours">Miles: </label>
        <input
          id="Miles"
          placeholder="Miles"
          type="number"
          value={KmToMiles ? amount : Math.round(amount / 1.61)}
          onChange={onChange}
          disabled={!KmToMiles}
        />
      </div>
      <button onClick={reset}>Reset</button>
      <button onClick={onKmToMiles}>{KmToMiles ? "Km" : "Miles"}</button>
    </div>
  );
}
function App() {
  const [index, setIndex] = React.useState("xx");
  const onSelect = (e) => {
    setIndex(e.target.value);
  };
  return (
    <div>
      <h1>Super Converter</h1>
      <select value={index} onChange={onSelect}>
        <option value="xx">Select your units</option>
        <option value="0">Minutes & Hours</option>
        <option value="1">Km & Miles</option>
      </select>
      <hr />
      {index === "0" ? <MinutesToHours /> : null}
      {index === "1" ? <KmToMiles /> : null}
    </div>
  );
}

ReactDOM.render(<App />, root);

// function render() {
//   ReactDOM.render(<Container />, root);
// }

// const container = React.createElement("div", null, [Title, btn]);
