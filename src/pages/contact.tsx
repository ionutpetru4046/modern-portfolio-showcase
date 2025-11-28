"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
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
          toast.success("Message sent! I’ll get back to you shortly.", { duration: 5000 });
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          toast.error("Failed to send. Please try again.", { duration: 5000 });;
        }
      );
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
            Let's work <span className="gradient-text">together</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass p-6 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href="mailto:costeWebDev@gmail.com"
                    className="font-medium hover:text-primary transition-colors"
                  >
                    costeWebDev@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="glass p-6 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Dublin City Center, Ireland</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/ionutpetru4046"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 glass p-4 rounded-2xl flex items-center justify-center gap-3 hover:border-primary/50 transition-colors group"
              >
                <Github className="w-5 h-5 group-hover:text-primary transition-colors" />
                <span className="text-sm">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/coste-ionut-petru-7531312bb/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 glass p-4 rounded-2xl flex items-center justify-center gap-3 hover:border-primary/50 transition-colors group"
              >
                <Linkedin className="w-5 h-5 group-hover:text-primary transition-colors" />
                <span className="text-sm">LinkedIn</span>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass p-8 rounded-2xl space-y-6"
          >
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 bg-secondary rounded-xl border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                placeholder="Your name"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 bg-secondary rounded-xl border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                placeholder="your@email.com"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 bg-secondary rounded-xl border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                placeholder="Tell me about your project..."
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:glow-primary transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Send Message
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Status Messages */}
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
        </div>
      </div>
    </section>
  );
}
