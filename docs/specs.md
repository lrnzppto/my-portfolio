# Feature Specification: Lorenz Pepito Portfolio Website

**Feature Branch**: `001-portfolio-website`
**Created**: 2026-11-20
**Status**: Clarified (2026-11-20)
**Input**: User description: "Create a website for my portfolio. Add everything a portfolio needs. Clients should be able to contact me, see info about me, and see my projects. At the end of this timeline, I should be able to close deals with clients using my portfolio."

## Context

**Owner**: Lorenz Pepito, Computer Engineer and Specialist Virtual Assistant based in the Philippines. 3+ years in industry software development (Nov 2022 to Feb 2025), including leading a team that built mobile and web applications. Now freelancing solo across web design and development, graphic design, video editing, podcast editing, and social media management.

**Who the site is for**: Personal brands, coaches, content creators, and small businesses, mostly US-based or international, who need a reliable remote creative and technical partner.

**Positioning (the one idea the site must land)**: A creative who can actually build. Most VAs can edit a Reel; few can also ship a web app, automate a workflow, or fix the tech behind a launch. The site sells that combination as one offer, not as two unrelated careers.

**Problem today**: There is no portfolio that clearly shows this positioning, proves the work, and moves a visitor to a sales conversation. Without it, client acquisition depends on cold outreach and platform profiles where Lorenz can't control the story.

**Business goal**: The site is a sales tool. A qualified prospect should be able to land on it, understand what Lorenz does for someone like them, trust that he can do it, and book a call or send an inquiry, with no back-and-forth needed before the first conversation.

## Clarifications

### Session 2026-11-20

- Q: Dance identity on the About page? → A: One short paragraph (Nana Kojo, Afro Cebu co-founder) as a personality and discipline signal.
- Q: Pricing visibility? → A: No prices on the site; pricing is discussed on the discovery call.
- Q: Microsoft Azure certifications (AZ-104, AZ-204)? → A: Keep them in the About credentials (FR-018).
- Q: Existing guestbook? → A: Keep it, as a secondary section on the About page (FR-034).

---

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Understand the offer in seconds (Priority: P1)

A prospect (for example, a US-based coach who found Lorenz through a referral or a social post) opens the home page and immediately understands who Lorenz is, what he does, who he does it for, and what to do next.

**Why this priority**: If the visitor doesn't get the value within the first screen, nothing else on the site gets seen. This is the foundation every other story depends on.

**Independent Test**: Show the home page to 5 people unfamiliar with Lorenz for 5 seconds on a phone, then ask "What does this person do, and who for?" Delivers value alone as a single-page site with a contact link.

**Acceptance Scenarios**:

1. **Given** a first-time visitor on a mobile phone, **When** the home page loads, **Then** the first screen shows Lorenz's name, a one-line value proposition naming the audience and outcome, and a primary call to action (book a call or start a project) without scrolling.
2. **Given** a visitor scrolling the home page, **When** they reach the services overview, **Then** they see each service area with a one-sentence outcome-focused description and a link to see related work.
3. **Given** a visitor at any point on the home page, **When** they decide to reach out, **Then** a contact action is reachable within one tap (persistent header button or equivalent).

---

### User Story 2 - See proof through projects (Priority: P1)

A prospect wants evidence before trusting a freelancer. They browse projects filtered by the type of work they need (for example, "Video Editing") and open a case study that shows the problem, what Lorenz did, and the result.

**Why this priority**: Proof is what turns interest into a sales call. Without credible projects, the site is just a claim.

**Independent Test**: A tester asked to "find an example of short-form video work for a coach" can find and open a relevant case study in under 30 seconds without help.

**Acceptance Scenarios**:

1. **Given** a visitor on the Work/Projects page, **When** they select a category (Web Design & Development, Graphic Design, Video Editing, Social Media Management, Podcast Editing), **Then** only projects in that category are shown, and they can return to "All".
2. **Given** a visitor opens a project, **When** the case study loads, **Then** it shows: client type or industry, the challenge, Lorenz's role and scope, tools used, visual or video samples, and the outcome (with metrics where available).
3. **Given** a project contains video, **When** the visitor plays it, **Then** it plays inline, works on mobile, and does not auto-play with sound.
4. **Given** a visitor finishes reading a case study, **When** they reach the end, **Then** they see a call to action to start a similar project and links to 2 related projects.

---

### User Story 3 - Contact or book a call (Priority: P1)

A convinced prospect sends a project inquiry or books a discovery call, and Lorenz is notified promptly with enough detail to prepare.

**Why this priority**: This is the conversion point. It directly serves the goal of closing deals.

**Independent Test**: Submit a test inquiry from a phone and confirm Lorenz receives it with all fields, and the visitor sees a confirmation with clear next steps.

**Acceptance Scenarios**:

1. **Given** a visitor on the Contact page, **When** they fill in name, email, service(s) of interest, project description, budget range, and timeline, and submit, **Then** they see a confirmation stating when they can expect a reply, and Lorenz receives the inquiry.
2. **Given** a visitor who prefers to talk, **When** they choose "Book a call", **Then** they can pick an available slot shown in their own time zone and receive a confirmation with meeting details.
3. **Given** a visitor submits the form with a missing required field or invalid email, **When** they press submit, **Then** the specific field is flagged with a clear message and their other entries are kept.
4. **Given** an inquiry is submitted, **When** Lorenz is notified, **Then** the notification includes all submitted details and the visitor's time zone.
5. **Given** a visitor who prefers other channels, **When** they look for alternatives, **Then** they find a direct email address and links to Lorenz's professional profiles.

---

### User Story 4 - Learn who Lorenz is and why he's different (Priority: P2)

A prospect who is comparing several freelancers reads the About page to decide whether Lorenz is reliable, a good fit, and easy to work with.

**Why this priority**: Important for trust and for standing out from other VAs, but a prospect can still convert from Stories 1 to 3 alone.

**Independent Test**: After reading the About page, a tester can state Lorenz's background, his key differentiator, and how working with him would go.

**Acceptance Scenarios**:

1. **Given** a visitor on the About page, **When** they read it, **Then** they learn: Computer Engineering background, 3+ years in software development, experience leading an engineering team on mobile and web apps, Microsoft Azure certifications (AZ-104, AZ-204), and how that technical depth benefits creative clients.
2. **Given** a visitor on the About page, **When** they look for working details, **Then** they find location (Philippines), working-hours overlap with US time zones, communication channels used (e.g. Slack, email, WhatsApp), and the tools he works with.
3. **Given** a visitor on the About page, **When** they reach the personal section, **Then** they see a professional photo and a short personal story, including one short paragraph on his dance identity (Nana Kojo, Afro Cebu co-founder) as a personality and discipline signal, not a full section.

---

### User Story 5 - Understand services and how engagements work (Priority: P2)

A prospect wants to know exactly what they'd be buying and how working together works before reaching out.

**Why this priority**: Reduces unqualified inquiries and shortens sales calls, but not required for the first conversion.

**Independent Test**: A tester can answer "What's included in video editing, and what happens after I reach out?" from the Services page alone.

**Acceptance Scenarios**:

1. **Given** a visitor on the Services page, **When** they view a service, **Then** they see what's included, typical deliverables, turnaround expectations, and relevant example work.
2. **Given** a visitor on the Services page, **When** they look for how engagements work, **Then** they see a simple step-by-step process (e.g. discovery call → proposal → trial or kickoff → delivery → ongoing support).
3. **Given** a visitor wants pricing information, **When** they look for it, **Then** they see that pricing is tailored to the project and discussed on the discovery call, with a call to action to book one. No prices are shown on the site.
4. **Given** a visitor has common doubts, **When** they open the FAQ, **Then** they find answers about time zones, revisions, turnaround, communication, payment methods, and confidentiality.

---

### User Story 6 - Trust signals from real clients (Priority: P3)

A prospect looks for evidence that other people have hired Lorenz and been happy.

**Why this priority**: Strongly increases conversion, but depends on collecting real testimonials, which can come after launch.

**Independent Test**: Testimonials display with name, role or business, and (with permission) a photo or link, and appear on the home page and relevant case studies.

**Acceptance Scenarios**:

1. **Given** at least one approved testimonial exists, **When** a visitor views the home page, **Then** testimonials are displayed with attribution.
2. **Given** no testimonials exist yet, **When** the site is viewed, **Then** the testimonials section is hidden rather than showing placeholders or invented quotes.

---

### User Story 7 - Owner keeps the portfolio fresh (Priority: P2)

Lorenz adds a new project, updates a service, or adds a testimonial without rebuilding the site or editing layout code.

**Why this priority**: A portfolio that goes stale stops selling. Lorenz's work changes weekly; updating must be fast.

**Independent Test**: Lorenz adds a new case study with images and a video and sees it live, correctly categorized, in under 15 minutes.

**Acceptance Scenarios**:

1. **Given** Lorenz has a finished project, **When** he adds it with title, category, client type, challenge, solution, result, tools, and media, **Then** it appears on the Work page under the correct category.
2. **Given** a project should be highlighted, **When** Lorenz marks it as featured, **Then** it appears in the home page featured section.
3. **Given** a project should be removed or hidden (e.g. a client asks), **When** Lorenz unpublishes it, **Then** it disappears from all pages without breaking links elsewhere.

---

### Edge Cases

- **Slow or mobile connections**: A prospect on a weak connection opens a video-heavy case study. Pages must show text and a poster image first; videos load only on play.
- **Confidential client work**: Some past software work belongs to a former employer or is under NDA. The site must be able to present such work as an anonymized case study (role, problem, approach, stack, outcome) without screenshots or client names.
- **Empty category**: A service category has no published projects yet. The filter must not show an empty page; hide the category or show a "work coming soon, ask me for samples" message with a contact link.
- **Spam inquiries**: The contact form receives bot submissions. Spam must be filtered without forcing real visitors through annoying challenges where possible.
- **Notification failure**: An inquiry is submitted but the notification to Lorenz fails. The inquiry must still be stored so no lead is lost.
- **Time zone confusion**: A US visitor books a call. Times must display in the visitor's time zone and be confirmed in both time zones.
- **No booking slots available**: The visitor is told when slots open up and can send an inquiry instead.
- **Shared links**: A case study link shared on social media or in a proposal must show a proper title, description, and preview image.
- **Broken or removed media**: A project's external video becomes unavailable. The case study still renders with a fallback image.
- **Guestbook spam or abuse**: Bots or visitors post junk or offensive guestbook entries. Length limits are enforced by the database, entries render as plain text only, and Lorenz can delete any entry from the database dashboard.
- **Accessibility**: A visitor using a screen reader or keyboard only can navigate all pages and submit the form.

---

## Requirements *(mandatory)*

### Functional Requirements

**Site structure and navigation**

- **FR-001**: The site MUST include these pages: Home, Work (project listing), Case Study (per project), Services, About, Contact, Privacy, and a 404 page.
- **FR-002**: The site MUST provide persistent navigation with a visible primary call to action ("Book a call" or "Start a project") on every page.
- **FR-003**: The site MUST be fully usable on mobile, tablet, and desktop screen sizes.
- **FR-004**: The site MUST include a footer with email, professional profile links (e.g. LinkedIn, Upwork or other platforms Lorenz uses, Instagram for creative work), and a copyright line.

**Home**

- **FR-005**: The home page MUST show, above the fold, Lorenz's name, a value proposition naming the target audience and outcome, and the primary call to action.
- **FR-006**: The home page MUST include a services overview, 3 to 6 featured projects, a short "why work with me" section highlighting the creative-plus-technical combination, testimonials (when available), and a closing call to action.

**Work and case studies**

- **FR-007**: The Work page MUST list all published projects and allow filtering by service category.
- **FR-008**: Each case study MUST include: title, category, client type or industry, challenge, Lorenz's role and scope, approach, tools used, media (images, video, or links), and outcome.
- **FR-009**: Case studies MUST support an optional results section with metrics (e.g. views, engagement, turnaround time saved) and MUST NOT display invented or estimated metrics.
- **FR-010**: Case studies MUST support anonymized mode (client name and identifying visuals hidden).
- **FR-011**: Video samples MUST play inline, include a poster image, and not auto-play with sound. Short-form vertical videos MUST display in their native vertical format.
- **FR-012**: Each case study MUST end with a call to action and links to related projects.
- **FR-013**: Live work (websites, apps) MUST be linkable, opening in a new tab.

**Services**

- **FR-014**: The Services page MUST describe each service: Web Design & Development, Graphic Design, Video Editing (short-form and long-to-short repurposing), Podcast Editing, and Social Media Management, each with inclusions, deliverables, turnaround expectations, and example work links.
- **FR-015**: The Services page MUST present the engagement process as clear steps from first contact to delivery.
- **FR-016**: The site MUST include an FAQ covering time zones, communication, revisions, turnaround, payment, and confidentiality.
- **FR-017**: Services Lorenz is still developing (e.g. workflow automation with Zapier, Make, n8n) MUST be clearly labeled as such or omitted until there is work to show.

**About**

- **FR-018**: The About page MUST include a professional photo, a short story connecting his engineering background to his creative work, key credentials (Computer Engineering, 3+ years software development, engineering team lead experience, Azure AZ-104 and AZ-204), the tools he uses, and his working-hours overlap with US time zones.
- **FR-019**: The About page MUST include only true, verifiable credentials and experience.

**Contact and conversion**

- **FR-020**: The Contact page MUST provide an inquiry form with: name (required), email (required), business or website (optional), services of interest (multi-select, required), project description (required), budget range (select), desired timeline (select), and how they found Lorenz (optional).
- **FR-021**: The form MUST validate inputs inline, preserve entered data on error, and show a confirmation with expected reply time on success.
- **FR-022**: The system MUST notify Lorenz of every inquiry within 5 minutes and store every inquiry independently of the notification.
- **FR-023**: The visitor MUST receive an automatic confirmation email summarizing their inquiry and next steps.
- **FR-024**: The site MUST offer discovery-call booking showing availability in the visitor's local time zone.
- **FR-025**: The form MUST include spam protection.
- **FR-026**: The site MUST display a direct email address as an alternative to the form.

**Trust**

- **FR-027**: The site MUST support testimonials with quote, name, role or business, and optional photo and link, displayed only with the client's permission.
- **FR-028**: Sections with no content (testimonials, empty categories) MUST be hidden rather than filled with placeholders.

**Content management**

- **FR-029**: Lorenz MUST be able to add, edit, feature, reorder, and unpublish projects, services, testimonials, and FAQ items without changing layout code.
- **FR-030**: Lorenz MUST be able to export or view all received inquiries.

**Discoverability and sharing**

- **FR-031**: Every page and case study MUST have a unique title, description, and social share preview image.
- **FR-032**: The site MUST be indexable by search engines and use a custom domain.
- **FR-033**: The site MUST track page visits, call-to-action clicks, form submissions, and bookings, so Lorenz can see which pages and projects lead to inquiries. Tracking MUST respect visitor privacy and disclose it in a privacy notice.

**Community**

- **FR-034**: The site MUST keep the public guestbook as a secondary section on the About page (not on the main conversion path): visitors can read the latest 20 entries (newest first) and add one with a name (1 to 60 characters) and message (1 to 500 characters). Entries are shown as plain text only, nobody can edit or delete entries from the website, and Lorenz can remove entries from the database dashboard.

### Non-Functional Requirements

- **NFR-001 Performance**: Main content visible within 2.5 seconds on a mid-range phone on a 4G connection.
- **NFR-002 Accessibility**: Meets WCAG 2.1 AA (contrast, keyboard navigation, alt text, captions or transcripts where video carries key info).
- **NFR-003 Design**: Modern, minimalist, professional; strong typography and visual hierarchy; consistent personal brand; polished enough for US clients; not template-looking.
- **NFR-004 Reliability**: No lost inquiries; contact flow available whenever the site is up.
- **NFR-005 Maintainability**: Adding content requires no developer work; the codebase or platform is something Lorenz can maintain alone.
- **NFR-006 Cost**: Running costs suitable for a solo freelancer (low monthly cost, no paid tiers unless they directly support conversion).
- **NFR-007 Privacy**: Includes a privacy notice; inquiry data is used only to respond to the inquiry.

### Key Entities

- **Profile**: Lorenz's name, headline, value proposition, bio, photo, credentials, tools, location, working hours, contact channels, social links.
- **Service**: Name, short description, inclusions, deliverables, turnaround, status (active or in development), related projects, display order.
- **Project (Case Study)**: Title, slug, category (one or more Services), client name or anonymized label, client type or industry, challenge, role and scope, approach, tools, media items, outcome, metrics (optional), live link (optional), featured flag, publish status, date.
- **Media Item**: Type (image, video, embed, link), source, poster image, alt text or caption, orientation (vertical, horizontal, square).
- **Testimonial**: Quote, author name, role or business, photo (optional), link (optional), related project (optional), permission confirmed, publish status.
- **Inquiry**: Name, email, business or website, services of interest, description, budget range, timeline, source, visitor time zone, submitted at, status (new, replied, call booked, proposal sent, won, lost).
- **FAQ Item**: Question, answer, display order.
- **Guestbook Entry**: Name, message, created at.

---

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: In a 5-second test, at least 4 of 5 people unfamiliar with Lorenz correctly state what he does and who he serves.
- **SC-002**: A visitor can find a relevant case study for their need in under 30 seconds.
- **SC-003**: A visitor can complete and submit an inquiry in under 2 minutes on a phone.
- **SC-004**: 100% of inquiries reach Lorenz; notifications arrive within 5 minutes.
- **SC-005**: At launch, the site shows at least 6 complete case studies covering at least 4 of the 5 service categories, including at least 1 software development case study.
- **SC-006**: Lorenz can publish a new case study in under 15 minutes without help.
- **SC-007**: Pages meet NFR-001 performance on mobile and pass an automated WCAG 2.1 AA check with no critical issues.
- **SC-008**: Within 60 days of launch, the site generates at least 3 qualified inquiries or booked calls (tracked via FR-033 and Inquiry status).
- **SC-009**: Within 90 days of launch, at least 1 paid client engagement is traceable to the site (directly or as the link shared in a proposal).
- **SC-010**: Lorenz uses the site as the primary link in every proposal and outreach message from launch onward.

---

## Assumptions

- Lorenz has, or will produce before launch, enough sample work for the projects in SC-005. Where client work can't be shown, he will create self-initiated or spec projects and label them honestly.
- The existing Wix Studio portfolio (lrnzppto.wixstudio.com/lorenzpepito) is a content source for this site, and will be redirected or retired once the new site launches.
- English is the only site language at launch.
- A professional headshot and a consistent personal brand (logo or wordmark, colors, typography) will be finalized before or during the design phase.
- Testimonials will be collected from real clients with explicit permission. None will be written on a client's behalf.
- Platform and technology choices belong in `plan.md`, not this spec. Lorenz's stack (React, Angular, Flutter, Spring Boot, ASP.NET, Azure) and no-code tools (Wix Studio) are both valid options there.

## Out of Scope (v1)

- Blog or content hub (candidate for v2 to support SEO)
- Online payments, invoicing, or client portal
- Multi-language support
- Separate dance or Afro Cebu site (separate project if wanted)
- Automated proposal generation

---

## Review & Acceptance Checklist

### Content Quality
- [x] No implementation details (languages, frameworks, APIs)
- [x] Focused on user value and business needs
- [x] Written for non-technical stakeholders
- [x] All mandatory sections completed

### Requirement Completeness
- [x] No [NEEDS CLARIFICATION] markers remain
- [x] Requirements are testable and unambiguous
- [x] Success criteria are measurable
- [x] Success criteria are technology-agnostic
- [x] All acceptance scenarios are defined
- [x] Edge cases are identified
- [x] Scope is clearly bounded
- [x] Dependencies and assumptions identified
