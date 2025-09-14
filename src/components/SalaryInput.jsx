import { useState } from "react";

const SalaryInput = ({ setSalary, salary }) => {
    const [tempSalary, setTempSalary] = useState("");

    const handleAddSalary = () => {
      if(tempSalary === ''){
        return alert("Kindly Fill the Amount")
      }
    const value = Number(tempSalary);
    if (value > 0) {
      setSalary(salary + value);
      setTempSalary("");
    }
  }
  return (
    <div className="mb-6 flex flex-col md:flex-row justify-center gap-4 items-center ">
      <input
        type="number"
        value={tempSalary}
        placeholder="Enter your salary"
        onChange={(e) => setTempSalary(e.target.value)}
        className="px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 w-64"
      />
      <button
        type="button"
        onClick={handleAddSalary}
        className="px-6 py-2 text-white rounded-lg shadow transition bg-blue-600 hover:bg-blue-700 w-32"
      >
        Add Salary
      </button>
    </div>
  );
};

export default SalaryInput;
