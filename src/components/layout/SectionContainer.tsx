import { cn } from "@/lib/utils";

export function SectionContainer({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("mx-auto max-w-6xl px-6 md:px-12", className)}>
      {children}
    </section>
  );
}
