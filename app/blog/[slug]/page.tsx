"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, User, ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import axios from "axios";
import { useParams } from "next/navigation";

type Blog = {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  slug: string;
  category: string;
  author?: string;
  readTime?: string;
  createdAt?: string;
};

export default function BlogPostPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const [post, setPost] = useState<Blog | null>(null);
  const [allPosts, setAllPosts] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/blogs");
        const blogs: Blog[] = res.data;

        const current = blogs.find((b) => b.slug === slug);

        setPost(current || null);
        setAllPosts(blogs);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (loading) {
    return (
      <div className="p-10 text-center text-gray-500">
        Loading article...
      </div>
    );
  }

  if (!post) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-xl font-bold">Blog not found</h2>
        <Link href="/blogs" className="text-cyan-600">
          Go back
        </Link>
      </div>
    );
  }

  const related = allPosts
    .filter((b) => b.category === post.category && b.slug !== post.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">

      {/* BACK BUTTON */}
      <div className="max-w-4xl mx-auto px-4 pt-10">
        <Link
          href="/blogs"
          className="inline-flex items-center text-cyan-600 hover:text-cyan-700 font-medium"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blogs
        </Link>
      </div>

      {/* HERO */}
      <section className="max-w-4xl mx-auto px-4 pt-8">
        <Badge className="bg-cyan-600 text-white mb-4">
          {post.category}
        </Badge>

        <h1 className="text-4xl md:text-5xl font-serif font-black text-gray-900 mb-6 leading-tight">
          {post.title}
        </h1>

        <p className="text-lg text-gray-600 mb-6">
          {post.excerpt}
        </p>

        {/* META */}
        <div className="flex flex-wrap gap-6 text-sm text-gray-500 mb-8">
          <span className="flex items-center gap-2">
            <User className="w-4 h-4" />
            {post.author || "Admin"}
          </span>

          <span className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {post.createdAt
              ? new Date(post.createdAt).toDateString()
              : new Date().toDateString()}
          </span>

          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            {post.readTime || "5 min read"}
          </span>
        </div>
      </section>

      {/* IMAGE */}
      <section className="max-w-4xl mx-auto px-4">
        <img
          src={post.image}
          className="w-full h-[300px] md:h-[450px] object-cover rounded-xl shadow-lg"
        />
      </section>

      {/* CONTENT */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        <div
          className="
            font-serif text-[18px] leading-8 text-gray-800
            space-y-6
          "
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-4">

            <h2 className="text-2xl font-bold mb-8">
              Related Articles
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {related.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <img
                    src={item.image}
                    className="h-40 w-full object-cover"
                  />

                  <CardContent className="p-4">
                    <h3 className="font-bold mb-2 line-clamp-2">
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                      {item.excerpt}
                    </p>

                    <Link href={`/blogs/${item.slug}`}>
                      <Button
                        variant="outline"
                        className="w-full text-cyan-600 border-cyan-600"
                      >
                        Read More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

          </div>
        </section>
      )}

    </div>
  );
}