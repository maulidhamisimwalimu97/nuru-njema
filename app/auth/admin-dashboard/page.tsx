"use client";

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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* Users */}
        <div className="bg-white p-6 rounded-lg shadow flex items-center gap-4">
          <Users className="h-10 w-10 text-cyan-600" />
          <div>
            <h3 className="text-gray-500">Registered Users</h3>
            <p className="text-2xl font-bold">120</p>
          </div>
        </div>

        {/* Donors */}
        <div className="bg-white p-6 rounded-lg shadow flex items-center gap-4">
          <HeartHandshake className="h-10 w-10 text-green-600" />
          <div>
            <h3 className="text-gray-500">Donors</h3>
            <p className="text-2xl font-bold">45</p>
          </div>
        </div>

        {/* Activities */}
        <div className="bg-white p-6 rounded-lg shadow flex items-center gap-4">
          <Activity className="h-10 w-10 text-orange-500" />
          <div>
            <h3 className="text-gray-500">Activities</h3>
            <p className="text-2xl font-bold">12</p>
          </div>
        </div>

        {/* Messages */}
        <div className="bg-white p-6 rounded-lg shadow flex items-center gap-4">
          <MessageCircle className="h-10 w-10 text-blue-500" />
          <div>
            <h3 className="text-gray-500">Messages</h3>
            <p className="text-2xl font-bold">18</p>
          </div>
        </div>

        {/* Partners */}
        <div className="bg-white p-6 rounded-lg shadow flex items-center gap-4">
          <Building2 className="h-10 w-10 text-purple-600" />
          <div>
            <h3 className="text-gray-500">Partners</h3>
            <p className="text-2xl font-bold">8</p>
          </div>
        </div>

      </div>

    </div>
  );
}