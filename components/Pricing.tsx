"use client";
import { useState } from "react";

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<"Free" | "Starter" | "Professional" | "Team">("Free");

  // Define pricing data
  const plans: Record<string, { price: string; storage: string; snaps: string; folders: string; sync: string }> = {
    Free: { price: "$0", storage: "-", snaps: "3", folders: "0", sync: "✔" },
    Starter: { price: "$8/mo", storage: "100 MB", snaps: "500", folders: "0", sync: "✔" },
    Professional: { price: "$14/mo", storage: "1 GB", snaps: "Unlimited", folders: "Unlimited", sync: "✔" },
    Team: { price: "$49/mo", storage: "5 GB", snaps: "Unlimited", folders: "Unlimited", sync: "✔" },
  };

  return (
    <section className="flex flex-col items-center py-16 px-6 md:px-12 lg:px-24 bg-white">
      {/* Title */}
      <h2 className="text-4xl font-bold text-gray-900 mb-6">Pricing</h2>
      <p className="text-gray-500 text-sm">Price in USD. VAT may apply.</p>

      {/* 📱 Mobile View (Sticky Plan Selection Buttons) */}
      <div className="block md:hidden w-full mt-10 text-black">
        {/* Sticky Plan Selection */}
        <div className="sticky top-16 bg-white z-10 py-2 px-4 shadow-md flex justify-between space-x-2 rounded-lg">
          {Object.keys(plans).map((plan) => (
            <button
              key={plan}
              onClick={() => setSelectedPlan(plan as "Free" | "Starter" | "Professional" | "Team")}
              className={`flex-1 px-2 py-2 text-sm md:text-base border rounded-lg font-semibold transition-all ${
                selectedPlan === plan ? "bg-purple-500 text-white" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {plan}
            </button>
          ))}
        </div>

        {/* Display Selected Plan Details */}
        {plans[selectedPlan] && (
          <div className="border border-gray-200 p-4 rounded-lg shadow-sm bg-white mt-6">
            <h3 className="text-xl font-bold text-gray-700">{selectedPlan}</h3>
            <p className="text-2xl font-bold">{plans[selectedPlan].price}</p>
            <p><strong>Image Upload Limit:</strong> {plans[selectedPlan].storage}</p>
            <p><strong>Snap Storage Limit:</strong> {plans[selectedPlan].snaps}</p>
            <p><strong>Folder Storage Limit:</strong> {plans[selectedPlan].folders}</p>
            <p><strong>Sync Snaps & Folders:</strong> {plans[selectedPlan].sync}</p>
          </div>
        )}
      </div>

      {/* 🖥️ Desktop View (Full Table) */}
      <div className="hidden md:block w-full max-w-5xl mt-10">
        <table className="w-full border-collapse border border-gray-200 text-left">
          <thead>
            <tr className="bg-gray-50 text-gray-700">
              <th className="p-4 border border-gray-200">Dashboard</th>
              <th className="p-4 border border-gray-200 text-center">Free</th>
              <th className="p-4 border border-gray-200 text-center">Starter</th>
              <th className="p-4 border border-gray-200 text-center">Professional</th>
              <th className="p-4 border border-gray-200 text-center">Team</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr>
              <td className="p-4 border border-gray-200">Image Upload Limit</td>
              <td className="p-4 border border-gray-200 text-center">-</td>
              <td className="p-4 border border-gray-200 text-center">100 MB</td>
              <td className="p-4 border border-gray-200 text-center">1 GB</td>
              <td className="p-4 border border-gray-200 text-center">5 GB</td>
            </tr>
            <tr>
              <td className="p-4 border border-gray-200">Snap Storage Limit</td>
              <td className="p-4 border border-gray-200 text-center">3</td>
              <td className="p-4 border border-gray-200 text-center">500</td>
              <td className="p-4 border border-gray-200 text-center">Unlimited</td>
              <td className="p-4 border border-gray-200 text-center">Unlimited</td>
            </tr>
            <tr>
              <td className="p-4 border border-gray-200">Folder Storage Limit</td>
              <td className="p-4 border border-gray-200 text-center">0</td>
              <td className="p-4 border border-gray-200 text-center">0</td>
              <td className="p-4 border border-gray-200 text-center">Unlimited</td>
              <td className="p-4 border border-gray-200 text-center">Unlimited</td>
            </tr>
            <tr>
              <td className="p-4 border border-gray-200">Sync Snaps & Folders</td>
              <td className="p-4 border border-gray-200 text-center">✔</td>
              <td className="p-4 border border-gray-200 text-center">✔</td>
              <td className="p-4 border border-gray-200 text-center">✔</td>
              <td className="p-4 border border-gray-200 text-center">✔</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
