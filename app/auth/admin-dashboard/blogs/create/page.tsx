"use client";

import { useState } from "react";
import { ImagePlus, FileText, Send } from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";

export default function BlogsPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handlePublish = async () => {
    if (!title || !content) {
      toast.error("❌ Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);

      if (image) {
        formData.append("image", image);
      }

      const res = await axios.post(
        "http://localhost:5000/api/blogs",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success(res.data.message || "🎉 Blog published successfully!");

      setTitle("");
      setContent("");
      setImage(null);
    } catch (error: any) {
      console.log(error);

      toast.error(
        error?.response?.data?.message || "❌ Failed to publish blog"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6">

      {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Blog Management
        </h1>
        <p className="text-gray-500 mt-2">
          Create and publish blog articles for Nuru Njema Foundation.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* FORM */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-md border p-8">

            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <FileText className="h-5 w-5 text-cyan-600" />
              Create New Blog
            </h2>

            <div className="space-y-6">

              {/* TITLE */}
              <input
                type="text"
                placeholder="Enter blog title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border rounded-xl px-4 py-3"
              />

              {/* CONTENT */}
              <textarea
                rows={14}
                placeholder="Write your article here..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full border rounded-xl px-4 py-3"
              />

              {/* IMAGE */}
              <div>
                <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-2xl p-8 cursor-pointer hover:border-cyan-500">

                  <ImagePlus className="h-10 w-10 text-gray-400 mb-2" />

                  <span className="text-sm text-gray-600">
                    {image ? image.name : "Click to upload image"}
                  </span>

                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        setImage(e.target.files[0]);
                      }
                    }}
                  />
                </label>
              </div>

              {/* BUTTON */}
              <button
                onClick={handlePublish}
                disabled={loading}
                className="w-full px-6 py-3 rounded-xl bg-cyan-600 text-white"
              >
                <Send className="inline w-4 h-4 mr-2" />
                {loading ? "Publishing..." : "Publish Blog"}
              </button>

            </div>
          </div>
        </div>

        {/* PREVIEW */}
        <div className="hidden lg:block">
          <div className="bg-white p-6 rounded-2xl border sticky top-24">

            <h3 className="font-bold mb-3">Preview</h3>

            <p className="text-xs text-gray-500">TITLE</p>
            <p className="font-bold mb-3">{title || "..."}</p>

            <p className="text-xs text-gray-500">CONTENT</p>
            <p className="text-sm">{content || "..."}</p>

            {image && (
              <img
                src={URL.createObjectURL(image)}
                className="mt-4 rounded-xl"
              />
            )}
          </div>
        </div>

      </div>
    </div>
  );
}