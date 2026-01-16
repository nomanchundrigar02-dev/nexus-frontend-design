import { useState } from "react";

export default function Security() {
  const [password, setPassword] = useState<string>("");

  const getStrength = (): "Weak" | "Medium" | "Strong" => {
    if (password.length < 6) return "Weak";
    if (password.length < 10) return "Medium";
    return "Strong";
  };

  return (
    <div className="flex justify-center mt-16">
      <div className="bg-gray-100 w-[420px] p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold text-center mb-4">
          🔒 Security
        </h2>

        <input
          type="password"
          placeholder="New Password"
          className="w-full p-2 rounded border mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="h-2 bg-gray-300 rounded mb-2">
          <div
            className={`h-2 rounded ${
              getStrength() === "Weak"
                ? "w-1/4 bg-red-500"
                : getStrength() === "Medium"
                ? "w-2/4 bg-yellow-500"
                : "w-full bg-green-500"
            }`}
          />
        </div>

        <p className="text-sm mb-4">
          Password Strength: <strong>{getStrength()}</strong>
        </p>

        <button className="w-full bg-blue-400 text-white py-2 rounded">
          Update Password
        </button>
      </div>
    </div>
  );
}
