import Image from "next/image";
import { SectionContainer } from "@/components/layout/SectionContainer";

export const metadata = {
  title: "About — Waaridh Borpujari",
  description:
    "I'm Waaridh Borpujari, an AI systems engineer helping companies replace expensive manual processes with intelligent automation.",
};

export default function AboutPage() {
  return (
    <SectionContainer className="flex min-h-[calc(100vh-4rem)] flex-col justify-center py-24 md:py-32">
      <div className="mb-12">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">About</p>
        <h1 className="text-4xl font-bold text-text-primary md:text-5xl lg:text-6xl">
          Waaridh Borpujari
        </h1>
        <p className="mt-2 text-lg text-text-secondary">AI Systems Engineer</p>
      </div>
      <div className="flex flex-col items-center gap-12 md:flex-row md:items-start md:gap-16">
        {/* Photo */}
        <div className="shrink-0">
          <div className="relative h-48 w-48 overflow-hidden rounded-full border-2 border-accent/30 md:h-56 md:w-56">
            <Image
              src="/portfolio/waaridh.jpg"
              alt="Waaridh Borpujari"
              fill
              className="object-cover"
              style={{ objectPosition: "35% 30%", transform: "scale(1.4)", transformOrigin: "35% 30%" }}
              priority
            />
          </div>
        </div>

        {/* Bio */}
        <div className="max-w-2xl pt-3">
          <p className="text-base leading-relaxed text-text-secondary md:text-lg">
            I&apos;m Waaridh Borpujari, an AI systems engineer focused on turning{" "}
            <span className="text-text-primary">expensive, manual business operations</span> into
            automated pipelines that cost a fraction to run. I work with founders and operators who
            are spending too much — in time, money, or both — on processes that software should be
            handling.
          </p>
          <p className="mt-4 text-base leading-relaxed text-text-secondary md:text-lg">
            The case studies on this site aren&apos;t hypothetical. They&apos;re{" "}
            <span className="text-text-primary">systems running right now</span>, saving real money
            and returning hours back to the people who built these companies.
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}
