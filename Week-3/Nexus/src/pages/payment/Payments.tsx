import { useState } from "react";

interface Transaction {
  date: string;
  receiver: string;
  amount: number;
  type: string;
  status: string;
}

export default function Payments() {
  const [balance, setBalance] = useState<number>(5000);
  const [receiver, setReceiver] = useState<string>("");
  const [amount, setAmount] = useState<number | "">("");

  const transactions: Transaction[] = [
    { date: "01/02/26", receiver: "N/A", amount: 500, type: "Received", status: "Success" },
    { date: "12/31/25", receiver: "N/A", amount: 300, type: "Sent", status: "Success" },
    { date: "12/25/25", receiver: "N/A", amount: 1000, type: "Sent", status: "Success" },
  ];

  const sendPayment = () => {
    if (!amount) return;
    setBalance(prev => prev - Number(amount));
    setAmount("");
    setReceiver("");
    alert("Payment Sent (Mock)");
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="bg-white w-[450px] p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Payments (Mock)</h2>

        <div className="bg-gray-100 p-3 rounded mb-4">
          <strong>Wallet Balance:</strong> ${balance}
        </div>

        <h3 className="font-medium mb-2">Send Payment</h3>

        <input
          className="w-full border p-2 mb-2 rounded"
          placeholder="Receiver Name"
          value={receiver}
          onChange={(e) => setReceiver(e.target.value)}
        />

        <input
          className="w-full border p-2 mb-3 rounded"
          placeholder="Amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />

        <button
          onClick={sendPayment}
          className="w-full bg-green-500 text-white py-2 rounded"
        >
          Send Payment
        </button>

        <h3 className="font-medium mt-6 mb-2">Transaction History</h3>

        <table className="w-full text-sm border">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 border">Date</th>
              <th className="p-2 border">Receiver</th>
              <th className="p-2 border">Amount</th>
              <th className="p-2 border">Type</th>
              <th className="p-2 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t, i) => (
              <tr key={i} className="text-center">
                <td className="border p-1">{t.date}</td>
                <td className="border p-1">{t.receiver}</td>
                <td className="border p-1">${t.amount}</td>
                <td className="border p-1">{t.type}</td>
                <td className="border p-1 text-green-600">{t.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
