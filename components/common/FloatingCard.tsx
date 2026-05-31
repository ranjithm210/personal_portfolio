"use client";

import { motion } from "framer-motion";

type FloatingCardProps = {
    title: string;
    value: string;
};

export default function FloatingCard({
    title,
    value,
}: FloatingCardProps) {
    return (
        <motion.div
            animate={{
                y: [0, -10, 0],
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
            }}
            className="
                rounded-3xl
                border
                border-cyan-400/20
                bg-white/5
                backdrop-blur-xl
                p-6
                shadow-[0_0_40px_rgba(34,211,238,0.15)]
            "
        >
            <p
                className="
                    text-sm
                    uppercase
                    tracking-widest
                    text-cyan-400
                "
            >
                {title}
            </p>

            <h2
                className="
                    mt-3
                    text-3xl
                    font-black
                    text-white
                "
            >
                {value}
            </h2>
        </motion.div>
    );
}