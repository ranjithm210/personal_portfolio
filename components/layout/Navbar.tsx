"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const navItems = [
    { label: "Home", href: "/", external: false },
    { label: "Portfolio", href: "/portfolio", external: false },
    { label: "Resume", href: "#", external: true },
];

export default function Navbar() {
    const router = useRouter();

    return (
        <motion.nav
            initial={{
                y: -80,
                opacity: 0,
            }}
            animate={{
                y: 0,
                opacity: 1,
            }}
            transition={{
                duration: 0.8,
            }}
            className="
        fixed
        top-0
        left-0
        z-50
        w-full
        border-b
        border-white/10
        bg-black/30
        backdrop-blur-xl
      "
        >
            <div
                className="
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          px-6
          py-4
        "
            >
                {/* Logo */}
                <motion.h1
                    onClick={() => router.push("/")}
                    whileHover={{
                        scale: 1.05,
                    }}
                    className="
            text-2xl
            font-black
            tracking-widest
            text-cyan-400
            drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]
            cursor-pointer
          "
                >
                    RANJITH
                </motion.h1>
 
                {/* Menu */}
                <div className="flex items-center gap-8">
                    {navItems.map((item) => (
                        <motion.button
                            key={item.label}
                            onClick={() => {
                                if (item.external) {
                                    window.open(item.href, "_blank", "noopener,noreferrer");
                                } else {
                                    router.push(item.href);
                                }
                            }}
                            whileHover={{
                                y: -2,
                            }}
                            className="
                relative
                text-sm
                uppercase
                tracking-wider
                text-gray-300
                transition-colors
                duration-300
                hover:text-cyan-400
                cursor-pointer
              "
                        >
                            {item.label}
 
                            <span
                                className="
                  absolute
                  left-0
                  -bottom-1
                  h-[2px]
                  w-0
                  bg-cyan-400
                  transition-all
                  duration-300
                  group-hover:w-full
                "
                            />
                        </motion.button>
                    ))}
                </div>
            </div>
        </motion.nav>
    );
}