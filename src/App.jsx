import exhibition from "./assets/exhibition.jpg?url";
import portrait from "./assets/portrait.jpg?url";
import resumePDF from "./assets/Resume_Abi_AIML.pdf";

import induction from "./assets/induction1.jpg?url";
import mentoring from "./assets/mentoring.jpg?url";
import event from "./assets/event1.jpg?url";


import { motion } from "framer-motion";
import {
  Mail,
  ExternalLink,
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

      stats: [
        "Voice AI",
        "Face Auth",
        "LiveKit",
        "LLM"
      ],
      status: "🟢Active Development"
    },
    {
      id: "02",
      title: "AMPLA",
      description:
        "Autonomous multi-agent learning assistant with LLM-based explanation generation and evaluation logic.",
      link: "https://github.com/abiMaestral/AMPLA",
      stats: [
        "Multi-Agent",
        "RAG",
        "Memory",
        "LLM"
      ],
      status: "🟡Research Prototype"
    },
    {
      id: "03",
      title: "Cognitive Digital Twin",
      description:
        "Behavior modeling framework using sequence-based architectures like RNNs and Transformers.",
      link: "https://github.com/abiMaestral/cognitive-digital-twin",
      stats: [
        "Transformers",
        "RNN",
        "Behavior Model",
        "Prediction"
      ],
      status: "🟡Research Prototype"
    },
    {
      id: "04",
      title: "Disease Prediction",
      description:
        "Machine learning models for disease prediction using preprocessing and Random Forest algorithms.",
      link: "https://github.com/abiMaestral/DiseasePred",
      stats: [
        "Random Forest",
        "ML",
        "Data Prep",
        "Prediction"
      ],
      status: "🔵Completed"
    },
  ];

  const quotes = [
  "AI is not replacing humans. Humans using AI will replace humans not using AI.",
  "The future belongs to those who learn faster than change.",
  "Technology is best when it brings people together.",
  "Great systems are built with purpose, not just code.",
  "Faith. Learning. Innovation. Impact."
];

  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const skills = [
  "Python",
  "Machine Learning",
  "Deep Learning",
  "NLP",
  "Computer Vision",
  "LLMs",
  "RAG",
  "LangChain",
  "Multi-Agent Systems",
  "PyTorch",
  "React",
  "Git",
  "SQL",
  "Data Analysis",
  "Power BI",
  "Excel"
];

  const activities = [
  {
    title: "Project Exhibition",
    image: exhibition,
    description:
      "Presented Voxmate during AMC Engineering College Open Day."
  },

  {
    title: "Student Induction Speaker",
    image: induction,
    description:
      "Addressed incoming first-year students during induction."
  },

  {
    title: "Mentorship",
    image: mentoring,
    description:
      "Guided juniors on AI projects and technical development."
  },

  {
    title: "Department Speaker",
    image: event,
    description:
      "Represented student initiatives during departmental events."
  }
];
  return (
    <div className="bg-black text-white overflow-hidden selection:bg-cyan-400 selection:text-black relative pt-20">

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

        <div className="w-full flex justify-between items-center px-10 py-4">

          <h1 className="text-2xl font-black">
            Abishikth
          </h1>

          <div className="flex gap-12 text-xl text-white/80">

            <a
              href="#about"
              className="hover:text-cyan-400 transition"
            >
              About
            </a>

            <a
              href="#projects"
              className="hover:text-cyan-400 transition"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="hover:text-cyan-400 transition"
            >
              Contact
            </a>

          </div>
        </div>
      </nav>

                  {/* SECTION DIVIDER */}
            <div className="relative z-10 h-32" />

      {/* HERO */}
<section className="relative z-10 px-6 pt-36 pb-0 flex justify-center overflow-visible">

  <div className="max-w-7xl mx-auto w-full min-h-[500px]">

    <div className="grid lg:grid-cols-2 gap-12 items-center">

      {/* LEFT SIDE */}
      <div className="flex justify-center">

        <div className="relative">

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 12,
              ease: "linear",
            }}
          />

          <img
            src={portrait}
            alt="Abishikth Ebenezer"
            className="w-[300px] md:w-[380px] h-[380px] object-cover rounded-[40px] border border-white/10 shadow-[0_0_80px_rgba(34,211,238,0.15)]"
          />

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 10,
              ease: "linear",
            }}
            className="absolute inset-0"
          >
            <div className="absolute top-0 right-12 w-5 h-5 rounded-full bg-cyan-300 shadow-[0_0_20px_#67e8f9]" />
          </motion.div>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="text-center lg:text-left flex flex-col justify-center">

        <p className="tracking-[6px] uppercase text-cyan-300 text-sm md:text-lg mb-8 mt-4 text-center lg:text-left flex flex-wrap gap-x-2 justify-center lg:justify-start">
          <span>AI</span>
          <span>•</span>
          <span>Machine Learning</span>
          <span>•</span>
          <span>Autonomous Systems</span>
        </p>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-[3rem] md:text-[4.8rem] leading-none font-black"
        >
          Abishikth
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-[2.8rem] md:text-[4.5rem] leading-none font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-10"
        >
          Ebenezer
        </motion.h1>

        <p className="max-w-2xl text-lg md:text-xl text-white/75 leading-[2]">
          AIML undergraduate passionate about multimodal AI,
          autonomous agents, LLM systems, and building futuristic
          intelligent experiences.
        </p>

        <div className="flex flex-wrap gap-6 mt-10 justify-center lg:justify-start">

          <a
            href="https://github.com/abiMaestral"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3 rounded-full bg-cyan-400 text-black text-lg font-semibold hover:scale-105 transition"
          >
            Explore GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/abishikth-ebenezer"
            target="_blank"
            rel="noreferrer"
            className="px-8 py-3 rounded-full border border-white/20 text-lg hover:border-cyan-400 hover:text-cyan-400 transition"
          >
            LinkedIn
          </a>
            <a
            href={resumePDF}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-full border border-cyan-400/30 text-cyan-300 hover:bg-cyan-400/10 transition"
          >
            Download Resume
          </a>
        </div>

      </div>

    </div>

  </div>

</section>

      {/* ABOUT */}
      <section
        id="about"
        className="relative z-10 pt-20 pb-72 px-6 flex justify-center"
      >

        <div className="w-full max-w-6xl mx-auto text-center flex flex-col items-center">

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
              interaction, and personalization. My interests include
              multimodal AI, autonomous agents, and AI assistants.
            </p>

            <p className="text-xl text-white/75 leading-[2.2] mt-8 text-center">
              Beyond technology, my Christian faith influences how I
              approach learning, creativity, and purpose. I aspire to
              build systems that positively impact people while staying
              grounded in integrity and humility.
            </p>

          </div>

          <div className="max-w-5xl mx-auto mt-10 rounded-[40px] border border-yellow-500/20 bg-yellow-500/5 p-10">

            <p className="text-3xl italic text-white/90 leading-[2]">
              “Whatever you do, work at it with all your heart, as
              working for the Lord.”
            </p>

            <p className="tracking-[10px] uppercase text-yellow-300 text-xl mt-6">
              Colossians 3:23
            </p>

          </div>
        </div>
      </section>

      {/* SECTION DIVIDER */}
            <div className="relative z-10 h-32" />  
       {/* QUOTE SECTION */}

      <section className="relative z-10 py-20 px-6 flex justify-center">

        <div className="w-full max-w-5xl">

          <motion.div
            key={quoteIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="rounded-[40px] border border-cyan-500/20 bg-white/[0.03] backdrop-blur-xl p-12 text-center"
          >

            <p className="tracking-[10px] uppercase text-cyan-300 text-sm mb-6">
              Vision
            </p>

            <h3 className="text-2xl md:text-4xl font-bold text-white leading-relaxed text-center">
              "{quotes[quoteIndex]}"
            </h3>

          </motion.div>

        </div>

      </section>

            {/* SECTION DIVIDER */}
            <div className="relative z-10 h-32" />
{/* PROJECTS */}     
      {/* PROJECTS */}
      <section
        id="projects"
        className="relative z-10 pt-32 pb-52 px-6 flex justify-center"
      >

        <div className="w-full max-w-6xl mx-auto text-center flex flex-col items-center">

          <p className="tracking-[12px] uppercase text-cyan-300 text-xl mb-6">
            Showcase
          </p>

          <h2 className="text-3xl md:text-5xl font-black mb-10">
            Projects
          </h2>

            
          <p className="text-xl text-white/55 max-w-4xl mx-auto leading-[2] mb-24">
            Intelligent systems, multimodal AI experiences,
            autonomous agents, and research-driven projects.
          </p>

          <div className="grid md:grid-cols-2 gap-12 w-full">

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
                className={`group relative overflow-hidden rounded-[40px] p-10 text-center backdrop-blur-xl 
${
  project.id === "01"
    ? "border border-cyan-400/40 shadow-[0_0_35px_rgba(34,211,238,0.15)] bg-cyan-500/[0.04] "
    : "border border-white/10 bg-white/[0.03]"
}`}
              >
                {project.id === "01" && (
                  <div className="absolute top-5 right-5 z-20 px-5 py-2 rounded-full bg-cyan-400 text-xs font-black tracking-[3px] flex items-center justify-center">
                    FEATURED⭐
                  </div>
                )}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-500/10 to-purple-500/10" />

                <p className="tracking-[8px] uppercase text-cyan-300 text-lg mb-5 relative z-10">
                  Project {project.id}
                </p>
                <div className="mb-6 relative z-10">
  <span className="px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-300 text-sm">
    {project.status}
  </span>
</div>

                    {project.id === "01" && (
      <>
        <span className="sparkle sparkle-1">✦</span>
        <span className="sparkle sparkle-2">✦</span>
        <span className="sparkle sparkle-3">✦</span>
      </>
    )}
                <div className="absolute top-6 left-6 z-20 text-white/40">
  <ExternalLink size={20} />
</div>

                <h3 className="text-3xl font-black mb-8 relative z-10">
                  {project.title}
                </h3>

                <p className="text-white/70 text-xl leading-[2] relative z-10">
                  {project.description}
                </p>
                <div className="flex flex-wrap justify-center gap-3 mt-8 relative z-10">
  {project.stats.map((stat, i) => (
    <span
      key={i}
      className="px-4 py-2 rounded-full text-sm text-cyan-300 border border-cyan-500/20 bg-cyan-500/5"
    >
      {stat}
    </span>
  ))}
</div>
                
              
              </motion.a>
            ))}
          </div>
            <p className="mt-16 text-xl text-white/60">
  For more projects{" "}
  <a
    href="https://github.com/abiMaestral"
    target="_blank"
    rel="noreferrer"
    className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 transition"
  >
    visit my GitHub profile.
  </a>
</p>
        </div>
      </section>
                  {/* SECTION DIVIDER */}
            <div className="relative z-10 h-32" />

{/* SKILLS */}

<section
  id="skills"
  className="relative z-10 py-32 px-6 flex justify-center"
>
  <div className="w-full max-w-6xl mx-auto text-center">

    <p className="tracking-[12px] uppercase text-cyan-300 text-xl mb-6">
      Expertise
    </p>

    <h2 className="text-4xl md:text-5xl font-black mb-16">
      Technical Skills
    </h2>
             {/* SECTION DIVIDER */}
            <div className="relative z-10 h-5" />
    <div className="flex flex-wrap justify-center gap-6">

      {skills.map((skill, index) => (

        <motion.div
          key={index}
          whileHover={{
            scale: 1.08,
            y: -5,
          }}
          className="px-8 py-4 rounded-full border border-cyan-500/20 bg-white/[0.03] backdrop-blur-xl text-lg font-medium"
        >
          {skill}
        </motion.div>

      ))}

    </div>

  </div>
</section>

      {/* SECTION DIVIDER */}
<div className="relative z-10 h-32" />

      {/* LEADERSHIP */}
<section
  id="leadership"
  className="relative z-10 py-52 px-6 flex justify-center mt-20"
>

  <div className="w-full max-w-6xl mx-auto text-center">

    <p className="tracking-[12px] uppercase text-cyan-300 text-xl mb-6">
      Beyond Projects
    </p>

    <h2 className="text-4xl md:text-5xl font-black mb-12">
      Leadership & Community
    </h2>

    <div className="grid md:grid-cols-2 gap-10">

      {activities.map((item, index) => (

        <motion.div
          key={index}
          whileHover={{
            y: -10,
            scale: 1.02,
          }}
          className="overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] backdrop-blur-xl"
        >

          <img
            src={item.image}
            alt={item.title}
            className="w-full h-[320px] object-cover"
          />

          <div className="p-8">

            <h3 className="text-3xl font-bold mb-4">
              {item.title}
            </h3>

            <p className="text-white/70 text-lg leading-[1.8]">
              {item.description}
            </p>

          </div>

        </motion.div>

      ))}

    </div>

  </div>

</section>

                  {/* SECTION DIVIDER */}
            <div className="relative z-10 h-32" />

      {/* CONTACT */}
      <section
        id="contact"
        className="relative z-10 pt-52 pb-32 px-6 flex justify-center"
      >

        <div className="w-full max-w-6xl mx-auto text-center flex flex-col items-center">

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
          <p className="mt-8 text-white/60 text-lg">
            abishikth.amcec@gmail.com
          </p>
    "

          <div className="px-10 py-5 rounded-full border border-white/10 bg-white/[0.03] text-xl">
            📞 +91 9980443485
          </div>
        </div>
      </section>
    </div>
  );
}
