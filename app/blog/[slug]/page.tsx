"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Calendar, User, ArrowLeft } from "lucide-react";

type Blog = {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  slug?: string;
  createdAt?: string;
};

export default function BlogPostPage() {
  const params = useParams();

  const paramValue = (params?.slug || params?.id) as string;

  const [post, setPost] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/blogs");
        const blogs: Blog[] = res.data;

        const current = blogs.find(
          (b) => b.slug === paramValue || String(b.id) === paramValue
        );

        setPost(current || null);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [paramValue]);

  if (loading)
    return <p className="p-10 text-center text-gray-500">Loading...</p>;

  if (!post) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-xl font-bold">Blog not found</h2>
        <Link href="/blog" className="text-cyan-600">
          Go back
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">

      {/* BACK */}
      <div className="max-w-5xl mx-auto px-4 pt-8">
        <Link
          href="/blog"
          className="inline-flex items-center text-cyan-600 hover:text-cyan-700"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blogs
        </Link>
      </div>

      {/* TITLE */}
      <div className="max-w-5xl mx-auto px-4 text-center mt-6">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          {post.title}
        </h1>

        {/* META */}
        <div className="flex flex-wrap justify-center gap-6 text-gray-500 mt-4 text-sm">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            Nuru Njema Team
          </div>

          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {post.createdAt
              ? new Date(post.createdAt).toDateString()
              : new Date().toDateString()}
          </div>
        </div>
      </div>

      {/* IMAGE */}
      <div className="max-w-5xl mx-auto px-4 mt-8">
        <img
          src={post.image}
          className="w-full h-[250px] md:h-[450px] object-cover rounded-2xl shadow-lg"
        />
      </div>

      {/* CONTENT */}
      <div className="max-w-3xl mx-auto px-6 md:px-4 py-12">
        <div
          className="text-[18px] leading-8 text-gray-800 text-justify"
          style={{
            fontFamily: "Times New Roman, serif",
          }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  );
}