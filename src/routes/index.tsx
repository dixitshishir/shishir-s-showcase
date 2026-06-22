import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Download,
  ExternalLink,
} from "lucide-react";
const resumeUrl = "/files/Resume_Shishir_Dixit.pdf";
const profilePhotoUrl = "/files/profile.jpeg";
import {
  profile,
  projects,
  experience,
  skills,
  certifications,
} from "@/lib/portfolio-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shishir Dixit — Software Engineer & Builder" },
      {
        name: "description",
        content:
          "Portfolio of Shishir Dixit — Software Engineer building React frontends, Ruby on Rails backends and AI/RAG systems. Projects, experience and certifications.",
      },
      { property: "og:title", content: "Shishir Dixit — Software Engineer" },
      {
        property: "og:description",
        content:
          "React, Ruby on Rails and AI projects by Shishir Dixit. Explore the work, experience and certifications.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Portfolio,
});

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

function Nav() {
  return (
    <header className="sticky top-4 z-50 mx-auto w-[92%] max-w-6xl">
      <nav className="flex items-center justify-between rounded-full border-[1.5px] border-ink bg-card/90 px-5 py-3 backdrop-blur shadow-[4px_4px_0_0_var(--ink)]">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-primary text-primary-foreground">
            S
          </span>
          shishir
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border-[1.5px] border-ink bg-foreground px-4 py-2 text-sm font-semibold text-background transition-transform hover:-translate-y-0.5"
        >
          GitHub
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="mx-auto mt-10 w-[92%] max-w-6xl md:mt-16">
      <div className="grid items-center gap-10 md:grid-cols-[1.3fr_1fr]">
        <div>
          <span className="eyebrow inline-block rounded-full border-[1.5px] border-ink bg-primary px-4 py-1.5 font-bold text-primary-foreground">
            Software Engineer
          </span>
          <h1 className="relative mt-6 font-display text-6xl font-bold leading-[0.92] sm:text-7xl md:text-8xl">
            PORT
            <span className="ml-1 inline-block bg-primary px-2 text-primary-foreground">
              FOLIO
            </span>
            <span className="text-primary">.</span>
          </h1>
          <p className="mt-4 font-display text-2xl font-semibold">
            {profile.fullName}
          </p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {profile.tagline}
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border-[1.5px] border-ink bg-card px-4 py-2 text-sm font-medium">
            <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
            Open to new opportunities
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#work"
              className="rounded-full border-[1.5px] border-ink bg-foreground px-6 py-3 font-semibold text-background shadow-[4px_4px_0_0_var(--ink)] transition-transform hover:-translate-y-0.5"
            >
              See my work
            </a>
            <a
              href={resumeUrl}
              download="Resume_Shishir_Dixit.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-ink bg-card px-6 py-3 font-semibold transition-transform hover:-translate-y-0.5"
            >
              <Download className="h-4 w-4" /> Download CV
            </a>
          </div>
        </div>

        <div className="card-pop overflow-hidden p-3">
          <div className="overflow-hidden rounded-2xl border-[1.5px] border-ink">
            <img
              src={profilePhotoUrl}
              alt="Shishir Dixit working at his desk"
              className="aspect-[3/4] w-full object-cover"
              loading="eager"
            />
          </div>
          <div className="flex items-center justify-between gap-3 px-2 pb-1 pt-3">
            <div>
              <p className="font-display text-lg font-bold leading-tight">
                Product Engineer
              </p>
              <p className="text-sm text-muted-foreground">@ TCS · Bengaluru</p>
            </div>
            <div className="flex gap-2">
              <SocialIcon href={profile.github} label="GitHub">
                <Github className="h-5 w-5" />
              </SocialIcon>
              <SocialIcon href={profile.linkedin} label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </SocialIcon>
              <SocialIcon href={`mailto:${profile.email}`} label="Email">
                <Mail className="h-5 w-5" />
              </SocialIcon>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="grid h-11 w-11 place-items-center rounded-full border-[1.5px] border-ink bg-card transition-colors hover:bg-primary"
    >
      {children}
    </a>
  );
}

function Work() {
  return (
    <section id="work" className="mx-auto mt-24 w-[92%] max-w-6xl">
      <p className="eyebrow text-muted-foreground">a few things i've built</p>
      <h2 className="mt-2 font-display text-4xl font-bold md:text-5xl">
        Selected work
      </h2>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article key={p.title} className="card-pop flex flex-col p-6 hover:-translate-y-1">
            <div className="flex items-start justify-between gap-3">
              <span className="eyebrow rounded-full bg-primary px-3 py-1 font-bold text-primary-foreground">
                {p.tag}
              </span>
            </div>
            <h3 className="mt-4 font-display text-2xl font-bold">{p.title}</h3>
            <p className="mt-2 flex-1 text-muted-foreground">{p.blurb}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-secondary px-2.5 py-1 text-xs font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border-[1.5px] border-ink bg-foreground px-4 py-2 text-sm font-semibold text-background"
                >
                  Live <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border-[1.5px] border-ink bg-card px-4 py-2 text-sm font-semibold"
              >
                <Github className="h-4 w-4" /> Code
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto mt-24 w-[92%] max-w-6xl">
      <div className="grid gap-10 md:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="eyebrow text-muted-foreground">about</p>
          <h2 className="mt-2 font-display text-4xl font-bold md:text-5xl">
            Hello, I'm Shishir.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            BE in Computer Science (CGPA 8.02) from Bapuji Institute of
            Engineering & Technology. I ship end-to-end web features — Rails
            backends, REST APIs and React UIs — and I'm building toward AI and
            multi-agent RAG systems.
          </p>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full border-[1.5px] border-ink bg-card px-5 py-2.5 font-semibold transition-transform hover:-translate-y-0.5"
          >
            <Linkedin className="h-4 w-4" /> Connect on LinkedIn
          </a>
        </div>
        <div className="space-y-5">
          <p className="eyebrow text-muted-foreground">experience</p>
          {experience.map((e) => (
            <div key={e.company} className="card-pop p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-xl font-bold">
                  {e.role} · {e.company}
                </h3>
                <span className="font-mono text-xs text-muted-foreground">
                  {e.period}
                </span>
              </div>
              <ul className="mt-3 space-y-2 text-muted-foreground">
                {e.points.map((pt) => (
                  <li key={pt} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="mx-auto mt-24 w-[92%] max-w-6xl">
      <p className="eyebrow text-muted-foreground">the stack</p>
      <h2 className="mt-2 font-display text-4xl font-bold md:text-5xl">
        Tools & technologies
      </h2>
      <div className="mt-8 flex flex-wrap gap-3">
        {skills.map((s) => (
          <span
            key={s}
            className="rounded-full border-[1.5px] border-ink bg-card px-4 py-2 font-medium shadow-[3px_3px_0_0_var(--ink)]"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="mt-14">
        <p className="eyebrow text-muted-foreground">certifications</p>
        <h3 className="mt-2 font-display text-3xl font-bold">Credentials</h3>
        <div className="mt-6 grid gap-4">
          {certifications.map((c) => (
            <a
              key={c.title}
              href={c.url}
              target="_blank"
              rel="noreferrer"
              className="card-pop flex items-center justify-between gap-4 p-5 hover:-translate-y-1"
            >
              <div>
                <p className="font-display text-lg font-bold">{c.title}</p>
                <p className="text-sm text-muted-foreground">{c.issuer}</p>
              </div>
              <ExternalLink className="h-5 w-5 shrink-0" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto mt-24 w-[92%] max-w-6xl pb-20">
      <div className="card-pop bg-primary p-8 md:p-12">
        <p className="eyebrow text-primary-foreground/70">get in touch</p>
        <h2 className="mt-2 font-display text-4xl font-bold text-primary-foreground md:text-6xl">
          Let's build something.
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <ContactRow icon={<Mail className="h-5 w-5" />} label={profile.email} href={`mailto:${profile.email}`} />
          <ContactRow icon={<Phone className="h-5 w-5" />} label={profile.phone} href={`tel:${profile.phone.replace(/\s/g, "")}`} />
          <ContactRow icon={<Github className="h-5 w-5" />} label="github.com/dixitshishir" href={profile.github} />
          <ContactRow icon={<Linkedin className="h-5 w-5" />} label="linkedin.com/in/shishirdixit23" href={profile.linkedin} />
        </div>
        <p className="mt-8 inline-flex items-center gap-2 font-mono text-sm text-primary-foreground/80">
          <MapPin className="h-4 w-4" /> {profile.location}
        </p>
      </div>
      <p className="mt-8 text-center font-mono text-xs text-muted-foreground">
        © {new Date().getFullYear()} {profile.fullName}. Built with care.
      </p>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-3 rounded-xl border-[1.5px] border-ink bg-card px-4 py-3 font-medium transition-transform hover:-translate-y-0.5"
    >
      {icon}
      <span className="truncate">{label}</span>
    </a>
  );
}

function Portfolio() {
  return (
    <main className="min-h-screen pb-10">
      <Nav />
      <Hero />
      <Work />
      <About />
      <Skills />
      <Contact />
    </main>
  );
}
