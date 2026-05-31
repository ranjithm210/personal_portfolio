"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "@/components/layout/Navbar";
import Spotlight from "@/components/animations/Spotlight";
import FloatingCard from "@/components/common/FloatingCard";
import { useRouter } from "next/navigation";
import { useChatbotStore } from "@/store/chatbotStore";
import AIChatbot from "@/components/common/AIChatbot";
import { Bot } from "lucide-react";
import CyberGrid from "@/components/hero/CyberGrid";
import Footer from "@/components/layout/Footer";

const Particles = dynamic(
    () => import("@/components/animations/Particles"),
    {
        ssr: false,
    }
);
export default function Home() {

    const router = useRouter();
    const { toggleChat } = useChatbotStore();

    return (
        <>
            <Navbar />

            <CyberGrid />

            <Spotlight />

            <main
                className="
                    relative
                    flex-grow
                    min-h-[calc(100vh-180px)]
                    overflow-hidden
                    bg-transparent
                    text-white
                    flex
                    items-center
                    justify-center
                "
            >
                {/* Background Glow */}
                <div
                    className="
                        absolute
                        top-[-200px]
                        left-[-200px]
                        h-[500px]
                        w-[500px]
                        rounded-full
                        bg-cyan-500/20
                        blur-3xl
                    "
                />

                <div
                    className="
                        absolute
                        bottom-[-200px]
                        right-[-200px]
                        h-[500px]
                        w-[500px]
                        rounded-full
                        bg-purple-500/20
                        blur-3xl
                    "
                />

                {/* Grid Background */}
                <div
                    className="
                        absolute
                        inset-0
                        bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]
                        bg-[size:40px_40px]
                    "
                />

                {/* Particles */}
                <Particles />

                {/* Main Content */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 40,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 1,
                    }}
                    className="
                        relative
                        z-10
                        text-center
                        px-6
                    "
                >
                    <motion.h1
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            delay: 0.2,
                            duration: 0.8,
                        }}
                        className="
                            text-6xl
                            md:text-8xl
                            font-black
                            leading-tight
                            tracking-tight
                        "
                    >
                        CYBER{" "}
                        <span
                            className="
                                bg-gradient-to-r
                                from-cyan-400
                                via-blue-500
                                to-purple-500
                                bg-clip-text
                                text-transparent
                            "
                        >
                            PORTFOLIO
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            delay: 0.5,
                            duration: 0.8,
                        }}
                        className="
                            mt-6
                            text-lg
                            md:text-2xl
                            text-gray-400
                            max-w-2xl
                            mx-auto
                        "
                    >
                        Building futuristic digital experiences
                        with cinematic UI engineering.
                    </motion.p>

                    <motion.button
                        onClick={() => router.push("/portfolio")}
                        whileHover={{
                            scale: 1.05,
                        }}
                        whileTap={{
                            scale: 0.95,
                        }}
                        className="
                            group
                            mt-10
                            inline-flex
                            items-center
                            gap-3
                            rounded-full
                            border
                            border-cyan-400/30
                            bg-cyan-500/10
                            px-8
                            py-4
                            text-lg
                            font-semibold
                            backdrop-blur-xl
                            transition-all
                            duration-300
                            hover:border-cyan-400
                            hover:bg-cyan-500/20
                            hover:shadow-[0_0_40px_rgba(34,211,238,0.5)]
                        "
                    >
                        Enter Portfolio

                        <FaArrowRight
                            className="
                                transition-transform
                                duration-300
                                group-hover:translate-x-1
                            "
                        />
                    </motion.button>
                    <div
                        className=" mt-20
                                    grid
                                    grid-cols-1
                                    gap-6
                                    md:grid-cols-3
                                                   "
                    >
                        <FloatingCard
                            title="Projects"
                            value="12+"
                        />

                        <FloatingCard
                            title="Experience"
                            value="Frontend Engineer"
                        />

                        <FloatingCard
                            title="Tech Stack"
                            value="Next.js AI UI"
                        />
                    </div>

                </motion.div>
            </main>

            {/* AI ASSISTANT */}
            <div
                className="
                    fixed
                    bottom-6
                    right-6
                    z-50
                "
            >
                <button
                    onClick={toggleChat}
                    className="
                        group
                        flex
                        items-center
                        gap-3
                        rounded-full
                        border
                        border-cyan-400/30
                        bg-cyan-500/10
                        px-6
                        py-4
                        text-white
                        backdrop-blur-2xl
                        transition-all
                        duration-300
                        hover:scale-105
                        hover:border-cyan-400
                        hover:bg-cyan-500/20
                        hover:shadow-[0_0_40px_rgba(34,211,238,0.5)]
                    "
                >
                    <div
                        className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-full
                            bg-cyan-400/20
                            text-cyan-400
                        "
                    >
                        <Bot size={22} />
                    </div>

                    <div className="text-left">
                        <p
                            className="
                                text-xs
                                uppercase
                                tracking-widest
                                text-cyan-400
                            "
                        >
                            AI Assistant
                        </p>

                        <h3
                            className="
                                text-sm
                                font-semibold
                            "
                        >
                            Ask About Ranjith
                        </h3>
                    </div>
                </button>
            </div>

            <Footer />

            <AIChatbot />
        </>
    );
}
