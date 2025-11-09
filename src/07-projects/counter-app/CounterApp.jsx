/**
 * CounterApp.jsx
 * -------------------------
 * 🧩 A simple React practice project demonstrating:
 *  - Reusable components
 *  - Custom hooks
 *  - Props handling
 *  - Clean and maintainable structure
 */

import { useState } from "react";
import useCounter from "../../02-hooks/custom-hooks/useCounter";


/**
 * 🎛️ CounterController Component
 * ------------------------------
 * A reusable counter controller that uses the custom `useCounter` hook.
 * Props (optional):
 *  - initial: number → starting value
 *  - lowerBound: number → minimum allowed value
 *  - upperBound: number → maximum allowed value
 */
const CounterController = (props) => {
  const { count, handleInc, handleDec } = useCounter({ ...props });

  return (
    <div style={styles.counterContainer}>
      <button style={styles.button} onClick={handleDec}>
        -
      </button>
      <span style={styles.count}>{count}</span>
      <button style={styles.button} onClick={handleInc}>
        +
      </button>
    </div>
  );
};

/**
 * ⚙️ CounterApp Component
 * ------------------------
 * Demonstrates different ways to manage multiple counters:
 *  1️⃣ Traditional state management (commented section)
 *  2️⃣ Using a reusable CounterController component
 *  3️⃣ Using a custom `useCounter` hook with various configurations
 */
const CounterApp = () => {
  // ---------------------------------------------
  // 🧠 EXAMPLE: Using custom hook directly
  // ---------------------------------------------
  // const { count, handleInc, handleDec } = useCounter({ lowerBound: -10 }); // Method 1
  // const {
  //   count: count1,
  //   handleInc: handleInc1,
  //   handleDec: handleDec1,
  // } = useCounter({ initial: 5, lowerBound: 5, upperBound: 15 }); // Method 2
  // const counter2 = useCounter({ initial: 10, upperBound: 20 }); // Method 3

  // ---------------------------------------------
  // 🧠 EXAMPLE: Using multiple useState hooks manually
  // ---------------------------------------------
  // const [counter1, setCounter1] = useState(0);
  // const [counter2, setCounter2] = useState(0);
  // const [counter3, setCounter3] = useState(0);

  // const handleCounter1Dec = () => {
  //   if (counter1 > 0) setCounter1(counter1 - 1);
  // };
  // const handleCounter1Inc = () => {
  //   if (counter1 < 10) setCounter1(counter1 + 1);
  // };

  // const handleCounter2Dec = () => {
  //   if (counter2 > 0) setCounter2(counter2 - 1);
  // };
  // const handleCounter2Inc = () => {
  //   if (counter2 < 10) setCounter2(counter2 + 1);
  // };

  // const handleCounter3Dec = () => {
  //   if (counter3 > 0) setCounter3(counter3 - 1);
  // };
  // const handleCounter3Inc = () => {
  //   if (counter3 < 10) setCounter3(counter3 + 1);
  // };

  return (
    <div style={styles.appContainer}>
      <h1 style={styles.title}>⚡ Counter App</h1>

      {/* --------------------------------------------- */}
      {/* 🧩 Copy-Paste Approach (Without Custom Hook)  */}
      {/* --------------------------------------------- */}
      {/* 
      <div>
        <button onClick={handleCounter1Dec}>-</button>
        <span> {counter1} </span>
        <button onClick={handleCounter1Inc}>+</button>
      </div>
      */}

      {/* --------------------------------------------- */}
      {/* 🧩 Using CounterController with Props         */}
      {/* --------------------------------------------- */}
      {/* 
      <CounterController
        count={count}
        handleDec={handleDec}
        handleInc={handleInc}
      />
      <CounterController
        count={count1}
        handleDec={handleDec1}
        handleInc={handleInc1}
      />
      <CounterController
        count={counter2.count}
        handleDec={counter2.handleDec}
        handleInc={counter2.handleInc}
      />
      */}

      {/* --------------------------------------------- */}
      {/* 🧩 Using CounterController (Only Config Props) */}
      {/* --------------------------------------------- */}
      <CounterController lowerBound={-10} />
      <CounterController initial={5} lowerBound={-10} upperBound={15} />
      <CounterController initial={10} upperBound={20} />
    </div>
  );
};

/**
 * 💅 Inline Styles
 * ------------------------
 * Keeping styling minimal and easy to understand.
 */
const styles = {
  appContainer: {
    textAlign: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    color: "#2d3748",
    marginBottom: "30px",
  },
  counterContainer: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    margin: "10px",
    backgroundColor: "#f7fafc",
    padding: "10px 20px",
    borderRadius: "10px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  button: {
    backgroundColor: "#3182ce",
    color: "white",
    border: "none",
    borderRadius: "6px",
    padding: "5px 12px",
    cursor: "pointer",
    fontSize: "16px",
  },
  count: {
    fontSize: "18px",
    fontWeight: "bold",
    minWidth: "30px",
  },
};

export default CounterApp;
