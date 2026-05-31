export async function askAssistantStream(
    message: string,
    onChunk: (chunk: string) => void
): Promise<void> {
    try {
        const response = await fetch("/api/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ message }),
        });

        if (!response.ok) {
            throw new Error("Failed to post chat message");
        }

        const reader = response.body?.getReader();
        const decoder = new TextDecoder();

        if (!reader) {
            throw new Error("Response body is not readable");
        }

        let done = false;
        let text = "";

        while (!done) {
            const { value, done: doneReading } = await reader.read();
            done = doneReading;
            const chunk = decoder.decode(value, { stream: !done });
            text += chunk;
            onChunk(text);
        }
    } catch (error) {
        console.error("Error in askAssistantStream:", error);
        // Graceful dynamic fallback stream animation
        const fallback = "I apologize, but my real-time streaming connection is experiencing network delays. Ranjith's core strengths include cinematic UI design, custom animations using Framer Motion, and high-performance server components with Next.js App Router. You can inspect his featured projects directly on the /portfolio page!";
        let currentText = "";
        for (let i = 0; i < fallback.length; i += 2) {
            currentText += fallback.substring(i, i + 2);
            onChunk(currentText);
            await new Promise((resolve) => setTimeout(resolve, 10));
        }
    }
}
