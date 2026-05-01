import { Send } from "lucide-react";
import { useState } from "react";
const Ai = () => {
  const [messages, setMessages] = useState([
    { role: "ai", text: "Hello! How can I help you?" },
  ]);
  const [input, setInput] = useState("");
  const sendMessage = () => {
    if (!input.trim()) return;
    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    const aiReply = {
        role: "ai",
        text: "This is a demo response. You can connect it to an API later.",
      };
    setMessages((prev) => [...prev, aiReply]);
  };
  return (
    <div className="fixed font-poppins right-8 bottom-8 w-[15rem] h-[20rem] bg-white rounded-xl shadow-lg flex flex-col overflow-hidden">
      <div className="flex-1 p-2 overflow-y-auto space-y-2 text-sm p-3 ">
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
        <button
          onClick={sendMessage}
          className=""
        >
          <Send size={20}/>
        </button>
      </div>
    </div>
  );
};
export default Ai;