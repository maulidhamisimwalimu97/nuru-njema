"use client";

import { useState } from "react";
import { Search, Users } from "lucide-react";

type Donor = {
  id: number;
  name: string;
  email: string;
  amount: number;
  date: string;
};

export default function DonorsPage() {
  const [donors] = useState<Donor[]>([
    {
      id: 1,
      name: "John Mwangi",
      email: "john@example.com",
      amount: 50000,
      date: "2026-06-01",
    },
    {
      id: 2,
      name: "Amina Hassan",
      email: "amina@example.com",
      amount: 30000,
      date: "2026-06-03",
    },
    {
      id: 3,
      name: "David Kimaro",
      email: "david@example.com",
      amount: 100000,
      date: "2026-06-05",
    },
  ]);

  const [search, setSearch] = useState("");

  const filteredDonors = donors.filter(
    (donor) =>
      donor.name.toLowerCase().includes(search.toLowerCase()) ||
      donor.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto">

      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">

        <div>
          <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
            <Users className="h-6 w-6 text-cyan-600" />
            Donors
          </h1>
          <p className="text-gray-500">
            Manage all donation records
          </p>
        </div>

      </div>

      {/* SEARCH */}
      <div className="mb-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />

          <input
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border rounded-xl pl-10 pr-4 py-2 focus:ring-2 focus:ring-cyan-500 outline-none"
          />
        </div>
      </div>

      {/* TABLE (FIXED RESPONSIVE) */}
      <div className="bg-white border rounded-2xl shadow-sm overflow-x-auto">

        <table className="w-full min-w-[650px]">

          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Amount (TZS)</th>
              <th className="p-4 text-left whitespace-nowrap">Date</th>
            </tr>
          </thead>

          <tbody>
            {filteredDonors.map((donor) => (
              <tr key={donor.id} className="border-t hover:bg-gray-50">

                {/* NAME */}
                <td className="p-4 font-medium whitespace-nowrap">
                  {donor.name}
                </td>

                {/* EMAIL */}
                <td className="p-4 text-gray-600 whitespace-nowrap">
                  {donor.email}
                </td>

                {/* AMOUNT */}
                <td className="p-4 font-semibold text-green-600 whitespace-nowrap">
                  {donor.amount.toLocaleString()}
                </td>

                {/* DATE */}
                <td className="p-4 text-gray-600 whitespace-nowrap">
                  {donor.date}
                </td>

              </tr>
            ))}
          </tbody>

        </table>

        {/* EMPTY STATE */}
        {filteredDonors.length === 0 && (
          <div className="text-center py-10 text-gray-500">
            No donors found
          </div>
        )}

      </div>
    </div>
  );
}