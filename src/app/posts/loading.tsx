export default function Loading() {
    return (
        <main className="min-h-screen flex items-center justify-center px-4">
            <div className="container max-w-4xl">
                <div className="text-center">
                    {/* Spinner */}
                    <div className="inline-block mb-6">
                        <div className="w-16 h-16 rounded-full border-4 border-slate-200 dark:border-slate-700 border-t-blue-600 dark:border-t-blue-400 animate-spin pulse-glow"></div>
                    </div>
                    <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-slate-100">
                        Loading Posts
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400">
                        Please wait while we fetch your content...
                    </p>
                </div>
            </div>
        </main>
    );
}
