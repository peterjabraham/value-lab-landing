import { Nav, Hero, HowItWorks, Evidence, CTA, Footer } from "@/components/landing";

export default function LandingPage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <Evidence />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
