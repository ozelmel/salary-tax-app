import React, { useState } from "react";

function App() {
  const [salary, setSalary] = useState(0);
  const [tax, setTax] = useState(0);

  const calculateTax = () => {
    let calculatedTax = 0;

    if (salary > 0 && salary <= 18200) {
      calculatedTax = 0;
    } else if (salary > 18200 && salary <= 45000) {
      calculatedTax = (salary - 18200) * 0.19;
    } else if (salary > 45000 && salary <= 120000) {
      calculatedTax = 5092 + (salary - 45000) * 0.325;
    } else if (salary > 120000 && salary <= 180000) {
      calculatedTax = 29467 + (salary - 120000) * 0.37;
    } else if (salary > 180000) {
      calculatedTax = 51667 + (salary - 180000) * 0.45;
    }

    setTax(calculatedTax);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      calculateTax();
    }
  };

  return (
    <div>
      <h1>Salary Tax Calculator</h1>
      <label htmlFor="salaryInput">Enter your salary:</label>
      <input
        type="number"
        id="salaryInput"
        value={salary}
        onChange={(e) => setSalary(parseInt(e.target.value))}
        onKeyDown={handleKeyDown}
        autoFocus
      />
      <button onClick={calculateTax}>Calculate Tax</button>
      {tax > 0 && <p>Your tax is: ${tax.toFixed(2)}</p>}
    </div>
  );
}

export default App;
