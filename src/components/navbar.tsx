'use client';

import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/Button";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/posts", label: "Posts" },
        { href: "/dashboard", label: "Dashboard" },
    ];

    return (
        <nav className="sticky top-0 z-50 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="container flex items-center justify-between h-16">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-white font-bold text-lg">
                        ⚡
                    </div>
                    <span className="font-bold text-lg gradient-text hidden sm:block">
                        NextHub
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden flex flex-col gap-1.5 p-2"
                >
                    <span
                        className={`w-6 h-0.5 bg-slate-700 dark:bg-slate-300 transition-all ${isOpen ? "rotate-45 translate-y-2" : ""
                            }`}
                    ></span>
                    <span
                        className={`w-6 h-0.5 bg-slate-700 dark:bg-slate-300 transition-all ${isOpen ? "opacity-0" : ""
                            }`}
                    ></span>
                    <span
                        className={`w-6 h-0.5 bg-slate-700 dark:bg-slate-300 transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""
                            }`}
                    ></span>
                </button>

                {/* CTA Button */}
                <div className="hidden md:flex items-center gap-4">
                    <Button onClick={() => router.push("/dashboard")}>Get Started</Button>
                    <Button onClick={() => router.push("/login")}>Login</Button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
                    <div className="container py-4 flex flex-col gap-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium py-2"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="/dashboard"
                            className="btn btn-primary text-sm w-full text-center"
                            onClick={() => setIsOpen(false)}
                        >
                            Get Started
                        </Link>

                        <Link
                            href="/dashboard"
                            className="btn btn-primary text-sm w-full text-center"
                            onClick={() => setIsOpen(false)}
                        >
                            Login
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}