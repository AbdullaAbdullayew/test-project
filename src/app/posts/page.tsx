'use client';

import { fetchPost } from "@/src/lib/api";
import { Post } from "@/src/types/post";
import { useEffect, useState } from "react";
import Loading from "./loading";
import Error from "./error";

export default function PostsPage() {
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        async function loadData() {
            try {
                setLoading(true);
                const postsData = await fetchPost();
                setPosts(postsData);
            } catch (err) {
                setError(`Failed to load data with :${err}. Please try again.`)
            } finally {
                setLoading(false)
            }
        }
        loadData()
    }, []);

    if (error) return <Error reset={() => { setError(null); window.location.reload(); }} />;
    if (loading) return <Loading />;

    return (
        <main className="min-h-screen py-12 px-4">
            <div className="container max-w-4xl">
                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-4xl font-bold mb-4">Latest Posts</h1>
                    <p className="text-slate-600 dark:text-slate-400 text-lg">
                        Discover insightful articles and updates from our community.
                    </p>
                </div>

                {/* Posts Grid */}
                {posts.length > 0 ? (
                    <div className="grid gap-6">
                        {posts.map((post, index) => (
                            <article
                                key={post.id}
                                className="card group cursor-pointer fade-in"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* Post Number Badge */}
                                <div className="inline-block mb-4 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-semibold">
                                    Post #{post.id}
                                </div>

                                {/* Title */}
                                <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-slate-100 group-hover:gradient-text transition-all">
                                    {post.title}
                                </h2>

                                {/* Excerpt */}
                                <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                                    {post.body}
                                </p>

                                {/* Meta Info */}
                                <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
                                    <span className="text-sm text-slate-500 dark:text-slate-500">
                                        By User {post.userId}
                                    </span>
                                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform">
                                        Read More →
                                    </span>
                                </div>
                            </article>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12">
                        <p className="text-slate-600 dark:text-slate-400 text-lg">
                            No posts found.
                        </p>
                    </div>
                )}

                {/* Stats */}
                {posts.length > 0 && (
                    <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
                        <div className="flex justify-center">
                            <div className="text-center">
                                <div className="text-4xl font-bold gradient-text mb-2">
                                    {posts.length}
                                </div>
                                <p className="text-slate-600 dark:text-slate-400">
                                    Total Posts Available
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}
