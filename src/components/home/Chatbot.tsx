import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, Send, X, Bot, User } from "lucide-react";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "bot" | "user"; text: string }[]>([
    { role: "bot", text: "Chào bạn! Mình là AI tư vấn của IT1 HUST. Bạn muốn tìm hiểu về điểm chuẩn, học phí hay lộ trình học tập?" },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userMsg }]);
    setIsLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: userMsg,
        config: {
          systemInstruction: "Bạn là một trợ lý tư vấn tuyển sinh thông minh cho ngành IT1 (Khoa học Máy tính) của Đại học Bách khoa Hà Nội (HUST). Hãy trả lời bằng tiếng Việt, phong cách chuyên nghiệp, nhiệt tình và truyền cảm hứng. Nếu không biết thông tin cụ thể, hãy khuyên người dùng liên hệ văn phòng tuyển sinh. Thông tin cơ bản: IT1 là ngành top 1, điểm chuẩn thường >28, học phí khoảng 25-30tr/năm (có thể thay đổi), học 5 năm.",
        },
      });

      const botMsg = response.text || "Xin lỗi, mình gặp chút trục trặc. Bạn thử lại nhé!";
      setMessages((prev) => [...prev, { role: "bot", text: botMsg }]);
    } catch (error) {
      console.error("Chatbot error:", error);
      setMessages((prev) => [...prev, { role: "bot", text: "Mình đang bận một chút, bạn hỏi lại sau nhé!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-card border border-border rounded-2xl shadow-2xl w-[350px] sm:w-[400px] h-[500px] flex flex-col mb-4 overflow-hidden"
          >
            <div className="p-4 bg-primary text-primary-foreground flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Bot className="h-5 w-5" />
                <span className="font-bold">HUST IT1 Advisor</span>
              </div>
              <button onClick={() => setIsOpen(false)}>
                <X className="h-5 w-5" />
              </button>
            </div>

            <ScrollArea className="flex-1 p-4" ref={scrollRef}>
              <div className="space-y-4">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                      msg.role === "user" 
                        ? "bg-primary text-primary-foreground rounded-tr-none" 
                        : "bg-muted text-foreground rounded-tl-none"
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-muted p-3 rounded-2xl rounded-tl-none animate-pulse">
                      <div className="flex gap-1">
                        <div className="h-1.5 w-1.5 bg-foreground/30 rounded-full animate-bounce" />
                        <div className="h-1.5 w-1.5 bg-foreground/30 rounded-full animate-bounce [animation-delay:0.2s]" />
                        <div className="h-1.5 w-1.5 bg-foreground/30 rounded-full animate-bounce [animation-delay:0.4s]" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            <div className="p-4 border-t border-border flex gap-2">
              <Input 
                placeholder="Hỏi về IT1..." 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <Button size="icon" onClick={handleSend} disabled={isLoading}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Button 
        size="icon" 
        className="h-14 w-14 rounded-full shadow-lg" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <MessageCircle className="h-6 w-6" />}
      </Button>
    </div>
  );
}
