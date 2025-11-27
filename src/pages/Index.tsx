import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Navbar from "@/components/Navbar";
import About from "@/pages/about";
import Projects from "@/pages/projects";
import Testimonials from "@/pages/testimonials";
import Experience from "@/pages/experience";
import ContactSection from "@/pages/contact";
import BlogSection from "@/pages/blog";
import Footer from "@/components/Footer";
import { ArrowDown, Github, Linkedin } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-delayed" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
          
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center">
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-muted-foreground mb-4"
            >
              Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-7xl md:text-8xl font-display font-bold mb-4"
            >
              <span className="gradient-text">Coste Ionut</span>
            </motion.h1>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold text-foreground mb-6"
            >
              Full Stack Developer
            </motion.h2>

            {/* Dynamic tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl sm:text-2xl text-muted-foreground mb-2"
            >
              Crafting Digital Experiences with{" "}
              <span className="text-primary font-semibold">
                <Typewriter
                  words={["React", "Next.js", "Node.js", "MERN Stack", "TypeScript"]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </span>
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto"
            >
              3+ years of experience building scalable web applications with modern technologies
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex justify-center gap-8 sm:gap-16 mb-10"
            >
              {[
                { value: "3+", label: "Years Experience" },
                { value: "20+", label: "Projects Completed" },
                { value: "5+", label: "Technologies" },
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <h3 className="text-3xl sm:text-4xl font-display font-bold gradient-text-primary">
                    {stat.value}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <button
                onClick={() =>
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:glow-primary transition-all duration-300 hover:scale-105 flex items-center gap-2 group"
              >
                View My Work
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </button>
              <button
                onClick={() =>
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-4 glass font-semibold rounded-full hover:border-primary/50 transition-all duration-300 text-foreground"
              >
                Get In Touch
              </button>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex justify-center gap-4"
            >
              <a
                href="https://github.com/ionutpetru4046"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-full hover:border-primary/50 hover:text-primary transition-all duration-200 group"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/coste-ionut-petru-7531312bb/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-full hover:border-primary/50 hover:text-primary transition-all duration-200 group"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
              <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1.5 h-3 bg-primary rounded-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <About />
      <Testimonials />
      <Projects />
      <Experience />
      <ContactSection />
      <BlogSection />
      <Footer />
    </div>
  );
}
