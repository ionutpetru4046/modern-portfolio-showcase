import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Josh’s Turkish Barbers",
    description: "A modern barbershop website built for a real client. Fully responsive and animated using Framer Motion, it includes services, gallery, testimonials carousel, and a booking CTA.",
    tags: ["Next.js", "TypeScript", "Framer-Motion", "Swiper.js"],
    image: "/Barber Shop.png",
    github: "https://github.com/ionutpetru4046/barbershop-website-main",
    live: "https://barbershop-website-chi.vercel.app/",
    featured: false,
  },
  {
    title: "Mechanic Booking Website",
    description: "A Full-Stack Booking and service Website built for a local mechanic shop. It includes an online booking system, service listings, and a secure admin dashboard to manage appointments and customer data.",
    tags: ["React.js", "Node.js", "MongoDB", "Express.js"],
    image: "/Expert Automotive.png",
    github: "https://github.com/ionutpetru4046/Mechanic-Website",
    live: "https://mechanic-website-tau.vercel.app/",
    featured: true,
  },
  {
    title: "The Ultimate Streaming Toolkit",
    description: "Optimize your streams, track real-time analytics, and engage your audience effortlessly—all in one place. Perfect for Twitch, YouTube, and Facebook streamers.",
    tags: ["React.js", "Vite", "TailwindCSS", "Framer-Motion"],
    image: "/Ultimate SaaS Streaming.png",
    github: "https://github.com/ionutpetru4046/Modern-Saas-Website",
    live: "https://modern-saas-website.vercel.app/",
    featured: true,
  },
  {
    title: "Restaura",
    description: "Modern restaurant website showcasing clean UI, smooth animations, and solid React frontend development.",
    tags: ["React.js", "Vite", "TailwindCSS", "Framer-Motion"],
    image: "/Restaura.png",
    github: "https://github.com/ionutpetru4046/Restaura",
    live: "https://restaura-landing-page-website.vercel.app/",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
            Latest <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl glass hover-lift ${
                project.featured ? "md:col-span-1" : ""
              }`}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.live}
                      className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors text-primary"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-secondary text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/ionutpetru4046"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
          >
            View All Projects
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
