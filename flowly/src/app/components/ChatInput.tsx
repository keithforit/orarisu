import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowUp } from "lucide-react";

interface ChatInputProps {
  onSubmit: (query: string) => void;
}

export default function ChatInput({ onSubmit }: ChatInputProps) {
  const [query, setQuery] = useState("");
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  const exampleQueries = [
    "Find SaaS campaigns suitable for UK traffic with high EPC and low approval time",
    "Show me fintech offers with reliable tracking and 60+ day cookies",
    "What campaigns are trending this week in my niche?",
    "Find high-converting campaigns for EU traffic under 48h approval",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % exampleQueries.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    onSubmit(query);
    setQuery("");
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={exampleQueries[placeholderIndex]}
            className="w-full h-14 pl-6 pr-14 rounded-2xl border-2 border-transparent bg-white shadow-sm focus:outline-none focus:border-purple-300 focus:shadow-lg transition-all duration-300 text-gray-900 placeholder:text-gray-400"
            style={{
              background: "linear-gradient(white, white) padding-box, linear-gradient(135deg, rgb(168 85 247 / 0.3), rgb(236 72 153 / 0.3)) border-box",
            }}
          />
          
          <motion.button
            type="submit"
            disabled={!query.trim()}
            whileHover={{ scale: query.trim() ? 1.05 : 1 }}
            whileTap={{ scale: query.trim() ? 0.95 : 1 }}
            className={`absolute right-2.5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
              query.trim()
                ? "bg-gradient-to-br from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-300/50"
                : "bg-gray-200 cursor-not-allowed"
            }`}
          >
            <ArrowUp
              className={`w-6 h-6 transition-colors ${
                query.trim() ? "text-white" : "text-gray-400"
              }`}
            />
          </motion.button>
        </div>
      </form>
    </div>
  );
}