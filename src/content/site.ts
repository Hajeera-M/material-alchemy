/**
 * CONTENT SOURCE OF TRUTH
 * -----------------------
 * Every entry below is marked with a `status` so real Ace Spaces / Coro
 * Collective information can replace it safely:
 *
 *   "verified"    — confirmed by the company. (none yet)
 *   "confirm"     — industry-standard capability, needs company confirmation.
 *   "placeholder" — invented for layout only. Replace before publishing.
 *
 * No statistics, certifications, clients, awards or performance claims are
 * asserted anywhere in this file.
 */

export type ContentStatus = "verified" | "confirm" | "placeholder";

export const brand = {
  parent: "Ace Spaces",
  child: "Coro Collective",
  tagline: "Surfaces that become architecture",
  descriptor:
    "A material, fabrication and execution practice working in premium solid surface for architectural interiors.",
};

export const navigation = [
  { to: "/materials", label: "Materials" },
  { to: "/fabrication", label: "Fabrication" },
  { to: "/applications", label: "Applications" },
  { to: "/projects", label: "Projects" },
  { to: "/coro-collective", label: "Coro Collective" },
  { to: "/resources", label: "Resources" },
  { to: "/journal", label: "Journal" },
  { to: "/about", label: "About" },
] as const;

export type Material = {
  slug: string;
  name: string;
  collection: string;
  tone: string;
  finish: string;
  texture: string;
  applications: string[];
  note: string;
  status: ContentStatus;
};

export const materials: Material[] = [
  {
    slug: "ash",
    name: "Ash",
    collection: "Monolith",
    tone: "Warm neutral",
    finish: "Matte",
    texture: "Solid, unpatterned",
    applications: ["Worktops", "Vanity tops", "Reception desks"],
    note: "An even, quiet tone that lets form carry the surface rather than pattern.",
    status: "placeholder",
  },
  {
    slug: "sand",
    name: "Sand",
    collection: "Monolith",
    tone: "Warm ivory",
    finish: "Matte",
    texture: "Fine mineral grain",
    applications: ["Kitchen islands", "Wall cladding", "Furniture"],
    note: "A subtle grain that reads as stone at distance and as a single sheet up close.",
    status: "placeholder",
  },
  {
    slug: "slate",
    name: "Slate",
    collection: "Monolith",
    tone: "Cool deep grey",
    finish: "Polished, low sheen",
    texture: "Solid, unpatterned",
    applications: ["Bar tops", "Retail counters", "Feature surfaces"],
    note: "A darker register for spaces where the surface should recede and the light should not.",
    status: "placeholder",
  },
  {
    slug: "resin",
    name: "Resin",
    collection: "Lumen",
    tone: "Warm translucent",
    finish: "Satin",
    texture: "Translucent body",
    applications: ["Backlit walls", "Feature installations", "Signage forms"],
    note: "A translucent body intended for lit applications. Light behaviour depends on thickness and detail.",
    status: "placeholder",
  },
];

export type Sector = {
  slug: string;
  index: string;
  title: string;
  summary: string;
  spaces: string[];
  status: ContentStatus;
};

export const sectors: Sector[] = [
  {
    slug: "residential",
    index: "01",
    title: "Residential",
    summary:
      "Kitchens, bathrooms and joinery where the surface is handled every day and every joint is read at close range.",
    spaces: [
      "Kitchen worktops and islands",
      "Backsplashes and continuous returns",
      "Vanity tops and integrated basins",
      "Shower areas and wall cladding",
      "Tables and furniture elements",
    ],
    status: "confirm",
  },
  {
    slug: "hospitality",
    index: "02",
    title: "Hospitality",
    summary:
      "Reception, bar and washroom surfaces built to hold a brand's detailing under continuous public use.",
    spaces: [
      "Hotel reception and concierge desks",
      "Bar tops and service counters",
      "Restaurant tables and banquette elements",
      "Washroom vanity systems",
      "Feature walls and custom installations",
    ],
    status: "confirm",
  },
  {
    slug: "commercial",
    index: "03",
    title: "Commercial",
    summary:
      "Workplace and corporate interiors where surfaces carry both wayfinding and identity.",
    spaces: [
      "Reception and lobby desks",
      "Workstations and meeting tables",
      "Cafeteria and pantry counters",
      "Experience centres and showrooms",
      "Custom architectural elements",
    ],
    status: "confirm",
  },
  {
    slug: "retail",
    index: "04",
    title: "Retail",
    summary:
      "Counters, displays and branded installations fabricated to hold precise, repeatable detail across sites.",
    spaces: [
      "Cash and service counters",
      "Display plinths and systems",
      "Product presentation surfaces",
      "Feature walls",
      "Bespoke store furniture",
    ],
    status: "confirm",
  },
  {
    slug: "healthcare",
    index: "05",
    title: "Healthcare",
    summary:
      "Seamless, easy-to-clean surfaces for high-touch environments. Suitability for any specific clinical requirement should be confirmed against project specification.",
    spaces: [
      "Reception and nurses' stations",
      "Counters and wash areas",
      "Patient area surfaces",
      "Wall applications",
      "Fixed furniture",
    ],
    status: "confirm",
  },
  {
    slug: "institutional",
    index: "06",
    title: "Institutional & public",
    summary:
      "Education, transport and civic environments where a surface must survive traffic and be repairable in place.",
    spaces: [
      "Education and campus interiors",
      "Airport and transit counters",
      "Civic and government buildings",
      "Large-format wall applications",
      "High-traffic service points",
    ],
    status: "confirm",
  },
];

export type Capability = {
  index: string;
  title: string;
  tag: string;
  body: string;
  status: ContentStatus;
};

export const fabrication: Capability[] = [
  {
    index: "01",
    title: "Precision cutting",
    tag: "CNC",
    body: "Sheets are cut to drawing on CNC, holding tolerance across repeated components so site assembly is predictable.",
    status: "confirm",
  },
  {
    index: "02",
    title: "Routing & machining",
    tag: "Profiled",
    body: "Drainage grooves, recesses, rebates and service cut-outs machined into the body of the material.",
    status: "confirm",
  },
  {
    index: "03",
    title: "Thermoforming",
    tag: "Curved",
    body: "Heat forming takes a flat sheet into a curve or a radius, allowing continuous geometry without applied trims.",
    status: "confirm",
  },
  {
    index: "04",
    title: "Seamless joining",
    tag: "Invisible",
    body: "Panels are bonded in matched material and worked back until the join is not visible or felt across the surface.",
    status: "confirm",
  },
  {
    index: "05",
    title: "Edge profiling",
    tag: "Custom",
    body: "Edges built up, shaped and detailed to a project profile — square, chamfered, bullnose or drawn to specification.",
    status: "confirm",
  },
  {
    index: "06",
    title: "Integrated basins & sinks",
    tag: "Moulded",
    body: "Bowls joined into the deck so the wash area reads as one surface with no rim to collect residue.",
    status: "confirm",
  },
  {
    index: "07",
    title: "Backlighting & translucency",
    tag: "Lit",
    body: "Translucent grades machined and lit from behind for feature walls and illuminated elements.",
    status: "confirm",
  },
  {
    index: "08",
    title: "Engraving & inlay",
    tag: "Detail",
    body: "Contrasting material inlaid or engraved into the surface for signage, pattern and identity detail.",
    status: "confirm",
  },
  {
    index: "09",
    title: "Sanding & finishing",
    tag: "Polished",
    body: "Progressive sanding to a consistent finish across the whole element, matte through to polished.",
    status: "confirm",
  },
];

export const characteristics = [
  {
    title: "Seamless appearance",
    body: "Panels can be joined in matched material so the surface reads continuously, without a visible line.",
    status: "confirm" as ContentStatus,
  },
  {
    title: "Non-porous body",
    body: "Solid-surface material is generally non-porous, which is why it is specified for wet and high-touch areas. Confirm against the datasheet for the grade selected.",
    status: "confirm" as ContentStatus,
  },
  {
    title: "Repairable in place",
    body: "Because colour runs through the full thickness, most surface damage can be sanded and refinished rather than replaced.",
    status: "confirm" as ContentStatus,
  },
  {
    title: "Formability",
    body: "Thermoforming allows curves, radii and sculptural geometry that sheet stone cannot take.",
    status: "confirm" as ContentStatus,
  },
  {
    title: "Integrated elements",
    body: "Basins, coves, upstands and returns can be built into the same surface rather than added to it.",
    status: "confirm" as ContentStatus,
  },
  {
    title: "Consistent aesthetics",
    body: "Manufactured material repeats across a large project in a way quarried stone cannot guarantee.",
    status: "confirm" as ContentStatus,
  },
];

export type Project = {
  slug: string;
  title: string;
  sector: string;
  application: string;
  location: string;
  material: string;
  scope: string;
  techniques: string[];
  challenge: string;
  solution: string;
  outcome: string;
  status: ContentStatus;
};

export const projects: Project[] = [
  {
    slug: "continuous-stair-core",
    title: "The continuous stair core",
    sector: "Residential",
    application: "Stair & wall",
    location: "Location to be confirmed",
    material: "Ash — matte",
    scope: "Bespoke fabrication and installation",
    techniques: ["Thermoforming", "Seamless joining", "Hand finishing"],
    challenge:
      "The design carried one curve from tread to handrail to wall. Any visible break would have read as a mistake in the geometry.",
    solution:
      "Components were formed to the drawn radius, bonded in matched material and worked back by hand until the transitions were continuous.",
    outcome:
      "A single reading surface through the core, with no applied trim at any change of plane.",
    status: "placeholder",
  },
  {
    slug: "lobby-reception-form",
    title: "Lobby reception form",
    sector: "Hospitality",
    application: "Reception desk",
    location: "Location to be confirmed",
    material: "Sand — matte",
    scope: "Design support, fabrication, installation",
    techniques: ["CNC cutting", "Thermoforming", "Concealed lighting detail"],
    challenge:
      "An elliptical desk with a lit reveal at the floor, delivered as one apparently solid object.",
    solution:
      "The face was formed in segments to a common radius, joined seamlessly and detailed with a shadow gap that carries the light line.",
    outcome:
      "A monolithic front-of-house element that holds its edge under continuous public use.",
    status: "placeholder",
  },
  {
    slug: "washroom-vanity-run",
    title: "Washroom vanity run",
    sector: "Commercial",
    application: "Vanity & integrated basins",
    location: "Location to be confirmed",
    material: "Ash — matte",
    scope: "Fabrication and installation",
    techniques: ["Integrated basins", "Coved upstand", "Drainage grooves"],
    challenge:
      "A long run of basins that had to be cleanable quickly and repairable without removing the deck.",
    solution:
      "Bowls were joined into the deck and coved into the upstand, removing every internal corner from the wash zone.",
    outcome:
      "One continuous surface from splashback to front edge, refinishable in place.",
    status: "placeholder",
  },
  {
    slug: "backlit-feature-wall",
    title: "Backlit feature wall",
    sector: "Retail",
    application: "Feature wall",
    location: "Location to be confirmed",
    material: "Resin — translucent",
    scope: "Fabrication and installation",
    techniques: ["Translucent grade", "Machined relief", "Backlighting"],
    challenge:
      "A wall that had to be quiet when unlit and become the focal point when lit.",
    solution:
      "A machined relief was cut into a translucent grade so illumination varies with material thickness rather than with applied graphics.",
    outcome: "A surface with two distinct states and no visible light source.",
    status: "placeholder",
  },
];

export const process = [
  { index: "01", title: "Discovery", body: "Understanding the space, the intent and the constraints before any material is named." },
  { index: "02", title: "Design discussion", body: "Working alongside the architect or designer on how the surface should behave." },
  { index: "03", title: "Material selection", body: "Tone, finish and grade chosen against the application, not the mood board alone." },
  { index: "04", title: "Technical feasibility", body: "Testing the geometry against what can actually be formed, joined and transported." },
  { index: "05", title: "Detailed design", body: "Shop drawings that resolve edges, joints, junctions and fixings." },
  { index: "06", title: "Fabrication", body: "Cutting, forming, joining and finishing in controlled conditions." },
  { index: "07", title: "Quality inspection", body: "Dry assembly and surface review before anything leaves the workshop." },
  { index: "08", title: "Installation", body: "Site assembly, on-site joining and final finishing." },
  { index: "09", title: "Handover & aftercare", body: "Care guidance and a route back to us for refinishing when required." },
];

export type JournalEntry = {
  slug: string;
  title: string;
  category: string;
  readingTime: string;
  excerpt: string;
  body: string[];
  status: ContentStatus;
};

export const journal: JournalEntry[] = [
  {
    slug: "what-solid-surface-actually-is",
    title: "What solid surface actually is",
    category: "Material knowledge",
    readingTime: "4 min",
    excerpt:
      "A homogeneous, workable material with colour through its full thickness — and why that single property changes what a designer can draw.",
    body: [
      "Solid surface is a manufactured material supplied in sheet form. Unlike a stone slab, it is homogeneous: what you see on the face continues through the body.",
      "That property is the reason it can be joined invisibly. Two panels bonded in matched material and sanded back leave nothing to see, because there is no separate top layer to interrupt.",
      "It is also the reason the material is repairable. Surface damage can usually be sanded out and the finish re-established, rather than the element being replaced.",
      "For an architect, this means the surface is no longer a set of tiles or slabs with a joint pattern to resolve. It is a continuous skin that can follow the geometry of the drawing.",
    ],
    status: "placeholder",
  },
  {
    slug: "how-a-curve-is-made",
    title: "How a curve is made",
    category: "Fabrication",
    readingTime: "5 min",
    excerpt:
      "Thermoforming, in plain terms: what heat does to a flat sheet, and what determines the tightest radius a design can hold.",
    body: [
      "A flat sheet is heated evenly until it becomes formable, then held in a mould until it cools into the new geometry.",
      "The achievable radius depends on the material grade, the sheet thickness and the direction of the curve. Tighter radii generally require thinner material or a different grade.",
      "This is why feasibility belongs early in a project. A curve resolved on the drawing before fabrication costs nothing; the same curve discovered on site costs a component.",
      "Confirm achievable radii for your specific grade with us before specifying.",
    ],
    status: "placeholder",
  },
  {
    slug: "designing-the-joint-out",
    title: "Designing the joint out",
    category: "Design",
    readingTime: "3 min",
    excerpt:
      "Where a seam falls is a design decision, not a fabrication accident. A short note on planning joints before drawings are issued.",
    body: [
      "Sheet sizes are finite, so long runs contain joins. The question is not whether there is a join but where it sits.",
      "Placed well, a join falls at a change of plane, behind a fixture, or where the eye is already interrupted. Placed by default, it lands in the middle of the most visible face.",
      "Sharing setting-out early lets fabrication plan the sheet layout around the design rather than around the offcut.",
    ],
    status: "placeholder",
  },
  {
    slug: "specifying-for-high-traffic",
    title: "Specifying for high-traffic interiors",
    category: "Professional resources",
    readingTime: "4 min",
    excerpt:
      "What to ask for when a surface will be cleaned several times a day for a decade.",
    body: [
      "In heavily used interiors, the maintenance regime matters as much as the finish selection.",
      "Matte finishes generally hide day-to-day wear better than polished ones; polished finishes read as more refined but show scuffing sooner.",
      "Plan for refinishing. Because solid surface can be worked in place, a maintenance cycle can restore an element rather than replace it.",
      "For any regulatory, hygiene or fire requirement, request the current datasheet for the specific grade and confirm it against your project specification.",
    ],
    status: "placeholder",
  },
];

export const resources = [
  { title: "Product catalogue", detail: "Full colour and finish range", status: "confirm" as ContentStatus },
  { title: "Technical datasheets", detail: "Per grade, per finish", status: "confirm" as ContentStatus },
  { title: "Fabrication guidelines", detail: "Forming, joining, tolerances", status: "confirm" as ContentStatus },
  { title: "Installation notes", detail: "Substrate, support, movement", status: "confirm" as ContentStatus },
  { title: "Care & maintenance", detail: "Cleaning and refinishing", status: "confirm" as ContentStatus },
  { title: "Edge detail drawings", detail: "Standard and custom profiles", status: "confirm" as ContentStatus },
  { title: "CAD & BIM files", detail: "For specification and coordination", status: "confirm" as ContentStatus },
  { title: "Sample requests", detail: "Physical swatches for selection", status: "confirm" as ContentStatus },
];

export const enquiryRoutes = [
  { title: "Start a project", detail: "You have a space, a drawing or a brief." },
  { title: "Request samples", detail: "Physical swatches for material selection." },
  { title: "Talk to a material specialist", detail: "Guidance on grade, finish and application." },
  { title: "Request technical information", detail: "Datasheets, details and specification support." },
  { title: "Trade & fabrication partners", detail: "Working with us on supply or fabrication." },
];
