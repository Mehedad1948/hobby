"use client"; // Required if using Next.js App Router

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navbar() {
    const pathname = usePathname();

    const links = [
        { path: "/", label: "Home" },
        { path: "/about", label: "About us" },
        { path: "#developer", label: "Developer access" },
        { path: "#transparency", label: "Transparency" },
    ];

    return (
        <nav className="hidden text-sm font-normal md:flex items-center gap-8">
            {links.map((link) => {
                const isActive = pathname === link.path;

                return (
                    <Link
                        key={link.path}
                        href={link.path}
                        className={`relative px-1 py-2 transition-colors ${isActive ? "text-secondary-main font-medium" : "text-white hover:text-gray-300"
                            }`}
                    >
                        {/* The Link Text */}
                        {link.label}

                        {/* The Animated Top Bar */}
                        {isActive && (
                            <motion.div
                                layoutId="active-nav-indicator"
                                className="absolute w-4 mx-auto left-0 right-0 -top-2 h-[2px] bg-secondary-main"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            />
                        )}
                    </Link>
                );
            })}
        </nav>
    );
}
