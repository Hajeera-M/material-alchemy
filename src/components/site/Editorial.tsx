import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return <div className="label text-primary">{children}</div>;
}

export function Shell({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-[1440px] px-6 lg:px-12 ${className}`}>{children}</div>;
}

export function Section({
  children,
  id,
  bordered = true,
  panel = false,
}: {
  children: ReactNode;
  id?: string;
  bordered?: boolean;
  panel?: boolean;
}) {
  return (
    <section
      id={id}
      className={`${bordered ? "border-t border-line" : ""} ${panel ? "bg-panel" : ""} section-reveal`}
    >
      <Shell className="py-16 lg:py-24">{children}</Shell>
    </section>
  );
}

export function PageHeader({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: ReactNode;
  lede: string;
}) {
  return (
    <Shell className="pt-16 pb-12 lg:pt-24 lg:pb-16">
      <div className="rise">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-6 max-w-[18ch] text-4xl leading-[1.04] text-balance lg:text-6xl">
          {title}
        </h1>
        <div className="mt-8 h-px w-40 bg-primary rule-grow" />
        <p className="mt-8 max-w-[52ch] text-base leading-relaxed text-mute text-pretty lg:text-lg">
          {lede}
        </p>
      </div>
    </Shell>
  );
}

export function ContentNote({ children }: { children: ReactNode }) {
  return (
    <p className="border-l border-line pl-4 label leading-relaxed text-mute normal-case tracking-[0.08em]">
      {children}
    </p>
  );
}
