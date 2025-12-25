import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        product: [
            { label: "Features", href: "#" },
            { label: "Pricing", href: "#" },
            { label: "Security", href: "#" },
        ],
        company: [
            { label: "About", href: "#" },
            { label: "Blog", href: "#" },
            { label: "Careers", href: "#" },
        ],
        legal: [
            { label: "Privacy", href: "#" },
            { label: "Terms", href: "#" },
            { label: "Contact", href: "#" },
        ],
    };

    return (
        <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 mt-20">
            <div className="container py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center text-white font-bold text-lg">
                                ⚡
                            </div>
                            <span className="font-bold text-lg gradient-text">NextHub</span>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">
                            Building amazing experiences with modern web technologies.
                        </p>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h4 className="font-semibold mb-4 text-slate-900 dark:text-slate-100">
                            Product
                        </h4>
                        <ul className="space-y-2">
                            {footerLinks.product.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="font-semibold mb-4 text-slate-900 dark:text-slate-100">
                            Company
                        </h4>
                        <ul className="space-y-2">
                            {footerLinks.company.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h4 className="font-semibold mb-4 text-slate-900 dark:text-slate-100">
                            Legal
                        </h4>
                        <ul className="space-y-2">
                            {footerLinks.legal.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                        © {currentYear} NextHub. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        <a
                            href="#"
                            className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-blue-900 flex items-center justify-center transition-colors"
                            title="Twitter"
                        >
                            𝕏
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-blue-900 flex items-center justify-center transition-colors"
                            title="GitHub"
                        >
                            ⚙️
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-blue-900 flex items-center justify-center transition-colors"
                            title="LinkedIn"
                        >
                            💼
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
