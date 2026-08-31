import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LogoLockup } from "@/components/LogoLockup";
import { useSite } from "@/context/SiteProvider";
import { telHref } from "@/lib/storage";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const { openModal, settings } = useSite();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <LogoLockup />

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              activeProps={{ className: "text-primary bg-secondary" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="rounded-md px-4 py-2 text-sm font-semibold transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <Button variant="outline" size="sm" asChild>
            <a href={telHref(settings.primaryPhone)}>
              <Phone className="h-4 w-4" />
              {settings.primaryPhone}
            </a>
          </Button>
          <Button size="sm" onClick={() => openModal("demo")}>
            Book ₹1 Demo
          </Button>
        </div>

        <button
          type="button"
          className="rounded-md border border-border p-2 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-popover px-4 pb-5 pt-3 lg:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: link.to === "/" }}
                activeProps={{ className: "text-primary" }}
                className="rounded-md px-3 py-2.5 text-sm font-semibold text-muted-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <Button variant="outline" asChild>
              <a href={telHref(settings.primaryPhone)}>
                <Phone className="h-4 w-4" />
                Call {settings.primaryPhone}
              </a>
            </Button>
            <Button
              onClick={() => {
                setOpen(false);
                openModal("demo");
              }}
            >
              Book ₹1 Demo
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
