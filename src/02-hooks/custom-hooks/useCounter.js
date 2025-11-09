/**
 * useCounter.js
 * -------------------------
 * 🧠 A reusable custom React hook for counter logic.
 * 
 * Features:
 *  - Configurable initial value
 *  - Upper and lower bounds
 *  - Increment and decrement handlers
 * 
 * Example usage:
 *  const { count, handleInc, handleDec } = useCounter({
 *    initial: 5,
 *    lowerBound: 0,
 *    upperBound: 10
 *  });
 */

import { useState } from "react";

/**
 * 🔧 useCounter Hook
 * -------------------------
 * @param {Object} options - Configuration object
 * @param {number} [options.initial=0] - Initial counter value
 * @param {number} [options.lowerBound=0] - Minimum limit
 * @param {number} [options.upperBound=10] - Maximum limit
 *
 * @returns {Object} - Counter state and handlers
 * {
 *   count,         // Current count value
 *   lowerBound,    // Configured lower limit
 *   upperBound,    // Configured upper limit
 *   handleInc,     // Function to increment count
 *   handleDec,     // Function to decrement count
 * }
 */
const useCounter = ({
  initial = 0,
  lowerBound = 0,
  upperBound = 10,
}) => {
  // ✅ State to hold the counter value
  const [count, setCount] = useState(initial);

  /**
   * ⬆️ Increase the counter value
   * Prevents going beyond `upperBound`
   */
  const handleInc = () => {
    setCount((prev) => (prev < upperBound ? prev + 1 : prev));
  };

  /**
   * ⬇️ Decrease the counter value
   * Prevents going below `lowerBound`
   */
  const handleDec = () => {
    setCount((prev) => (prev > lowerBound ? prev - 1 : prev));
  };

  // 🎯 Return useful properties and functions
  return {
    count,
    lowerBound,
    upperBound,
    handleInc,
    handleDec,
  };
};

export default useCounter;
