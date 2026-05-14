import { motion } from "framer-motion";
import {
  Mail,
  ArrowRight,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Portfolio() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const projects = [
    {
      id: "01",
      title: "Voxmate",
      description:
        "Secure multimodal AI assistant with voice interaction, facial authentication, and NLP-based response generation.",
      link: "https://github.com/abiMaestral/Voxmate",
    },
    {
      id: "02",
      title: "AMPLA",
      description:
        "Autonomous multi-agent learning assistant with LLM-based explanation generation and evaluation logic.",
      link: "https://github.com/abiMaestral/AMPLA",
    },
    {
      id: "03",
      title: "Cognitive Digital Twin",
      description:
        "Behavior modeling framework using sequence-based architectures like RNNs and Transformers.",
      link: "https://github.com/abiMaestral/cognitive-digital-twin",
    },
    {
      id: "04",
      title: "Disease Prediction",
      description:
        "Machine learning models for disease prediction using preprocessing and Random Forest algorithms.",
      link: "https://github.com/abiMaestral/DiseasePred",
    },
  ];

  return (
    <div className="bg-black text-white overflow-hidden selection:bg-cyan-400 selection:text-black relative">

      {/* CURSOR GLOW */}
      <motion.div
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
        className="fixed top-0 left-0 w-6 h-6 rounded-full bg-cyan-400 shadow-[0_0_35px_#22d3ee] pointer-events-none z-[999]"
      />

      {/* BACKGROUND */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:80px_80px]" />

        <motion.div
          animate={{
            x: [0, 120, -80, 0],
            y: [0, -80, 100, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 18,
            ease: "easeInOut",
          }}
          className="absolute top-40 left-20 w-[500px] h-[500px] rounded-full bg-cyan-500/15 blur-[140px]"
        />

        <motion.div
          animate={{
            x: [0, -100, 60, 0],
            y: [0, 100, -60, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 right-10 w-[450px] h-[450px] rounded-full bg-purple-500/15 blur-[140px]"
        />
      </div>

      {/* FLOATING BALLS */}
      <motion.div
        animate={{
          y: [0, -15, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
        className="fixed left-24 top-[45%] w-6 h-6 rounded-full bg-cyan-400 shadow-[0_0_30px_#22d3ee] z-20"
      />

      <motion.div
        animate={{
          y: [0, 18, 0],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="fixed right-40 top-[30%] w-5 h-5 rounded-full bg-cyan-400 shadow-[0_0_30px_#22d3ee] z-20"
      />

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 backdrop-blur-xl bg-black/30">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

          <h1 className="text-3xl font-black">
            Abishikth
          </h1>

          <div className="flex gap-12 text-xl text-white/80">

            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>

            <a href="#projects" className="hover:text-cyan-400 transition">
              Projects
            </a>

            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>

          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative z-10 min-h-[90vh] flex flex-col justify-center items-center text-center px-6 pt-24">

        {/* ORBIT */}
        <div className="relative mb-20">

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 12,
              ease: "linear",
            }}
            className="w-72 h-72 rounded-full border border-cyan-400/20 flex items-center justify-center"
          >

            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 shadow-[0_0_80px_rgba(34,211,238,0.5)]" />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                repeat: Infinity,
                duration: 12,
                ease: "linear",
              }}
              className="absolute top-16 left-1/2 -translate-x-1/2"
            >
              <div className="w-6 h-6 rounded-full bg-cyan-300 shadow-[0_0_20px_#67e8f9]" />
            </motion.div>

          </motion.div>
        </div>

        <p className="tracking-[12px] uppercase text-cyan-300 text-xl mb-10">
          AI • Machine Learning • Autonomous Systems
        </p>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-[4.5rem] md:text-[7rem] leading-none font-black"
        >
          Abishikth
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-[4rem] md:text-[6.5rem] leading-none font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-12"
        >
          Ebenezer
        </motion.h1>

        <p className="max-w-4xl text-lg md:text-xl text-white/75 leading-[2.3]">
          AIML undergraduate passionate about multimodal AI, autonomous
          agents, LLM systems, and building futuristic intelligent
          experiences.
        </p>

        <div className="flex gap-6 mt-14 mb-24">

          <a
            href="https://github.com/abiMaestral"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3 rounded-full bg-cyan-400 text-black text-xl font-semibold hover:scale-105 transition"
          >
            Explore GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/abishikth-ebenezer"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3 rounded-full border border-white/20 text-xl hover:border-cyan-400 hover:text-cyan-400 transition"
          >
            LinkedIn
          </a>

        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="relative z-10 pt-40 pb-52 px-6"
      >

        <div className="max-w-6xl mx-auto text-center">

          <p className="tracking-[12px] uppercase text-cyan-300 text-xl mb-8">
            Philosophy
          </p>

          <h2 className="text-3xl md:text-5xl font-black leading-tight mb-20 text-center">
            Building AI
            <br />
            With Purpose
          </h2>

          <div className="max-w-5xl mx-auto bg-white/[0.03] border border-white/10 rounded-[40px] p-12 backdrop-blur-xl">

            <p className="text-xl text-white/75 leading-[2.2] text-center">
              I enjoy building intelligent systems that combine reasoning,
              interaction, and personalization. My interests include multimodal
              AI, autonomous agents, and AI assistants.
            </p>

            <p className="text-xl text-white/75 leading-[2.2] mt-8 text-center">
              Beyond technology, my Christian faith influences how I approach
              learning, creativity, and purpose. I aspire to build systems that
              positively impact people while staying grounded in integrity and
              humility.
            </p>

          </div>

          <div className="max-w-5xl mx-auto mt-10 rounded-[40px] border border-yellow-500/20 bg-yellow-500/5 p-10">

            <p className="text-3xl italic text-white/90 leading-[2]">
              “Whatever you do, work at it with all your heart, as working for
              the Lord.”
            </p>

            <p className="tracking-[10px] uppercase text-yellow-300 text-xl mt-6">
              Colossians 3:23
            </p>

          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="relative z-10 pt-52 pb-52 px-6"
      >

        <div className="max-w-7xl mx-auto text-center">

          <p className="tracking-[12px] uppercase text-cyan-300 text-xl mb-6">
            Showcase
          </p>

          <h2 className="text-3xl md:text-5xl font-black mb-10">
            Projects
          </h2>

          <p className="text-xl text-white/55 max-w-4xl mx-auto leading-[2] mb-24">
            Intelligent systems, multimodal AI experiences, autonomous agents,
            and research-driven projects.
          </p>

          <div className="grid md:grid-cols-2 gap-12">

            {projects.map((project, index) => (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                key={index}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                }}
                className="group relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] p-10 text-center backdrop-blur-xl"
              >

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-500/10 to-purple-500/10" />

                <p className="tracking-[8px] uppercase text-cyan-300 text-lg mb-5 relative z-10">
                  Project {project.id}
                </p>

                <h3 className="text-5xl font-black mb-8 relative z-10">
                  {project.title}
                </h3>

                <p className="text-white/70 text-xl leading-[2] relative z-10">
                  {project.description}
                </p>

                <div className="mt-16 relative z-10 flex items-center justify-center gap-3 text-cyan-300 text-2xl font-medium">
                  Explore Project
                  <ArrowRight size={24} />
                </div>

              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative z-10 pt-56 pb-40 px-6 text-center"
      >

        <div className="max-w-5xl mx-auto">

          <p className="tracking-[12px] uppercase text-cyan-300 text-xl mb-6">
            Connect
          </p>

          <h2 className="text-5xl md:text-7xl font-black mb-10 bg-gradient-to-r from-cyan-200 to-cyan-400 bg-clip-text text-transparent">
            Let’s Connect
          </h2>

          <p className="text-2xl text-white/65 leading-[2] mb-14">
            Open to AI, ML, Data Science, and software opportunities.
          </p>

          <motion.a
            whileHover={{
              scale: 1.05,
            }}
            href="mailto:abishikth.amcec@gmail.com"
            className="inline-flex items-center gap-4 px-10 py-5 rounded-full bg-cyan-400 text-black text-2xl font-bold shadow-[0_0_40px_rgba(34,211,238,0.4)]"
          >

            <Mail size={28} />
            Email Me

          </motion.a>

        </div>
      </section>
    </div>
  );
}