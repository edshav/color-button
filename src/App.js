import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [buttonColor, setButtonColor] = useState("MediumVioletRed");
  const [isDisabled, setIsDisabled] = useState(false);

  const getNextButtonColor = (buttonColor) =>
    buttonColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";

  const onButtonClick = () => {
    setButtonColor((prevState) => getNextButtonColor(prevState));
  };

  const onCheckboxCkick = (e) => {
    setIsDisabled(e.target.checked);
  };

  return (
    <div>
      <button
        style={{
          backgroundColor: isDisabled ? "Gray" : buttonColor,
          color: "White",
        }}
        onClick={onButtonClick}
        disabled={isDisabled}
      >
        Change to {replaceCamelWithSpaces(getNextButtonColor(buttonColor))}
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
