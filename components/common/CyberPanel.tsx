"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import {
    Shield,
    Cpu,
    Activity,
    Database,
} from "lucide-react";

const defaultPanelItems = [
    {
        icon: Shield,
        title: "Security Layer",
        value: "ACTIVE",
    },
    {
        icon: Cpu,
        title: "AI Processing",
        value: "98%",
    },
    {
        icon: Database,
        title: "Data Streams",
        value: "128",
    },
    {
        icon: Activity,
        title: "System Health",
        value: "OPTIMAL",
    },
];

interface PanelItem {
    icon: LucideIcon;
    title: string;
    value: string;
}

interface CyberPanelProps {
    title?: string;
    subtitle?: string;
    description?: string;
    items?: PanelItem[];
}

export default function CyberPanel({
    title = "Control Panel",
    subtitle = "Cyber Security",
    description,
    items = defaultPanelItems,
}: CyberPanelProps) {
    return (
        <motion.div
            initial="initial"
            whileHover="hover"
            variants={{
                initial: {
                    opacity: 0,
                    y: 40,
                },
                animate: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.8,
                    }
                },
                hover: {
                    scale: 1.05,
                    y: -10,
                    borderColor: "rgba(34, 211, 238, 0.5)",
                    boxShadow: "0 0 50px rgba(34, 211, 238, 0.3)",
                }
            }}
            animate="animate"
            className="
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-cyan-400/20
                bg-white/5
                p-6
                backdrop-blur-2xl
                shadow-[0_0_60px_rgba(34,211,238,0.15)]
                cursor-pointer
                transition-colors
                duration-300
                hover:bg-white/10
            "
        >
            {/* Glow */}
            <div
                className="
                    absolute
                    right-[-100px]
                    top-[-100px]
                    h-[200px]
                    w-[200px]
                    rounded-full
                    bg-cyan-500/20
                    blur-3xl
                "
            />

            <div
                className="
                    relative
                    z-10
                    space-y-4
                "
            >
                <div>
                    <p
                        className="
                            text-sm
                            uppercase
                            tracking-[0.3em]
                            text-cyan-400
                        "
                    >
                        {subtitle}
                    </p>

                    <h2
                        className="
                            mt-2
                            text-3xl
                            font-black
                            text-white
                        "
                    >
                        {title}
                    </h2>
                </div>

                {/* Hover Reveal Information */}
                <motion.div
                    variants={{
                        initial: {
                            opacity: 0,
                            height: 0,
                            overflow: "hidden",
                        },
                        hover: {
                            opacity: 1,
                            height: "auto",
                            overflow: "visible",
                            transition: {
                                duration: 0.4,
                                ease: "easeInOut",
                            }
                        }
                    }}
                    className="space-y-4"
                >
                    {description && (
                        <p className="text-gray-300 text-sm leading-relaxed">
                            {description}
                        </p>
                    )}

                    <div className="grid gap-3 pt-2">
                        {items.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={index}
                                    whileHover={{
                                        scale: 1.02,
                                    }}
                                    className="
                                        flex
                                        items-center
                                        justify-between
                                        rounded-2xl
                                        border
                                        border-white/10
                                        bg-black/30
                                        px-5
                                        py-3
                                        backdrop-blur-xl
                                    "
                                >
                                    <div className="flex items-center gap-4">
                                        <div
                                            className="
                                                rounded-xl
                                                bg-cyan-500/10
                                                p-2
                                                text-cyan-400
                                            "
                                        >
                                            <Icon size={18} />
                                        </div>

                                        <div>
                                            <p
                                                className="
                                                    text-xs
                                                    text-gray-400
                                                "
                                            >
                                                {item.title}
                                            </p>

                                            <h3
                                                className="
                                                    text-sm
                                                    font-bold
                                                    text-white
                                                "
                                            >
                                                {item.value}
                                            </h3>
                                        </div>
                                    </div>

                                    <div
                                        className="
                                            h-2
                                            w-2
                                            rounded-full
                                            bg-cyan-400
                                            shadow-[0_0_20px_rgba(34,211,238,1)]
                                        "
                                    />
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}