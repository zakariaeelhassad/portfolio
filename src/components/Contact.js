import React, { useState, useEffect } from "react";
import {
  Send,
  CheckCircle,
  AlertCircle,
  Mail,
  User,
  MessageSquare,
} from "lucide-react";
import emailjs from "emailjs-com"; // ✅ ajouté

const InputField = ({ icon: Icon, label, ...props }) => (
  <div className="relative">
    <label className="block font-mono text-sm text-cyan-400 mb-2">
      {label}
    </label>
    <div className="relative">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
        <Icon className="w-5 h-5" />
      </div>
      <input
        {...props}
        className="w-full pl-12 pr-4 py-4 bg-gray-800/50 border border-gray-700 text-white rounded-lg 
        focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 
        transition-all duration-300 placeholder:text-gray-500 font-mono"
      />
    </div>
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const maxChars = 500;
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("contact");
      if (element) {
        const rect = element.getBoundingClientRect();
        setInView(rect.top <= window.innerHeight && rect.bottom >= 0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_ud1je0h", 
        "template_3c8p9hf", 
        e.target,
        "0XH-ylqHhKPQ77rm_"
      )
      .then(() => {
        setStatus({
          type: "success",
          message: "✅ Le message a été envoyé avec succès !",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
        setCharCount(0);
        setIsLoading(false);
      })
      .catch(() => {
        setStatus({
          type: "error",
          message: "❌ Échec de l'envoi, veuillez réessayer.",
        });
        setIsLoading(false);
      });
  };

  const handleMessageChange = (e) => {
    const text = e.target.value;
    if (text.length <= maxChars) {
      setFormData({ ...formData, message: text });
      setCharCount(text.length);
    }
  };

  return (
    <section
      id="contact"
      className={`py-20 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } bg-gray-900 text-white transition-all duration-700`}
    >
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <div className="relative">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-cyan-400/10 rounded-full blur-3xl" />
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl" />
        </div>

        <h3 className="text-5xl font-mono text-center mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            Contactez-moi
          </span>
        </h3>

        <p className="text-gray-400 text-center mb-16 font-mono max-w-2xl mx-auto">
          Vous avez une question ou souhaitez collaborer ? Envoyez-moi un message et je vous répondrai dès que possible.
        </p>

        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-200 to-blue-300 rounded blur opacity-25 group-hover:opacity-100" />

          <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-0 md:gap-8">
              <div className="p-8 md:col-span-2 bg-gradient-to-br from-gray-800/50 to-transparent rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none">
                <h4 className="font-mono text-xl text-cyan-400 mb-4">
                  Informations de contact
                </h4>
                <p className="text-gray-400 mb-8 font-mono text-sm">
                  N'hésitez pas à me contacter via ce formulaire ou mes profils sur les réseaux sociaux.
                </p>

                <div className="space-y-4 mt-8">
                  <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-transparent" />
                </div>
              </div>

              <div className="p-8 md:col-span-3 relative group">
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 relative z-10"
                >
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <InputField
                      icon={User}
                      label="Nom"
                      type="text"
                      name="name" 
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Jean Dupont"
                    />
                    <InputField
                      icon={Mail}
                      label="Email"
                      type="email"
                      name="email" 
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="jean@example.com"
                    />
                  </div>

                  <InputField
                    icon={MessageSquare}
                    label="Sujet"
                    type="text"
                    name="subject" 
                    required
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    placeholder="À propos de..."
                  />

                  <div>
                    <label className="block font-mono text-sm text-cyan-400 mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      name="message" 
                      value={formData.message}
                      onChange={handleMessageChange}
                      rows={6}
                      className="w-full p-4 bg-gray-800/50 border border-gray-700 text-white rounded-lg 
                focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 
                transition-all duration-300 placeholder:text-gray-500 font-mono resize-none"
                      placeholder="Votre message ici..."
                    />
                    <div className="mt-2 text-sm text-cyan-400 text-right font-mono">
                      {charCount}/{maxChars} caractères
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="group relative w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-white-400 to-white-500 text-white overflow-hidden rounded-lg transform transition-transform duration-300 hover:scale-105 border border-cyan-400/50 focus:outline-none font-mono"
                  >
                    <div className="absolute inset-0 w-3 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-[250ms] ease-out group-hover:w-full" />

                    <span className="relative z-10 flex items-center space-x-2 group-hover:text-white">
                      {isLoading ? (
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <span>Envoyer le message</span>
                          <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </span>

                    <div className="absolute top-0 left-0 w-2 h-2 bg-white/30 rounded-full group-hover:animate-ping" />
                    <div className="absolute bottom-0 right-0 w-2 h-2 bg-white/30 rounded-full group-hover:animate-ping delay-100" />
                  </button>
                </form>

                {status.message && (
                  <div
                    className={`mt-6 p-4 rounded-lg flex items-center space-x-2 ${
                      status.type === "success"
                        ? "bg-cyan-900/20 text-cyan-400"
                        : "bg-red-900/20 text-red-400"
                    }`}
                  >
                    {status.type === "success" ? (
                      <CheckCircle className="h-5 w-5 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="h-5 w-5 flex-shrink-0" />
                    )}
                    <p className="font-mono text-sm">{status.message}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
