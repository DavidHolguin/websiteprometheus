import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2">
          <span
            aria-hidden
            className="h-1.5 w-1.5 rounded-full bg-ember shadow-[0_0_12px_2px_rgba(26,115,232,0.6)]"
          />
          <span className="text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="text-balance text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground leading-[1.08]">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-pretty text-base text-muted-foreground sm:text-lg max-w-[52ch] leading-relaxed",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
