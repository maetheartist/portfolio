import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Ticz",
      description:
        "An e-Ticketing Platform used to generate e-tickets for events, has a QR code functionality and email services.",
      technologies: ["ReactJS", "QRCode", "Email"],
      previewLink: "https://ticketing-app-w9a2.vercel.app/",
      thumbnail: "/ticz.png", 
    },
    {
      title: "Color Pick Game",
      description: "A simple and colorful fun game that interacts with users.",
      technologies: ["ReactJS", "JavaScript", "TailwindCSS"],
      previewLink: "https://color-pick-game.vercel.app/",
      thumbnail: "/colorGuess.png",
    },
    {
      title: "Skillex ",
      description: "Landing page clone for an e-learning platform.",
      technologies: ["HTML", "JavaScript", "VanillaCSS"],
      previewLink: "https://garage-app-beta.vercel.app/",
      thumbnail: "/skillex.png",
    },
    {
      title: "Crown Store",
      description: "Fullstack web app for a clothing brand",
      technologies: ["ReactJS", "SCSS", "API integration", "Google Firebase"],
      previewLink: "",
      thumbnail: "",
    },
    {
      title: "Pomodoro App",
      description: "Clone of Pocket Landing Page with a more modern feel.",
      technologies: ["HTML", "JavaScript", "VanillaCSS"],
      previewLink: "https://saving-app-beige.vercel.app/",
      thumbnail: "/Pomodoro.png",
    },
    {
      title: "Monster Rolodex",
      description: "Animated web page to demonstrate React",
      technologies: ["ReactJS", "JavaScript", "TailwindCSS"],
      previewLink: "https://monsters-project-gilt.vercel.app/",
      thumbnail: "/monster.png",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, duration: 0.8 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, rotateY: -90 },
    visible: {
      opacity: 1,
      rotateY: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    hover: {
      y: -10,
      transition: { type: "spring", stiffness: 200, damping: 5 },
    },
  };

  return (
    <motion.section
      className="py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-2xl lg:text-4xl font-bold text-white text-center lg:text-left mb-2 lg:mb-6"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          Some of my Works <span className="text-red-500">💻</span>
        </motion.h2>
        <motion.p
          className="text-[#F5EFE7] text-center lg:text-left mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Here are some of the fun and recent projects I've worked on.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="p-8 bg-[#213555] rounded-md flex flex-col justify-between transition-transform"
              variants={cardVariants}
              whileHover="hover"
            >
              {project.thumbnail && (
                <img
                  src={project.thumbnail}
                  alt={`${project.title} preview`}
                  className="w-full h-40 object-cover rounded mb-4"
                />
              )}
              <h3 className="text-xl font-semibold text-white mb-4">
                {project.title}
              </h3>
              <p className="text-[#F5EFE7] text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-2 bg-[#334155] text-[#F5EFE7] text-xs px-3 py-1 rounded"
                  >
                    <span>🚀</span>
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
              <a
                href={project.previewLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-white px-4 py-2 rounded hover:bg-[#D8C4B6] transition w-full"
              >
                <p className="text-[#213555] text-sm font-semibold">
                  View Project
                </p>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                >
                  <path
                    d="M7 17L17 7M17 7H8M17 7V16"
                    stroke="#213555"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
