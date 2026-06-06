"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";

import {
  Users,
  HeartHandshake,
  Activity,
  MessageCircle,
  Building2,
} from "lucide-react";

type Counts = {
  blogs: number;
  donors: number;
  partners: number;
  messages: number;
};

export default function AdminDashboard() {
  const router = useRouter();

  const [counts, setCounts] = useState<Counts>({
    blogs: 0,
    donors: 0,
    partners: 0,
    messages: 0,
  });

  const [loading, setLoading] = useState(true);

  // 🔐 AUTH CHECK
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/auth/login");
    }
  }, []);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          "http://localhost:5000/api/dashboard/counts",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setCounts(res.data);
      } catch (error) {
        console.log("Dashboard error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCounts();
  }, []);

  return (
    <div className="grid gap-6">
      <h2 className="text-2xl font-bold text-gray-800">
        Welcome Back Admin 👋
      </h2>

      {/* CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

        <Link href="/auth/admin-dashboard/donors">
          <div className="bg-white p-6 rounded-lg shadow flex items-center gap-4">
            <HeartHandshake className="h-10 w-10 text-green-600" />
            <div>
              <h3 className="text-gray-500">Donors</h3>
              <p className="text-2xl font-bold">
                {loading ? "..." : counts.donors}
              </p>
            </div>
          </div>
        </Link>

        <Link href="/auth/admin-dashboard/blogs/lists">
          <div className="bg-white p-6 rounded-lg shadow flex items-center gap-4">
            <Activity className="h-10 w-10 text-orange-500" />
            <div>
              <h3 className="text-gray-500">Blogs</h3>
              <p className="text-2xl font-bold">
                {loading ? "..." : counts.blogs}
              </p>
            </div>
          </div>
        </Link>

        <Link href="/auth/admin-dashboard/messages">
          <div className="bg-white p-6 rounded-lg shadow flex items-center gap-4">
            <MessageCircle className="h-10 w-10 text-blue-500" />
            <div>
              <h3 className="text-gray-500">Messages</h3>
              <p className="text-2xl font-bold">
                {loading ? "..." : counts.messages}
              </p>
            </div>
          </div>
        </Link>

        <Link href="/auth/admin-dashboard/partners">
          <div className="bg-white p-6 rounded-lg shadow flex items-center gap-4">
            <Building2 className="h-10 w-10 text-purple-600" />
            <div>
              <h3 className="text-gray-500">Partners</h3>
              <p className="text-2xl font-bold">
                {loading ? "..." : counts.partners}
              </p>
            </div>
          </div>
        </Link>

      </div>
    </div>
  );
}