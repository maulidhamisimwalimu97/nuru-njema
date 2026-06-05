"use client";

import Link from "next/link";
import {
  Users,
  HeartHandshake,
  Activity,
  MessageCircle,
  Building2,
} from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="grid gap-6">

      <h2 className="text-2xl font-bold text-gray-800">
        Welcome Back Admin 👋
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

        {/* Users */}
        <Link href="/auth/admin-dashboard/users">
          <div className="bg-white p-6 rounded-lg shadow flex items-center gap-4 hover:shadow-md hover:scale-[1.02] transition cursor-pointer">
            <Users className="h-10 w-10 text-cyan-600" />
            <div>
              <h3 className="text-gray-500">Registered Users</h3>
              <p className="text-2xl font-bold">120</p>
            </div>
          </div>
        </Link>

        {/* Donors */}
        <Link href="/auth/admin-dashboard/donors">
          <div className="bg-white p-6 rounded-lg shadow flex items-center gap-4 hover:shadow-md hover:scale-[1.02] transition cursor-pointer">
            <HeartHandshake className="h-10 w-10 text-green-600" />
            <div>
              <h3 className="text-gray-500">Donors</h3>
              <p className="text-2xl font-bold">45</p>
            </div>
          </div>
        </Link>

        {/* Blogs */}
        <Link href="/auth/admin-dashboard/blogs/lists">
          <div className="bg-white p-6 rounded-lg shadow flex items-center gap-4 hover:shadow-md hover:scale-[1.02] transition cursor-pointer">
            <Activity className="h-10 w-10 text-orange-500" />
            <div>
              <h3 className="text-gray-500">Blogs</h3>
              <p className="text-2xl font-bold">12</p>
            </div>
          </div>
        </Link>

        {/* Messages */}
        <Link href="/auth/admin-dashboard/messages">
          <div className="bg-white p-6 rounded-lg shadow flex items-center gap-4 hover:shadow-md hover:scale-[1.02] transition cursor-pointer">
            <MessageCircle className="h-10 w-10 text-blue-500" />
            <div>
              <h3 className="text-gray-500">Messages</h3>
              <p className="text-2xl font-bold">18</p>
            </div>
          </div>
        </Link>

        {/* Partners */}
        <Link href="/auth/admin-dashboard/partners">
          <div className="bg-white p-6 rounded-lg shadow flex items-center gap-4 hover:shadow-md hover:scale-[1.02] transition cursor-pointer">
            <Building2 className="h-10 w-10 text-purple-600" />
            <div>
              <h3 className="text-gray-500">Partners</h3>
              <p className="text-2xl font-bold">8</p>
            </div>
          </div>
        </Link>

      </div>

    </div>
  );
}