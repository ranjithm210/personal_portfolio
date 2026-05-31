"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Bot, RefreshCw, Sparkles } from "lucide-react";
import { useChatbotStore } from "@/store/chatbotStore";
import { askAssistantStream } from "@/services/ai.service";

const SUGGESTIONS = [
    "What are Ranjith's core skills?",
    "Tell me about his featured projects.",
    "What is his professional experience?",
];

export default function AIChatbot() {
    const {
        isOpen,
        messages,
        isLoading,
        closeChat,
        addMessage,
        updateLastMessage,
        setLoading,
        clearMessages,
    } = useChatbotStore();

    const [inputValue, setInputValue] = useState("");
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Auto-scroll on new message
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isLoading]);

    const handleSendMessage = async (text: string) => {
        if (!text.trim() || isLoading) return;

        setInputValue("");
        // User message
        addMessage({ role: "user", content: text });
        setLoading(true);

        // Assistant dynamic placeholder
        addMessage({ role: "assistant", content: "" });

        await askAssistantStream(text, (chunk) => {
            updateLastMessage(chunk);
        });

        setLoading(false);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 50 }}
                    transition={{ type: "spring", duration: 0.5 }}
                    className="
                        fixed
                        bottom-24
                        right-6
                        z-50
                        flex
                        h-[550px]
                        w-[400px]
                        flex-col
                        overflow-hidden
                        rounded-[32px]
                        border
                        border-cyan-400/20
                        bg-black/80
                        shadow-[0_0_50px_rgba(34,211,238,0.2)]
                        backdrop-blur-2xl
                        max-w-[calc(100vw-32px)]
                    "
                >
                    {/* Header */}
                    <div
                        className="
                            flex
                            items-center
                            justify-between
                            border-b
                            border-white/10
                            bg-cyan-950/20
                            px-6
                            py-4
                        "
                    >
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                                <Bot size={20} />
                            </div>
                            <div>
                                <h3 className="text-sm font-black text-white tracking-wide">
                                    Cyber Assistant
                                </h3>
                                <p className="text-[10px] uppercase tracking-widest text-cyan-400">
                                    ACTIVE PROTOCOL
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <motion.button
                                onClick={() => {
                                    clearMessages();
                                    window.dispatchEvent(new CustomEvent("bird-react"));
                                }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                title="Reset Conversation"
                                className="
                                    rounded-full
                                    p-2
                                    text-gray-400
                                    transition-colors
                                    hover:bg-white/5
                                    hover:text-white
                                "
                            >
                                <RefreshCw size={16} />
                            </motion.button>
                            <motion.button
                                onClick={closeChat}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="
                                    rounded-full
                                    p-2
                                    text-gray-400
                                    transition-colors
                                    hover:bg-white/5
                                    hover:text-white
                                "
                            >
                                <X size={18} />
                            </motion.button>
                        </div>
                    </div>

                    {/* Messages Body */}
                    <div
                        className="
                            flex-1
                            overflow-y-auto
                            p-6
                            space-y-4
                            scrollbar-thin
                            scrollbar-thumb-white/10
                        "
                    >
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`flex ${
                                    msg.role === "user" ? "justify-end" : "justify-start"
                                }`}
                            >
                                <div
                                    className={`
                                        max-w-[85%]
                                        rounded-2xl
                                        px-4
                                        py-3
                                        text-sm
                                        leading-relaxed
                                        ${
                                            msg.role === "user"
                                                ? "bg-cyan-500/20 text-cyan-50 border border-cyan-400/30"
                                                : "bg-white/5 text-gray-200 border border-white/5"
                                        }
                                    `}
                                >
                                    {msg.content || (
                                        <span className="flex items-center gap-1 text-cyan-400">
                                            <Sparkles size={14} className="animate-spin" />
                                            Analyzing...
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))}

                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="flex items-center gap-1 rounded-2xl bg-white/5 border border-white/5 px-4 py-3 text-cyan-400 text-sm">
                                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-cyan-400 [animation-delay:-0.3s]" />
                                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-cyan-400 [animation-delay:-0.15s]" />
                                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-cyan-400" />
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Suggestions (only when input is empty & not loading) */}
                    {inputValue.length === 0 && !isLoading && (
                        <div className="px-6 py-2 flex flex-wrap gap-2">
                            {SUGGESTIONS.map((sug, i) => (
                                <motion.button
                                    key={i}
                                    onClick={() => {
                                        handleSendMessage(sug);
                                        window.dispatchEvent(new CustomEvent("bird-react"));
                                    }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="
                                        text-[11px]
                                        text-cyan-400/70
                                        border
                                        border-cyan-400/20
                                        rounded-full
                                        px-3
                                        py-1
                                        bg-cyan-500/5
                                        transition-all
                                        hover:border-cyan-400
                                        hover:text-cyan-300
                                        hover:bg-cyan-500/10
                                    "
                                >
                                    {sug}
                                </motion.button>
                            ))}
                        </div>
                    )}

                    {/* Input Footer */}
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            if (inputValue.trim() && !isLoading) {
                                handleSendMessage(inputValue);
                                window.dispatchEvent(new CustomEvent("bird-react"));
                            }
                        }}
                        className="
                            border-t
                            border-white/10
                            bg-black/40
                            p-4
                            flex
                            gap-2
                        "
                    >
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Ask Ranjith's assistant..."
                            className="
                                flex-1
                                rounded-full
                                border
                                border-white/10
                                bg-white/5
                                px-5
                                py-3
                                text-sm
                                text-white
                                placeholder-gray-500
                                focus:outline-none
                                focus:border-cyan-400/40
                                focus:bg-cyan-500/5
                            "
                        />
                        <motion.button
                            type="submit"
                            disabled={!inputValue.trim() || isLoading}
                            whileHover={inputValue.trim() && !isLoading ? { scale: 1.05 } : {}}
                            whileTap={inputValue.trim() && !isLoading ? { scale: 0.95 } : {}}
                            className="
                                flex
                                h-11
                                w-11
                                items-center
                                justify-center
                                rounded-full
                                bg-cyan-500
                                text-black
                                transition-all
                                hover:bg-cyan-400
                                disabled:opacity-50
                            "
                        >
                            <Send size={16} />
                        </motion.button>
                    </form>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
