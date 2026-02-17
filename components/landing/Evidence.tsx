import { Kicker, GlassPanel, ImageSection } from "@/components/ui";

const evidenceCards = [
  {
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Verified case studies",
    desc: "Specific, verifiable claims with traceable sources.",
    barWidth: "92%",
  },
  {
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Multi-sector coverage",
    desc: "Real organisations across industries.",
    barWidth: null,
  },
  {
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Quality-assessed",
    desc: "Transparent about what we know and don\u2019t.",
    barWidth: "85%",
  },
  {
    icon: (
      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Continuously growing",
    desc: "New cases added every week.",
    barWidth: null,
  },
];

const audienceCards = [
  {
    question: "\u201cIs AI a real opportunity for my business, or just noise?\u201d",
    answer:
      "You\u2019ve seen the hype. You need someone to help you cut through it with evidence, not add to it with more speculation.",
  },
  {
    question: "\u201cWe have AI ideas but no way to prioritise them.\u201d",
    answer:
      "You\u2019re not short of possibilities \u2014 you\u2019re short of a structured way to evaluate them against real-world outcomes.",
  },
  {
    question: "\u201cHow do I build a case my board will approve?\u201d",
    answer:
      "You need to connect AI capabilities to business value in language that finance and operations understand.",
  },
  {
    question: "\u201cWe\u2019ve done pilots, but nothing has scaled.\u201d",
    answer:
      "The technology worked. The organisation didn\u2019t change around it. You need an adoption approach, not another experiment.",
  },
];

export function Evidence() {
  return (
    <ImageSection
      bgImage="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1920&q=80"
      id="evidence"
    >
      <GlassPanel className="p-[60px] max-lg:p-9" id="who-for">
        {/* Evidence top half */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-14 pb-14 border-b border-white/[0.06]">
          {/* Text */}
          <div>
            <Kicker>The Evidence Base</Kicker>
            <h2 className="text-[clamp(26px,3.5vw,36px)] leading-[1.15] mb-5">
              Grounded in evidence,<br />not opinion.
            </h2>
            <p className="text-[15px] leading-[1.8] text-muted mb-3.5">
              At the heart of Value Lab AI is a continuously growing library of
              verified AI case studies drawn from real organisations across
              multiple sectors.
            </p>
            <p className="text-[15px] leading-[1.8] text-muted mb-3.5">
              Each case study is broken down into specific, verifiable claims
              &mdash; not vague assertions, but concrete outcomes with traceable
              sources.
            </p>
            <p className="text-[15px] leading-[1.8] text-muted">
              When we tell you that organisations like yours have seen a
              particular result, we can show you the evidence. When the evidence
              is thin, we&rsquo;ll tell you that too.
            </p>
          </div>

          {/* Evidence mini-cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {evidenceCards.map((card) => (
              <div
                key={card.title}
                className="bg-white/[0.04] border border-white/[0.06] rounded-lg p-5 transition-all hover:bg-accent/[0.06] hover:border-accent/[0.12]"
              >
                <div className="w-8 h-8 rounded-sm bg-accent/[0.12] flex items-center justify-center mb-2.5 text-accent">
                  {card.icon}
                </div>
                <h4 className="text-[13px] font-bold mb-1">{card.title}</h4>
                <p className="text-[11px] text-muted leading-snug">{card.desc}</p>
                {card.barWidth && (
                  <div className="h-[3px] rounded-sm bg-white/[0.06] mt-2.5 overflow-hidden">
                    <div
                      className="h-full rounded-sm bg-accent"
                      style={{ width: card.barWidth }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Audience bottom half */}
        <div className="text-center mb-8">
          <Kicker>Who It&rsquo;s For</Kicker>
          <h2 className="text-[clamp(24px,3vw,32px)] leading-[1.15] mb-3">
            For organisations asking the right questions.
          </h2>
          <p className="text-[15px] text-muted max-w-[520px] mx-auto">
            Mid-market and enterprise organisations who want to be rigorous
            about AI without being paralysed by it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {audienceCards.map((card) => (
            <div
              key={card.question}
              className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-7 transition-all hover:bg-accent/[0.06] hover:border-accent/[0.15]"
            >
              <div className="text-[15px] font-semibold italic text-foreground mb-3 leading-snug">
                {card.question}
              </div>
              <div className="text-[13px] text-muted leading-relaxed">
                {card.answer}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-8 text-sm text-muted max-w-[500px] mx-auto">
          Designed for leaders &mdash; CEOs, COOs, CFOs, and their teams &mdash;
          who need a path they can defend.
        </p>
      </GlassPanel>
    </ImageSection>
  );
}
