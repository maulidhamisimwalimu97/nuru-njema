"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Home,
  Users,
  Settings,
  LogOut,
  FileText,
  UserCircle,
} from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-gray-100 overflow-hidden">

      {/* SIDEBAR */}
      <aside
        className={`
          fixed md:sticky top-0 left-0 z-50
          h-screen w-64 bg-cyan-700 text-white
          flex flex-col
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >

        {/* LOGO */}
        <div className="p-6 text-center border-b border-cyan-600">
          <img
            src="/images/nlogo.png"
            alt="Logo"
            className="h-20 mx-auto object-contain"
          />
          <p className="text-sm mt-2 text-cyan-100">
            Admin Panel
          </p>
        </div>

        {/* NAV */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-3">

          {/* Dashboard */}
          <Link
            href="/auth/admin-dashboard"
            className="flex items-center gap-3 p-3 rounded-xl bg-cyan-600/20 hover:bg-cyan-600 transition shadow-sm hover:shadow-md"
          >
            <div className="bg-white/10 p-2 rounded-lg">
              <Home className="h-5 w-5 text-white" />
            </div>
            <span className="font-medium">Dashboard</span>
          </Link>

          {/* Blog List */}
          <Link
            href="/auth/admin-dashboard/blogs/create"
            className="flex items-center gap-3 p-3 rounded-xl bg-cyan-600/20 hover:bg-cyan-600 transition shadow-sm hover:shadow-md"
          >
            <div className="bg-white/10 p-2 rounded-lg">
              <FileText className="h-5 w-5 text-white" />
            </div>
            <span className="font-medium">Blogs</span>
          </Link>

          {/* Donors */}
          <Link
            href="/auth/admin-dashboard/donors"
            className="flex items-center gap-3 p-3 rounded-xl bg-cyan-600/20 hover:bg-cyan-600 transition shadow-sm hover:shadow-md"
          >
            <div className="bg-white/10 p-2 rounded-lg">
              <Users className="h-5 w-5 text-white" />
            </div>
            <span className="font-medium">Donors</span>
          </Link>

          {/* Messages */}
          <Link
            href="/auth/admin-dashboard/messages"
            className="flex items-center gap-3 p-3 rounded-xl bg-cyan-600/20 hover:bg-cyan-600 transition shadow-sm hover:shadow-md"
          >
            <div className="bg-white/10 p-2 rounded-lg">
              <UserCircle className="h-5 w-5 text-white" />
            </div>
            <span className="font-medium">Messages</span>
          </Link>

          {/* Partners */}
          <Link
            href="/auth/admin-dashboard/partners"
            className="flex items-center gap-3 p-3 rounded-xl bg-cyan-600/20 hover:bg-cyan-600 transition shadow-sm hover:shadow-md"
          >
            <div className="bg-white/10 p-2 rounded-lg">
              <Settings className="h-5 w-5 text-white" />
            </div>
            <span className="font-medium">Partners</span>
          </Link>

        </nav>

        {/* LOGOUT */}
        <div className="p-4 border-t border-cyan-600">
          <button className="flex items-center gap-3 p-3 w-full rounded-xl bg-red-500/20 hover:bg-red-500 transition shadow-sm hover:shadow-md">
            <div className="bg-white/10 p-2 rounded-lg">
              <LogOut className="h-5 w-5 text-white" />
            </div>
            <span className="font-medium">Logout</span>
          </button>
        </div>

      </aside>

      {/* MAIN AREA */}
      <div className="flex-1 flex flex-col w-full min-w-0 h-screen overflow-y-auto">

        {/* TOP BAR */}
        <header className="bg-white shadow px-4 py-3 flex items-center justify-between sticky top-0 z-40">

          {/* Mobile Menu */}
          <button onClick={() => setOpen(!open)} className="md:hidden">
            {open ? <X /> : <Menu />}
          </button>

          <h1 className="font-bold text-gray-700">
            Admin Dashboard
          </h1>

          {/* PROFILE ICON */}
          <button className="p-2 rounded-full hover:bg-gray-100">
            <UserCircle className="h-7 w-7 text-gray-600" />
          </button>

        </header>

        {/* CONTENT */}
        <main className="flex-1 p-4 md:p-6 flex flex-col justify-between">

          <div className="flex-1">
            {children}
          </div>

          {/* FOOTER */}
          <footer className="mt-6 text-center text-sm text-black py-4 border-t border-gray-200">
            © {new Date().getFullYear()} Nuru Njema Foundation
          </footer>

        </main>

      </div>

      {/* MOBILE OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 md:hidden z-40"
        />
      )}

    </div>
  );
}