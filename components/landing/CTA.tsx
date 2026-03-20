import { Button, Kicker, CheckIcon, GlassPanel, ImageSection } from "@/components/ui";

const badges = ["No pitch decks", "No obligation", "Just a conversation"];

export function CTA() {
  return (
    <ImageSection bgImage="/hand.png" id="contact">
      <GlassPanel className="p-[72px] max-md:p-12 text-center">
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
          href="mailto:hello@aivalueworx.com"
          className="text-lg px-9 py-4"
        >
          hello@aivalueworx.com{" "}
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
      </GlassPanel>
    </ImageSection>
  );
}
