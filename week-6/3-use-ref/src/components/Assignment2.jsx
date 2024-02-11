import React, { useState, useCallback, useRef } from "react";

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

// let numberOfTimesRender = 0; -> can be one approach, but should not use it. No global variables should be used.
export function Assignment2() {
  const [, forceRender] = useState(0);
  //   const [noOfReRenders, setNoOfReRenders] = useState(0); => for this usecase it will be the worst way because it will render twice since we are updating noOfReRenders using a state variable. so when we change it it will render once for forceRender and again for noOfRenders state variable.

  const noOfRenders = useRef(0); // another usecase of useRef -> we can not only store DOM element references but also numbers and other things as well. -> it is like having a global variable outside the component which doesn't reset to 0 / overwriting it.

  const handleReRender = () => {
    // Update state to force re-render
    forceRender(Math.random());
  };
  //   numberOfTimesRender += 1;
  noOfRenders.current = noOfRenders.current + 1;

  return (
    <div>
      <p>This component has rendered {noOfRenders.current} times.</p>
      <button onClick={handleReRender}>Force Re-render</button>
    </div>
  );
}
