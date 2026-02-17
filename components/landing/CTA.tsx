import { Button, Kicker, CheckIcon } from "@/components/ui";

const badges = ["No pitch decks", "No obligation", "Just a conversation"];

export function CTA() {
  return (
    <section className="py-[100px] relative" id="contact">
      {/* Decorative orb */}
      <div className="absolute w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none bg-[radial-gradient(circle,rgba(91,141,239,0.1)_0%,transparent_70%)] bottom-[-200px] right-[-100px]" />

      <div className="max-w-[1200px] mx-auto px-6">
        <div className="relative overflow-hidden bg-glass backdrop-blur-[40px] border border-glass-border rounded-2xl p-[72px] max-md:p-12 text-center shadow-[0_4px_40px_rgba(0,0,0,0.2),0_0_100px_rgba(91,141,239,0.04)] glass-glow-line">
          {/* Stronger glow line override */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/35 to-transparent" />

          <Kicker>Get Started</Kicker>
          <h2 className="text-[clamp(26px,3.5vw,40px)] leading-[1.15] mb-4">
            Start a conversation.
          </h2>
          <p className="text-lg text-muted leading-relaxed max-w-[500px] mx-auto mb-9">
            Tell us about your organisation and what you&rsquo;re trying to
            figure out. We&rsquo;ll come back within a couple of working days
            with initial thoughts and a suggestion for how we might help.
          </p>
          <Button
            href="mailto:hello@valuelabai.com"
            className="text-lg px-9 py-4"
          >
            hello@valuelabai.com{" "}
            <span className="transition-transform group-hover:translate-x-0.5">
              &rarr;
            </span>
          </Button>

          <div className="flex gap-6 justify-center mt-7 flex-wrap">
            {badges.map((badge) => (
              <div
                key={badge}
                className="text-sm text-muted flex items-center gap-1.5"
              >
                <CheckIcon className="text-accent" size={14} strokeWidth={2} />
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
