"use client";

import { useEffect, useState } from "react";
import { Trash2, FileText, Search } from "lucide-react";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";

type Blog = {
  id: number;
  title: string;
  content: string;
  image?: string;
  created_at?: string;
};

export default function BlogListPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // ✅ FETCH BLOGS
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/blogs");
        setBlogs(res.data);
      } catch (error) {
        console.log(error);
        toast.error("❌ Failed to load blogs");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  // ✅ DELETE BLOG (DATABASE + UI)
  const handleDelete = async (id: number) => {
    const confirmDelete = confirm("Are you sure you want to delete this blog?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:5000/api/blogs/${id}`);

      // remove from UI
      setBlogs((prev) => prev.filter((b) => b.id !== id));

      toast.success("🗑️ Blog deleted successfully");
    } catch (error: any) {
      console.log(error);

      toast.error(
        error?.response?.data?.message || "❌ Failed to delete blog"
      );
    }
  };

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto">

      {/* HEADER */}
      <div className="flex justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Blog List</h1>
          <p className="text-gray-500">Manage all blog posts</p>
        </div>

        <Link
          href="/auth/admin-dashboard/blogs/create"
          className="bg-cyan-600 text-white px-4 py-2 rounded-xl"
        >
          + New Blog
        </Link>
      </div>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search blog..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border p-2 rounded-xl mb-4"
      />

      {/* LOADING */}
      {loading ? (
        <p className="text-center py-10">Loading blogs...</p>
      ) : (
        <div className="bg-white border rounded-2xl overflow-hidden">

          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 text-left">Title</th>
                <th className="p-4 text-left">Content</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredBlogs.map((blog) => (
                <tr key={blog.id} className="border-t hover:bg-gray-50">

                  <td className="p-4 flex items-center gap-2">
                    <FileText className="h-4 w-4 text-cyan-600" />
                    {blog.title}
                  </td>

                  <td className="p-4 text-gray-600">
                    {blog.content.slice(0, 50)}...
                  </td>

                  <td className="p-4 text-center">

                    {/* DELETE ONLY */}
                    <button
                      onClick={() => handleDelete(blog.id)}
                      className="p-2 bg-red-100 rounded-lg hover:bg-red-200"
                    >
                      <Trash2 className="h-4 w-4 text-red-600" />
                    </button>

                  </td>

                </tr>
              ))}
            </tbody>
          </table>

          {filteredBlogs.length === 0 && (
            <div className="text-center py-10 text-gray-500">
              No blogs found
            </div>
          )}

        </div>
      )}
    </div>
  );
}