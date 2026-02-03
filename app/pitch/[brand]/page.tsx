type MediaType = "image" | "video";

type MediaSlot = {
  id: string;
  type: MediaType;
  src: string;
  alt?: string;
  poster?: string;
  aspect?: "16:9" | "9:16" | "1:1" | "4:5";
  note?: string;
};

type PitchData = {
  brand: {
    name: string;
    websiteUrl?: string;
    industry?: string;
  };
  slots: {
    HERO_VISUAL: MediaSlot;
    SHOPPABLE_EXAMPLES: MediaSlot[];
    STUDIO_MEDIA: MediaSlot[];
  };
  copy: {
    heroH1: string;
    heroH2: string;
    marketImpactTitle: string;
    marketImpactMetrics: Array<{ value: string; label: string }>;
    marketImpactAssurances: Array<{ title: string; body: string }>;
    whatTolstoyIsTitle: string;
    pillars: Array<{ title: string; body: string }>;
    entryPointsTitle: string;
    entryPoints: Array<{ title: string; body: string }>;
    shoppableOverviewTitle: string;
    shoppableOverviewBody: string;
    shoppableUseCasesTitle: string;
    shoppableUseCases: Array<{ title: string; body: string }>;
    whereItLivesTitle: string;
    whereItLives: Array<{ title: string; body: string }>;
    studioOverviewTitle: string;
    studioOverviewBody: string;
    studioGeneratedTitle: string;
    studioDisclaimer: string;
    formatsTitle: string;
    formatsCols: Array<{ title: string; bullets: string[] }>;
    systemTitle: string;
    systemSteps: Array<{ title: string; body: string }>;
    whyTitle: string;
    whyCards: Array<{ title: string; body: string }>;
    ctaTitle: string;
    ctaBody: string;
    ctaButton: string;
  };
};

const DEFAULT_DATA: PitchData = {
  brand: {
    name: "Your Brand",
    websiteUrl: "https://example.com",
    industry: "Beauty",
  },
  slots: {
    HERO_VISUAL: {
      id: "SLOT_HERO_VISUAL",
      type: "image",
      src: "/placeholders/hero.jpg",
      alt: "Hero visual",
      aspect: "16:9",
      note: "Generated: on-brand ambient background (no text).",
    },
    SHOPPABLE_EXAMPLES: [
      {
        id: "SLOT_SHOPPABLE_EXAMPLE_PDP",
        type: "image",
        src: "/placeholders/shoppable-pdp.jpg",
        alt: "PDP Stories example",
        aspect: "9:16",
        note: "Templated by vertical",
      },
      {
        id: "SLOT_SHOPPABLE_EXAMPLE_HOMEPAGE",
        type: "image",
        src: "/placeholders/shoppable-homepage.jpg",
        alt: "Homepage Spotlight example",
        aspect: "16:9",
        note: "Templated by vertical",
      },
      {
        id: "SLOT_SHOPPABLE_EXAMPLE_SOCIAL",
        type: "image",
        src: "/placeholders/shoppable-social-grid.jpg",
        alt: "Social Grid example",
        aspect: "16:9",
        note: "Templated by vertical",
      },
      {
        id: "SLOT_SHOPPABLE_EXAMPLE_EMAIL",
        type: "image",
        src: "/placeholders/shoppable-email.jpg",
        alt: "Email video example",
        aspect: "4:5",
        note: "Templated by vertical",
      },
    ],
    STUDIO_MEDIA: [
      {
        id: "SLOT_STUDIO_MEDIA_1",
        type: "image",
        src: "/placeholders/studio-1.jpg",
        alt: "AI Studio example 1",
        aspect: "4:5",
        note: "Generated: packshot to editorial",
      },
      {
        id: "SLOT_STUDIO_MEDIA_2",
        type: "image",
        src: "/placeholders/studio-2.jpg",
        alt: "AI Studio example 2",
        aspect: "1:1",
        note: "Generated: lifestyle scene",
      },
      {
        id: "SLOT_STUDIO_MEDIA_3",
        type: "video",
        src: "/placeholders/studio-3.mp4",
        alt: "AI Studio example 3",
        poster: "/placeholders/studio-3.jpg",
        aspect: "16:9",
        note: "Generated: short product montage",
      },
    ],
  },
  copy: {
    heroH1: "Shoppable video experiences that move the needle",
    heroH2:
      "Turn catalog assets into interactive stories that lift discovery, intent, and conversion across your site.",
    marketImpactTitle: "Market impact",
    marketImpactMetrics: [
      { value: "2.3x", label: "longer sessions" },
      { value: "+18%", label: "conversion lift" },
      { value: "45%", label: "video completion" },
    ],
    marketImpactAssurances: [
      {
        title: "Fast launch",
        body: "Launch in days with lightweight embeds and zero redesign.",
      },
      {
        title: "Brand safe",
        body: "On-brand layouts, copy, and styling with clear approvals.",
      },
      {
        title: "Measured impact",
        body: "Track engagement and revenue across the full funnel.",
      },
    ],
    whatTolstoyIsTitle: "What Tolstoy is",
    pillars: [
      {
        title: "Interactive video",
        body: "Stories that drive exploration, intent, and product discovery.",
      },
      {
        title: "Shoppable layer",
        body: "Make every frame actionable with product and cart actions.",
      },
      {
        title: "Performance engine",
        body: "Optimize with real-time analytics and experimentation.",
      },
    ],
    entryPointsTitle: "Entry points",
    entryPoints: [
      {
        title: "PDP stories",
        body: "Keep shoppers engaged with product-specific narratives.",
      },
      {
        title: "Homepage spotlight",
        body: "Surface priority campaigns and hero launches.",
      },
      {
        title: "Email and social",
        body: "Extend stories into lifecycle and owned channels.",
      },
    ],
    shoppableOverviewTitle: "Shoppable video, everywhere",
    shoppableOverviewBody:
      "Embed video modules across the journey to reduce friction and keep shoppers moving.",
    shoppableUseCasesTitle: "Shoppable use cases",
    shoppableUseCases: [
      { title: "Gift guides", body: "Curated bundles for seasonal moments." },
      {
        title: "How-to content",
        body: "Teach routines and highlight hero products.",
      },
      { title: "Influencer edits", body: "Scale creator content on-site." },
      { title: "Routine builders", body: "Cross-sell with guided flows." },
    ],
    whereItLivesTitle: "Where it lives",
    whereItLives: [
      { title: "On-site", body: "Homepage, PDP, and collection pages." },
      { title: "Lifecycle", body: "Email, SMS, and post-purchase flows." },
      { title: "Retail", body: "In-store screens and QR landing pages." },
    ],
    studioOverviewTitle: "AI Studio",
    studioOverviewBody:
      "Generate new visual narratives from your catalog and brand assets.",
    studioGeneratedTitle: "Generated for your brand",
    studioDisclaimer:
      "Studio outputs are examples and can be refined by your team.",
    formatsTitle: "Formats",
    formatsCols: [
      {
        title: "Vertical",
        bullets: ["PDP stories", "UGC edits", "Quick demos"],
      },
      {
        title: "Horizontal",
        bullets: ["Homepage hero", "Editorial features", "Brand films"],
      },
      {
        title: "Square",
        bullets: ["Social grids", "Email tiles", "Carousel modules"],
      },
    ],
    systemTitle: "The system",
    systemSteps: [
      {
        title: "Align",
        body: "We map your goals, products, and audience moments.",
      },
      {
        title: "Generate",
        body: "Produce shoppable stories with on-brand styling.",
      },
      {
        title: "Activate",
        body: "Deploy across every key surface and channel.",
      },
      {
        title: "Optimize",
        body: "Use analytics to scale what is working.",
      },
    ],
    whyTitle: "Why teams choose Tolstoy",
    whyCards: [
      {
        title: "Conversion focus",
        body: "Built to shorten paths to cart and checkout.",
      },
      {
        title: "Scalable content",
        body: "Generate more stories without more production drag.",
      },
      {
        title: "Design control",
        body: "Layouts and styling match your brand system.",
      },
    ],
    ctaTitle: "Ready to see the pitch?",
    ctaBody:
      "We can build a customized walkthrough with your products and imagery.",
    ctaButton: "Request a demo",
  },
};

const formatBrandName = (slug?: string): string => {
  if (!slug) {
    return "";
  }

  const cleaned = slug.replace(/[-_]+/g, " ").trim();
  if (!cleaned) {
    return "";
  }

  return cleaned
    .split(" ")
    .map((segment) => {
      const lower = segment.toLowerCase();
      return `${lower.charAt(0).toUpperCase()}${lower.slice(1)}`;
    })
    .join(" ");
};

const getPitchData = (brandSlug?: string): PitchData => {
  const formattedBrand = formatBrandName(brandSlug);
  if (!formattedBrand) {
    return DEFAULT_DATA;
  }

  return {
    ...DEFAULT_DATA,
    brand: {
      ...DEFAULT_DATA.brand,
      name: formattedBrand,
    },
  };
};

const getAspectRatioValue = (aspect?: MediaSlot["aspect"]): string => {
  switch (aspect) {
    case "9:16":
      return "9 / 16";
    case "1:1":
      return "1 / 1";
    case "4:5":
      return "4 / 5";
    case "16:9":
    default:
      return "16 / 9";
  }
};

const renderMediaSlot = (slot: MediaSlot, brandName: string): JSX.Element => {
  const aspectRatio = getAspectRatioValue(slot.aspect);
  const altText = slot.alt ?? `${brandName} media`;
  const mediaClassName = "h-full w-full object-cover";

  return (
    <figure key={slot.id} className="flex flex-col gap-3">
      <div
        className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-50"
        style={{ aspectRatio }}
      >
        {slot.type === "video" ? (
          <video
            className={mediaClassName}
            controls
            poster={slot.poster}
            aria-label={altText}
          >
            <source src={slot.src} />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src={slot.src}
            alt={altText}
            className={mediaClassName}
            loading="lazy"
          />
        )}
      </div>
      {slot.note ? (
        <figcaption className="text-xs text-slate-500">{slot.note}</figcaption>
      ) : null}
    </figure>
  );
};

type Props = {
  params?: {
    brand?: string;
  };
};

const Page = ({ params }: Props) => {
  const data = getPitchData(params?.brand);
  const { brand, copy, slots } = data;
  const cardClass = "rounded-2xl border border-slate-200 bg-white p-6";
  const sectionSpacing = "flex flex-col gap-6";

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-12">
        <header className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
              Tolstoy x {brand.name}
            </p>
            <div className="flex flex-col gap-4">
              <h1 className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
                {copy.heroH1}
              </h1>
              <p className="text-lg text-slate-600 md:text-xl">{copy.heroH2}</p>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-slate-500">
              {brand.industry ? (
                <span className="rounded-full border border-slate-200 px-4 py-2">
                  Industry: {brand.industry}
                </span>
              ) : null}
              {brand.websiteUrl ? (
                <a
                  href={brand.websiteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-200 px-4 py-2 transition hover:border-slate-300 hover:text-slate-700"
                >
                  {brand.websiteUrl}
                </a>
              ) : null}
            </div>
          </div>
          <div>{renderMediaSlot(slots.HERO_VISUAL, brand.name)}</div>
        </header>

        <section className={sectionSpacing} aria-labelledby="market-impact">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Impact
            </p>
            <h2 id="market-impact" className="text-3xl font-semibold">
              {copy.marketImpactTitle}
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {copy.marketImpactMetrics.map((metric) => (
              <div key={metric.label} className={cardClass}>
                <p className="text-3xl font-semibold text-slate-900">
                  {metric.value}
                </p>
                <p className="mt-2 text-sm text-slate-500">{metric.label}</p>
              </div>
            ))}
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {copy.marketImpactAssurances.map((assurance) => (
              <div key={assurance.title} className={cardClass}>
                <h3 className="text-lg font-semibold">{assurance.title}</h3>
                <p className="mt-2 text-sm text-slate-500">
                  {assurance.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className={sectionSpacing} aria-labelledby="what-tolstoy-is">
          <h2 id="what-tolstoy-is" className="text-3xl font-semibold">
            {copy.whatTolstoyIsTitle}
          </h2>
          <div className="grid gap-4 lg:grid-cols-3">
            {copy.pillars.map((pillar) => (
              <div key={pillar.title} className={cardClass}>
                <h3 className="text-lg font-semibold">{pillar.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{pillar.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={sectionSpacing} aria-labelledby="entry-points">
          <h2 id="entry-points" className="text-3xl font-semibold">
            {copy.entryPointsTitle}
          </h2>
          <div className="grid gap-4 lg:grid-cols-3">
            {copy.entryPoints.map((entryPoint) => (
              <div key={entryPoint.title} className={cardClass}>
                <h3 className="text-lg font-semibold">{entryPoint.title}</h3>
                <p className="mt-2 text-sm text-slate-500">
                  {entryPoint.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className={sectionSpacing} aria-labelledby="shoppable">
          <div className="flex flex-col gap-3">
            <h2 id="shoppable" className="text-3xl font-semibold">
              {copy.shoppableOverviewTitle}
            </h2>
            <p className="text-base text-slate-600">
              {copy.shoppableOverviewBody}
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {slots.SHOPPABLE_EXAMPLES.map((slot) =>
              renderMediaSlot(slot, brand.name),
            )}
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold">
              {copy.shoppableUseCasesTitle}
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              {copy.shoppableUseCases.map((useCase) => (
                <div key={useCase.title} className={cardClass}>
                  <h4 className="text-base font-semibold">{useCase.title}</h4>
                  <p className="mt-2 text-sm text-slate-500">
                    {useCase.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={sectionSpacing} aria-labelledby="where-it-lives">
          <h2 id="where-it-lives" className="text-3xl font-semibold">
            {copy.whereItLivesTitle}
          </h2>
          <div className="grid gap-4 lg:grid-cols-3">
            {copy.whereItLives.map((location) => (
              <div key={location.title} className={cardClass}>
                <h3 className="text-lg font-semibold">{location.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{location.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={sectionSpacing} aria-labelledby="studio">
          <div className="flex flex-col gap-3">
            <h2 id="studio" className="text-3xl font-semibold">
              {copy.studioOverviewTitle}
            </h2>
            <p className="text-base text-slate-600">
              {copy.studioOverviewBody}
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {slots.STUDIO_MEDIA.map((slot) =>
              renderMediaSlot(slot, brand.name),
            )}
          </div>
          <div className="flex flex-col gap-2 text-sm text-slate-500">
            <p className="font-semibold text-slate-700">
              {copy.studioGeneratedTitle}
            </p>
            <p>{copy.studioDisclaimer}</p>
          </div>
        </section>

        <section className={sectionSpacing} aria-labelledby="formats">
          <h2 id="formats" className="text-3xl font-semibold">
            {copy.formatsTitle}
          </h2>
          <div className="grid gap-4 lg:grid-cols-3">
            {copy.formatsCols.map((column) => (
              <div key={column.title} className={cardClass}>
                <h3 className="text-lg font-semibold">{column.title}</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-500">
                  {column.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className={sectionSpacing} aria-labelledby="system">
          <h2 id="system" className="text-3xl font-semibold">
            {copy.systemTitle}
          </h2>
          <ol className="grid gap-4 md:grid-cols-2">
            {copy.systemSteps.map((step, index) => (
              <li key={step.title} className={cardClass}>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Step {index + 1}
                </p>
                <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{step.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className={sectionSpacing} aria-labelledby="why-tolstoy">
          <h2 id="why-tolstoy" className="text-3xl font-semibold">
            {copy.whyTitle}
          </h2>
          <div className="grid gap-4 lg:grid-cols-3">
            {copy.whyCards.map((card) => (
              <div key={card.title} className={cardClass}>
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{card.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          className="flex flex-col gap-6 rounded-3xl border border-slate-200 bg-slate-50 p-8"
          aria-labelledby="cta"
        >
          <div className="flex flex-col gap-3">
            <h2 id="cta" className="text-3xl font-semibold text-slate-900">
              {copy.ctaTitle}
            </h2>
            <p className="text-base text-slate-600">{copy.ctaBody}</p>
          </div>
          <div>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              {copy.ctaButton}
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Page;
