import { SITE_CONFIG } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-text-secondary">
            {SITE_CONFIG.name}
          </p>
          <p className="text-sm text-text-secondary">
            Building systems that think.
          </p>
        </div>
      </div>
    </footer>
  );
}
