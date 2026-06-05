"use client";

import { useState } from "react";
import { Pencil, Trash2, FileText, Search } from "lucide-react";
import Link from "next/link";

type Blog = {
  id: number;
  title: string;
  content: string;
  date: string;
};

export default function BlogListPage() {
  const [blogs, setBlogs] = useState<Blog[]>([
    {
      id: 1,
      title: "Helping Children in Need",
      content: "Sample content...",
      date: "2026-06-05",
    },
    {
      id: 2,
      title: "Community Update",
      content: "Another blog...",
      date: "2026-06-04",
    },
  ]);

  const [search, setSearch] = useState("");

  // DELETE
  const handleDelete = (id: number) => {
    const confirmDelete = confirm("Delete this blog?");
    if (confirmDelete) {
      setBlogs(blogs.filter((b) => b.id !== id));
    }
  };

  // FILTER LOGIC (DATATABLE CORE)
  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto">

      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">

        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Blog List
          </h1>
          <p className="text-gray-500">
            Manage all blog posts
          </p>
        </div>

        <Link
          href="/auth/admin-dashboard/blogs/create"
          className="bg-cyan-600 text-white px-4 py-2 rounded-xl hover:bg-cyan-700"
        >
          + New Blog
        </Link>
      </div>

      {/* SEARCH BAR */}
      <div className="mb-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />

          <input
            type="text"
            placeholder="Search blog by title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border rounded-xl pl-10 pr-4 py-2 focus:ring-2 focus:ring-cyan-500 outline-none"
          />
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white border rounded-2xl overflow-hidden shadow-sm">

        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left">Title</th>
              <th className="p-4 text-left">Date</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredBlogs.map((blog) => (
              <tr key={blog.id} className="border-t hover:bg-gray-50">

                {/* TITLE */}
                <td className="p-4 flex items-center gap-2">
                  <FileText className="h-4 w-4 text-cyan-600" />
                  {blog.title}
                </td>

                {/* DATE */}
                <td className="p-4 text-gray-600">
                  {blog.date}
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
                      onClick={() => handleDelete(blog.id)}
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
        {filteredBlogs.length === 0 && (
          <div className="text-center py-10 text-gray-500">
            No blogs found
          </div>
        )}

      </div>
    </div>
  );
}