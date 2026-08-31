export type ServiceCategory =
  | "Website Development"
  | "Custom Software & ERP"
  | "Enterprise IT & Tech"
  | "Growth & Digital Marketing"
  | "Graphic Design"
  | "AI Services & Automation";

export interface Service {
  id: string;
  title: string;
  category: ServiceCategory;
  icon: string;
  description: string;
  features: string[];
  deliverables: string[];
  startingAt: string;
}

export type PortfolioCategory = "E-Commerce" | "ERP / Software" | "Portals";

export interface PortfolioItem {
  id: string;
  name: string;
  client: string;
  category: PortfolioCategory;
  image: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  tech: string[];
  featured: boolean;
  timeline: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  group: "Leadership" | "Senior Full Stack Squad";
  image: string;
  expertise: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export type EnquiryStatus = "Pending" | "Contacted" | "In Progress" | "Closed";

export interface Enquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  budget?: string;
  message: string;
  status: EnquiryStatus;
  createdAt: string;
}

export interface CallbackRequest {
  id: string;
  name: string;
  phone: string;
  preferredTime?: string;
  status: "Pending" | "Called";
  createdAt: string;
}

export interface DemoBooking {
  id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  preferredDate: string;
  preferredSlot: string;
  notes?: string;
  status: "Pending" | "Confirmed" | "Completed";
  createdAt: string;
}

export interface Referral {
  id: string;
  referrerName: string;
  referrerPhone: string;
  referrerEmail: string;
  clientName: string;
  clientPhone: string;
  clientRequirement: string;
  createdAt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role?: string;
  rating: number;
  message: string;
  approved: boolean;
  createdAt: string;
}

export interface SiteSettings {
  primaryPhone: string;
  secondaryPhone: string;
  supportEmail: string;
  officeAddress: string;
  operatingHours: string;
  announcementText: string;
  announcementEnabled: boolean;
  maintenanceMode: boolean;
}

export type ModalKind =
  | "demo"
  | "enquiry"
  | "referral"
  | "feedback"
  | "caseStudy"
  | null;
