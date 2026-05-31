import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const KNOWLEDGE_BASE = {
    skills: "Ranjith is a Frontend Engineer specializing in cinematic UI engineering, Framer Motion animations, Next.js App Router, Tailwind CSS, TypeScript, Zustand state management, and modern performance optimizations.",
    projects: "Ranjith has built high-performance production projects, including: 1. Aether AI Platform (autonomous AI orchestration framework), 2. Specter DeFi Hub (multichain yield aggregator), and 3. Neon Sentinel (cloud threat intelligence dashboard). Check the /portfolio page for details!",
    experience: "Ranjith has extensive frontend engineering experience focused on cinematic interfaces, building ultra-smooth user interactions, scalable app architectures, and optimized client-server states.",
    contact: "You can reach Ranjith at contact@ranjith.dev or check out his GitHub repository links directly on this portfolio site.",
    fallback: "I can answer questions regarding Ranjith's skills, featured projects, work experience, or hobbies. Feel free to ask about any of these!"
};

export async function POST(req: Request) {
    try {
        const { message } = await req.json();
        const lowerMessage = (message || "").toLowerCase();

        let responseText = KNOWLEDGE_BASE.fallback;
        if (lowerMessage.includes("project") || lowerMessage.includes("work") || lowerMessage.includes("portfolio")) {
            responseText = KNOWLEDGE_BASE.projects;
        } else if (lowerMessage.includes("skill") || lowerMessage.includes("tech") || lowerMessage.includes("stack") || lowerMessage.includes("code")) {
            responseText = KNOWLEDGE_BASE.skills;
        } else if (lowerMessage.includes("experience") || lowerMessage.includes("job") || lowerMessage.includes("history")) {
            responseText = KNOWLEDGE_BASE.experience;
        } else if (lowerMessage.includes("contact") || lowerMessage.includes("email") || lowerMessage.includes("hire")) {
            responseText = KNOWLEDGE_BASE.contact;
        } else if (lowerMessage.includes("hi") || lowerMessage.includes("hello") || lowerMessage.includes("hey")) {
            responseText = "Hello! I am Ranjith's AI Assistant. I can tell you about his skills, projects, and work experience. What would you like to know?";
        }

        // Create a ReadableStream to stream the response text
        const encoder = new TextEncoder();
        const customReadable = new ReadableStream({
            async start(controller) {
                const words = responseText.split(" ");
                for (const word of words) {
                    controller.enqueue(encoder.encode(word + " "));
                    // Simulate stream speed
                    await new Promise((resolve) => setTimeout(resolve, 50));
                }
                controller.close();
            },
        });

        return new NextResponse(customReadable, {
            headers: {
                "Content-Type": "text/plain; charset=utf-8",
                "Transfer-Encoding": "chunked",
            },
        });
    } catch (err) {
        console.error("API error:", err);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
