import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const getButtonColor = (buttonColor) =>
    buttonColor === "red" ? "blue" : "red";
  const onButtonClick = () => {
    setButtonColor((prevState) => getButtonColor(prevState));
  };
  return (
    <div>
      <button style={{ backgroundColor: buttonColor }} onClick={onButtonClick}>
        Change to {getButtonColor(buttonColor)}
      </button>
    </div>
  );
}

export default App;
