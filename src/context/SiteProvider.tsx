import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  KEYS,
  loadAdminAuth,
  loadCallbacks,
  loadDemos,
  loadEnquiries,
  loadPortfolio,
  loadReferrals,
  loadSettings,
  loadTestimonials,
  uid,
  writeJSON,
} from "@/lib/storage";
import { ADMIN_CREDENTIALS, DEFAULT_SETTINGS, PORTFOLIO, SEED_TESTIMONIALS } from "@/lib/company";
import type {
  CallbackRequest,
  DemoBooking,
  Enquiry,
  ModalKind,
  PortfolioItem,
  Referral,
  SiteSettings,
  Testimonial,
} from "@/types";

interface SiteContextValue {
  hydrated: boolean;
  settings: SiteSettings;
  updateSettings: (patch: Partial<SiteSettings>) => void;

  enquiries: Enquiry[];
  addEnquiry: (data: Omit<Enquiry, "id" | "status" | "createdAt">) => void;
  updateEnquiry: (id: string, patch: Partial<Enquiry>) => void;
  deleteEnquiry: (id: string) => void;

  callbacks: CallbackRequest[];
  addCallback: (data: Omit<CallbackRequest, "id" | "status" | "createdAt">) => void;
  updateCallback: (id: string, patch: Partial<CallbackRequest>) => void;

  demos: DemoBooking[];
  addDemo: (data: Omit<DemoBooking, "id" | "status" | "createdAt">) => void;
  updateDemo: (id: string, patch: Partial<DemoBooking>) => void;

  referrals: Referral[];
  addReferral: (data: Omit<Referral, "id" | "createdAt">) => void;

  testimonials: Testimonial[];
  addTestimonial: (data: Omit<Testimonial, "id" | "approved" | "createdAt">) => void;
  updateTestimonial: (id: string, patch: Partial<Testimonial>) => void;
  deleteTestimonial: (id: string) => void;

  portfolio: PortfolioItem[];
  addPortfolio: (item: Omit<PortfolioItem, "id">) => void;
  updatePortfolio: (id: string, patch: Partial<PortfolioItem>) => void;
  deletePortfolio: (id: string) => void;

  isAdmin: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;

  modal: ModalKind;
  modalPayload: { service?: string; project?: PortfolioItem } | null;
  openModal: (kind: Exclude<ModalKind, null>, payload?: { service?: string; project?: PortfolioItem }) => void;
  closeModal: () => void;
}

const SiteContext = createContext<SiteContextValue | null>(null);

export function SiteProvider({ children }: { children: ReactNode }) {
  const [hydrated, setHydrated] = useState(false);
  const [settings, setSettings] = useState<SiteSettings>(DEFAULT_SETTINGS);
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [callbacks, setCallbacks] = useState<CallbackRequest[]>([]);
  const [demos, setDemos] = useState<DemoBooking[]>([]);
  const [referrals, setReferrals] = useState<Referral[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>(SEED_TESTIMONIALS);
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>(PORTFOLIO);
  const [isAdmin, setIsAdmin] = useState(false);
  const [modal, setModal] = useState<ModalKind>(null);
  const [modalPayload, setModalPayload] = useState<
    { service?: string; project?: PortfolioItem } | null
  >(null);

  useEffect(() => {
    setSettings(loadSettings());
    setEnquiries(loadEnquiries());
    setCallbacks(loadCallbacks());
    setDemos(loadDemos());
    setReferrals(loadReferrals());
    setTestimonials(loadTestimonials());
    setPortfolio(loadPortfolio());
    setIsAdmin(loadAdminAuth());
    setHydrated(true);
  }, []);

  const persist = useCallback(<T,>(key: string, value: T) => writeJSON(key, value), []);

  const updateSettings = useCallback(
    (patch: Partial<SiteSettings>) => {
      setSettings((prev) => {
        const next = { ...prev, ...patch };
        persist(KEYS.settings, next);
        return next;
      });
    },
    [persist],
  );

  const addEnquiry = useCallback<SiteContextValue["addEnquiry"]>(
    (data) => {
      setEnquiries((prev) => {
        const next = [
          { ...data, id: uid("enq"), status: "Pending" as const, createdAt: new Date().toISOString() },
          ...prev,
        ];
        persist(KEYS.enquiries, next);
        return next;
      });
    },
    [persist],
  );

  const updateEnquiry = useCallback<SiteContextValue["updateEnquiry"]>(
    (id, patch) => {
      setEnquiries((prev) => {
        const next = prev.map((e) => (e.id === id ? { ...e, ...patch } : e));
        persist(KEYS.enquiries, next);
        return next;
      });
    },
    [persist],
  );

  const deleteEnquiry = useCallback(
    (id: string) => {
      setEnquiries((prev) => {
        const next = prev.filter((e) => e.id !== id);
        persist(KEYS.enquiries, next);
        return next;
      });
    },
    [persist],
  );

  const addCallback = useCallback<SiteContextValue["addCallback"]>(
    (data) => {
      setCallbacks((prev) => {
        const next = [
          { ...data, id: uid("cb"), status: "Pending" as const, createdAt: new Date().toISOString() },
          ...prev,
        ];
        persist(KEYS.callbacks, next);
        return next;
      });
    },
    [persist],
  );

  const updateCallback = useCallback<SiteContextValue["updateCallback"]>(
    (id, patch) => {
      setCallbacks((prev) => {
        const next = prev.map((c) => (c.id === id ? { ...c, ...patch } : c));
        persist(KEYS.callbacks, next);
        return next;
      });
    },
    [persist],
  );

  const addDemo = useCallback<SiteContextValue["addDemo"]>(
    (data) => {
      setDemos((prev) => {
        const next = [
          { ...data, id: uid("demo"), status: "Pending" as const, createdAt: new Date().toISOString() },
          ...prev,
        ];
        persist(KEYS.demos, next);
        return next;
      });
    },
    [persist],
  );

  const updateDemo = useCallback<SiteContextValue["updateDemo"]>(
    (id, patch) => {
      setDemos((prev) => {
        const next = prev.map((d) => (d.id === id ? { ...d, ...patch } : d));
        persist(KEYS.demos, next);
        return next;
      });
    },
    [persist],
  );

  const addReferral = useCallback<SiteContextValue["addReferral"]>(
    (data) => {
      setReferrals((prev) => {
        const next = [{ ...data, id: uid("ref"), createdAt: new Date().toISOString() }, ...prev];
        persist(KEYS.referrals, next);
        return next;
      });
    },
    [persist],
  );

  const addTestimonial = useCallback<SiteContextValue["addTestimonial"]>(
    (data) => {
      setTestimonials((prev) => {
        const next = [
          { ...data, id: uid("ts"), approved: false, createdAt: new Date().toISOString() },
          ...prev,
        ];
        persist(KEYS.testimonials, next);
        return next;
      });
    },
    [persist],
  );

  const updateTestimonial = useCallback<SiteContextValue["updateTestimonial"]>(
    (id, patch) => {
      setTestimonials((prev) => {
        const next = prev.map((t) => (t.id === id ? { ...t, ...patch } : t));
        persist(KEYS.testimonials, next);
        return next;
      });
    },
    [persist],
  );

  const deleteTestimonial = useCallback(
    (id: string) => {
      setTestimonials((prev) => {
        const next = prev.filter((t) => t.id !== id);
        persist(KEYS.testimonials, next);
        return next;
      });
    },
    [persist],
  );

  const addPortfolio = useCallback<SiteContextValue["addPortfolio"]>(
    (item) => {
      setPortfolio((prev) => {
        const next = [{ ...item, id: uid("prj") }, ...prev];
        persist(KEYS.portfolio, next);
        return next;
      });
    },
    [persist],
  );

  const updatePortfolio = useCallback<SiteContextValue["updatePortfolio"]>(
    (id, patch) => {
      setPortfolio((prev) => {
        const next = prev.map((p) => (p.id === id ? { ...p, ...patch } : p));
        persist(KEYS.portfolio, next);
        return next;
      });
    },
    [persist],
  );

  const deletePortfolio = useCallback(
    (id: string) => {
      setPortfolio((prev) => {
        const next = prev.filter((p) => p.id !== id);
        persist(KEYS.portfolio, next);
        return next;
      });
    },
    [persist],
  );

  const login = useCallback(
    (email: string, password: string) => {
      const ok =
        email.trim().toLowerCase() === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password;
      if (ok) {
        setIsAdmin(true);
        persist(KEYS.admin, true);
      }
      return ok;
    },
    [persist],
  );

  const logout = useCallback(() => {
    setIsAdmin(false);
    persist(KEYS.admin, false);
  }, [persist]);

  const openModal = useCallback<SiteContextValue["openModal"]>((kind, payload) => {
    setModalPayload(payload ?? null);
    setModal(kind);
  }, []);

  const closeModal = useCallback(() => {
    setModal(null);
    setModalPayload(null);
  }, []);

  const value = useMemo<SiteContextValue>(
    () => ({
      hydrated,
      settings,
      updateSettings,
      enquiries,
      addEnquiry,
      updateEnquiry,
      deleteEnquiry,
      callbacks,
      addCallback,
      updateCallback,
      demos,
      addDemo,
      updateDemo,
      referrals,
      addReferral,
      testimonials,
      addTestimonial,
      updateTestimonial,
      deleteTestimonial,
      portfolio,
      addPortfolio,
      updatePortfolio,
      deletePortfolio,
      isAdmin,
      login,
      logout,
      modal,
      modalPayload,
      openModal,
      closeModal,
    }),
    [
      hydrated,
      settings,
      updateSettings,
      enquiries,
      addEnquiry,
      updateEnquiry,
      deleteEnquiry,
      callbacks,
      addCallback,
      updateCallback,
      demos,
      addDemo,
      updateDemo,
      referrals,
      addReferral,
      testimonials,
      addTestimonial,
      updateTestimonial,
      deleteTestimonial,
      portfolio,
      addPortfolio,
      updatePortfolio,
      deletePortfolio,
      isAdmin,
      login,
      logout,
      modal,
      modalPayload,
      openModal,
      closeModal,
    ],
  );

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite() {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error("useSite must be used inside SiteProvider");
  return ctx;
}
