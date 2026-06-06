"use client";

import { useEffect, useState } from "react";
import Navigation from "@/components/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import Link from "next/link";
import axios from "axios";

type Blog = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  slug: string;
  category?: string;
  createdAt?: string;
};

export default function BlogPage() {
  const [blogPosts, setBlogPosts] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/blogs");
        setBlogPosts(res.data);
      } catch (error) {
        console.log("Error loading blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1);

  return (
    <div className="min-h-screen bg-white">

      {/* HERO SECTION */}
      <section className="relative py-20">
        <div className="absolute inset-0">
          <img
            src="/images/23.jpeg"
            alt="Blogs"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-serif font-black text-white mb-6">
            Our <span className="text-cyan-400">Blogs</span>
          </h1>

          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Discover stories, insights, and digital transformation journeys.
          </p>
        </div>
      </section>

      {/* FEATURED POST */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-3xl font-bold mb-8">Featured Story</h2>

          {loading ? (
            <p>Loading featured blog...</p>
          ) : featuredPost ? (
            <Card className="overflow-hidden shadow-xl">
              <div className="grid lg:grid-cols-2">

                <img
                  src={featuredPost.image}
                  className="w-full h-full object-cover"
                />

                <div className="p-8 flex flex-col justify-between">

                  <div>
                    <CardTitle className="text-2xl mb-4">
                      {featuredPost.title}
                    </CardTitle>

                    <p className="text-gray-600 mb-6">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex gap-4 text-sm text-gray-500 mb-6">
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        Admin
                      </span>

                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date().toLocaleDateString()}
                      </span>

                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        5 min read
                      </span>
                    </div>
                  </div>

                  <Link href={`/blogs/${featuredPost.slug}`}>
                    <Button className="bg-cyan-600 hover:bg-cyan-700">
                      Read Full Story
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>

                </div>
              </div>
            </Card>
          ) : (
            <p>No blogs found.</p>
          )}
        </div>
      </section>

      {/* RECENT POSTS */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-2xl font-bold mb-8">Recent Blogs</h2>

          {loading ? (
            <p>Loading blogs...</p>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">

              {recentPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-xl transition">
                  <img
                    src={post.image}
                    className="h-48 w-full object-cover"
                  />

                  <CardHeader>
                    <CardTitle className="text-lg">
                      {post.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-gray-600 text-sm mb-4">
                      {post.excerpt}
                    </p>

                    <Link href={`/blogs/${post.slug}`}>
                      <Button variant="link" className="text-cyan-600 p-0">
                        Read More →
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}

            </div>
          )}

        </div>
      </section>

    </div>
  );
}