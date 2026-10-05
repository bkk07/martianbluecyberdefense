import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
}) {
  const alignCls = align === "center" ? "text-center mx-auto items-center" : "text-left items-start";
  return (
    <Reveal className={`flex max-w-3xl flex-col gap-4 ${alignCls}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
        {title}
      </h2>
      {copy && <p className="max-w-2xl text-base leading-relaxed text-mist sm:text-lg">{copy}</p>}
    </Reveal>
  );
}
