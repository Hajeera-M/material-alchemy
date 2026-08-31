import { Link } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Download,
  Mail,
  MapPin,
  MoveRight,
} from "lucide-react";
import { useState, type FormEvent, type ReactNode } from "react";

import {
  characteristics,
  enquiryRoutes,
  fabrication,
  journal,
  materials,
  process,
  projects,
  resources,
  sectors,
  type Project,
} from "@/content/site";
import caseStair from "@/assets/case-stair.jpg";
import fabricationCnc from "@/assets/fabrication-cnc.jpg";
import heroCurve from "@/assets/hero-curve.jpg";
import sectorReception from "@/assets/sector-reception.jpg";
import { ContentNote, Eyebrow, PageHeader, Section, Shell } from "./Editorial";

const buttonPrimary =
  "inline-flex items-center gap-3 bg-primary px-5 py-3 label text-primary-foreground transition-transform hover:-translate-y-0.5";
const buttonQuiet =
  "inline-flex items-center gap-3 border border-line px-5 py-3 label text-stone transition-colors hover:border-primary hover:text-primary";

function ArrowLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link to={to} className={`${buttonQuiet} group`}>
      {children}
      <ArrowUpRight
        size={15}
        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </Link>
  );
}

function ImagePanel({
  src,
  alt,
  className = "",
  caption,
}: {
  src: string;
  alt: string;
  className?: string;
  caption?: string;
}) {
  return (
    <figure className={`relative overflow-hidden bg-panel ${className}`}>
      <img src={src} alt={alt} className="h-full w-full object-cover" />
      {caption ? (
        <figcaption className="absolute bottom-0 left-0 bg-background/80 px-3 py-2 label text-mute backdrop-blur-sm">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

function Statement({
  eyebrow,
  children,
  align = "left",
}: {
  eyebrow: string;
  children: ReactNode;
  align?: "left" | "right";
}) {
  return (
    <div className={align === "right" ? "ml-auto max-w-2xl text-right" : "max-w-3xl"}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-5 text-3xl leading-[1.08] text-balance lg:text-5xl">{children}</h2>
    </div>
  );
}

function StatusLine({
  children = "Working content · confirm before specification",
}: {
  children?: ReactNode;
}) {
  return (
    <p className="label flex items-center gap-2 text-mute">
      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      {children}
    </p>
  );
}

export function HomePage() {
  return (
    <div>
      <section className="border-b border-line">
        <Shell className="grid min-h-[calc(100vh-4rem)] items-end gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:py-20">
          <div className="rise pb-2 lg:pb-14">
            <Eyebrow>Ace Spaces / Coro Collective</Eyebrow>
            <h1 className="mt-7 max-w-[10ch] text-5xl leading-[0.96] text-balance sm:text-7xl lg:text-[7.5rem]">
              Surfaces that become architecture.
            </h1>
            <div className="mt-10 h-px w-40 bg-primary rule-grow" />
            <p className="mt-8 max-w-[46ch] text-base leading-relaxed text-mute lg:text-lg">
              Material, fabrication and execution for spaces where the surface is not a finish, but
              part of the form.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <ArrowLink to="/projects">Explore the work</ArrowLink>
              <ArrowLink to="/contact">Start a project</ArrowLink>
            </div>
          </div>
          <div className="relative lg:pb-3">
            <ImagePanel
              src={heroCurve}
              alt="A softly curved architectural surface in a warm neutral material"
              className="aspect-[3/4] max-h-[720px] lg:ml-auto lg:w-[min(100%,580px)]"
              caption="Material study / continuous curve"
            />
            <div className="absolute -bottom-5 -left-3 hidden border border-line bg-background px-4 py-3 sm:block lg:-left-10">
              <p className="label text-mute">01</p>
              <p className="mt-1 font-display text-lg text-stone">From sheet to space</p>
            </div>
          </div>
        </Shell>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
          <Eyebrow>The practice</Eyebrow>
          <div>
            <p className="max-w-[25ch] font-display text-3xl leading-tight text-stone lg:text-5xl">
              A surface is the meeting point of material, detail and use.
            </p>
            <p className="mt-8 max-w-[58ch] leading-relaxed text-mute">
              Ace Spaces works with premium solid-surface material as a design medium. Coro
              Collective is the specialist expression of that work: a place for considered
              fabrication, unusual forms and close collaboration with the people shaping a space.
            </p>
            <div className="mt-8">
              <ArrowLink to="/about">Read about the practice</ArrowLink>
            </div>
          </div>
        </div>
      </Section>

      <Section panel>
        <Statement eyebrow="What we do">
          A complete material practice, from first drawing to final edge.
        </Statement>
        <div className="mt-12 grid gap-px border border-line bg-line md:grid-cols-3">
          {[
            [
              "01",
              "Material solutions",
              "Tone, finish and grade selected against the space, the use and the detail.",
            ],
            [
              "02",
              "Bespoke fabrication",
              "Cut, formed, joined and finished elements that hold the intent of the drawing.",
            ],
            [
              "03",
              "Design support",
              "Early technical conversations that make ambitious surfaces buildable.",
            ],
          ].map(([index, title, body]) => (
            <div key={index} className="bg-panel p-6 lg:p-8">
              <p className="label text-primary">{index}</p>
              <h3 className="mt-16 text-2xl text-stone">{title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-mute">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid items-end gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <ImagePanel
            src={caseStair}
            alt="A continuous light surface wrapping a stair"
            className="aspect-[16/10]"
            caption="Case study / continuous stair core"
          />
          <div className="lg:pl-12 lg:pb-2">
            <Eyebrow>Featured study</Eyebrow>
            <h2 className="mt-5 max-w-[13ch] text-4xl leading-tight text-balance lg:text-6xl">
              The continuous stair core
            </h2>
            <p className="mt-7 max-w-[48ch] leading-relaxed text-mute">
              One curve carried from tread to handrail to wall. A study in what happens when changes
              of plane are treated as one connected surface.
            </p>
            <div className="mt-8">
              <ArrowLink to="/projects/continuous-stair-core">Read the project</ArrowLink>
            </div>
          </div>
        </div>
      </Section>

      <Section panel>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <Eyebrow>For the people specifying</Eyebrow>
            <h2 className="mt-5 max-w-[12ch] text-4xl leading-tight lg:text-6xl">
              Bring us in before the surface is decided.
            </h2>
          </div>
          <div className="lg:pt-16">
            <p className="max-w-[54ch] leading-relaxed text-mute">
              Architects, interior designers, builders and project teams can involve us at material
              selection, design development or fabrication stage. The earlier the conversation, the
              more precisely the material can follow the idea.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ArrowLink to="/resources">Resources for professionals</ArrowLink>
              <ArrowLink to="/contact">Request a conversation</ArrowLink>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

export function MaterialsPage() {
  const [collection, setCollection] = useState("All");
  const collections = ["All", ...new Set(materials.map((material) => material.collection))];
  const visibleMaterials = materials.filter(
    (material) => collection === "All" || material.collection === collection,
  );

  return (
    <div>
      <PageHeader
        eyebrow="Material library"
        title={<>The material is the beginning of the architecture.</>}
        lede="A working collection of surface directions for architects and designers. The right grade, finish and application should always be confirmed against current technical information."
      />
      <Section bordered={false} panel>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>Collections</Eyebrow>
            <h2 className="mt-4 text-3xl text-stone">Explore by material character.</h2>
          </div>
          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Filter material collections"
          >
            {collections.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCollection(item)}
                className={`border px-3 py-2 label transition-colors ${
                  collection === item
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-line text-mute hover:border-primary hover:text-stone"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {visibleMaterials.map((material, index) => (
            <article key={material.slug} className="group bg-background p-5">
              <div
                className={`aspect-[4/3] ${
                  index % 4 === 0
                    ? "bg-[#c8b9a2]"
                    : index % 4 === 1
                      ? "bg-[#d8cdbb]"
                      : index % 4 === 2
                        ? "bg-[#52504b]"
                        : "bg-[#b2a899]"
                }`}
              >
                <div className="flex h-full items-end justify-between p-4">
                  <span className="label text-background/70">{material.collection}</span>
                  <span className="h-3 w-3 rounded-full border border-background/60" />
                </div>
              </div>
              <div className="pt-5">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl text-stone">{material.name}</h3>
                  <span className="label text-mute">{material.tone}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-mute">{material.note}</p>
                <div className="mt-5 border-t border-line pt-4">
                  <p className="label text-mute">
                    {material.finish} / {material.texture}
                  </p>
                  <p className="mt-2 text-xs text-mute">{material.applications.join(" · ")}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <StatusLine>
            Editorial collection / product names and technical data to be confirmed
          </StatusLine>
        </div>
      </Section>
      <Section>
        <Statement eyebrow="Why solid surface">
          A material that can be detailed as one continuous thought.
        </Statement>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {characteristics.map((item, index) => (
            <article key={item.title} className="border-t border-line pt-5">
              <p className="label text-primary">0{index + 1}</p>
              <h3 className="mt-8 text-2xl text-stone">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-mute">{item.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-12 max-w-xl">
          <ContentNote>
            Material behaviour varies by grade, thickness and manufacturer. Use this page as a
            design introduction, then request the current datasheet for a project decision.
          </ContentNote>
        </div>
      </Section>
    </div>
  );
}

export function FabricationPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Fabrication"
        title={<>The craft is in making the impossible feel inevitable.</>}
        lede="A flat sheet becomes a surface, a curve, a basin, a counter or an architectural object through a sequence of precise decisions."
      />
      <Section bordered={false} panel>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Eyebrow>Workshop language</Eyebrow>
            <p className="mt-5 font-display text-3xl leading-tight text-stone lg:text-5xl">
              Technical fabrication, treated as a design discipline.
            </p>
          </div>
          <ImagePanel
            src={fabricationCnc}
            alt="CNC tool working on a material component"
            className="aspect-[4/3]"
            caption="Cutting / forming / finishing"
          />
        </div>
      </Section>
      <Section>
        <div className="grid gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {fabrication.map((item) => (
            <article key={item.index} className="bg-background p-6 lg:p-8">
              <div className="flex items-start justify-between">
                <span className="label text-primary">{item.index}</span>
                <span className="label text-mute">{item.tag}</span>
              </div>
              <h2 className="mt-16 text-2xl text-stone">{item.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-mute">{item.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <StatusLine>
            Capabilities shown are a working framework / confirm project fit early
          </StatusLine>
        </div>
      </Section>
      <Section panel>
        <Statement eyebrow="The route from idea to finished surface">
          A considered process protects the detail.
        </Statement>
        <div className="mt-12 grid gap-x-8 gap-y-10 md:grid-cols-3">
          {process.map((item) => (
            <article key={item.index} className="border-t border-line pt-5">
              <span className="label text-primary">{item.index}</span>
              <h3 className="mt-8 text-2xl text-stone">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mute">{item.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-12">
          <ArrowLink to="/contact">Discuss a fabrication challenge</ArrowLink>
        </div>
      </Section>
    </div>
  );
}

export function ApplicationsPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Applications"
        title={<>Different rooms. The same attention to the surface.</>}
        lede="From the intimacy of a vanity to the first impression of a lobby, the application determines how the material should be selected, formed and finished."
      />
      <Section bordered={false}>
        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <ImagePanel
            src={sectorReception}
            alt="A sculptural reception desk in a warm architectural interior"
            className="aspect-[4/5] max-h-[680px]"
            caption="Hospitality / front-of-house"
          />
          <div className="lg:pt-12 lg:pl-8">
            <Eyebrow>Design in context</Eyebrow>
            <h2 className="mt-5 text-4xl leading-tight text-balance lg:text-6xl">
              The surface has a job to do in every space.
            </h2>
            <p className="mt-7 max-w-[45ch] leading-relaxed text-mute">
              It can guide a visitor, make a wash area quieter to maintain, hold the edge of a
              joinery package or give a brand a physical point of arrival. We begin with that job,
              then resolve the material and fabrication around it.
            </p>
          </div>
        </div>
      </Section>
      <Section panel>
        <div className="grid gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {sectors.map((sector) => (
            <article key={sector.slug} className="bg-background p-6 lg:p-8">
              <div className="flex justify-between">
                <span className="label text-primary">{sector.index}</span>
                <ArrowDownRight size={18} className="text-primary" />
              </div>
              <h2 className="mt-14 text-3xl text-stone">{sector.title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-mute">{sector.summary}</p>
              <ul className="mt-7 space-y-2 border-t border-line pt-5">
                {sector.spaces.map((space) => (
                  <li key={space} className="flex gap-2 text-sm text-stone">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {space}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>
      <Section>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.7fr]">
          <Eyebrow>Start with the brief</Eyebrow>
          <div>
            <p className="max-w-[24ch] font-display text-3xl leading-tight text-stone lg:text-5xl">
              Tell us what the surface needs to make possible.
            </p>
            <div className="mt-8">
              <ArrowLink to="/contact">Share a project brief</ArrowLink>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: project.slug }}
      className="group block border-t border-line pt-5 transition-colors hover:border-primary"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="label text-primary">
            {project.sector} / {project.application}
          </p>
          <h2 className="mt-4 text-3xl text-stone">{project.title}</h2>
        </div>
        <ArrowUpRight
          size={18}
          className="mt-1 shrink-0 text-mute transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary"
        />
      </div>
      <p className="mt-5 max-w-[50ch] text-sm leading-relaxed text-mute">{project.outcome}</p>
      <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 label text-mute">
        <span>{project.material}</span>
        <span>·</span>
        <span>{project.scope}</span>
      </div>
    </Link>
  );
}

export function ProjectsPage() {
  const [sector, setSector] = useState("All");
  const filters = ["All", ...new Set(projects.map((project) => project.sector))];
  const visibleProjects = projects.filter(
    (project) => sector === "All" || project.sector === sector,
  );

  return (
    <div>
      <PageHeader
        eyebrow="Selected work"
        title={<>Case studies in material, detail and use.</>}
        lede="A project is more than a photograph. It is the challenge, the decision and the way a surface changes the space around it."
      />
      <Section bordered={false} panel>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Statement eyebrow="The project archive">
            Read the work as a sequence of decisions.
          </Statement>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by sector">
            {filters.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setSector(item)}
                className={`border px-3 py-2 label transition-colors ${
                  sector === item
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-line text-mute hover:border-primary hover:text-stone"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-14 grid gap-x-10 gap-y-14 md:grid-cols-2">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <div className="mt-14">
          <StatusLine>
            Case studies use working names and descriptions / project information to be confirmed
          </StatusLine>
        </div>
      </Section>
    </div>
  );
}

export function ProjectDetailPage({ slug }: { slug: string }) {
  const project = projects.find((item) => item.slug === slug);
  if (!project) {
    return (
      <PageHeader
        eyebrow="Project archive"
        title={<>This study is not available yet.</>}
        lede="The project may have moved or is still being prepared for publication."
      />
    );
  }

  return (
    <div>
      <Shell className="pt-16 pb-12 lg:pt-24 lg:pb-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:gap-24">
          <div className="rise">
            <Eyebrow>
              {project.sector} / {project.application}
            </Eyebrow>
            <h1 className="mt-6 max-w-[12ch] text-5xl leading-[1.02] lg:text-7xl">
              {project.title}
            </h1>
            <div className="mt-8 h-px w-40 bg-primary rule-grow" />
            <p className="mt-8 max-w-[48ch] text-lg leading-relaxed text-mute">{project.outcome}</p>
          </div>
          <dl className="grid grid-cols-2 gap-x-6 gap-y-6 border-t border-line pt-5 text-sm">
            {[
              ["Location", project.location],
              ["Material", project.material],
              ["Scope", project.scope],
              ["Application", project.application],
            ].map(([term, value]) => (
              <div key={term}>
                <dt className="label text-mute">{term}</dt>
                <dd className="mt-2 leading-relaxed text-stone">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Shell>
      <Section bordered={false} panel>
        <ImagePanel
          src={project.slug === "continuous-stair-core" ? caseStair : sectorReception}
          alt={`${project.title} project study`}
          className="aspect-[16/8]"
          caption="Project image / working case study"
        />
      </Section>
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          <div>
            <Eyebrow>The challenge</Eyebrow>
            <p className="mt-5 max-w-[28ch] font-display text-3xl leading-tight text-stone lg:text-5xl">
              {project.challenge}
            </p>
          </div>
          <div>
            <Eyebrow>The response</Eyebrow>
            <p className="mt-5 leading-relaxed text-mute">{project.solution}</p>
            <div className="mt-10">
              <p className="label text-mute">Fabrication language</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.techniques.map((technique) => (
                  <span key={technique} className="border border-line px-3 py-2 text-sm text-stone">
                    {technique}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section panel>
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <Eyebrow>Continue the conversation</Eyebrow>
            <h2 className="mt-4 text-3xl text-stone">Have a surface with a problem to solve?</h2>
          </div>
          <ArrowLink to="/contact">Start a project</ArrowLink>
        </div>
      </Section>
    </div>
  );
}

export function CoroCollectivePage() {
  return (
    <div>
      <PageHeader
        eyebrow="The specialist brand"
        title={<>Coro Collective is where material becomes a point of view.</>}
        lede="Within Ace Spaces, Coro Collective holds the more exploratory work: bespoke surfaces, material studies and collaborations that ask what a sheet can become."
      />
      <Section bordered={false} panel>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="label text-primary">Ace Spaces</p>
            <p className="mt-5 font-display text-3xl text-stone">The practice</p>
            <p className="mt-3 leading-relaxed text-mute">
              Material, fabrication and execution for architectural interiors.
            </p>
          </div>
          <div className="border-l border-primary pl-6 lg:pl-12">
            <p className="label text-primary">Coro Collective</p>
            <p className="mt-5 max-w-[20ch] font-display text-4xl leading-tight text-stone lg:text-6xl">
              The specialist expression
            </p>
            <p className="mt-6 max-w-[55ch] leading-relaxed text-mute">
              A focused lens for work that is material-led, detail-sensitive and open to an unusual
              answer. Coro is not a separate supplier; it is a way of working within the Ace Spaces
              ecosystem.
            </p>
          </div>
        </div>
      </Section>
      <Section>
        <Statement eyebrow="A space for material curiosity">
          Good surfaces do more than close a detail. They change how a space is understood.
        </Statement>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {["Surface studies", "Designer collaborations", "Bespoke forms", "Material stories"].map(
            (item, index) => (
              <div key={item} className="border-t border-line pt-5">
                <span className="label text-primary">0{index + 1}</span>
                <h3 className="mt-12 text-2xl text-stone">{item}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mute">
                  A considered route from a material question to a resolved architectural
                  expression.
                </p>
              </div>
            ),
          )}
        </div>
      </Section>
      <Section panel>
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-24">
          <div>
            <Eyebrow>In practice</Eyebrow>
            <h2 className="mt-5 text-4xl leading-tight lg:text-6xl">Bring an unfinished idea.</h2>
          </div>
          <div className="lg:pt-12">
            <p className="leading-relaxed text-mute">
              A sketch, a sample, a difficult radius or simply a feeling about how a surface should
              sit in a room. We can start there and work toward the next useful question.
            </p>
            <div className="mt-8">
              <ArrowLink to="/contact">Talk to Coro Collective</ArrowLink>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

export function AboutPage() {
  return (
    <div>
      <PageHeader
        eyebrow="About Ace Spaces"
        title={<>A material practice for people who care how a space is resolved.</>}
        lede="Ace Spaces brings material selection, design thinking, fabrication and site execution into one conversation."
      />
      <Section bordered={false} panel>
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <Eyebrow>Our position</Eyebrow>
          <div>
            <p className="max-w-[25ch] font-display text-3xl leading-tight text-stone lg:text-5xl">
              We do not see solid surface as a catalogue of finishes.
            </p>
            <p className="mt-8 max-w-[58ch] leading-relaxed text-mute">
              We see it as a material with a particular generosity: it can be joined, shaped, formed
              and detailed so that architecture reads continuously. Our role is to help translate
              that potential into something precise, useful and made for the space.
            </p>
          </div>
        </div>
      </Section>
      <Section>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            [
              "Material first",
              "Choose the surface for what it needs to do, not only for how it looks in isolation.",
            ],
            [
              "Detail early",
              "Resolve the edge, joint and junction before the material arrives on site.",
            ],
            [
              "Make it buildable",
              "Ambition is stronger when the geometry has a clear route to fabrication.",
            ],
            [
              "Stay close",
              "The best result comes from a continuous conversation across design and execution.",
            ],
          ].map(([title, body], index) => (
            <article key={title} className="border-t border-line pt-5">
              <span className="label text-primary">0{index + 1}</span>
              <h2 className="mt-12 text-2xl text-stone">{title}</h2>
              <p className="mt-4 text-sm leading-relaxed text-mute">{body}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section panel>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <Eyebrow>Built for collaboration</Eyebrow>
            <h2 className="mt-5 max-w-[13ch] text-4xl leading-tight lg:text-6xl">
              The right question, at the right stage.
            </h2>
          </div>
          <div className="space-y-6 lg:pt-12">
            {[
              "Material selection",
              "Design development",
              "Fabrication feasibility",
              "Installation & aftercare",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center justify-between border-b border-line pb-4"
              >
                <span className="text-lg text-stone">{item}</span>
                <ChevronRight size={18} className="text-primary" />
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}

export function ResourcesPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Resource centre"
        title={<>Useful information for the next drawing set.</>}
        lede="A professional resource area for architects, designers, contractors and fabricators. Request the current document set for the material and project you are working on."
      />
      <Section bordered={false} panel>
        <div className="grid gap-px border border-line bg-line md:grid-cols-2">
          {resources.map((resource, index) => (
            <article key={resource.title} className="group bg-background p-6 lg:p-8">
              <div className="flex items-start justify-between">
                <span className="label text-primary">0{index + 1}</span>
                <Download
                  size={17}
                  className="text-mute transition-colors group-hover:text-primary"
                />
              </div>
              <h2 className="mt-16 text-2xl text-stone">{resource.title}</h2>
              <p className="mt-3 text-sm text-mute">{resource.detail}</p>
              <p className="mt-8 label text-mute">Available on request</p>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <StatusLine>
            Document availability varies by material and project / request the current revision
          </StatusLine>
        </div>
      </Section>
      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <Eyebrow>Specification support</Eyebrow>
            <h2 className="mt-5 max-w-[12ch] text-4xl leading-tight lg:text-6xl">
              Start with the application.
            </h2>
          </div>
          <div className="lg:pt-12">
            <p className="max-w-[53ch] leading-relaxed text-mute">
              Tell us the environment, the intended use and the design intent. We can point you
              toward the information that matters, from finish and edge detail to fabrication
              constraints and installation sequence.
            </p>
            <div className="mt-8">
              <ArrowLink to="/contact">Request technical information</ArrowLink>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

export function JournalPage() {
  const [category, setCategory] = useState("All");
  const categories = ["All", ...new Set(journal.map((entry) => entry.category))];
  const visibleEntries = journal.filter(
    (entry) => category === "All" || entry.category === category,
  );

  return (
    <div>
      <PageHeader
        eyebrow="Journal / material knowledge"
        title={<>Notes on surfaces, details and the work of making.</>}
        lede="An editorial space for the questions that arrive before a material is specified: what it is, how it behaves and how it can become part of architecture."
      />
      <Section bordered={false} panel>
        <div className="flex flex-wrap justify-between gap-5">
          <Eyebrow>Read by subject</Eyebrow>
          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Filter journal entries by category"
          >
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={`border px-3 py-2 label transition-colors ${
                  category === item
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-line text-mute hover:border-primary hover:text-stone"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {visibleEntries.map((entry, index) => (
            <Link
              key={entry.slug}
              to="/journal/$slug"
              params={{ slug: entry.slug }}
              className="group border-t border-line pt-5 transition-colors hover:border-primary"
            >
              <div className="flex items-center justify-between">
                <span className="label text-primary">{entry.category}</span>
                <span className="label text-mute">{entry.readingTime}</span>
              </div>
              <h2 className="mt-12 max-w-[16ch] text-3xl leading-tight text-stone lg:text-4xl">
                {entry.title}
              </h2>
              <p className="mt-5 max-w-[48ch] leading-relaxed text-mute">{entry.excerpt}</p>
              <div className="mt-8 flex items-center gap-2 label text-mute group-hover:text-primary">
                Read note <MoveRight size={15} />
              </div>
              {index === 0 ? <div className="mt-8 h-px w-20 bg-primary" /> : null}
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
}

export function JournalDetailPage({ slug }: { slug: string }) {
  const entry = journal.find((item) => item.slug === slug);
  if (!entry) {
    return (
      <PageHeader
        eyebrow="Journal"
        title={<>This note is still being written.</>}
        lede="Return to the journal to explore the rest of the material library."
      />
    );
  }
  return (
    <div>
      <Shell className="pt-16 pb-12 lg:pt-24 lg:pb-16">
        <div className="max-w-4xl rise">
          <Eyebrow>
            {entry.category} / {entry.readingTime}
          </Eyebrow>
          <h1 className="mt-6 max-w-[14ch] text-5xl leading-[1.02] lg:text-7xl">{entry.title}</h1>
          <div className="mt-8 h-px w-40 bg-primary rule-grow" />
          <p className="mt-8 max-w-[55ch] text-lg leading-relaxed text-mute">{entry.excerpt}</p>
        </div>
      </Shell>
      <Section bordered={false} panel>
        <article className="mx-auto max-w-3xl">
          {entry.body.map((paragraph, index) => (
            <p key={paragraph} className={`leading-[1.85] text-stone ${index > 0 ? "mt-7" : ""}`}>
              {paragraph}
            </p>
          ))}
          <div className="mt-12">
            <ContentNote>
              Editorial note: technical suitability should be confirmed for the specific material
              grade and project.
            </ContentNote>
          </div>
        </article>
      </Section>
      <Section>
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <Eyebrow>Keep exploring</Eyebrow>
            <h2 className="mt-4 text-3xl text-stone">More notes from the material library.</h2>
          </div>
          <ArrowLink to="/journal">Back to the journal</ArrowLink>
        </div>
      </Section>
    </div>
  );
}

function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [enquiryType, setEnquiryType] = useState(enquiryRoutes[0]?.title ?? "Start a project");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-primary bg-primary/10 p-8 lg:p-12">
        <Check size={22} className="text-primary" />
        <h2 className="mt-6 text-3xl text-stone">Your brief is ready for a conversation.</h2>
        <p className="mt-4 max-w-[45ch] leading-relaxed text-mute">
          Thank you. This demo form has captured your enquiry locally. Connect it to your preferred
          inbox or CRM before launch.
        </p>
        <button type="button" onClick={() => setSubmitted(false)} className={`${buttonQuiet} mt-8`}>
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-7">
      <div className="grid gap-7 sm:grid-cols-2">
        <label className="block">
          <span className="label text-mute">Name</span>
          <input
            required
            name="name"
            className="mt-3 w-full border-0 border-b border-line bg-transparent px-0 py-3 text-stone outline-none transition-colors placeholder:text-mute/60 focus:border-primary"
            placeholder="Your name"
          />
        </label>
        <label className="block">
          <span className="label text-mute">Email</span>
          <input
            required
            type="email"
            name="email"
            className="mt-3 w-full border-0 border-b border-line bg-transparent px-0 py-3 text-stone outline-none transition-colors placeholder:text-mute/60 focus:border-primary"
            placeholder="you@studio.com"
          />
        </label>
      </div>
      <label className="block">
        <span className="label text-mute">I am contacting you about</span>
        <select
          name="enquiryType"
          value={enquiryType}
          onChange={(event) => setEnquiryType(event.target.value)}
          className="mt-3 w-full border-0 border-b border-line bg-transparent px-0 py-3 text-stone outline-none focus:border-primary"
        >
          {enquiryRoutes.map((route) => (
            <option key={route.title} value={route.title} className="bg-background">
              {route.title}
            </option>
          ))}
        </select>
      </label>
      <div className="grid gap-7 sm:grid-cols-2">
        <label className="block">
          <span className="label text-mute">Practice / company</span>
          <input
            name="company"
            className="mt-3 w-full border-0 border-b border-line bg-transparent px-0 py-3 text-stone outline-none transition-colors placeholder:text-mute/60 focus:border-primary"
            placeholder="Optional"
          />
        </label>
        <label className="block">
          <span className="label text-mute">Project location</span>
          <input
            name="location"
            className="mt-3 w-full border-0 border-b border-line bg-transparent px-0 py-3 text-stone outline-none transition-colors placeholder:text-mute/60 focus:border-primary"
            placeholder="City / region"
          />
        </label>
      </div>
      <label className="block">
        <span className="label text-mute">Tell us about the project</span>
        <textarea
          required
          name="message"
          rows={5}
          className="mt-3 w-full resize-y border border-line bg-transparent p-4 text-stone outline-none transition-colors placeholder:text-mute/60 focus:border-primary"
          placeholder="Space, application, material question or design challenge"
        />
      </label>
      <div className="flex flex-wrap items-center justify-between gap-5">
        <p className="max-w-[35ch] text-xs leading-relaxed text-mute">
          We only use these details to respond to your enquiry.
        </p>
        <button type="submit" className={`${buttonPrimary} group`}>
          Send enquiry
          <ArrowUpRight
            size={15}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </button>
      </div>
    </form>
  );
}

export function ContactPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Start a project"
        title={<>Bring the drawing, the question or the difficult detail.</>}
        lede="Tell us what you are working on and where the surface needs to go. We will begin with the most useful next question."
      />
      <Section bordered={false} panel>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-24">
          <div>
            <Eyebrow>Project enquiry</Eyebrow>
            <h2 className="mt-5 text-4xl leading-tight text-balance lg:text-6xl">
              Let’s talk about the surface.
            </h2>
            <div className="mt-10">
              <EnquiryForm />
            </div>
          </div>
          <aside className="border-t border-line pt-5 lg:border-l lg:border-t-0 lg:pl-10">
            <Eyebrow>Useful starting points</Eyebrow>
            <div className="mt-8 space-y-6">
              {enquiryRoutes.map((route) => (
                <div key={route.title} className="border-b border-line pb-5">
                  <h3 className="text-lg text-stone">{route.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mute">{route.detail}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 space-y-4 border-t border-line pt-6 text-sm text-mute">
              <p className="flex items-center gap-3">
                <Mail size={15} className="text-primary" /> hello@acespaces.example
              </p>
              <p className="flex items-center gap-3">
                <MapPin size={15} className="text-primary" /> India / projects considered globally
              </p>
            </div>
          </aside>
        </div>
      </Section>
      <Section>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.8fr]">
          <Eyebrow>What happens next</Eyebrow>
          <div className="grid gap-6 sm:grid-cols-3">
            {["We read the brief", "We find the useful question", "We define the next step"].map(
              (item, index) => (
                <div key={item} className="border-t border-line pt-5">
                  <span className="label text-primary">0{index + 1}</span>
                  <p className="mt-10 text-lg leading-relaxed text-stone">{item}</p>
                </div>
              ),
            )}
          </div>
        </div>
      </Section>
    </div>
  );
}
