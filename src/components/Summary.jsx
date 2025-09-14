const Summary = ({ salary, totalExpenses }) => {
  const balance = salary - totalExpenses;

  return (
    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6 w-full max-w-3xl mx-auto">
      <div className="bg-green-100 px-6 py-3 rounded-lg shadow flex-1 text-center">
        <p className="text-green-700 font-semibold">Salary</p>
        <p className="text-xl font-bold">Rs {salary}</p>
      </div>

      <div className="bg-red-100 px-6 py-3 rounded-lg shadow flex-1 text-center">
        <p className="text-red-700 font-semibold">Expenses</p>
        <p className="text-xl font-bold">Rs {totalExpenses}</p>
      </div>

      <div className="bg-blue-100 px-6 py-3 rounded-lg shadow flex-1 text-center">
        <p className="text-blue-700 font-semibold">Balance</p>
        <p className="text-xl font-bold">Rs {balance}</p>
      </div>
    </div>
  );
};

export default Summary;

