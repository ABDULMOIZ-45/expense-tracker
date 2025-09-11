const Summary = ({ salary, totalExpenses }) => {
  const balance = salary - totalExpenses;

  return (
    <div className="flex justify-center gap-6 mb-6">
      <div className="bg-green-100 px-6 py-3 rounded-lg shadow">
        <p className="text-green-700 font-semibold text-center">Salary</p>
        <p className="text-xl font-bold">Rs {salary}</p>
      </div>

      <div className="bg-red-100 px-6 py-3 rounded-lg shadow">
        <p className="text-red-700 font-semibold text-center">Expenses</p>
        <p className="text-xl font-bold">Rs {totalExpenses}</p>
      </div>

      <div className="bg-blue-100 px-6 py-3 rounded-lg shadow">
        <p className="text-blue-700 font-semibold text-center">Balance</p>
        <p className="text-xl font-bold">Rs {balance}</p>
      </div>
    </div>
  );
};

export default Summary;
