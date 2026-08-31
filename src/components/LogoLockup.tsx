import { Link } from "@tanstack/react-router";
import logo from "@/assets/sosync-logo.png.asset.json";
import { COMPANY } from "@/lib/company";
import { cn } from "@/lib/utils";

export function LogoLockup({
  className,
  showText = true,
  size = 40,
}: {
  className?: string;
  showText?: boolean;
  size?: number;
}) {
  return (
    <Link to="/" className={cn("flex items-center gap-3", className)} aria-label={COMPANY.brand}>
      <img
        src={logo.url}
        alt={`${COMPANY.brand} logo`}
        width={size}
        height={size}
        style={{ width: size, height: size }}
        className="object-contain"
      />
      {showText && (
        <span className="leading-tight">
          <span className="block font-display text-base font-extrabold tracking-tight">
            SO<span className="text-primary">Sync</span>
          </span>
          <span className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">
            AI Tech
          </span>
        </span>
      )}
    </Link>
  );
}
