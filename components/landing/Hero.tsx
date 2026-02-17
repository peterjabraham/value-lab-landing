import { Button, Kicker, GlassPanel, ImageSection, CheckIcon } from "@/components/ui";

const stages = [
  { num: 1, label: "Explore", desc: "Identify real AI opportunities for your organisation" },
  { num: 2, label: "Commit", desc: "Build business cases a CFO will back" },
  { num: 3, label: "Realise", desc: "Plan adoption that delivers, not just proves" },
];

export function Hero() {
  return (
    <ImageSection
      bgImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80"
      className="pt-[160px]"
    >
      <GlassPanel className="relative p-[60px] max-lg:p-9">
        {/* Floating stat badges */}
        <div className="absolute z-[3] top-[-16px] right-10 animate-float-1 bg-[rgba(17,24,36,0.85)] backdrop-blur-[20px] border border-glass-border rounded-lg px-[18px] py-3.5 shadow-[0_4px_20px_rgba(0,0,0,0.3)] max-lg:hidden">
          <div className="text-2xl font-black tracking-tight text-accent">3&times;</div>
          <div className="text-[10px] text-muted mt-0.5 leading-snug">
            Higher approval rate with<br />evidence-backed cases
          </div>
        </div>

        <div className="absolute z-[3] bottom-[-16px] left-10 animate-float-2 bg-[rgba(17,24,36,0.85)] backdrop-blur-[20px] border border-glass-border rounded-lg px-[18px] py-3.5 shadow-[0_4px_20px_rgba(0,0,0,0.3)] max-lg:hidden">
          <div className="flex items-center gap-1.5 mb-1">
            <CheckIcon className="text-green-400" size={14} strokeWidth={2.5} />
            <span className="text-sm font-bold">Verified</span>
          </div>
          <div className="text-[10px] text-muted leading-snug">
            Every case study sourced<br />&amp; quality-assessed
          </div>
        </div>

        <div className="absolute z-[3] top-1/2 right-[-20px] -translate-y-1/2 animate-float-3 bg-[rgba(17,24,36,0.85)] backdrop-blur-[20px] border border-glass-border rounded-lg px-[18px] py-3.5 shadow-[0_4px_20px_rgba(0,0,0,0.3)] max-lg:hidden">
          <div className="text-2xl font-black tracking-tight">100+</div>
          <div className="text-[10px] text-muted mt-0.5 leading-snug">
            AI case studies in<br />our evidence library
          </div>
        </div>

        {/* Hero grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <div>
            <Kicker>Close the AI Value Gap</Kicker>
            <h1 className="text-[clamp(34px,4.5vw,52px)] leading-[1.08] mb-5">
              From AI ambition<br />
              to{" "}
              <span className="bg-gradient-to-br from-accent to-[#8BB4FF] bg-clip-text text-transparent">
                measurable&nbsp;returns.
              </span>
            </h1>
            <p className="text-lg leading-relaxed text-muted mb-8 max-w-[480px]">
              The gap between &ldquo;we should do something with AI&rdquo; and
              &ldquo;we&rsquo;re getting real results&rdquo; is where most
              organisations stall. Value Lab AI helps you close it &mdash; with
              evidence, structure, and business cases that actually get approved.
            </p>
            <div className="flex gap-3 items-center flex-wrap">
              <Button href="#contact">
                Start a conversation{" "}
                <span className="transition-transform group-hover:translate-x-0.5">
                  &rarr;
                </span>
              </Button>
              <Button href="#how-it-works" variant="secondary">
                See how it works
              </Button>
            </div>
          </div>

          {/* Right: journey card */}
          <div>
            <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-8">
              <div className="mb-5">
                <Kicker className="mb-1.5">Your AI Journey</Kicker>
                <p className="text-sm text-muted">
                  Three stages. Evidence-led. Outcome-focused.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                {stages.map((stage, i) => (
                  <div key={stage.num}>
                    <div className="flex items-center gap-3.5 p-3.5 rounded-lg bg-white/[0.03] border border-white/[0.04] transition-all hover:bg-accent/[0.06] hover:border-accent/[0.12]">
                      <div className="w-[38px] h-[38px] rounded-sm bg-accent text-black font-black text-[15px] flex items-center justify-center shrink-0">
                        {stage.num}
                      </div>
                      <div>
                        <div className="font-bold text-sm text-foreground">
                          {stage.label}
                        </div>
                        <div className="text-[11px] text-muted mt-0.5">
                          {stage.desc}
                        </div>
                      </div>
                    </div>
                    {i < stages.length - 1 && (
                      <div className="w-0.5 h-2.5 bg-border ml-8" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </GlassPanel>
    </ImageSection>
  );
}
