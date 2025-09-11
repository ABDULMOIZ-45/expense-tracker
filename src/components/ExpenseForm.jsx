import { useState, useEffect } from "react";

const ExpenseForm = ({ addOrUpdateExpense, editingExpense }) => {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    console.log(editingExpense)
    // when editingExpense changes, fill form
    useEffect(() => {
        if (editingExpense) {
        setTitle(editingExpense.title);
        setAmount(editingExpense.amount);
        }
    }, [editingExpense]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !amount) return;
        const newExpense = {
            id: editingExpense ? editingExpense.id : Date.now(),
            title,
            amount: Number(amount),
            date: new Date().toLocaleDateString(),
        }
        addOrUpdateExpense(newExpense);
        setTitle("");
        setAmount("");
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col md: flex-row gap-4 items-center justify-center mb-6">
            <input
                type="text"
                value={title}
                placeholder="Expense Title"
                onChange={(e) => setTitle(e.target.value)}
                className="px-4 py-2 border rounded-lg shadow-sm focus: ring-2 focus:ring-blue-400"
            />
            <input
                type="number"
                value={amount}
                placeholder="Amount"
                onChange={(e) => setAmount(e.target.value)
                }
                className="px-4 py-2 border rounded-lg shadow-sm focus: ring-2 focus: ring-blue-400"
            />
            <button
                type="submit"
                className={`px-6 py-2 text-white rounded-lg shadow transition ${editingExpense
                    ? "bg-yellow-500 hover: bg-yellow-600"
                    : "bg-blue-600 hover:bg-blue-700"
                    }`}
            >
                {editingExpense ? "Update Expense" : "Add Expense"}
            </button>
        </form>
    );
};
export default ExpenseForm;