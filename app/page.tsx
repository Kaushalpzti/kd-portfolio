"use client";

import dynamic from "next/dynamic";
import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Braces,
  Check,
  Code2,
  Command,
  ExternalLink,
  Download,
  Layers3,
  Mail,
  MapPin,
  Menu,
  Rocket,
  Sparkles,
  X,
  Zap,
} from "lucide-react";

// TODO before launch: replace these values with your real contact/profile URLs.
// The form opens the visitor's email app; it does not send mail through a server.
const CONTACT_EMAIL = "YOUR_EMAIL_HERE"; // Replace with your real professional email before launch.
const GITHUB_URL = "https://github.com/Kaushalpzti";
const LINKEDIN_URL = ""; // Add your exact LinkedIn profile URL when ready.
const RESUME_URL = "/Kaushal-Prazapati-Resume.pdf";

function InstagramGlyph({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

const HeroScene = dynamic(() => import("./components/HeroScene"), {
  ssr: false,
  loading: () => <div className="scene-loading" aria-label="Loading 3D scene" />,
});

type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  visual: "pujo" | "foto" | "buildryx" | "comfy";
  kind: "Product" | "Creative" | "Brand" | "Commerce";
  status: string;
  challenge: string;
  solution: string;
  highlights: string[];
  nextStep: string;
  href?: string;
};

const projectFilters = ["All work", "Product", "Creative", "Brand", "Commerce"] as const;
type ProjectFilter = (typeof projectFilters)[number];

const projects: Project[] = [
  {
    number: "01",
    title: "PatnaPujo",
    category: "Festival discovery · Maps",
    description:
      "A mobile-first way to discover Durga Puja pandals across Patna, explore crowd information, and plan a better pandal-hopping route.",
    tags: ["React", "Vite", "Leaflet", "OpenStreetMap"],
    visual: "pujo",
    kind: "Product",
    status: "LIVE PROJECT",
    challenge:
      "Pandal-hopping can mean juggling scattered location details, crowd conditions, and travel decisions across the city.",
    solution:
      "PatnaPujo brings pandal discovery into a single mobile-first experience, with a map-led interface and clear crowd information to help visitors plan their outing.",
    highlights: [
      "Map-based pandal discovery built around Patna",
      "Crowd-level browsing and discovery filters",
      "A foundation for saved places and route-planning improvements",
    ],
    nextStep:
      "Keep improving data quality, route guidance, and the reporting workflow as the project evolves.",
    href: "https://patnapujo.vercel.app/",
  },
  {
    number: "02",
    title: "FotoTaker",
    category: "Photography · Visual storytelling",
    description:
      "A photography-focused web experience built around visual storytelling, immersive galleries, and clean presentation.",
    tags: ["Portfolio UI", "Responsive design", "Visual direction"],
    visual: "foto",
    kind: "Creative",
    status: "CREATIVE PROJECT",
    challenge:
      "Photography work needs to be presented with enough space and visual focus for the images to lead the experience.",
    solution:
      "FotoTaker explores an image-first portfolio direction, using a restrained layout and editorial-style presentation rather than distracting UI.",
    highlights: [
      "Image-led storytelling and gallery presentation",
      "Minimal layout designed to keep attention on the work",
      "A visual direction that can be extended with updated photography",
    ],
    nextStep:
      "Refresh the gallery and verify the preferred public URL before promoting this project as an active live site.",
  },
  {
    number: "03",
    title: "Buildryx",
    category: "Web development · Brand concept",
    description:
      "A digital brand direction for helping local businesses get modern websites, e-commerce experiences, and practical online tools.",
    tags: ["Branding", "Web design", "Business websites"],
    visual: "buildryx",
    kind: "Brand",
    status: "AGENCY BRAND",
    challenge:
      "Local businesses can struggle to turn an idea for an online presence into a clear, credible website that helps customers take action.",
    solution:
      "Buildryx frames website design and development as approachable services, with a modern brand direction and a focus on useful business outcomes.",
    highlights: [
      "Clear service positioning for local businesses",
      "Modern visual identity and landing-page direction",
      "Scope to demonstrate e-commerce and lead-generation flows",
    ],
    nextStep:
      "Build a polished public agency site and add case studies from real client work as they become available.",
  },
  {
    number: "04",
    title: "Comfy Core",
    category: "Commerce · Fashion accessories",
    description:
      "A youthful accessories and gifting brand concept focused on easy product discovery, thoughtful bundles, and an approachable shopping experience.",
    tags: ["E-commerce", "Product experience", "Branding"],
    visual: "comfy",
    kind: "Commerce",
    status: "COMMERCE BRAND",
    challenge:
      "Small accessories can be hard to browse as a cohesive collection when products, bundles, and gifting options are presented separately.",
    solution:
      "Comfy Core uses a friendly visual identity and product-led presentation to make accessories, combos, and gifting feel like one connected brand experience.",
    highlights: [
      "Soft, playful brand direction",
      "Product and bundle-focused merchandising",
      "A foundation for a more complete online shopping flow",
    ],
    nextStep:
      "Keep product information, stock, shipping policies, and storefront links accurate before directing portfolio visitors to purchase.",
  },
];

const skillGroups = [
  {
    title: "Frontend",
    description: "Interfaces that feel clear, fast, and considered.",
    icon: Code2,
    skills: ["React", "Next.js", "JavaScript", "TypeScript", "HTML & CSS", "Tailwind CSS"],
  },
  {
    title: "Data & integrations",
    description: "Connecting product experiences to useful data and services.",
    icon: Braces,
    skills: ["REST APIs", "Supabase", "Firebase", "Authentication", "Leaflet", "OpenStreetMap"],
  },
  {
    title: "Build & ship",
    description: "The practical tooling behind getting projects online.",
    icon: Rocket,
    skills: ["Git & GitHub", "Vercel", "Responsive UI", "SEO basics", "Three.js", "React Three Fiber"],
  },
];

const approaches = [
  {
    number: "01",
    title: "Understand the problem",
    text: "Start with the person using the product, the problem they face, and the outcome that matters.",
  },
  {
    number: "02",
    title: "Design for clarity",
    text: "Make the interface feel intentional—good hierarchy, helpful feedback, and fewer unnecessary steps.",
  },
  {
    number: "03",
    title: "Build, test, improve",
    text: "Ship a useful first version, learn from it, and keep improving the details that make it better.",
  },
];

function ProjectArtwork({ visual }: { visual: Project["visual"] }) {
  if (visual === "pujo") {
    return (
      <div className="artwork artwork-pujo">
        <div className="map-grid" />
        <div className="map-road road-one" />
        <div className="map-road road-two" />
        <div className="map-road road-three" />
        <div className="map-label label-one">PATNA</div>
        <div className="map-label label-two">PUJO ROUTE</div>
        <span className="map-pin pin-one"><MapPin size={17} /></span>
        <span className="map-pin pin-two"><MapPin size={17} /></span>
        <span className="map-pin pin-three"><MapPin size={17} /></span>
        <div className="map-mini-card"><span className="mini-status-dot" /> Explore pandals <ArrowUpRight size={14} /></div>
      </div>
    );
  }

  if (visual === "foto") {
    return (
      <div className="artwork artwork-foto">
        <div className="photo-frame photo-frame-back" />
        <div className="photo-frame photo-frame-main">
          <div className="photo-sun" />
          <div className="photo-mountain mountain-back" />
          <div className="photo-mountain mountain-front" />
          <div className="photo-water" />
        </div>
        <div className="photo-caption"><span>FIELD NOTES / 001</span><strong>Chase the light.</strong></div>
        <div className="photo-index">01 — 04</div>
      </div>
    );
  }

  if (visual === "buildryx") {
    return (
      <div className="artwork artwork-buildryx">
        <div className="buildryx-window">
          <div className="window-bar"><i /><i /><i /><span>buildryx.studio</span></div>
          <div className="buildryx-content">
            <span className="buildryx-label">DIGITAL, DONE RIGHT.</span>
            <div className="buildryx-heading">Build a better<br /><b>online presence.</b></div>
            <div className="buildryx-line" /><div className="buildryx-line short" />
            <div className="buildryx-cta">Explore services <ArrowUpRight size={13} /></div>
          </div>
        </div>
        <div className="buildryx-orb orb-a" /><div className="buildryx-orb orb-b" />
      </div>
    );
  }

  return (
    <div className="artwork artwork-comfy">
      <div className="comfy-header"><span>comfy core</span><span>little things, big joy ♡</span></div>
      <div className="comfy-products">
        <div className="comfy-item item-one"><div className="product-flower">✿</div><span>FLOWER CLIP</span></div>
        <div className="comfy-item item-two"><div className="product-pearl">◌</div><span>PEARL DAYS</span></div>
        <div className="comfy-item item-three"><div className="product-bow">୨୧</div><span>GIFT EDIT</span></div>
      </div>
      <div className="comfy-bottom"><span>NEW LITTLE FAVOURITES</span><ArrowUpRight size={14} /></div>
    </div>
  );
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [projectFilter, setProjectFilter] = useState<ProjectFilter>("All work");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [contactStatus, setContactStatus] = useState("");

  const filteredProjects = projects.filter(
    (project) => projectFilter === "All work" || project.kind === projectFilter,
  );

  useEffect(() => {
    if (!selectedProject) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  const closeMenu = () => setMenuOpen(false);

  function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const senderEmail = String(form.get("email") ?? "").trim();
    const topic = String(form.get("topic") ?? "Project enquiry").trim();
    const message = String(form.get("message") ?? "").trim();

    if (!CONTACT_EMAIL.includes("@") || CONTACT_EMAIL === "YOUR_EMAIL_HERE") {
      setContactStatus(
        "The form is ready, but the recipient email has not been configured. Update CONTACT_EMAIL near the top of app/page.tsx before publishing.",
      );
      return;
    }

    const subject = `${topic} from ${name}`;
    const body = [
      `Hi Kaushal,`,
      "",
      message,
      "",
      `Name: ${name}`,
      `Reply-to: ${senderEmail}`,
      `Topic: ${topic}`,
    ].join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setContactStatus("Your email app should open with a pre-filled draft. Review it and press Send to deliver your message.");
  }

  async function copyIntro() {
    const intro = "Hey Kaushal, I checked out your portfolio and would like to connect about a project.";
    try {
      await navigator.clipboard.writeText(intro);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:?subject=${encodeURIComponent("Let's build something")}&body=${encodeURIComponent(intro)}`;
    }
  }

  return (
    <main className="site-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="background-grid" aria-hidden="true" />

      <header className="site-header">
        <a className="brand" href="#home" aria-label="KD, back to home" onClick={closeMenu}>
          <span className="brand-mark">K<span>D</span></span>
          <span className="brand-name">kaushal<span>.</span></span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#stack">Stack</a>
          <a href="#approach">Approach</a>
        </nav>

        <a className="header-contact" href="#contact">Let&apos;s talk <ArrowUpRight size={15} /></a>
        <button className="mobile-toggle" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      {menuOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <a href="#projects" onClick={closeMenu}>Projects <ArrowUpRight size={16} /></a>
          <a href="#about" onClick={closeMenu}>About <ArrowUpRight size={16} /></a>
          <a href="#stack" onClick={closeMenu}>Stack <ArrowUpRight size={16} /></a>
          <a href="#approach" onClick={closeMenu}>Approach <ArrowUpRight size={16} /></a>
          <a href="#contact" onClick={closeMenu}>Contact <ArrowUpRight size={16} /></a>
        </nav>
      )}

      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-pulse" /> FULL-STACK DEVELOPER <span className="eyebrow-slash">/</span> PRODUCT BUILDER</div>
          <h1>Turning ideas into <span className="gradient-text">digital experiences.</span></h1>
          <p className="hero-description">
            I&apos;m <strong>Kaushal Prazapati</strong> — a developer and product builder who enjoys turning thoughtful ideas into useful, modern web experiences.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
            <a className="button button-ghost" href="#contact">Let&apos;s connect <ArrowRight size={16} /></a>
            <a className="button button-ghost resume-button" href={RESUME_URL} download>Download resume <Download size={15} /></a>
          </div>
          <div className="hero-bottomline">
            <div className="location-label"><span className="location-icon"><MapPin size={14} /></span> Patna, India <span className="tiny-separator">·</span> Building for the web</div>
            <div className="scroll-label"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></div>
          </div>
        </div>

        <div className="hero-visual" aria-label="Abstract interactive 3D artwork">
          <div className="visual-halo halo-one" />
          <div className="visual-halo halo-two" />
          <div className="visual-grid" />
          <div className="scene-wrap"><HeroScene /></div>
          <div className="visual-index"><span>FIG. 001</span><span>IDEAS IN MOTION</span></div>
          <div className="float-card float-card-top">
            <span className="float-icon"><Code2 size={17} /></span>
            <span><strong>Full-stack</strong><small>From UI to data</small></span>
            <span className="card-check"><Check size={13} /></span>
          </div>
          <div className="float-card float-card-bottom">
            <span className="mini-pulse" /> <span>BUILD</span><span className="process-arrow">/</span><span>SHIP</span><span className="process-arrow">/</span><span>ITERATE</span>
          </div>
          <div className="orbit-label orbit-label-left"><Sparkles size={13} /> Product thinking</div>
          <div className="orbit-label orbit-label-right"><Command size={13} /> Creative code</div>
        </div>
      </section>

      <div className="marquee-band" aria-label="What I do">
        <div className="marquee-track">
          {Array.from({ length: 2 }).map((_, index) => (
            <div className="marquee-content" key={index} aria-hidden={index === 1}>
              <span>FULL-STACK DEVELOPMENT</span><i />
              <span>PRODUCT THINKING</span><i />
              <span>INTERACTIVE EXPERIENCES</span><i />
              <span>IDEAS INTO PRODUCTS</span><i />
            </div>
          ))}
        </div>
      </div>

      <section className="projects-section section-wrap" id="projects">
        <div className="section-heading">
          <div>
            <p className="section-kicker"><span>01</span> / SELECTED WORK</p>
            <h2>Things I&apos;ve <span className="gradient-text">worked on.</span></h2>
          </div>
          <p className="section-intro">A mix of digital products, creative experiences, and brand-led ideas. Each one starts with a problem worth solving.</p>
        </div>

        <div className="project-toolbar" aria-label="Filter projects">
          <div className="project-filters" role="group" aria-label="Filter projects by type">
            {projectFilters.map((filter) => (
              <button
                className={`project-filter${projectFilter === filter ? " is-active" : ""}`}
                type="button"
                key={filter}
                onClick={() => setProjectFilter(filter)}
                aria-pressed={projectFilter === filter}
              >
                {filter}
              </button>
            ))}
          </div>
          <span className="project-filter-count">{String(filteredProjects.length).padStart(2, "0")} PROJECTS</span>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article className={`project-card project-${project.visual}`} key={project.number}>
              <div className="project-art-wrap">
                <ProjectArtwork visual={project.visual} />
                <span className="project-number">{project.number}</span>
                <span className="project-status"><span />{project.status}</span>
              </div>
              <div className="project-content">
                <div className="project-title-row">
                  <div><p className="project-category">{project.category}</p><h3>{project.title}</h3></div>
                  {project.href ? (
                    <a className="project-open" href={project.href} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} live website`}><ArrowUpRight size={20} /></a>
                  ) : (
                    <a className="project-open project-open-muted" href="#contact" aria-label={`Ask about ${project.title}`}><ArrowDownRight size={20} /></a>
                  )}
                </div>
                <p className="project-description">{project.description}</p>
                <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <div className="project-footer">
                  <button className="case-study-trigger" type="button" onClick={() => setSelectedProject(project)}>
                    View case study <ArrowRight size={14} />
                  </button>
                  {project.href ? (
                    <a href={project.href} target="_blank" rel="noreferrer">Live website <ExternalLink size={14} /></a>
                  ) : (
                    <span className="project-footer-index">{project.status}</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="projects-note"><Sparkles size={15} /><span>Open a case study to see the problem, approach, key focus areas, and next steps.</span></div>

        {selectedProject && (
          <div
            className="project-modal-backdrop"
            role="presentation"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setSelectedProject(null);
            }}
          >
            <section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
              <div className="project-modal-topline">
                <span>CASE STUDY PREVIEW <i /> {selectedProject.number}</span>
                <button className="project-modal-close" type="button" onClick={() => setSelectedProject(null)} aria-label="Close case study">
                  <X size={19} />
                </button>
              </div>
              <div className={`project-modal-art project-modal-art-${selectedProject.visual}`}>
                <ProjectArtwork visual={selectedProject.visual} />
                <span className="project-modal-stage">{selectedProject.status}</span>
              </div>
              <div className="project-modal-body">
                <p className="project-category">{selectedProject.category} <span>·</span> {selectedProject.kind}</p>
                <h2 id="project-modal-title">{selectedProject.title}</h2>
                <p className="project-modal-summary">{selectedProject.description}</p>
                <div className="case-study-columns">
                  <article>
                    <span className="case-study-label">01 / THE CHALLENGE</span>
                    <h3>What needed solving</h3>
                    <p>{selectedProject.challenge}</p>
                  </article>
                  <article>
                    <span className="case-study-label">02 / THE APPROACH</span>
                    <h3>How I approached it</h3>
                    <p>{selectedProject.solution}</p>
                  </article>
                </div>
                <div className="case-study-highlights">
                  <span className="case-study-label">03 / KEY FOCUS AREAS</span>
                  <ul>
                    {selectedProject.highlights.map((highlight) => (
                      <li key={highlight}><Check size={15} /> <span>{highlight}</span></li>
                    ))}
                  </ul>
                </div>
                <div className="case-study-stack">
                  <span className="case-study-label">TOOLS & THEMES</span>
                  <div className="tag-list">{selectedProject.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
                <div className="case-study-next">
                  <span className="case-study-label">NEXT ITERATION</span>
                  <p>{selectedProject.nextStep}</p>
                </div>
                <div className="project-modal-actions">
                  {selectedProject.href && (
                    <a className="button button-primary" href={selectedProject.href} target="_blank" rel="noreferrer">
                      Visit live project <ExternalLink size={15} />
                    </a>
                  )}
                  <a className="button button-ghost" href="#contact" onClick={() => setSelectedProject(null)}>
                    Discuss a similar project <ArrowUpRight size={15} />
                  </a>
                  <span className="project-modal-disclaimer">Project details are written as a working summary, not performance claims.</span>
                </div>
              </div>
            </section>
          </div>
        )}
      </section>

      <section className="about-section section-wrap" id="about">
        <div className="about-copy">
          <p className="section-kicker"><span>02</span> / A LITTLE ABOUT ME</p>
          <h2>Curious by default.<br /><span className="gradient-text">Builder by choice.</span></h2>
          <p className="about-lede">I enjoy the space where engineering, interface design, and product thinking meet.</p>
          <p className="body-copy">From local discovery experiences to brand-led websites, I like turning rough ideas into digital tools that feel clear, useful, and satisfying to use.</p>
          <p className="body-copy">I care about the details: a responsive layout, a helpful interaction, a simple flow, and the little improvements that make a product feel considered rather than generic.</p>
          <a className="text-link" href="#approach">How I like to work <ArrowUpRight size={15} /></a>
        </div>

        <div className="about-visual">
          <div className="about-orbit orbit-outer" /><div className="about-orbit orbit-inner" />
          <div className="about-monogram"><span>KD</span><i /></div>
          <div className="about-note note-top"><Sparkles size={15} /><span>Curiosity first</span></div>
          <div className="about-note note-bottom"><Zap size={15} /><span>Useful over noisy</span></div>
          <div className="about-caption"><span>THE WORK IN PROGRESS</span><span>ALWAYS LEARNING ↗</span></div>
        </div>
      </section>

      <section className="stack-section section-wrap" id="stack">
        <div className="section-heading stack-heading">
          <div><p className="section-kicker"><span>03</span> / TOOLS OF THE TRADE</p><h2>My current <span className="gradient-text">toolkit.</span></h2></div>
          <p className="section-intro">The tools I use to build, connect, and ship experiences. This list will evolve with the work.</p>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <article className="skill-card" key={group.title}>
                <div className="skill-card-top"><span className="skill-icon"><Icon size={19} /></span><span className="skill-index">/ {group.title.toUpperCase()}</span></div>
                <h3>{group.title}</h3><p>{group.description}</p>
                <div className="skill-chips">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
              </article>
            );
          })}
        </div>
        <div className="stack-footnote"><span className="footnote-icon"><Layers3 size={15} /></span> Tools matter. Clear thinking, good fundamentals, and shipping matter more.</div>
      </section>

      <section className="approach-section section-wrap" id="approach">
        <div className="section-heading">
          <div><p className="section-kicker"><span>04</span> / MY APPROACH</p><h2>Good work is <span className="gradient-text">intentional.</span></h2></div>
          <p className="section-intro">A simple process beats needless complexity. I try to make every decision earn its place.</p>
        </div>
        <div className="approach-grid">
          {approaches.map((item) => (
            <article className="approach-card" key={item.number}>
              <div className="approach-card-top"><span>{item.number}</span><ArrowUpRight size={18} /></div>
              <h3>{item.title}</h3><p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section section-wrap" id="contact">
        <div className="contact-panel">
          <div className="contact-glow" />
          <div className="contact-content">
            <p className="section-kicker"><span>05</span> / YOUR TURN</p>
            <h2>Have an idea?<br /><span className="gradient-text">Let&apos;s make it real.</span></h2>
            <p>Building something useful, exploring a collaboration, or just want to talk tech? Start with a hello.</p>
            <div className="contact-actions">
              <a className="button button-primary" href="https://www.instagram.com/kaushalprazapati/" target="_blank" rel="noreferrer">Message me on Instagram <InstagramGlyph size={16} /></a>
              <button className="button button-ghost copy-button" type="button" onClick={copyIntro}>{copied ? <><Check size={16} /> Message copied</> : <><Mail size={16} /> Copy intro message</>}</button>
            </div>
            <div className="contact-profile-links" aria-label="Professional links">
              {CONTACT_EMAIL.includes("@") && CONTACT_EMAIL !== "YOUR_EMAIL_HERE" && (
                <a href={`mailto:${CONTACT_EMAIL}`}>Email <ArrowUpRight size={13} /></a>
              )}
              {GITHUB_URL && (
                <a href={GITHUB_URL} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13} /></a>
              )}
              {LINKEDIN_URL && (
                <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13} /></a>
              )}
              <a href={RESUME_URL} download>Resume PDF <Download size={13} /></a>
            </div>
          </div>
          <div className="contact-art" aria-hidden="true"><div className="contact-ring ring-one" /><div className="contact-ring ring-two" /><div className="contact-ring ring-three" /><span>KD<span>.</span></span><div className="contact-star star-one">✳</div><div className="contact-star star-two">✦</div></div>
          <div className="contact-panel-footer"><span>OPEN TO GOOD IDEAS</span><span>LET&apos;S BUILD SOMETHING USEFUL <ArrowUpRight size={13} /></span></div>
        </div>

        <div className="contact-form-card">
          <div className="contact-form-intro">
            <p className="section-kicker"><span>QUICK</span> / CONTACT FORM</p>
            <h3>Tell me what you&apos;re <span className="gradient-text">thinking.</span></h3>
            <p>Share a few details about your idea. The form prepares an email draft so you can review it before sending.</p>
            <div className="contact-form-note"><span className="status-pulse" /> No account or backend required</div>
          </div>
          <form className="contact-form" onSubmit={handleContactSubmit}>
            <div className="contact-field">
              <label htmlFor="contact-name">Your name</label>
              <input id="contact-name" name="name" type="text" placeholder="What should I call you?" autoComplete="name" minLength={2} maxLength={80} required />
            </div>
            <div className="contact-field">
              <label htmlFor="contact-email">Your email</label>
              <input id="contact-email" name="email" type="email" placeholder="you@example.com" autoComplete="email" maxLength={160} required />
            </div>
            <div className="contact-field contact-field-full">
              <label htmlFor="contact-topic">What&apos;s this about?</label>
              <select id="contact-topic" name="topic" defaultValue="Project enquiry">
                <option>Project enquiry</option>
                <option>Website development</option>
                <option>Collaboration</option>
                <option>Freelance opportunity</option>
                <option>Just saying hello</option>
              </select>
            </div>
            <div className="contact-field contact-field-full">
              <label htmlFor="contact-message">Your message</label>
              <textarea id="contact-message" name="message" placeholder="A little context about what you have in mind…" rows={5} minLength={10} maxLength={3000} required />
            </div>
            <div className="contact-form-submit contact-field-full">
              <button className="button button-primary" type="submit">Prepare email <ArrowUpRight size={16} /></button>
              <span>Opens your default email app</span>
            </div>
            {contactStatus && <p className="contact-status contact-field-full" role="status">{contactStatus}</p>}
          </form>
        </div>
      </section>

      <footer className="site-footer section-wrap">
        <a className="brand footer-brand" href="#home"><span className="brand-mark">K<span>D</span></span><span className="brand-name">kaushal<span>.</span></span></a>
        <p>Designed with intention. Built with curiosity.</p>
        <div className="footer-right"><span>© 2026 Kaushal Prazapati</span><a href="#home" aria-label="Back to top">Back to top <ArrowUpRight size={14} /></a></div>
      </footer>
    </main>
  );
}
