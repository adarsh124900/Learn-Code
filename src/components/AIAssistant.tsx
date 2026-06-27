"use client";

import { useState } from "react";

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! I'm your QuickCode assistant. Need help with a concept, or stuck on a task? Let me know!", sender: "ai" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages([...messages, { text: input, sender: "user" }]);
    setInput("");

    // Mock AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { text: "I'm here to help! Could you provide a bit more detail on what you're stuck on? (I'm a mock AI right now).", sender: "ai" }]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="w-80 h-96 bg-white border border-slate-200 rounded-lg shadow-xl flex flex-col overflow-hidden animate-fade-in-up">
          <div className="bg-indigo-600 text-white p-3 flex justify-between items-center shadow-sm">
            <div className="flex items-center gap-2">
              <span className="text-xl">🤖</span>
              <h3 className="font-semibold">AI Assistant</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-indigo-200 transition">
              ✖
            </button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3 text-sm bg-slate-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2.5 rounded-lg max-w-[85%] ${msg.sender === "ai" ? "bg-white border border-slate-200 text-slate-700 self-start rounded-tl-none shadow-sm" : "bg-indigo-600 text-white self-end rounded-tr-none shadow-sm"}`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="p-3 border-t border-slate-200 bg-white flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask for help..."
              className="flex-1 border border-slate-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <button
              onClick={handleSend}
              className="bg-indigo-600 text-white px-4 py-1.5 rounded-md text-sm font-semibold hover:bg-indigo-700 transition"
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-indigo-600 rounded-full shadow-lg flex items-center justify-center text-white hover:bg-indigo-700 hover:scale-105 transition-transform"
        >
          <span className="text-2xl">🤖</span>
        </button>
      )}
    </div>
  );
}
