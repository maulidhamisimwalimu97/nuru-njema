"use client";

import { useEffect, useState } from "react";
import { Search, Mail, Trash2, Eye } from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";

type Message = {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
};

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [search, setSearch] = useState("");
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [loading, setLoading] = useState(true);

  // ✅ FETCH FROM DB
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/messages");
        setMessages(res.data);
      } catch (error) {
        console.log("Error loading messages:", error);
        toast.error("Failed to load messages");
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  // DELETE MESSAGE
  const handleDelete = async (id: number) => {
    const confirmDelete = confirm("Delete this message?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:5000/api/messages/${id}`);

      setMessages((prev) => prev.filter((m) => m.id !== id));

      toast.success("🗑️ Message deleted successfully");
    } catch (error) {
      console.log(error);
      toast.error("❌ Failed to delete message");
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

      {/* LOADING */}
      {loading ? (
        <p className="text-center py-10">Loading messages...</p>
      ) : (
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

                  <td className="p-4 font-medium">
                    {msg.name}
                  </td>

                  <td className="p-4 text-gray-600">
                    {msg.email}
                  </td>

                  <td className="p-4 text-gray-800">
                    {msg.subject}
                  </td>

                  <td className="p-4 text-gray-600">
                    {msg.date}
                  </td>

                  <td className="p-4">
                    <div className="flex justify-center gap-3">

                      <button
                        onClick={() => setSelectedMessage(msg)}
                        className="p-2 bg-blue-100 rounded-lg hover:bg-blue-200"
                      >
                        <Eye className="h-4 w-4 text-blue-600" />
                      </button>

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

          {filteredMessages.length === 0 && (
            <div className="text-center py-10 text-gray-500">
              No messages found
            </div>
          )}

        </div>
      )}

      {/* MODAL */}
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