"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import {
    ArrowLeft,
    Bot,
    Cpu,
    Terminal,
    Database,
    Shield,
    Zap,
    Globe,
    Code,
    Menu,
    X,
    ArrowUpRight,
} from "lucide-react";

import { useRouter } from "next/navigation";
import Image from "next/image";
import CyberPanel from "@/components/common/CyberPanel";
import { useChatbotStore } from "@/store/chatbotStore";
import AIChatbot from "@/components/common/AIChatbot";
import CyberGrid from "@/components/hero/CyberGrid";
import Footer from "@/components/layout/Footer";



const projects = [
    {
        title: "Aether AI Platform",
        subtitle: "Neural Networks & LLMs",
        description: "A decentralized machine learning agent framework orchestrating autonomous AI workers for complex data analysis workflows.",
        items: [
            { icon: Cpu, title: "LLM Orchestration", value: "Active Agents" },
            { icon: Terminal, title: "Query Latency", value: "85ms Avg" },
            { icon: Database, title: "Data Ingestion", value: "4.8 TB/day" },
        ],
    },
    {
        title: "Specter DeFi Hub",
        subtitle: "Blockchain Protocols",
        description: "A secure multichain yield aggregator leveraging automated smart contracts for real-time portfolio optimization and liquidity mining.",
        items: [
            { icon: Shield, title: "Audited Smart Contract", value: "100% Secure" },
            { icon: Zap, title: "Gas Efficiency", value: "Save 42%" },
            { icon: Globe, title: "Connected Networks", value: "14 Chains" },
        ],
    },
    {
        title: "Neon Sentinel",
        subtitle: "Threat Intelligence & Cyber Defense",
        description: "An advanced cloud monitoring dashboard streaming real-time security anomalies and automated attack mitigation triggers.",
        items: [
            { icon: Shield, title: "IDS Engine", value: "Active Monitoring" },
            { icon: Code, title: "Alert Response Time", value: "< 2 Seconds" },
            { icon: Database, title: "Log Index Rate", value: "250k events/s" },
        ],
    },
];

export default function PortfolioPage() {
    const [menuOpen, setMenuOpen] = useState(false);

    const router = useRouter();
    const { toggleChat } = useChatbotStore();

    return (

        <main
            className="
                min-h-screen
                overflow-hidden
                bg-transparent
                text-white
            "
        >
            <CyberGrid />
            {/* MENU BUTTON */}
            <div
                className="
                    fixed
                    right-6
                    top-6
                    z-50
                "
            >
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="
                        flex
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/10
                        bg-white/5
                        w-12
                        h-12
                        text-white
                        backdrop-blur-xl
                        transition-all
                        duration-300
                        hover:border-cyan-400/30
                        hover:bg-cyan-500/10
                    "
                >
                    {menuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* FLOATING MENU CARD OVERLAY */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setMenuOpen(false)}
                        className="
                            fixed
                            inset-0
                            z-40
                            flex
                            items-center
                            justify-center
                            p-4
                            bg-black/75
                            backdrop-blur-md
                        "
                    >
                        <motion.div
                            initial={{ scale: 0.95, y: 15, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.95, y: 15, opacity: 0 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            onClick={(e) => e.stopPropagation()}
                            className="
                                w-full
                                max-w-[1020px]
                                bg-[#070707]
                                border
                                border-white/10
                                rounded-[32px]
                                p-6
                                md:p-8
                                flex
                                flex-col
                                md:flex-row
                                gap-8
                                relative
                                shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)]
                            "
                        >
                            {/* LEFT COLUMN: VISUAL CARDS */}
                            <div className="flex-1 flex flex-col gap-6">
                                {/* NIKE COLLABORATION CARD */}
                                <div className="bg-white text-black rounded-[24px] p-6 relative overflow-hidden flex flex-col justify-between h-[215px] shadow-lg select-none">
                                    <div>
                                        <svg className="w-12 h-6" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M21 6.5c-2.3 1.8-6.1 4.5-9.3 6.3-2.6 1.5-5 2.5-7.2 2.9-1.2.2-2.1.1-2.5-.2-.3-.2-.3-.6 0-1.1.5-1 1.7-2.6 3.6-4.6 2-2.1 4.5-4.4 7.2-6.4 1.1-.8 2.2-1.5 3.3-2.1.3-.2.6-.2.8 0 .1.1.1.3 0 .5-1.1 1.7-2.6 3.8-4.2 5.9-1.3 1.7-2.6 3.4-3.7 4.9.9-.4 2.1-1.1 3.5-2 3.1-1.9 6.8-4.4 9.1-6.1.4-.3.8-.4.9-.2.2.2 0 .6-.3.8z"/>
                                        </svg>
                                    </div>
                                    
                                    <div className="absolute -right-4 top-2 w-[240px] h-[160px] pointer-events-none">
                                        <Image
                                            src="/nike_shoe.png"
                                            alt="Nike Sneaker Collaboration"
                                            fill
                                            priority
                                            draggable={false}
                                            className="object-contain rotate-[-15deg]"
                                        />
                                    </div>

                                    <h4 className="text-xl md:text-2xl font-black tracking-tight text-black max-w-[200px] leading-tight">
                                        Collaborated on www.nike.in
                                    </h4>
                                </div>

                                {/* MEDIUM LOGO CARD */}
                                <div className="bg-gradient-to-br from-[#c83e1c] to-[#601c0c] text-white rounded-[24px] p-6 relative overflow-hidden flex flex-col justify-between h-[215px] shadow-lg select-none">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.78 12.86c-.08.43-.37.79-.78.96l-3.3 1.32a1.2 1.2 0 01-.84 0l-3.3-1.32a1.2 1.2 0 01-.78-.96V9.14c0-.43.29-.79.78-.96l3.3-1.32c.27-.11.57-.11.84 0l3.3 1.32c.49.17.78.53.78.96v5.72z"/>
                                            </svg>
                                            <span className="font-serif font-black text-lg tracking-tight">Medium</span>
                                        </div>
                                        <span className="text-[10px] text-white/50 font-mono tracking-widest uppercase">@ranjith01</span>
                                    </div>

                                    <div className="space-y-1">
                                        <h4 className="text-lg md:text-xl font-bold tracking-tight leading-snug">
                                            I Taught Myself Everything. This Is Where It Started.
                                        </h4>
                                        <p className="text-xs text-white/70 font-light">
                                            I always wanted to be an archaeologist.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT COLUMN: LINKS LIST */}
                            <div className="w-full md:w-[360px] flex flex-col justify-center gap-2">
                                {[
                                    { label: "Home", action: () => { setMenuOpen(false); router.push("/"); } },
                                    { label: "About", action: () => {
                                        setMenuOpen(false);
                                        router.push("/about");
                                    }},
                                    { label: "Casestudies", action: () => {
                                        setMenuOpen(false);
                                        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                                    }},
                                    { label: "Stories", disabled: true },
                                    { label: "Articles", disabled: true },
                                    { label: "After Office Hours", disabled: true, note: "Coming Soon" },
                                    { label: "Download Resume", action: () => {
                                        setMenuOpen(false);
                                        window.open("#", "_blank", "noopener,noreferrer");
                                    }},
                                ].map((item, i) => (
                                    <div
                                        key={item.label}
                                        onClick={!item.disabled ? item.action : undefined}
                                        className={`
                                            group
                                            flex
                                            items-center
                                            justify-between
                                            border-b
                                            border-white/5
                                            py-3
                                            ${item.disabled ? "opacity-25 pointer-events-none" : "cursor-pointer"}
                                        `}
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="text-lg md:text-xl font-medium text-white group-hover:text-cyan-400 transition-colors duration-300">
                                                {item.label}
                                            </span>
                                            {item.note && (
                                                <span className="text-[8px] text-gray-500 uppercase tracking-widest bg-white/5 px-2 py-0.5 rounded">
                                                    {item.note}
                                                </span>
                                            )}
                                        </div>
                                        <ArrowUpRight className="text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" size={20} />
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* BACK BUTTON */}
            <div
                className="
                    fixed
                    left-6
                    top-6
                    z-50
                "
            >
                <button
                    onClick={() => router.push("/")}
                    className="
                        flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-white/10
                        bg-white/5
                        px-5
                        py-3
                        text-sm
                        font-medium
                        text-white
                        backdrop-blur-xl
                        transition-all
                        duration-300
                        hover:border-cyan-400/30
                        hover:bg-cyan-500/10
                    "
                >
                    <ArrowLeft size={18} />

                    Back
                </button>
            </div>

            {/* HERO SECTION */}
            <section
                className="
                    relative
                    flex
                    min-h-screen
                    items-center
                    justify-center
                    px-6
                "
            >
                {/* GLOW */}
                <div
                    className="
                        absolute
                        left-[-200px]
                        top-[-200px]
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
                        max-w-5xl
                        text-center
                    "
                >
                    <p
                        className="
                            mb-4
                            text-sm
                            uppercase
                            tracking-[0.4em]
                            text-cyan-400
                        "
                    >
                        Welcome To My World
                    </p>

                    <h1
                        className="
                            text-5xl
                            font-black
                            leading-tight
                            md:text-8xl
                        "
                    >
                        Hi, I'm{" "}
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
                            Ranjith
                        </span>
                    </h1>

                    <p
                        className="
                            mx-auto
                            mt-8
                            max-w-3xl
                            text-lg
                            leading-relaxed
                            text-gray-400
                            md:text-2xl
                        "
                    >
                        Frontend Engineer passionate
                        about cinematic UI engineering,
                        futuristic experiences,
                        AI-powered systems,
                        and immersive digital storytelling.
                    </p>
                </motion.div>
            </section>

            {/* ABOUT SECTION */}
            <section
                id="about"
                className="
                    relative
                    z-10
                    mx-auto
                    max-w-7xl
                    px-6
                    py-32
                "
            >
                <div
                    className="
                        grid
                        gap-16
                        lg:grid-cols-2
                    "
                >
                    {/* LEFT */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -40,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: 1,
                        }}
                    >
                        <p
                            className="
                                text-sm
                                uppercase
                                tracking-[0.3em]
                                text-cyan-400
                            "
                        >
                            About Me
                        </p>

                        <h2
                            className="
                                mt-4
                                text-4xl
                                font-black
                                md:text-6xl
                            "
                        >
                            Crafting Digital
                            Experiences With
                            Motion & Intelligence
                        </h2>
                    </motion.div>

                    {/* RIGHT */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 40,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: 1,
                        }}
                        className="
                            text-lg
                            leading-relaxed
                            text-gray-400
                        "
                    >
                        <p>
                            I specialize in building
                            futuristic web experiences
                            using modern frontend
                            technologies like Next.js,
                            React, Tailwind CSS,
                            Framer Motion,
                            and AI-powered
                            interaction systems.
                        </p>

                        <p className="mt-6">
                            My focus is creating
                            cinematic interfaces
                            that combine beautiful motion,
                            premium UI architecture,
                            immersive storytelling,
                            and scalable frontend engineering.
                        </p>
                    </motion.div>
                </div>

                <div className="mt-12 text-center">
                    <motion.button
                        onClick={() => router.push("/about")}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-white/10
                            bg-white/5
                            px-6
                            py-3
                            text-sm
                            font-medium
                            text-cyan-400
                            backdrop-blur-xl
                            transition-all
                            duration-300
                            hover:border-cyan-400/30
                            hover:bg-cyan-500/10
                        "
                    >
                        View More About Me
                    </motion.button>
                </div>

            </section>

            {/* PROJECTS SECTION */}
            <section
                id="projects"
                className="
                    relative
                    z-10
                    mx-auto
                    max-w-7xl
                    px-6
                    py-20
                "
            >
                <div className="mb-16">
                    <p
                        className="
                            text-sm
                            uppercase
                            tracking-[0.3em]
                            text-cyan-400
                        "
                    >
                        Portfolio Showcase
                    </p>

                    <h2
                        className="
                            mt-4
                            text-4xl
                            font-black
                            md:text-6xl
                        "
                    >
                        Featured Cyber Projects
                    </h2>
                </div>

                <div
                    className="
                        grid
                        grid-cols-1
                        gap-8
                        md:grid-cols-2
                        lg:grid-cols-3
                    "
                >
                    {projects.map((project, index) => (
                        <CyberPanel
                            key={index}
                            title={project.title}
                            subtitle={project.subtitle}
                            description={project.description}
                            items={project.items}
                        />
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-white/10
                            bg-white/5
                            px-6
                            py-3
                            text-sm
                            font-medium
                            text-cyan-400
                            backdrop-blur-xl
                            transition-all
                            duration-300
                            hover:border-cyan-400/30
                            hover:bg-cyan-500/10
                        "
                    >
                        View More Projects
                    </motion.button>
                </div>
            </section>


            {/* HOBBIES SECTION */}
            <section
                className="
                    relative
                    z-10
                    mx-auto
                    max-w-7xl
                    px-6
                    py-32
                "
            >
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 40,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 1,
                    }}
                    className="
                        rounded-[40px]
                        border
                        border-white/10
                        bg-white/5
                        p-12
                        backdrop-blur-2xl
                    "
                >
                    <p
                        className="
                            text-sm
                            uppercase
                            tracking-[0.3em]
                            text-cyan-400
                        "
                    >
                        Hobbies & Passion
                    </p>

                    <h2
                        className="
                            mt-4
                            text-4xl
                            font-black
                            md:text-6xl
                        "
                    >
                        Beyond Coding
                    </h2>

                    <div
                        className="
                            mt-12
                            grid
                            gap-6
                            md:grid-cols-2
                            lg:grid-cols-4
                        "
                    >
                        {[
                            "AI Exploration",
                            "Cinematic UI Design",
                            "Futuristic Interfaces",
                            "Creative Storytelling",
                        ].map((item) => (
                            <div
                                key={item}
                                className="
                                    rounded-3xl
                                    border
                                    border-cyan-400/20
                                    bg-black/40
                                    p-8
                                    text-center
                                    text-lg
                                    font-semibold
                                    text-white
                                "
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </section>

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
        </main>
    );
}