import api from "@/utils/api.utils";
import { Send } from "lucide-react";
import { useState } from "react";
type Message = {
  role: "user" | "ai";
  text: string;
};
const Ai = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage: Message = {
      role: "user",
      text: input,
    };
    setMessages((prev) => [...prev, userMessage]);
    const currentInput = input;
    setInput("");
    try {
      const res = await api.post("/ask-ai-admin", {
        message: currentInput,
        type: "admin",
      });
      const aiReply: Message = {
        role: "ai",
        text:
          typeof res.data.result === "string"
            ? res.data.result
            : res.data.result.airesponse,
      };
      setMessages((prev) => [...prev, aiReply]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "ai", text: "Error: AI request failed" },
      ]);
    }
  };
  return (
    <div className="fixed font-poppins right-8 bottom-8 w-[15rem] h-[20rem] bg-white rounded-xl shadow-lg flex flex-col overflow-hidden">
      <div className="flex-1 p-3 overflow-y-auto space-y-2 text-sm">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-2 rounded-xl w-fit max-w-[80%] ${
              msg.role === "user"
                ? "bg-blue-500 text-white ml-auto"
                : "bg-gray-200 text-black"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="p-2 border-t flex gap-1">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          className="flex-1 text-xs p-1 outline-none"
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};
export default Ai;