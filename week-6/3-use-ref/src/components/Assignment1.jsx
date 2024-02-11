import { useEffect, useRef } from "react";

// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

export function Assignment1() {
  const inputRef = useRef();
  useEffect(() => {
    // document.getElementById("inputBox").focus(); -> not so good looking code, so we can use useRef() instead. -> useCallback can be another option.
    inputRef.current.focus();
  }, [inputRef]);

  const handleButtonClick = () => {
    // document.getElementById("inputBox").focus();
    inputRef.current.focus();
  };

  return (
    <div>
      <input
        type="text"
        id="inputBox"
        ref={inputRef}
        placeholder="Enter text here"
      />
      <button onClick={handleButtonClick}>Focus Input</button>
    </div>
  );
}
