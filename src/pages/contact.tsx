"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_5mras0s",
        "template_30uvj7h",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "eFSQW6Q-o_y1TEL3y"
      )
      .then(
        () => {
          setStatus("success");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log(error);
          setStatus("error");
        }
      );
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Your layout stays the same, only form changes */}

      <motion.form onSubmit={handleSubmit} className="glass p-8 rounded-2xl space-y-6">
        
        {/* Name */}
        <input
          type="text"
          placeholder="Your name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 bg-secondary rounded-xl border border-border"
        />

        {/* Email */}
        <input
          type="email"
          placeholder="your@email.com"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 bg-secondary rounded-xl border border-border"
        />

        {/* Message */}
        <textarea
          rows={5}
          placeholder="Tell me about your project..."
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3 bg-secondary rounded-xl border border-border"
        />

        {/* Button */}
        <button
          type="submit"
          className="w-full py-4 bg-primary text-primary-foreground font-semibold rounded-xl flex items-center justify-center gap-2"
        >
          Send Message
          <Send className="w-4 h-4" />
        </button>

        {status === "success" && (
          <p className="text-green-500 text-center pt-2">
            Message sent successfully!
          </p>
        )}

        {status === "error" && (
          <p className="text-red-500 text-center pt-2">
            Something went wrong. Try again.
          </p>
        )}
      </motion.form>
    </section>
  );
}
