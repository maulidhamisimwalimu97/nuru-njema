"use client";

import { useEffect, useState } from "react";
import { Search, Users, Trash2 } from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";

type Partner = {
  id: number;
  name: string;
  email: string;
  phone: string;
  type: string;
  date: string;
};

export default function PartnersPage() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // ✅ FETCH FROM DATABASE
  useEffect(() => {
    const fetchPartners = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/partners");
        setPartners(res.data);
      } catch (error) {
        console.log("Error loading partners:", error);
        toast.error("Failed to load partners");
      } finally {
        setLoading(false);
      }
    };

    fetchPartners();
  }, []);

  // DELETE PARTNER (DB + UI)
  const handleDelete = async (id: number) => {
    const confirmDelete = confirm("Delete this partner?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:5000/api/partners/${id}`);

      // remove from UI
      setPartners((prev) => prev.filter((p) => p.id !== id));

      toast.success("🗑️ Partner deleted successfully");
    } catch (error) {
      console.log(error);
      toast.error("❌ Failed to delete partner");
    }
  };

  // FILTER
  const filteredPartners = partners.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.email.toLowerCase().includes(search.toLowerCase()) ||
      p.type.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto">

      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">

        <div>
          <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
            <Users className="h-6 w-6 text-cyan-600" />
            Partners
          </h1>
          <p className="text-gray-500">
            Manage organization partnerships
          </p>
        </div>

      </div>

      {/* SEARCH */}
      <div className="mb-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />

          <input
            type="text"
            placeholder="Search partners..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border rounded-xl pl-10 pr-4 py-2 focus:ring-2 focus:ring-cyan-500 outline-none"
          />
        </div>
      </div>

      {/* LOADING */}
      {loading ? (
        <p className="text-center py-10">Loading partners...</p>
      ) : (
        <div className="bg-white border rounded-2xl shadow-sm overflow-x-auto">

          <table className="w-full min-w-[750px]">

            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Email</th>
                <th className="p-4 text-left">Phone</th>
                <th className="p-4 text-left">Type</th>
                <th className="p-4 text-left">Date</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredPartners.map((partner) => (
                <tr key={partner.id} className="border-t hover:bg-gray-50">

                  <td className="p-4 font-medium">
                    {partner.name}
                  </td>

                  <td className="p-4 text-gray-600">
                    {partner.email}
                  </td>

                  <td className="p-4 text-gray-600">
                    {partner.phone}
                  </td>

                  <td className="p-4 text-cyan-700 font-medium">
                    {partner.type}
                  </td>

                  <td className="p-4 text-gray-600">
                    {partner.date}
                  </td>

                  <td className="p-4 text-center">
                    <button
                      onClick={() => handleDelete(partner.id)}
                      className="p-2 bg-red-100 rounded-lg hover:bg-red-200"
                    >
                      <Trash2 className="h-4 w-4 text-red-600" />
                    </button>
                  </td>

                </tr>
              ))}
            </tbody>

          </table>

          {filteredPartners.length === 0 && (
            <div className="text-center py-10 text-gray-500">
              No partners found
            </div>
          )}

        </div>
      )}
    </div>
  );
}