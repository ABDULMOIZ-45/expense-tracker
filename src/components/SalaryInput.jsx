const SalaryInput = ({ setSalary }) => {
  const handleSalaryChange = (e) => {
    setSalary(Number(e.target.value));
  };

  return (
    <div className="mb-6 flex justify-center">
      <input
        type="number"
        placeholder="Enter your salary"
        onChange={handleSalaryChange}
        className="px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 w-64"
      />
    </div>
  );
};

export default SalaryInput;
