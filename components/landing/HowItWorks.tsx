import { Kicker, GlassPanel, ImageSection, CheckIcon } from "@/components/ui";

const stages = [
  {
    num: "01",
    title: "Explore",
    question: "\u201cWhat could AI actually do for us?\u201d",
    body: "We work with you to understand your organisation \u2014 your sector, your pressures, your goals \u2014 and match that against a structured library of real-world AI case studies. You get opportunities relevant to your situation, backed by evidence of what worked and what didn\u2019t.",
  },
  {
    num: "02",
    title: "Commit",
    question: "\u201cWhich opportunities should we invest in?\u201d",
    body: "Ideas are cheap. We help you stress-test the most promising opportunities and build business cases that stand up to scrutiny \u2014 connecting the AI capability to a specific business process, to a performance metric, to a P&L outcome.",
  },
  {
    num: "03",
    title: "Realise",
    question: "\u201cHow do we make it happen?\u201d",
    body: "Committing to an AI initiative is the beginning, not the end. We plan adoption \u2014 governance, stakeholders, change management, measurement \u2014 so your investment delivers the value it promised, not just a proof of concept that quietly dies.",
  },
];

const propositions = [
  {
    title: "Evidence over opinion",
    text: "Recommendations backed by real-world case studies, not frameworks and guesswork.",
  },
  {
    title: "Business cases that convert",
    text: "Connected to process, metric, and P&L \u2014 the kind of case a CFO will sign off on.",
  },
  {
    title: "Adoption, not just pilots",
    text: "Governance, change management, and measurement so value is delivered, not just demonstrated.",
  },
];

export function HowItWorks() {
  return (
    <ImageSection
      bgImage="/brain.png"
      id="how-it-works"
    >
      <GlassPanel className="p-[60px] max-lg:p-9">
        {/* Header */}
        <div className="text-center mb-12">
          <Kicker>How It Works</Kicker>
          <h2 className="text-[clamp(26px,3.5vw,38px)] leading-[1.15] mb-4">
            From ideas to outcomes in three&nbsp;stages.
          </h2>
          <p className="text-lg text-muted leading-relaxed max-w-[560px] mx-auto">
            Every engagement follows the same path. Enter at whatever stage
            matches where you are now.
          </p>
        </div>

        {/* Stage cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-12">
          {stages.map((stage) => (
            <div
              key={stage.num}
              className="relative overflow-hidden bg-white/[0.04] border border-white/[0.06] rounded-xl px-7 py-8 transition-all hover:bg-accent/[0.06] hover:border-accent/[0.15] hover:-translate-y-0.5 group"
            >
              {/* Accent bar on hover */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="text-[44px] font-black leading-none text-accent/[0.15] mb-5">
                {stage.num}
              </div>
              <div className="text-xl font-black tracking-tight mb-1.5">
                {stage.title}
              </div>
              <div className="text-[13px] text-accent italic mb-4">
                {stage.question}
              </div>
              <div className="text-[13px] leading-[1.8] text-muted">
                {stage.body}
              </div>
            </div>
          ))}
        </div>

        {/* Proposition row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 pt-12 border-t border-white/[0.06]">
          {propositions.map((prop) => (
            <div key={prop.title} className="flex gap-3.5 items-start">
              <div className="w-7 h-7 rounded-full bg-accent/[0.15] border border-accent/30 flex items-center justify-center shrink-0 mt-0.5">
                <CheckIcon className="text-accent" size={14} strokeWidth={2.5} />
              </div>
              <div>
                <h4 className="text-sm font-bold mb-1">{prop.title}</h4>
                <p className="text-sm text-muted leading-relaxed">{prop.text}</p>
              </div>
            </div>
          ))}
        </div>
      </GlassPanel>
    </ImageSection>
  );
}
