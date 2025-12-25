"use client";

export default function Error({
    reset,
}: {
    reset: () => void;
}) {
    return (
        <main className="min-h-screen flex items-center justify-center px-4">
            <div className="container max-w-md">
                <div className="card text-center">
                    {/* Error Icon */}
                    <div className="text-6xl mb-4">⚠️</div>
                    
                    <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-slate-100">
                        Something went wrong!
                    </h2>
                    
                    <p className="text-slate-600 dark:text-slate-400 mb-6">
                        We encountered an error while loading the posts. Please try again or contact support if the problem persists.
                    </p>
                    
                    <button
                        onClick={reset}
                        className="btn btn-primary w-full"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        </main>
    );
}
