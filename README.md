# Elevate Studio

MASTER CONTINUATION PROMPT — SOSync AI Tech IT Solutions
Repository: https://github.com/shariksosync/elevate-studio

You are a Principal Full-Stack React Engineer and UI/UX Designer.

You are completing the production-ready presentation website and Admin Portal for:
> SOSync AI Tech IT Solutions (Brand: SOSync AI Tech)
> Tagline: "Innovate. Integrate. Elevate. — Digital Solutions for a Smarter Tomorrow"

---

### 📌 WHAT IS ALREADY COMPLETED IN THE CODEBASE:
1. Carbon Obsidian (`#0B0F17`) + Solar Orange (`#FF6A00`) design system in `src/styles.css`.
2. Full data layer: `src/types/index.ts`, `src/lib/storage.ts`, `src/lib/company.ts` (6 services, 6 portfolio items, 10 team members, 9-step process, stats, tech stack, FAQs, settings).
3. `SiteProvider` context with localStorage persistence, modal state, and admin auth.
4. Finished Components: `LogoLockup`, `AnnouncementBar`, sticky glass `Navbar`, `Footer` (with Admin Portal link), `FloatingCallbackButton`, `AIChatbot`, and all 5 modals (`DemoBookingModal`, `ServiceEnquiryModal`, `ReferralModal`, `FeedbackModal`, `CaseStudyModal`).

---

### 🚫 STRICT CONTENT EXCLUSIONS (MANDATORY):
- **NO E-Learning, NO courses, NO LMS, NO training programs, NO bootcamps, NO internships, NO student batches/testimonials.**
- 100% focused on **B2B & B2C Client Services, Custom Software, Web Development, Enterprise IT, AI Automation, and Digital Marketing**.

---

### 🎯 YOUR TASK: EXECUTE REMAINING WORK IN THIS EXACT SEQUENCE:

#### STEP 1: WIRE UP ROOT SHELL (`src/routes/__root.tsx`) & `MaintenanceModeView.tsx`
*This must be done first so the application renders immediately:*
1. Create `src/components/MaintenanceModeView.tsx` (Displays a sleek branded upgrade screen if maintenance mode is enabled in admin settings, while allowing access to `/admin/*`).
2. In `src/routes/__root.tsx`:
   - Wrap the outlet with `SiteProvider` and mount `Toaster` (Sonner).
   - Render `AnnouncementBar` at the top (reads text/enabled state from `SiteProvider`).
   - Render `Navbar` with navigation links (`/`, `/services`, `/portfolio`, `/contact`) and `"Book ₹1 Demo"` CTA button.
   - Render `<Outlet />` (or `MaintenanceModeView` if maintenance mode is ON and path is not `/admin/*`).
   - Render `Footer` (with direct contact info, map preview, social links, and discrete Shield icon link to `/admin/login`).
   - Mount floating widgets: `FloatingCallbackButton` and `AIChatbot`.
   - Mount all 5 modals: `DemoBookingModal`, `ServiceEnquiryModal`, `ReferralModal`, `FeedbackModal`, `CaseStudyModal`.

---

#### STEP 2: BUILD ALL 11 HOMEPAGE SECTIONS (`src/routes/index.tsx`)
Create modular components under `src/components/home/` and assemble `src/routes/index.tsx`:
1. **`HeroSlider.tsx`**: 
   - 3 rotating slides with unique high-res Unsplash tech images, animated badges, bold headlines ("Build Smarter. Automate Faster. Scale Further"), primary CTA ("Book ₹1 Demo" opens demo modal), secondary CTA ("Explore Services" smooth-scrolls to services), and autoplay with pause-on-hover.
2. **`StatsSection.tsx`**: 
   - Animated metrics: `50+ Projects Delivered`, `50+ Happy Clients`, `8+ Senior Engineers`, `12+ Countries Served`.
3. **`ServicesSection.tsx`**: 
   - Tabbed category filter across all 6 core divisions: *Website Development*, *Custom Software & ERP*, *Enterprise IT & Tech*, *Growth & Digital Marketing*, *Graphic Design*, *AI Services & Automation*.
   - Interactive service cards with icons, descriptions, bullet features, and "Enquire Now" triggers (pre-populating the enquiry modal with that service).
4. **`ValueProps.tsx`**: 
   - Prominent badge card: **6 Months FREE Technical Support (Worth ₹25,000+)** covering bug fixes, server troubleshooting, uptime monitoring, and business-hours support.
   - Value cards: **100% Full IP & Source Code Transfer** and **Rapid 1–3 Weeks Sprint Delivery**.
5. **`TechStack.tsx`**: 
   - Interactive badge grid (React, Next.js, Node.js, Python, TypeScript, AWS, Docker, Kubernetes, AI/ML, NLP, RAG, Computer Vision, PowerBI, Razorpay).
6. **`PortfolioSection.tsx`**: 
   - Filterable portfolio grid (`All`, `E-Commerce`, `ERP / Software`, `Portals`) with unique images for *Morpankh Saree*, *SP Art Hubs*, *Suraj Naturo Dry Fruits*, *Sonai Residential World School*, *Karyon College*, *Sona I Group of Institutes*. Clicking card opens `CaseStudyModal`.
7. **`ProcessTimeline.tsx`**: 
   - Interactive 9-step timeline (01. Requirement Analysis → 02. Architecture Roadmap → 03. UI/UX Prototype → 04. Clean Development → 05. QA & Security → 06. Client Demo → 07. Production Deployment → 08. Admin Handover & Training → 09. 6 Months Free Support Warranty).
8. **`TeamSection.tsx`**: 
   - Leadership: Shashant Shekhar (Founder & PM), Omkar Bachanatti (Founder & Operations), Sanika Chougule (Founder & HR), Vivek Dhumal (Digital Marketing), Aslam Pathan (Meta Ads).
   - Senior Full Stack Squad: Tridev Sharma, Sharik Ahmed, Vicky Kumar, Ashish Ranjan, Anurag Kumar.
   - Unique portrait for each member (no duplicate photos).
9. **`Testimonials.tsx`**: 
   - Dynamic testimonials carousel reading approved reviews from localStorage (`sosync_testimonials`).
10. **`ReferralCTA.tsx`**: 
    - High-converting banner: "Refer a client & earn 10% commission" opening the referral modal.
11. **`FinalCTA.tsx`**: 
    - Conversion banner with "Book ₹1 Demo" and "Contact Us" actions.

---

#### STEP 3: BUILD PUBLIC SUB-PAGES
1. **`/services` (`src/routes/services.tsx`)**:
   - Complete directory of all 6 divisions with deep-dive capability breakdowns, feature checkmarks, and instant enquiry triggers.
2. **`/portfolio` (`src/routes/portfolio.tsx`)**:
   - Full-page filterable gallery with live metrics, tech stack tags, and case study detail drawers.
3. **`/contact` (`src/routes/contact.tsx`)**:
   - Interactive contact form, direct phone/email click actions (`+91 91724 03714` / `support@sosyncaitech.in`), Kharadi Pune office address with operating hours (Mon–Sat 9:30 AM–7:00 PM), embedded Google Map iframe, and expandable FAQ accordion.

---

#### STEP 4: BUILD COMPLETE PROTECTED ADMIN PORTAL (`/admin`)
1. **`/admin/login` (`src/routes/admin/login.tsx`)**:
   - Clean login screen with demo credentials (`admin@sosyncaitech.in` / `admin123`).
   - Authenticates and saves state in localStorage. Redirects to `/admin/dashboard`.
2. **`/admin/dashboard` (`src/routes/admin/dashboard.tsx`)**:
   - Protected route guard (redirects unauthenticated visitors to login).
   - Responsive sidebar navigation + topbar with admin profile & Logout button.
   - **7 Full CRUD Modules (connected to localStorage)**:
     1. **Overview Dashboard**: Dynamic metric cards for Total Enquiries, Pending Callbacks, Demo Bookings, Active Projects, and Average Rating.
     2. **Service Enquiries Manager**: Searchable, filterable table with status toggles (`Pending`, `Contacted`, `In Progress`, `Closed`).
     3. **Callback Requests Manager**: List of instant callback phone requests with one-click status update (`Pending` → `Called`).
     4. **Demo Bookings Manager**: View all ₹1 demo consultation bookings with requested dates and client notes.
     5. **Portfolio Projects Manager**: Add new project, edit existing, delete with confirmation, and toggle "Featured" status (syncs live to public portfolio).
     6. **Testimonials & Feedback Manager**: Approve or hide client reviews (only approved reviews show on the public site).
     7. **Website Settings Manager**: Edit primary/secondary phones, support email, office address, operating hours, announcement banner text/toggle, and maintenance mode toggle.

---

### 🚀 EXECUTION:
Build and wire up `__root.tsx`, all 11 homepage sections in `src/routes/index.tsx`, the 3 public routes, and the complete `/admin` dashboard now. Ensure all actions persist to `localStorage`, mobile responsiveness is seamless, and all image URLs are unique Unsplash photos.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/0ef52182-46dc-45ff-9875-b5866ab630a1).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
