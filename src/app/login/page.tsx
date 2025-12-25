"use client";

import { useState } from "react";


export default function LoginPage() {
    const [form, setForm] = useState({ email: "", password: "" });

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.email || !form.password) {
            alert("Missing fields");
            return;
        }
    }

    return (
        <div className="min-h-screen py-12 px-4 bg-linear-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
            <div className="container max-w-6xl">

                <form onSubmit={onSubmit} className="space-y-4">
                    <input
                        className="border p-2 w-full"
                        placeholder="Email"
                        value={form.email}
                        onChange={e =>
                            setForm({ ...form, email: e.target.value })
                        }
                    />

                    <input
                        className="border p-2 w-full"
                        placeholder="Password"
                        type="password"
                        value={form.password}
                        onChange={e =>
                            setForm({ ...form, password: e.target.value })
                        }
                    />

                    <button className="bg-blue-500 text-white px-4 py-2">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}