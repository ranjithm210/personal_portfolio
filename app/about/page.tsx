"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Github, Instagram, Linkedin, Star, Twitter } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Spotlight from "@/components/animations/Spotlight";

export default function AboutPage() {
    const router = useRouter();

    const experiences = [
        {
            role: "Lead Frontend Engineer",
            company: "Aether AI Platform",
            period: "Oct 2024 • Present • Remote",
            award: "Tech Innovator Award 2025",
            description: "Directing the production-level frontend engineering for a decentralized machine learning orchestration framework. Designed cinematic interfaces with high-end React patterns, interactive data streaming logs, and modular design tokens."
        },
        {
            role: "Senior React Developer",
            company: "Specter DeFi Hub",
            period: "Apr 2023 • Sept 2024 • Hybrid",
            description: "Architected real-time dashboards for complex multichain yield pools and protocol optimizations. Improved page speeds and reduced load times by implementing dynamic route chunks and strict asset caching rules."
        }
    ];

    const skills = [
        "React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion",
        "Three.js", "WebGL", "UX Engineering", "Design Systems",
        "State Management", "Performance Tuning", "AI Orchestration"
    ];

    return (
        <main className="min-h-screen bg-black text-white relative font-sans selection:bg-cyan-500/20">
            {/* SUBTLE AMBER SIDE GLOW */}
            <div className="absolute left-0 top-0 h-[600px] w-[500px] bg-[#4d3d2c]/10 blur-[150px] pointer-events-none z-0" />
            <Spotlight />

            {/* HEADER NAVIGATION */}
            <header className="relative z-10 max-w-[1650px] mx-auto px-8 md:px-20 lg:px-28 py-8 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-bold text-white text-sm font-mono">
                        R
                    </div>
                    <div>
                        <span className="font-semibold text-sm tracking-tight text-white block">Ranjith</span>
                        <span className="text-[10px] text-gray-500 tracking-wider uppercase block">Frontend Architect</span>
                    </div>
                </div>

                <button
                    onClick={() => router.push("/portfolio")}
                    className="
                        flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-white/10
                        bg-white/5
                        px-4
                        py-2
                        text-xs
                        font-medium
                        text-white
                        backdrop-blur-xl
                        transition-all
                        duration-300
                        hover:border-white/20
                        hover:bg-white/10
                    "
                >
                    <ArrowLeft size={14} />
                    Back
                </button>
            </header>

            {/* HERO INTRODUCTION */}
            <section className="relative z-10 max-w-[1650px] mx-auto px-8 md:px-20 lg:px-28 pt-16 pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* LEFT COLUMN: TEXT CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6 lg:col-span-8"
                    >
                        <p className="text-lg uppercase tracking-[0.35em] text-white font-bold">
                            ABOUT ME
                        </p>
                        <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                            No Shortcuts.<br />
                            Just Years of Learning, Building, and Improving.
                        </h1>
                        <h2 className="text-lg text-gray-400 font-normal pt-2">
                            I didn't become a developer overnight.
                        </h2>
                        <p className="text-gray-400 max-w-4xl text-lg leading-relaxed">
                            My journey started with curiosity—learning how websites work, understanding programming fundamentals, and gradually transforming ideas into real-world applications. Through countless hours of coding, debugging, and building projects, I developed a passion for creating digital products that solve meaningful problems.
                        </p>
                    </motion.div>

                    {/* RIGHT COLUMN: HERO IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-4 flex justify-center"
                    >
                        <div className="relative group w-full max-w-[400px] aspect-[4/5] rounded-[32px] overflow-hidden border border-white/10 bg-white/5 p-3 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/30 touch-pan-y select-none">
                            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-purple-500/5 to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
                            <div className="relative w-full h-full rounded-[24px] overflow-hidden border border-white/5">
                                <Image
                                    src="/about_me_imges/perspective/IMG_5489.jpg"
                                    alt="Ranjith"
                                    fill
                                    priority
                                    draggable={false}
                                    className="object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* EXPERIENCES & SKILLS SECTION */}
            <section className="relative z-10 max-w-[1650px] mx-auto px-8 md:px-20 lg:px-28 py-16 border-t border-white/5">
                <div className="grid gap-16 lg:grid-cols-12">

                    {/* LEFT COLUMN: EXPERIENCES */}
                    <div className="lg:col-span-7 space-y-12">
                        <h3 className="text-2xl font-bold tracking-tight text-white">Experiences</h3>

                        <div className="space-y-10">
                            {experiences.map((exp, idx) => (
                                <div key={idx} className="space-y-3 group">
                                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                                        <h4 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                                            {exp.role} <span className="text-gray-600">✦</span> {exp.company}
                                        </h4>
                                    </div>
                                    <p className="text-xs text-gray-500 font-mono">{exp.period}</p>

                                    {exp.award && (
                                        <div className="inline-flex items-center gap-1.5 bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-[10px] px-2.5 py-0.5 rounded-full font-medium">
                                            🏆 {exp.award}
                                        </div>
                                    )}

                                    <p className="text-base md:text-lg text-gray-400 leading-relaxed font-light">
                                        {exp.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT COLUMN: SKILLS */}
                    <div className="lg:col-span-5 space-y-8">
                        <div>
                            <h3 className="text-lg font-semibold tracking-tight text-white mb-6">Core Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="text-xs bg-white/5 border border-white/5 px-3 py-1.5 rounded-lg text-gray-400 font-medium hover:border-white/10 transition-colors duration-300"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* MINI TOOLS DISPLAY */}
                        <div className="pt-6 border-t border-white/5">
                            <h4 className="text-xs text-gray-500 uppercase tracking-widest mb-4">Development Environment</h4>
                            <div className="flex flex-wrap gap-4 text-xs font-mono text-gray-400">
                                <span>VS Code</span>
                                <span>Git</span>
                                <span>Webpack</span>
                                <span>Turbopack</span>
                                <span>Node.js</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS SECTION */}
            <section className="relative z-10 max-w-[1650px] mx-auto px-8 md:px-20 lg:px-28 py-20 border-t border-white/5">
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-snug mb-12 max-w-xl">
                    Hear it from the people who totally didn't get paid to say this.
                </h3>

                <div className="grid gap-10 md:grid-cols-2">
                    {/* TESTIMONIAL 1 */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Star className="text-white fill-white" size={16} />
                            <span className="font-semibold text-sm text-white">Product sense</span>
                        </div>
                        <p className="text-base md:text-lg text-gray-400 leading-relaxed font-light">
                            "Ranjith is one of the most talented engineers I've worked with. He has a superb product sense and clarity of thought in terms of design. I've worked with him on multiple projects and can surely vouch for his skills in terms of UI and UX."
                        </p>
                        <div className="flex items-center gap-3 pt-2">
                            <div className="h-8 w-8 rounded-full bg-cyan-500/20 border border-cyan-400/20 flex items-center justify-center text-[10px] font-bold text-cyan-400">
                                MJ
                            </div>
                            <div>
                                <h5 className="text-xs font-semibold text-white">Mahek Jain</h5>
                                <p className="text-[10px] text-gray-500">Product Manager</p>
                            </div>
                        </div>
                    </div>

                    {/* TESTIMONIAL 2 */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Star className="text-white fill-white" size={16} />
                            <span className="font-semibold text-sm text-white">On time</span>
                        </div>
                        <p className="text-base md:text-lg text-gray-400 leading-relaxed font-light">
                            "We hired Ranjith for the full UI/UX and frontend engineering of our travel platform. He did a great job, and really put his mark on our brand. He is fun to work with, always communicates clearly, and delivers what he promises on time."
                        </p>
                        <div className="flex items-center gap-3 pt-2">
                            <div className="h-8 w-8 rounded-full bg-purple-500/20 border border-purple-400/20 flex items-center justify-center text-[10px] font-bold text-purple-400">
                                JV
                            </div>
                            <div>
                                <h5 className="text-xs font-semibold text-white">Joris Vanherp</h5>
                                <p className="text-[10px] text-gray-500">Co-Founder, LiveTheWorld</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MY PERSPECTIVE / GALLERY SECTION */}
            <section className="relative z-10 max-w-[1650px] mx-auto px-8 md:px-20 lg:px-28 py-20 border-t border-white/5">
                <h3 className="text-2xl font-bold text-white tracking-tight mb-8">My perspective</h3>

                <div className="bg-white p-5 rounded-[32px] overflow-hidden">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {[
                            { src: "/about_me_imges/perspective/yezdi_me.png", alt: "Yezdi motorcycle" },
                            { src: "/about_me_imges/perspective/IMG_6190.jpg", alt: "Memory Snapshot 1" },
                            { src: "/about_me_imges/perspective/IMG_7295.jpg", alt: "Memory Snapshot 2" },
                            { src: "/about_me_imges/perspective/perspective_coding.png", alt: "Coding flatlay" },
                            { src: "/about_me_imges/perspective/perspective_travel.png", alt: "Sunset travel" },
                            { src: "/about_me_imges/perspective/IMG_5489.jpg", alt: "Yezdi motorcycle" },
                        ].map((img, idx) => (
                            <div key={idx} className="group relative aspect-square rounded-2xl overflow-hidden border border-white/5 bg-white/5 touch-pan-y select-none">
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    draggable={false}
                                    className="object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* INSTAGRAM BADGE & FOOTER SIGNATURE */}
            <footer className="relative z-10 max-w-[1650px] mx-auto px-8 md:px-20 lg:px-28 pt-12 pb-24 border-t border-white/5 flex flex-col items-center justify-center text-center space-y-8">

                <div className="flex items-center gap-3">
                    <span className="text-xs text-gray-500 font-medium">Follow me on</span>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 hover:border-white/20 transition-all px-3 py-1.5 rounded-full text-xs font-semibold"
                    >
                        <Instagram size={14} className="text-pink-500" />
                        instagram
                    </a>
                </div>

                <div className="space-y-2">
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight font-serif italic text-white/90">
                        the Ranjith
                    </h2>
                    <div className="flex justify-center gap-6 pt-2">
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors"><Linkedin size={18} /></a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors"><Github size={18} /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors"><Twitter size={18} /></a>
                    </div>
                </div>

                <p className="text-[10px] text-gray-600 font-mono pt-4">
                    From concept to creation, let's make.
                </p>
            </footer>
        </main>
    );
}
