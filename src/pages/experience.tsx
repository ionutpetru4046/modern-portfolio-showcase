import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Full Stack Developer",
    company: "Unioil",
    period: "2025 - Present",
    description: [
      "- Building and maintaining full-stack web applications using React, Node.js, Express, and MongoDB\n- Collaborating with design and backend teams to create seamless user experiences\n- Implementing REST APIs and optimizing database queries for better performance\n- Deploying and maintaining applications on cloud platforms (Vercel, Render, or AWS)"
    ],
  },
  {
    type: "work",
    title: "Freelancing",
    company: "Digital Agency",
    period: "2022 - 2025",
    description: "Built custom web applications and e-commerce solutions for various clients.",
  },
  {
    type: "work",
    title: "Junior Developer",
    company: "StartUp Hub",
    period: "2021 - 2022",
    description: "Developed frontend components and learned backend technologies in a fast-paced startup environment.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Journey</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex items-start gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Icon */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary glow-primary z-10" />

              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <div className="glass p-6 rounded-2xl hover-lift">
                  <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    {exp.type === "work" ? (
                      <Briefcase className="w-4 h-4 text-primary" />
                    ) : (
                      <GraduationCap className="w-4 h-4 text-accent" />
                    )}
                    <span className="text-xs text-muted-foreground">{exp.period}</span>
                  </div>
                  <h3 className="font-display font-semibold text-lg">{exp.title}</h3>
                  <p className="text-primary text-sm mb-2">{exp.company}</p>
                  <p className="text-muted-foreground text-sm">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
