import { useState, useEffect } from "react";
import Button from "./Button";
import styles from "./css/App.module.css";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => {
    setValue((prev) => prev + 1);
  };
  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  console.log("i run all the time");

  useEffect(() => {
    console.log("I run only once");
  }, []);
  useEffect(() => {
    console.log("SEARCH FOR", keyword);
  }, [keyword]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search here..."
        onChange={onChange}
        value={keyword}
      />
      <h1 className={styles.title}>{counter}</h1>
      <Button text={"Click me"} onClick={onClick} />
    </div>
  );
}

export default App;
