export default function Dashboard() {
    const stats = [
        { icon: "📊", label: "Total Views", value: "12,543" },
        { icon: "👥", label: "Active Users", value: "2,389" },
        { icon: "📈", label: "Growth Rate", value: "+23.5%" },
        { icon: "⭐", label: "Rating", value: "4.8/5" },
    ];

    const recentActivity = [
        { title: "New post published", time: "2 hours ago", icon: "📝" },
        { title: "User milestone reached", time: "5 hours ago", icon: "🎉" },
        { title: "Performance improved", time: "1 day ago", icon: "⚡" },
        { title: "New feature deployed", time: "2 days ago", icon: "🚀" },
    ];

    return (
        <main className="min-h-screen py-12 px-4 bg-linear-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
            <div className="container max-w-6xl">
                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-4xl font-bold mb-3">Dashboard</h1>
                    <p className="text-slate-600 dark:text-slate-400 text-lg">
                        Welcome back! Here&apos;s your analytics overview.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {stats.map((stat, index) => (
                        <div key={stat.label} className="card fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="text-4xl mb-3">{stat.icon}</div>
                            <p className="text-slate-600 dark:text-slate-400 text-sm font-medium mb-1">
                                {stat.label}
                            </p>
                            <p className="text-3xl font-bold gradient-text">
                                {stat.value}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-3 gap-6">
                    {/* Chart Section */}
                    <div className="lg:col-span-2 card">
                        <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-slate-100">
                            Performance Overview
                        </h2>
                        <div className="w-full h-64 bg-linear-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-lg flex items-end justify-around p-4 gap-2">
                            {[65, 78, 72, 85, 92, 88, 95].map((height, i) => (
                                <div
                                    key={i}
                                    className="flex-1 bg-linear-to-t from-blue-600 to-blue-400 rounded-t-lg transition-all hover:from-blue-700 hover:to-blue-500"
                                    style={{ height: `${height}%` }}
                                />
                            ))}
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 text-sm mt-4 text-center">
                            Monthly performance trend
                        </p>
                    </div>

                    {/* Recent Activity */}
                    <div className="card">
                        <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-slate-100">
                            Recent Activity
                        </h2>
                        <div className="space-y-4">
                            {recentActivity.map((activity, index) => (
                                <div
                                    key={index}
                                    className="pb-4 border-b border-slate-200 dark:border-slate-700 last:border-b-0 last:pb-0"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-2xl">{activity.icon}</span>
                                        <div className="flex-1">
                                            <p className="font-semibold text-slate-900 dark:text-slate-100">
                                                {activity.title}
                                            </p>
                                            <p className="text-xs text-slate-500 dark:text-slate-500">
                                                {activity.time}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-12 card gradient-bg text-white text-center">
                    <h2 className="text-2xl font-bold mb-3">Ready to optimize further?</h2>
                    <p className="mb-6 opacity-95">
                        Check our documentation to learn about advanced features and integrations.
                    </p>
                    <button className="inline-block bg-white text-blue-600 font-semibold px-6 py-2 rounded-lg hover:bg-slate-100 transition-colors">
                        Learn More →
                    </button>
                </div>
            </div>
        </main>
    );
}