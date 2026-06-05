"use client";

import { useState } from "react";
import { Search, Users, Trash2, Pencil } from "lucide-react";

type Partner = {
  id: number;
  name: string;
  email: string;
  phone: string;
  type: string;
  date: string;
};

export default function PartnersPage() {
  const [partners, setPartners] = useState<Partner[]>([
    {
      id: 1,
      name: "Hope Foundation",
      email: "info@hope.org",
      phone: "+255 712 000 111",
      type: "NGO",
      date: "2026-06-01",
    },
    {
      id: 2,
      name: "Tanzania Health Org",
      email: "contact@tho.org",
      phone: "+255 754 222 333",
      type: "Health",
      date: "2026-06-03",
    },
    {
      id: 3,
      name: "EduCare Partners",
      email: "info@educare.com",
      phone: "+255 768 444 555",
      type: "Education",
      date: "2026-06-05",
    },
  ]);

  const [search, setSearch] = useState("");

  // DELETE PARTNER
  const handleDelete = (id: number) => {
    const confirmDelete = confirm("Delete this partner?");
    if (confirmDelete) {
      setPartners(partners.filter((p) => p.id !== id));
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

      {/* TABLE */}
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

                {/* NAME */}
                <td className="p-4 font-medium whitespace-nowrap">
                  {partner.name}
                </td>

                {/* EMAIL */}
                <td className="p-4 text-gray-600 whitespace-nowrap">
                  {partner.email}
                </td>

                {/* PHONE */}
                <td className="p-4 text-gray-600 whitespace-nowrap">
                  {partner.phone}
                </td>

                {/* TYPE */}
                <td className="p-4 text-cyan-700 font-medium whitespace-nowrap">
                  {partner.type}
                </td>

                {/* DATE */}
                <td className="p-4 text-gray-600 whitespace-nowrap">
                  {partner.date}
                </td>

                {/* ACTIONS */}
                <td className="p-4">
                  <div className="flex justify-center gap-3">

                    {/* EDIT */}
                    <button className="p-2 bg-blue-100 rounded-lg hover:bg-blue-200">
                      <Pencil className="h-4 w-4 text-blue-600" />
                    </button>

                    {/* DELETE */}
                    <button
                      onClick={() => handleDelete(partner.id)}
                      className="p-2 bg-red-100 rounded-lg hover:bg-red-200"
                    >
                      <Trash2 className="h-4 w-4 text-red-600" />
                    </button>

                  </div>
                </td>

              </tr>
            ))}
          </tbody>

        </table>

        {/* EMPTY STATE */}
        {filteredPartners.length === 0 && (
          <div className="text-center py-10 text-gray-500">
            No partners found
          </div>
        )}

      </div>
    </div>
  );
}