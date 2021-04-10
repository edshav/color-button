import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [isDisabled, setIsDisabled] = useState(false);

  const getButtonColor = (buttonColor) =>
    buttonColor === "red" ? "blue" : "red";

  const onButtonClick = () => {
    setButtonColor((prevState) => getButtonColor(prevState));
  };

  const onCheckboxCkick = (e) => {
    setIsDisabled(e.target.checked);
  };

  return (
    <div>
      <button
        style={{
          backgroundColor: isDisabled ? "gray" : buttonColor,
          color: "white",
        }}
        onClick={onButtonClick}
        disabled={isDisabled}
      >
        Change to {getButtonColor(buttonColor)}
      </button>
      <br />
      <br />
      <label>
        Disable button
        <input
          type="checkbox"
          aria-checked={isDisabled}
          checked={isDisabled}
          onChange={onCheckboxCkick}
        />
      </label>
    </div>
  );
}

export default App;
