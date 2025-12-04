import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, Send, X, Bot, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useThemeLanguage } from "../context/ThemeLanguageContext";

const AiChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const { t, language } = useThemeLanguage();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Initial welcome message
    if (messages.length === 0) {
      setMessages([
        {
          id: 1,
          text: t("aiWelcome"),
          sender: "bot",
        },
      ]);
    }
  }, [t, messages.length]);

  const generateResponse = (query) => {
    const lowerQuery = query.toLowerCase();
    
    // Simple simulated AI logic based on keywords
    if (lowerQuery.includes("contact") || lowerQuery.includes("email") || lowerQuery.includes("joindre")) {
      return language === 'fr' 
        ? "Vous pouvez contacter Zakariae via le formulaire de contact en bas de page, ou par email à zakariaelhassad031@gmail.com."
        : "You can contact Zakariae via the contact form at the bottom of the page, or by email at zakariaelhassad031@gmail.com.";
    }
    if (lowerQuery.includes("java") || lowerQuery.includes("spring")) {
      return language === 'fr'
        ? "Zakariae a une forte expertise en Java et l'écosystème Spring (Boot, Security, Data). Il a réalisé plusieurs projets backend complexes avec ces technologies."
        : "Zakariae has strong expertise in Java and the Spring ecosystem (Boot, Security, Data). He has built several complex backend projects using these technologies.";
    }
    if (lowerQuery.includes("react") || lowerQuery.includes("frontend")) {
      return language === 'fr'
        ? "Côté frontend, Zakariae maîtrise React.js, Tailwind CSS et crée des interfaces modernes et responsives comme ce portfolio."
        : "On the frontend side, Zakariae masters React.js, Tailwind CSS and creates modern, responsive interfaces like this portfolio.";
    }
    if (lowerQuery.includes("projet") || lowerQuery.includes("project")) {
      return language === 'fr'
        ? "Il a travaillé sur divers projets : gestion bancaire, simulateur crypto, gestion de dons de sang, et plateformes e-learning (Youdemy). Consultez la section Projets !"
        : "He has worked on various projects: banking management, crypto simulator, blood donation management, and e-learning platforms (Youdemy). Check out the Projects section!";
    }
    if (lowerQuery.includes("cv") || lowerQuery.includes("resume")) {
      return language === 'fr'
        ? "Vous pouvez télécharger son CV dans la section 'À propos'."
        : "You can download his Resume in the 'About' section.";
    }

    return language === 'fr'
      ? "Je suis une IA spécialisée sur le profil de Zakariae. Je peux répondre aux questions sur ses compétences, ses projets ou comment le contacter."
      : "I am an AI specialized in Zakariae's profile. I can answer questions about his skills, projects, or how to contact him.";
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { id: Date.now(), text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI thinking delay
    setTimeout(() => {
      const responseText = generateResponse(userMessage.text);
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, text: responseText, sender: "bot" },
      ]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-mono">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-16 right-0 w-80 md:w-96 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-cyan-500/30 overflow-hidden flex flex-col h-[500px]"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 p-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-2">
                <Bot size={20} />
                <span className="font-bold">Zakariae AI Assistant</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 rounded-full p-1 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-900">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                      msg.sender === "user"
                        ? "bg-cyan-500 text-white rounded-br-none"
                        : "bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 rounded-bl-none shadow-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-3 rounded-2xl rounded-bl-none flex gap-1">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" />
                    <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-100" />
                    <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-200" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={handleSend}
              className="p-3 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700"
            >
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={t("aiInput")}
                  className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="bg-cyan-500 text-white p-2 rounded-full hover:bg-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send size={18} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-4 rounded-full shadow-lg shadow-cyan-500/30 flex items-center justify-center relative group"
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <>
            <Sparkles size={24} />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-200 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-400"></span>
            </span>
          </>
        )}
      </motion.button>
    </div>
  );
};

export default AiChatbot;