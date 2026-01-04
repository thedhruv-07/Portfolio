// Premium React Portfolio Website for Dhruv Kumar
// Features: Animations (Framer Motion), Resume Download, Premium UI
// Tech: React + Tailwind CSS + Framer Motion

import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function App() {
  return (
    <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-black text-gray-100 min-h-screen font-sans">
      {/* Navbar */}
      <header className="fixed top-0 w-full bg-black/70 backdrop-blur-xl z-50 border-b border-white/10">
        <nav className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-xl font-bold tracking-wide">Dhruv Kumar</h1>
          <ul className="hidden md:flex gap-8 text-sm">
            {['About', 'Skills', 'Projects', 'Contact'].map(item => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="hover:text-indigo-400 transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-36 pb-28 text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold mb-6"
        >
          Frontend Web Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-2xl mx-auto text-gray-400 mb-8"
        >
          Fresher Frontend Web Developer skilled in HTML, CSS, JavaScript, and React,
          building responsive web applications with modern UI and authentication.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-4 flex-wrap"
        >
          <a href="#projects" className="px-6 py-3 bg-indigo-600 rounded-xl hover:bg-indigo-700 transition">
            View Projects
          </a>
          <a
            href="/Dhruv_Kumar_Resume.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 border border-white/20 rounded-xl hover:border-indigo-400 transition"
          >
            <Download size={18} /> Download Resume
          </a>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-24">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-semibold mb-6"
        >
          About Me
        </motion.h3>
        <p className="text-gray-400 leading-relaxed">
          Computer Engineering student at J.C. Bose University of Science & Technology, YMCA (2022–2026).
          Passionate about crafting clean, responsive, and scalable frontend applications.
          Actively seeking frontend or React internship opportunities.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-black/40 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h3
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            className="text-3xl font-semibold mb-12"
          >
            Technical Skills
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-10">
            <Skill title="Frontend" items="HTML5, CSS3, JavaScript, React, Tailwind CSS" />
            <Skill title="Concepts" items="DSA, OOP, Responsive Design" />
            <Skill title="Tools" items="Git, GitHub, VS Code, npm, Vite, Netlify, Vercel" />
            <Skill title="Coursework" items="DBMS, Computer Networks, Operating Systems" />
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
        <motion.h3
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          className="text-3xl font-semibold mb-12"
        >
          Projects
        </motion.h3>
        <div className="grid md:grid-cols-2 gap-10">
          <Project
            title="Hotel Booking App"
            desc="Hotel booking platform with Clerk authentication, protected routes, and booking flows."
            tech="React, Clerk Auth, JavaScript"
            demo="#"
            github="#"
          />
          <Project
            title="Employee Management System"
            desc="React-based EMS with reusable components and localStorage persistence."
            tech="React, Tailwind CSS"
            demo="#"
            github="#"
          />
          <Project
            title="Gemini AI Clone"
            desc="Real-time AI chat app using Gemini API and async JavaScript."
            tech="HTML, CSS, JavaScript"
            demo="#"
            github="#"
          />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-black/40 py-24 px-6 text-center">
        <motion.h3
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          className="text-3xl font-semibold mb-6"
        >
          Contact
        </motion.h3>
        <p className="text-gray-400 mb-4">Open for internships & collaborations</p>
        <p>
          Email:{" "}
          <a className="text-indigo-400" href="mailto:dhruvsingh200420@gmail.com">
            dhruvsingh200420@gmail.com
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a className="text-indigo-400" href="https://www.linkedin.com/in/dhruv077">
            linkedin.com/in/dhruv077
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a className="text-indigo-400" href="https://github.com/thedhruv-07">
            github.com/thedhruv-07
          </a>
        </p>
      </section>

      <footer className="text-center py-6 text-gray-500 text-sm">
        © 2026 Dhruv Kumar · Frontend Developer
      </footer>
    </div>
  );
}

function Skill({ title, items }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-white/5 rounded-2xl p-6 border border-white/10"
    >
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p className="text-gray-400">{items}</p>
    </motion.div>
  );
}

function Project({ title, desc, tech, demo, github }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="bg-white/5 rounded-2xl p-6 border border-white/10"
    >
      <div className="h-40 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl mb-4 flex items-center justify-center text-gray-400 text-sm">
        Project Preview
      </div>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-400 mb-3">{desc}</p>
      <p className="text-sm text-indigo-400 mb-4">{tech}</p>
      <div className="flex gap-3">
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 text-sm bg-indigo-600 rounded-lg hover:bg-indigo-700"
          >
            Live Demo
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 text-sm border border-white/20 rounded-lg hover:border-indigo-400"
          >
            Code
          </a>
        )}
      </div>
    </motion.div>
  );
}
