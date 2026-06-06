"use client";

import { useEffect, useState } from "react";
import { Search, Users } from "lucide-react";
import axios from "axios";

type Donor = {
  id: number;
  name: string;
  email: string;
  amount: number;
  date: string;
};

export default function DonorsPage() {
  const [donors, setDonors] = useState<Donor[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // ✅ FETCH FROM DATABASE
  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/donors");
        setDonors(res.data);
      } catch (error) {
        console.log("Error loading donors:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDonors();
  }, []);

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

      {/* LOADING */}
      {loading ? (
        <p className="text-center py-10">Loading donors...</p>
      ) : (
        <div className="bg-white border rounded-2xl shadow-sm overflow-x-auto">

          <table className="w-full min-w-[650px]">

            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Email</th>
                <th className="p-4 text-left">Amount (TZS)</th>
                <th className="p-4 text-left">Date</th>
              </tr>
            </thead>

            <tbody>
              {filteredDonors.map((donor) => (
                <tr key={donor.id} className="border-t hover:bg-gray-50">

                  <td className="p-4 font-medium">
                    {donor.name}
                  </td>

                  <td className="p-4 text-gray-600">
                    {donor.email}
                  </td>

                  <td className="p-4 font-semibold text-green-600">
                    {donor.amount.toLocaleString()}
                  </td>

                  <td className="p-4 text-gray-600">
                    {donor.date}
                  </td>

                </tr>
              ))}
            </tbody>

          </table>

          {filteredDonors.length === 0 && (
            <div className="text-center py-10 text-gray-500">
              No donors found
            </div>
          )}

        </div>
      )}
    </div>
  );
}