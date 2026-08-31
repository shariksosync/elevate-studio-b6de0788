import { useState } from "react";
import { Megaphone, X } from "lucide-react";
import { useSite } from "@/context/SiteProvider";

export function AnnouncementBar() {
  const { settings } = useSite();
  const [dismissed, setDismissed] = useState(false);

  if (!settings.announcementEnabled || dismissed || !settings.announcementText) return null;

  return (
    <div className="relative z-50 bg-gradient-solar text-primary-foreground">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-2 text-xs font-semibold sm:text-sm">
        <Megaphone className="h-4 w-4 shrink-0" />
        <p className="flex-1 text-center">{settings.announcementText}</p>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Dismiss announcement"
          className="shrink-0 rounded-full p-1 transition-opacity hover:opacity-70"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
