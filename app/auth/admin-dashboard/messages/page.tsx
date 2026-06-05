"use client";

import { useState } from "react";
import { Search, Mail, Trash2, Eye } from "lucide-react";

type Message = {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
};

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      name: "John Mwangi",
      email: "john@example.com",
      subject: "Donation Inquiry",
      message: "I would like to know how to donate to your foundation...",
      date: "2026-06-05",
    },
    {
      id: 2,
      name: "Amina Hassan",
      email: "amina@example.com",
      subject: "Volunteer Request",
      message: "I am interested in volunteering with your team...",
      date: "2026-06-04",
    },
    {
      id: 3,
      name: "David Kimaro",
      email: "david@example.com",
      subject: "Partnership",
      message: "We would like to partner with your organization...",
      date: "2026-06-03",
    },
  ]);

  const [search, setSearch] = useState("");
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

  // DELETE MESSAGE
  const handleDelete = (id: number) => {
    const confirmDelete = confirm("Delete this message?");
    if (confirmDelete) {
      setMessages(messages.filter((m) => m.id !== id));
    }
  };

  // FILTER
  const filteredMessages = messages.filter(
    (m) =>
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.email.toLowerCase().includes(search.toLowerCase()) ||
      m.subject.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto">

      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">

        <div>
          <h1 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
            <Mail className="h-6 w-6 text-cyan-600" />
            Messages
          </h1>
          <p className="text-gray-500">
            Contact form submissions inbox
          </p>
        </div>

      </div>

      {/* SEARCH */}
      <div className="mb-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />

          <input
            type="text"
            placeholder="Search messages..."
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
              <th className="p-4 text-left">Subject</th>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredMessages.map((msg) => (
              <tr key={msg.id} className="border-t hover:bg-gray-50">

                {/* NAME */}
                <td className="p-4 font-medium whitespace-nowrap">
                  {msg.name}
                </td>

                {/* EMAIL */}
                <td className="p-4 text-gray-600 whitespace-nowrap">
                  {msg.email}
                </td>

                {/* SUBJECT */}
                <td className="p-4 text-gray-800 whitespace-nowrap">
                  {msg.subject}
                </td>

                {/* DATE */}
                <td className="p-4 text-gray-600 whitespace-nowrap">
                  {msg.date}
                </td>

                {/* ACTIONS */}
                <td className="p-4">
                  <div className="flex justify-center gap-3">

                    {/* VIEW */}
                    <button
                      onClick={() => setSelectedMessage(msg)}
                      className="p-2 bg-blue-100 rounded-lg hover:bg-blue-200"
                    >
                      <Eye className="h-4 w-4 text-blue-600" />
                    </button>

                    {/* DELETE */}
                    <button
                      onClick={() => handleDelete(msg.id)}
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

        {/* EMPTY */}
        {filteredMessages.length === 0 && (
          <div className="text-center py-10 text-gray-500">
            No messages found
          </div>
        )}
      </div>

      {/* MESSAGE MODAL */}
      {selectedMessage && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">

          <div className="bg-white w-full max-w-lg rounded-2xl p-6">

            <h2 className="text-xl font-bold mb-2">
              {selectedMessage.subject}
            </h2>

            <p className="text-sm text-gray-500 mb-4">
              From: {selectedMessage.name} ({selectedMessage.email})
            </p>

            <p className="text-gray-700 mb-6">
              {selectedMessage.message}
            </p>

            <button
              onClick={() => setSelectedMessage(null)}
              className="w-full bg-cyan-600 text-white py-2 rounded-xl"
            >
              Close
            </button>

          </div>

        </div>
      )}

    </div>
  );
}