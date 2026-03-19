export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex justify-between items-center flex-wrap gap-4">
          <div className="text-[13px] text-muted">
            &copy; {new Date().getFullYear()} AIValueWorx &mdash;{" "}
            <a
              href="mailto:hello@valuelabai.com"
              className="text-accent no-underline hover:underline"
            >
              hello@valuelabai.com
            </a>
          </div>
          <div className="text-sm text-muted">
            A collaboration between <strong>Goal Atlas</strong> and{" "}
            <strong>weareCrank</strong>.
          </div>
        </div>
      </div>
    </footer>
  );
}
