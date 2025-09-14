
const ExpenseList = ({ expenses, deleteExpense, editExpense }) => {
    return (
        <div className="max-w-3xl mx-auto bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-3">Expense List</h2>
            {expenses.length === 0 ? (
                <p className="text-gray-500">No expenses added yet.</p>
            ) : (
                <ul className="divide-y">
                    {expenses.map((exp) => (
                        <li
                            key={exp.id}
                            className="flex justify-between items-center py-2 text-gray-700">
                            <div>
                                <span className="font-medium">{exp.title}</span>{" "}
                                <span className="text-sm text-gray-500">{exp.date}</span>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="font-bold">Rs {exp.amount}</span>
                                <button
                                    onClick={() => editExpense(exp)}
                                    className="px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500">
                                    Edit </button>
                                <button
                                    onClick={() => deleteExpense(exp.id)}
                                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600" >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
export default ExpenseList;