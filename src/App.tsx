import { useState } from "react";
import Floating3DCanvas from "../FloatingMesh";
import profile from "./assets/profile.png"
const projects = [
  {
    id: 1,
    title: "Scratch Adventures",
    category: "Curriculum",
    age: "Ages 6–8",
    description:
      "An interactive curriculum introducing kids to coding through Scratch using fun stories and adventures. Includes 20 progressive lessons with creative activities.",
    tech: ["Scratch", "Game Design", "Storytelling"],
    color: "bg-[#fbbf24]",
    accent: "text-[#92400e]",
    icon: "🎮",
    outcome: "200+ students completed",
  },
  {
    id: 2,
    title: "Python Juniors",
    category: "Curriculum",
    age: "Ages 10–14",
    description:
      "A comprehensive path for learning Python in a simple and engaging way. Covers core concepts, functions, lists, and hands-on projects.",
    tech: ["Python", "Turtle", "Mini Projects"],
    color: "bg-[#38bdf8]",
    accent: "text-[#0c4a6e]",
    icon: "🐍",
    outcome: "150+ students mastered basics",
  },
  {
    id: 3,
    title: "Web Wizards",
    category: "Curriculum",
    age: "Ages 11–14",
    description:
      "A step-by-step program for building websites with HTML, CSS, and JavaScript. Students finish by building and launching a real project.",
    tech: ["HTML", "CSS", "JavaScript"],
    color: "bg-[#a78bfa]",
    accent: "text-[#3b0764]",
    icon: "🌐",
    outcome: "90+ students built live sites",
  },
  {
    id: 4,
    title: "Code & Create",
    category: "Workshop",
    age: "Ages 8–12",
    description:
      "An intensive summer workshop combining coding with digital art. Kids design animated characters and simple games over two weeks.",
    tech: ["Scratch", "p5.js", "Animation"],
    color: "bg-[#34d399]",
    accent: "text-[#064e3b]",
    icon: "🎨",
    outcome: "3 successful summer cohorts",
  },
  {
    id: 5,
    title: "AI for Kids",
    category: "Curriculum",
    age: "Ages 12–14",
    description:
      "A hands-on introduction to AI for teens. Students learn how machines think and train models using real-world examples.",
    tech: ["ML4Kids", "Python", "Teachable Machine"],
    color: "bg-[#fb7185]",
    accent: "text-[#4c0519]",
    icon: "🤖",
    outcome: "First regional AI kids curriculum",
  },
  {
    id: 6,
    title: "Hour of Code",
    category: "Event",
    age: "Ages 6–14",
    description:
      "Organized annual Hour of Code events in local schools, connecting over 500 children to their very first programming experience.",
    tech: ["Code.org", "Event Design", "Community"],
    color: "bg-[#ff6b4a]",
    accent: "text-[#7f1d1d]",
    icon: "⏰",
    outcome: "500+ kids reached",
  },
];

const skills = [
  { label: "Scratch & Block Coding", level: 98, color: "#fbbf24" },
  { label: "Python", level: 90, color: "#38bdf8" },
  { label: "HTML / CSS / JS", level: 88, color: "#a78bfa" },
  { label: "Curriculum Design", level: 95, color: "#ff6b4a" },
  { label: "Classroom Management", level: 93, color: "#34d399" },
  { label: "AI & Machine Learning Basics", level: 80, color: "#fb7185" },
];

const stats = [
  { value: "4", label: "Years Experience", icon: "📅" },
  { value: "900+", label: "Students Taught", icon: "👧" },
  { value: "6", label: "Curricula Developed", icon: "📚" },
  { value: "6–14", label: "Age Group", icon: "🎯" },
];

function SkillBar({ label, level, color }: { label: string; level: number; color: string }) {
  return (
    <div className="mb-5">
      <div className="flex justify-between items-center mb-1.5">
        <span className="font-semibold text-[#1a1523] text-sm">{label}</span>
        <span className="text-xs font-mono text-[#7c3aed] font-bold">{level}%</span>
      </div>
      <div className="h-2.5 bg-[#ede9fe] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000"
          style={{ width: `${level}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="group relative bg-white rounded-2xl overflow-hidden border border-[#ede9fe] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`${project.color} h-3 w-full`} />
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <span className="text-3xl animate-float">{project.icon}</span>
          <div className="text-right">
            <span className="inline-block bg-[#f3f0ff] text-[#7c3aed] text-xs font-bold px-2.5 py-1 rounded-full">
              {project.category}
            </span>
            <div className="text-xs text-[#7c3aed] font-semibold mt-1">{project.age}</div>
          </div>
        </div>
        <h3 className="font-display font-bold text-xl text-[#1a1523] mb-2">{project.title}</h3>
        <p className="text-sm text-[#4a4358] leading-relaxed mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs font-mono font-medium bg-[#fdfaf6] border border-[#ede9fe] text-[#4a4358] px-2 py-0.5 rounded"
            >
              {t}
            </span>
          ))}
        </div>
        <div
          className={`flex items-center gap-2 text-xs font-bold transition-all duration-300 ${project.accent}`}
        >
          <span>✓</span>
          <span>{project.outcome}</span>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="min-h-full bg-[#fdfaf6] text-[#1a1523]">
      <div className="pointer-events-none fixed inset-0 z-0"><Floating3DCanvas /></div>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fdfaf6]/90 backdrop-blur-md border-b border-[#ede9fe]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="font-display font-black text-xl text-[#7c3aed]">
            maryam28475@gmail.com
          </a>
          {/* Desktop nav */}
          <ul className="hidden md:flex gap-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="px-4 py-2 rounded-lg text-sm font-semibold text-[#4a4358] hover:text-[#7c3aed] hover:bg-[#f3f0ff] transition-all"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="md:hidden p-2 rounded-lg hover:bg-[#f3f0ff] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="w-5 h-0.5 bg-[#1a1523] mb-1" />
            <div className="w-5 h-0.5 bg-[#1a1523] mb-1" />
            <div className="w-5 h-0.5 bg-[#1a1523]" />
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-[#ede9fe] px-6 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="py-2 px-3 rounded-lg text-sm font-semibold text-[#4a4358] hover:text-[#7c3aed] hover:bg-[#f3f0ff] transition-all"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="min-h-screen pt-16 flex flex-col items-center justify-center relative overflow-hidden"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-24 right-12 w-72 h-72 rounded-full bg-[#7c3aed]/8 blur-3xl" />
          <div className="absolute bottom-24 left-12 w-56 h-56 rounded-full bg-[#ff6b4a]/10 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#fbbf24]/5 blur-3xl" />
        </div>

        {/* Floating code snippets decoration */}
        <div className="absolute top-32 left-8 hidden lg:block opacity-30">
          <div className="font-mono text-xs text-[#7c3aed] bg-[#f3f0ff] px-3 py-2 rounded-lg border border-[#ede9fe] rotate-[-6deg]">
            print("Hello World!")
          </div>
        </div>
        <div className="absolute bottom-40 right-8 hidden lg:block opacity-30">
          <div className="font-mono text-xs text-[#ff6b4a] bg-[#fff7ed] px-3 py-2 rounded-lg border border-[#fed7aa] rotate-[5deg]">
            {"for child in students:"}
          </div>
        </div>
        <div className="absolute top-1/3 right-4 hidden lg:block opacity-20">
          <div className="font-mono text-xs text-[#34d399] bg-[#ecfdf5] px-3 py-2 rounded-lg border border-[#a7f3d0] rotate-[3deg]">
            {"<code>learn()"}
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#f3f0ff] text-[#7c3aed] border border-[#ddd6fe] px-4 py-2 rounded-full text-sm font-bold mb-8">
            <span className="animate-float">✨</span>
            <span>Coding Instructor & Curriculum Developer</span>
          </div>

          <h1 className="font-display font-black text-6xl md:text-8xl text-[#1a1523] leading-none mb-6">
            Maryam
            <br />
            <span className="text-[#7c3aed]">Mohamed</span>
          </h1>

          <p className="text-lg md:text-xl text-[#4a4358] max-w-2xl mx-auto leading-relaxed mb-10 font-medium">
            Inspiring kids to discover coding through fun and creativity.
            <br />
            <span className="text-[#ff6b4a] font-bold">4 years</span> of teaching code to kids aged{" "}
            <span className="text-[#7c3aed] font-bold">6 to 14</span>.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-[#7c3aed] text-white font-bold px-8 py-3.5 rounded-xl hover:bg-[#5b21b6] transition-colors shadow-lg shadow-[#7c3aed]/30"
            >
              <span>View Projects</span>
              <span>→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-[#1a1523] font-bold px-8 py-3.5 rounded-xl border-2 border-[#ede9fe] hover:border-[#7c3aed] transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Stats strip */}
        <div className="relative w-full max-w-4xl mx-auto px-6 mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white border border-[#ede9fe] rounded-2xl p-5 text-center hover:border-[#7c3aed] transition-colors"
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="font-display font-black text-3xl text-[#7c3aed]">{stat.value}</div>
                <div className="text-xs text-[#4a4358] font-semibold mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-[#1a1523]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Image side */}
            <div className="relative order-2 md:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-[#7c3aed] rounded-3xl translate-x-3 translate-y-3" />
                <img
                  src='/profile.png'
                  alt="Maryam Mohamed"
                  className="relative rounded-3xl w-full object-cover aspect-[4/5] grayscale hover:grayscale-0 transition-all duration-500"
                />
                {/* Tag */}
                <div className="absolute -bottom-4 -left-4 bg-[#ff6b4a] text-white font-display font-black text-sm px-5 py-3 rounded-2xl shadow-lg rotate-[-3deg]">
                  💻 Coding Instructor
                </div>
              </div>
            </div>

            {/* Text side */}
            <div className="order-1 md:order-2">
              <div className="inline-block bg-[#7c3aed]/20 text-[#a78bfa] text-xs font-bold px-3 py-1.5 rounded-full mb-6 tracking-widest uppercase">
                About Me
              </div>
              <h2 className="font-display font-black text-4xl md:text-5xl text-white leading-tight mb-6">
                Turning
                <br />
                <span className="text-[#ff6b4a]">Big Ideas</span>
                <br />
                Into Real Code
              </h2>
              <div className="space-y-4 text-[#d1c4e9] leading-relaxed">
                <p>
                  I'm <strong className="text-white">Maryam Mohamed</strong>, a coding instructor and curriculum developer specializing in youth STEM education. Over the past 4 years, I've helped more than 900 kids discover a passion for programming and launch their own projects.
                </p>
                <p>
                  I believe every child has the capacity for logical and creative thinking. My goal is to make complex concepts engaging, practical, and accessible across all age levels.
                </p>
                <p>
                  I have built tailored learning paths across{" "}
                  <span className="text-[#fbbf24] font-semibold">
                    Scratch, Python, HTML/CSS, and AI basics
                  </span>{" "}
                  — all customized specifically for learners aged 6 to 14.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {["Scratch", "Python", "HTML/CSS", "AI for Kids", "Curriculum Design"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="bg-[#ffffff10] text-[#e9d5ff] border border-[#ffffff15] text-xs font-mono font-medium px-3 py-1.5 rounded-lg"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#fff7ed] text-[#ff6b4a] text-xs font-bold px-3 py-1.5 rounded-full mb-4 tracking-widest uppercase">
              Projects
            </div>
            <h2 className="font-display font-black text-4xl md:text-5xl text-[#1a1523]">
              Programs I've <span className="text-[#7c3aed]">Created</span>
            </h2>
            <p className="mt-4 text-[#4a4358] max-w-xl mx-auto">
              Each program is designed specifically around age-appropriate development and hands-on project creation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-24 bg-[#7c3aed] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ff6b4a]/15 rounded-full translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-full mb-6 tracking-widest uppercase">
            Teaching Philosophy
          </div>
          <h2 className="font-display font-black text-4xl md:text-6xl text-white leading-tight mb-8">
            "Coding isn't just a skill —
            <br />
            <span className="text-[#fbbf24]">it's a mindset."</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: "🧩",
                title: "Gamified Learning",
                desc: "Turning every concept into a game or puzzle that leaves kids asking for more.",
              },
              {
                icon: "🚀",
                title: "Smart Progression",
                desc: "Moving smoothly from basic concepts to complex topics with confidence.",
              },
              {
                icon: "💡",
                title: "Creativity First",
                desc: "Encouraging bold ideas and teaching kids how to turn them into working code.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/10 backdrop-blur rounded-2xl p-6 text-left border border-white/20 hover:bg-white/15 transition-colors"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="font-display font-bold text-xl text-white mb-2">{item.title}</h3>
                <p className="text-[#ddd6fe] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 bg-[#fdfaf6]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-block bg-[#f0fdf4] text-[#10b981] text-xs font-bold px-3 py-1.5 rounded-full mb-6 tracking-widest uppercase">
                Skills
              </div>
              <h2 className="font-display font-black text-4xl md:text-5xl text-[#1a1523] mb-4">
                My Technical
                <br />
                <span className="text-[#7c3aed]">Toolkit</span>
              </h2>
              <p className="text-[#4a4358] leading-relaxed mb-8">
                Proficient in a variety of tools, languages, and pedagogical methods designed to make software development accessible to kids.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "👧", label: "Youth Teaching" },
                  { icon: "📐", label: "Curriculum Design" },
                  { icon: "🎤", label: "Public Speaking" },
                  { icon: "🏆", label: "Classroom Mgmt" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 bg-white border border-[#ede9fe] rounded-xl p-4 hover:border-[#7c3aed] transition-colors"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="font-semibold text-sm text-[#1a1523]">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-[#ede9fe] rounded-3xl p-8">
              <h3 className="font-display font-bold text-lg text-[#1a1523] mb-6">
                Technologies & Tools
              </h3>
              {skills.map((skill) => (
                <SkillBar key={skill.label} {...skill} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#1a1523]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-block bg-[#fbbf24]/20 text-[#fbbf24] text-xs font-bold px-3 py-1.5 rounded-full mb-4 tracking-widest uppercase">
              Testimonials
            </div>
            <h2 className="font-display font-black text-4xl text-white">
              What People <span className="text-[#ff6b4a]">Say</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Ahmed's Mother",
                role: "Parent of 10-year-old",
                text: "My son was hesitant around computers, but after 3 months with Maryam, he's teaching his friends to code! Her patience and method are unmatched.",
                color: "border-[#fbbf24]",
              },
              {
                name: "Sarah",
                role: "Student (Age 13)",
                text: "I love how Maryam explains everything. She makes every lesson fun and never gets tired of our questions. She inspired me to become a developer!",
                color: "border-[#ff6b4a]",
              },
              {
                name: "School Director",
                role: "Al-Amal International School",
                text: "We partnered with Maryam to craft our school's primary coding curriculum. Her professionalism and creativity were exceptional.",
                color: "border-[#a78bfa]",
              },
            ].map((t) => (
              <div
                key={t.name}
                className={`bg-[#ffffff08] border-l-4 ${t.color} rounded-2xl p-6 hover:bg-[#ffffff12] transition-colors`}
              >
                <div className="text-[#fbbf24] text-xl mb-4">★★★★★</div>
                <p className="text-[#d1c4e9] text-sm leading-relaxed mb-6">"{t.text}"</p>
                <div>
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-xs text-[#9ca3af]">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="inline-block bg-[#f3f0ff] text-[#7c3aed] text-xs font-bold px-3 py-1.5 rounded-full mb-6 tracking-widest uppercase">
            Contact
          </div>
          <h2 className="font-display font-black text-4xl md:text-5xl text-[#1a1523] mb-4">
            Let's <span className="text-[#ff6b4a]">Work Together</span>
          </h2>
          <p className="text-[#4a4358] mb-10 text-lg">
            Whether you're looking for an instructor or a curriculum designer — I'd love to connect!
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            {[
              { icon: "📧", label: "Email", value: "maryam28475@gmail.com" },
              { icon: "💼", label: "LinkedIn", value: "https://www.linkedin.com/in/maryam-mohamed-217130246" },
              { icon: "📍", label: "Location", value: "Remote & In-person" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white border border-[#ede9fe] rounded-2xl p-5 hover:border-[#7c3aed] transition-colors"
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <div className="font-bold text-[#1a1523] text-sm mb-1">{item.label}</div>
                <div className="text-xs text-[#4a4358]">{item.value}</div>
              </div>
            ))}
          </div>

          <a
            href="mailto:maryam28475@gmail.com"
            className="inline-flex items-center gap-3 bg-[#ff6b4a] text-white font-display font-bold text-lg px-10 py-4 rounded-2xl hover:bg-[#e5522f] transition-colors shadow-lg shadow-[#ff6b4a]/30"
          >
            <span>Send a Message</span>
            <span>✉️</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1523] py-10 text-center">
        <div className="font-display font-black text-2xl text-[#7c3aed] mb-2">Maryam.dev</div>
        <p className="text-sm text-[#6b7280]">
          © 2026 Maryam Mohamed — Coding Instructor & Curriculum Developer
        </p>
        <p className="text-xs text-[#4a4358] mt-2">
          Crafted with ❤️ to inspire the next generation of creators
        </p>
      </footer>
    </div>
  );
}