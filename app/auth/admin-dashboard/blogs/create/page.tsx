"use client";

import { useState } from "react";
import { ImagePlus, FileText, Send } from "lucide-react";

export default function BlogsPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Blog Management
        </h1>
        <p className="text-gray-500 mt-2">
          Create and publish blog articles for Nuru Njema Foundation.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Form Section */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-sm border p-6">
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <FileText className="h-5 w-5 text-cyan-600" />
              Create New Blog
            </h2>

            <div className="space-y-5">
              {/* Title */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Blog Title
                </label>
                <input
                  type="text"
                  placeholder="Enter blog title..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              {/* Content */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Blog Content
                </label>
                <textarea
                  rows={12}
                  placeholder="Write your article here..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full border rounded-xl px-4 py-3 resize-none outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>

              {/* Image Upload */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Featured Image (Optional)
                </label>

                <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-2xl p-8 cursor-pointer hover:border-cyan-500 transition">
                  <ImagePlus className="h-12 w-12 text-gray-400 mb-3" />

                  <span className="text-gray-600 font-medium">
                    Click to upload image
                  </span>

                  <span className="text-sm text-gray-400 mt-1">
                    PNG, JPG, JPEG
                  </span>

                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                  />
                </label>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  className="px-6 py-3 rounded-xl bg-gray-200 hover:bg-gray-300 transition"
                >
                  Save Draft
                </button>

                <button
                  type="button"
                  className="px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white transition flex items-center justify-center gap-2"
                >
                  <Send className="h-4 w-4" />
                  Publish Blog
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Preview/Stats Section */}
        <div>
          <div className="bg-white rounded-2xl shadow-sm border p-6 sticky top-24">
            <h3 className="font-semibold text-lg mb-4">
              Blog Preview
            </h3>

            <div className="space-y-4">
              <div>
                <p className="text-xs text-gray-500 mb-1">
                  TITLE
                </p>

                <h4 className="font-bold text-gray-800">
                  {title || "Your blog title will appear here"}
                </h4>
              </div>

              <div>
                <p className="text-xs text-gray-500 mb-1">
                  CONTENT PREVIEW
                </p>

                <p className="text-sm text-gray-600 line-clamp-6">
                  {content ||
                    "Start writing your article to see a preview here."}
                </p>
              </div>

              <div className="pt-4 border-t">
                <div className="flex justify-between text-sm">
                  <span>Characters</span>
                  <span>{content.length}</span>
                </div>

                <div className="flex justify-between text-sm mt-2">
                  <span>Words</span>
                  <span>
                    {
                      content
                        .trim()
                        .split(/\s+/)
                        .filter(Boolean).length
                    }
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>      
    </div>
  );
}