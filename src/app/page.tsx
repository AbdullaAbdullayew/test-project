import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center py-20 px-4">
        <div className="container max-w-4xl text-center">
          {/* Badge */}
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold">
            ✨ Welcome to NextHub
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Build Amazing Web
            <br />
            <span className="gradient-text">Experiences</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            A modern Next.js application showcasing best practices, beautiful UI components, and seamless user experiences. Powered by React 19 and styled with Tailwind CSS.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/posts" className="btn btn-primary">
              Explore Posts
            </Link>
            <Link href="/dashboard" className="btn btn-secondary">
              View Dashboard
            </Link>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {[
              {
                icon: "⚡",
                title: "Lightning Fast",
                description: "Built with Next.js 16 for optimal performance and speed.",
              },
              {
                icon: "🎨",
                title: "Beautiful Design",
                description: "Modern, responsive UI with smooth animations and transitions.",
              },
              {
                icon: "🔧",
                title: "Developer Friendly",
                description: "Clean code structure and TypeScript support for type safety.",
              },
            ].map((feature) => (
              <div key={feature.title} className="card text-left fade-in">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-slate-100">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-linear-to-r from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-800 py-16 px-4">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: "100+", label: "Components" },
              { number: "50+", label: "Pages" },
              { number: "10K+", label: "Happy Users" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <p className="text-slate-600 dark:text-slate-400 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4">
        <div className="container max-w-3xl text-center card gradient-bg text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8 opacity-95">
            Explore our dashboard to see what you can build with NextHub.
          </p>
          <Link
            href="/dashboard"
            className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-slate-100 transition-colors"
          >
            Launch Dashboard →
          </Link>
        </div>
      </section>
    </main>
  );
}
