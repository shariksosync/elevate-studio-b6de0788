import { DEFAULT_SETTINGS, PORTFOLIO, SEED_TESTIMONIALS } from "@/lib/company";
import type {
  CallbackRequest,
  DemoBooking,
  Enquiry,
  PortfolioItem,
  Referral,
  SiteSettings,
  Testimonial,
} from "@/types";

export const KEYS = {
  enquiries: "sosync_enquiries",
  callbacks: "sosync_callbacks",
  demos: "sosync_demo_bookings",
  referrals: "sosync_referrals",
  testimonials: "sosync_testimonials",
  portfolio: "sosync_portfolio",
  settings: "sosync_settings",
  admin: "sosync_admin_auth",
} as const;

const isBrowser = () => typeof window !== "undefined";

export function readJSON<T>(key: string, fallback: T): T {
  if (!isBrowser()) return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function writeJSON<T>(key: string, value: T): void {
  if (!isBrowser()) return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* quota or privacy mode — ignore */
  }
}

export const uid = (prefix: string) =>
  `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;

export const loadEnquiries = () => readJSON<Enquiry[]>(KEYS.enquiries, []);
export const loadCallbacks = () => readJSON<CallbackRequest[]>(KEYS.callbacks, []);
export const loadDemos = () => readJSON<DemoBooking[]>(KEYS.demos, []);
export const loadReferrals = () => readJSON<Referral[]>(KEYS.referrals, []);
export const loadTestimonials = () =>
  readJSON<Testimonial[]>(KEYS.testimonials, SEED_TESTIMONIALS);
export const loadPortfolio = () => readJSON<PortfolioItem[]>(KEYS.portfolio, PORTFOLIO);
export const loadSettings = (): SiteSettings => ({
  ...DEFAULT_SETTINGS,
  ...readJSON<Partial<SiteSettings>>(KEYS.settings, {}),
});
export const loadAdminAuth = () => readJSON<boolean>(KEYS.admin, false);

export const formatDate = (iso: string) => {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const telHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, "")}`;
