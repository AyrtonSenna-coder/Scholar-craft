ROLE & CONTEXT
──────────────
You are a senior UI/UX designer at a world-class product studio. 
Your task is to design a premium, high-converting academic writing 
platform called "ScholarCraft" (or [CHOSEN BRAND NAME]) in Figma.

This site directly competes with an existing service 
(USResearchWriters.com) and must feel measurably more premium, 
more modern, and more trustworthy in every dimension — while 
being a leaner, faster, more focused product.

The goal is not to have more pages. It is to have a better, 
smarter, higher-converting single experience.

═══════════════════════════════════════════════════════════════

DESIGN PHILOSOPHY
──────────────────
"Calm authority" — the visual language of a premium institution,
not a discount service. Think: how The Economist, Notion, and 
Linear would design an academic writing platform.

Every design decision must answer one question:
Does this increase the probability that a hesitant student 
places an order?

═══════════════════════════════════════════════════════════════

BRAND IDENTITY SYSTEM
──────────────────────

COLOR TOKENS
  --forest-950:   #071812   → Page-level dark backgrounds  
  --forest-900:   #0D2B1F   → Primary dark sections (hero, CTA)
  --forest-700:   #163D2C   → Cards on dark backgrounds
  --forest-500:   #1E5038   → Hover states, borders
  --amber-500:    #F5A623   → Primary CTA, highlights, accents
  --amber-300:    #F9C264   → Hover states for amber elements
  --cream-50:     #FAF7F2   → Light section backgrounds
  --cream-100:    #F0EBE2   → Card backgrounds on cream
  --sage-500:     #5C7A6B   → Eyebrows, secondary text, icons
  --sage-300:     #8EA99A   → Muted labels, placeholders
  --ink:          #1A1A1A   → Body text on light backgrounds
  --gray-500:     #6B7280   → Secondary body text
  --white:        #FFFFFF   → Text on dark, card fills

TYPOGRAPHY SYSTEM
  Display:   Playfair Display — weights 700, 800
             Used for: H1, H2, pull quotes, stat numbers
             Tracking: -0.5px to -1px
             
  Body:      DM Sans — weights 300, 400, 500, 600, 700
             Used for: All body copy, labels, nav, buttons
             Line height: 1.6–1.75 for paragraph text
             
  Mono:      JetBrains Mono — weight 400
             Used for: Code snippets, live counter badges,
                       order tracking numbers, system labels

TYPE SCALE
  Display XL:  56–64px / Playfair / Weight 800
  Display L:   40–48px / Playfair / Weight 800
  Display M:   32–36px / Playfair / Weight 700
  Title:       22–24px / Playfair / Weight 700
  Body L:      18px    / DM Sans  / Weight 400
  Body M:      16px    / DM Sans  / Weight 400
  Body S:      14px    / DM Sans  / Weight 400
  Label:       12px    / DM Sans  / Weight 600 / UPPERCASE / tracking 1.5px
  Caption:     11px    / DM Sans  / Weight 400
  Mono:        13px    / JetBrains Mono

ICONOGRAPHY
  Use Phosphor Icons (Figma plugin available)
  Style: Duotone for feature icons, Regular for UI icons
  Size scale: 16px (inline), 20px (nav), 24px (list), 32px (cards),
              48px (feature highlights)

SPACING & GRID
  Grid:         12-column, 1440px max-width, 80px gutters
  Column gap:   24px
  Base unit:    8px
  Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 80, 96, 128px
  Section padding: 96px top/bottom on desktop, 64px on tablet,
                   48px on mobile

BORDER RADIUS
  sm:   8px  → Inputs, small badges
  md:   14px → Buttons, small cards
  lg:   22px → Feature cards, modals
  xl:   32px → Hero cards, large surfaces
  full: 9999px → Pills, tags, avatars

ELEVATION / SHADOWS
  Level 1: 0 2px 8px rgba(13,43,31,.08)    → Subtle card lift
  Level 2: 0 6px 24px rgba(13,43,31,.12)   → Card hover state
  Level 3: 0 16px 56px rgba(13,43,31,.18)  → Modals, dropdowns
  Level 4: 0 32px 80px rgba(13,43,31,.24)  → Premium feature cards

═══════════════════════════════════════════════════════════════

PAGE STRUCTURE — FULL BREAKDOWN
─────────────────────────────────

FRAME SIZES TO CREATE
  Desktop:  1440 × auto (full scroll)
  Tablet:   768 × auto
  Mobile:   390 × auto (iPhone 14 Pro width)

────────────────────────────────────────
SECTION 01 — ANNOUNCEMENT RIBBON
────────────────────────────────────────
Height: 44px
Background: --amber-500
Layout: Centered single line

Elements:
  • Animated pulse dot (8px, #FFFFFF) — use Figma prototype animation
  • Text: "Limited slots this month — mention SCHOLAR10 for 10% off"
  • Inline link: "Claim now →" (underlined, bold)
  • Close icon: right-aligned × (Phosphor: X icon, 16px)

Design note: Full-bleed amber. No border-radius. High contrast.
This must feel like urgency, not decoration.

────────────────────────────────────────
SECTION 02 — NAVIGATION
────────────────────────────────────────
Height: 68px
Background: --forest-900 at 97% opacity + backdrop blur
Position: Sticky (annotate in Figma as sticky header)
Border-bottom: 1px solid rgba(255,255,255,.08)

Left block:
  • Logo wordmark: "Scholar" (white, Playfair 700) + "Craft" (amber)
  • Optional: 6×6px amber square decorative mark before the wordmark

Center block (nav links, DM Sans 14px 500):
  • Services
  • Why Us
  • Process
  • Reviews
  • FAQ

Right block:
  • Ghost button: "Log In" — white border, white text, 36px height
  • Primary CTA: "Place an Order" — amber fill, forest text,
    36px height, 8px radius, DM Sans 700

Advanced nav detail:
  • On scroll past hero: nav gains shadow Level 2
  • Active state: amber underline 2px, 60% width, centered
  • Mobile: hamburger collapses to drawer (design both states)

────────────────────────────────────────
SECTION 03 — HERO
────────────────────────────────────────
Background: --forest-900
Min-height: 92vh
Layout: Two-column asymmetric grid (7col left / 5col right)

LEFT COLUMN — CONTENT
  
  Top badge:
    Background: amber at 12% opacity
    Border: 1px solid amber at 30%
    Border-radius: 9999px
    Padding: 6px 16px
    Content: [pulse dot] + "Trusted by 12,000+ students worldwide"
    Typography: Label, amber color

  H1 headline (Display XL, Playfair 800, white):
    Line 1: "Your Deadline."
    Line 2: "Our [amber]Expertise.[/amber]"
    Line 3: "Zero Compromise."
    
    Design detail on "Expertise":
      — Amber text color
      — 3px amber underline bar below, 40% opacity
      — Optional: very subtle amber glow behind the word
        (box-shadow: 0 0 40px rgba(245,166,35,.15))

  Subheadline (Body L, DM Sans 400, white at 72%):
    "From first-year essays to PhD dissertations — we deliver
    original, well-researched academic work that meets your
    exact requirements. Confidential, on time, every time."
    Max-width: 520px, line-height: 1.75

  CTA row:
    Button 1 (Primary): "Get a Free Quote" 
      → amber fill, forest text, height 52px, padding 0 32px,
        radius 14px, DM Sans 700, 16px
        Hover: amber-300, translateY(-2px), amber glow shadow
    
    Button 2 (Ghost): "Browse Services"
      → transparent fill, white text, 2px white border at 25%,
        same sizing as Button 1
        Hover: amber border, amber text

    Spacing between buttons: 14px

  Trust pills row (below CTAs, margin-top 40px):
    Three pill badges displayed in flex row, gap 12px
    Each pill:
      Background: white at 7%
      Border: 1px solid white at 10%
      Border-radius: 9999px
      Padding: 8px 16px
      Icon (Phosphor): 16px, sage-300 color
      Text: "100% Confidential" / "Plagiarism-Free" / "On-Time Delivery"
      Typography: Body S, DM Sans 500, white at 80%

RIGHT COLUMN — LIVE ACTIVITY CARD
  
  Card container:
    Background: white at 5%
    Border: 1px solid white at 10%
    Border-radius: 24px
    Padding: 36px 32px
    Backdrop-filter: blur(12px)
    Shadow: Level 3

  Card header:
    Title: "Live Activity" (DM Sans 600, 15px, white)
    Subtitle: "Updated in real time" (DM Sans 400, 12px, sage-300)
    Right: Green live dot (8px, #4ADE80) + "Live" label (11px mono, green)

  Stats grid (2×2):
    Each stat cell:
      Background: amber at 8%
      Border: 1px solid amber at 15%
      Border-radius: 12px
      Padding: 20px 16px
      Number: Display M, Playfair 800, amber
      Label: Caption, DM Sans 500, white at 60%
    
    Values:
      12,400+ / Papers Delivered
      98%     / Satisfaction Rate
      340+    / Expert Writers
      8 Yrs   / In Business

  Live writer bar:
    Background: white at 6%
    Border-radius: 10px
    Padding: 14px 18px
    Left: 8px green pulse dot
    Text: "[Number] writers working on orders right now"
    Typography: Body S, DM Sans 400, white at 75%

  CTA button (full width):
    "Start My Order →"
    Amber fill, forest text, 46px height, radius 12px, DM Sans 700

HERO BACKGROUND DETAILS:
  — Radial gradient from right center: amber at 7%, fading to transparent
  — Radial gradient from bottom left: sage at 15%, fading to transparent
  — Left edge: single vertical 1px line, amber at 12%
    (represents a ruled academic page margin — the signature detail)
  — Very subtle diagonal grid pattern overlay at 3% opacity
    (creates texture without being distracting)

────────────────────────────────────────
SECTION 04 — SOCIAL PROOF TICKER
────────────────────────────────────────
Background: --forest-700
Height: 56px
Full-bleed ticker / marquee strip

Content (repeating, separated by • or ◆):
  "📄 Essay · 24hrs · MBA Level — Just Delivered"
  "✅ Dissertation Chapter · PhD · Submitted 2 hrs ago"
  "⭐ 5-Star Review — James O., United Kingdom"
  "🔬 Research Paper · 48hrs · Grade A Received"
  "🔄 Revision Completed · 4hrs — Client Approved"

Typography: Mono 13px, white at 70%
Behavior: Auto-scrolling left (annotate as Figma Auto Animate)
Left/Right: Forest gradient fade masks (32px each side)

Design note: This replaces a static trust bar. It feels alive.
It is the second highest-impact trust element on the page after the hero card.

────────────────────────────────────────
SECTION 05 — SERVICES
────────────────────────────────────────
Background: --white
Padding: 96px 0

Section header (centered):
  Eyebrow: "WHAT WE DO" — Label style, sage-500
  H2: "Six services. One standard: excellent." — Display L, Playfair
  Subtitle: Body M, gray-500, max-width 560px, centered

Services grid: 3 columns × 2 rows, gap 22px

Each service card:
  Background: cream-50
  Border: 1px solid cream-100
  Border-radius: 22px
  Padding: 32px 28px
  Shadow: Level 1
  Transition: hover → Level 2, translateY(-5px)

  Top accent:
    3px horizontal bar at top of card
    Default: transparent (no bar visible)
    Hover: scaleX animates left→right, color: forest-900 → sage gradient
    (annotate as hover state in Figma)

  Icon container:
    50×50px square, border-radius 12px
    Background: forest-900
    Icon: Phosphor Duotone, 24px, amber color
    Margin-bottom: 20px

  Service name: Title, Playfair 700, forest-900
  Description: Body S, gray-500, line-height 1.7, margin-bottom 16px
  
  Deliverables list (3–4 items):
    Each item: checkmark (sage-500) + Body S text (gray-700)
    Spacing: 6px between items

  CTA link: "Get a quote →" 
    Body S, DM Sans 700, forest-900
    Hover: sage-500, arrow moves right 4px

Services:
  1. Essay Writing         → Phosphor: NotePencil
  2. Research Papers       → Phosphor: Microscope
  3. Dissertation Support  → Phosphor: GraduationCap
  4. Editing & Proofreading → Phosphor: Pen
  5. Assignment Help       → Phosphor: ClipboardText
  6. Case Studies          → Phosphor: ChartBar

────────────────────────────────────────
SECTION 06 — PREMIUM DIFFERENTIATOR
────────────────────────────────────────
Background: --cream-50
Layout: Two-column (text left / visual right)

This section has NO equivalent on the competitor site.
It is a competitive weapon.

Left column:
  Eyebrow: "THE SCHOLARCRAFT DIFFERENCE"
  H2: "Not just written. Engineered for your institution."
  Body: Explain that writers are matched by institution type,
        country's grading standard, and subject field —
        not just "assigned"
  
  Feature list (4 items with Phosphor icons):
    🎯 Institution-Matched Writing
       "Your writer knows your university's citation standards,
        grading rubric style, and expected academic register."
    
    🌍 Country-Aware Academic Style
       "UK first-class, US grade-A, Australian HD — 
        we write to the exact standard your grade requires."
    
    🤖 AI-Assisted Quality Check
       "Every paper passes an AI coherence and consistency
        scan before the human review — catching what editors miss."
    
    🔁 Tracked Revision History
       "See every change made in revision. Full transparency,
        like Google Docs track changes — but for your paper."

Right column: Premium UI mockup
  Design a small dashboard-style card showing:
    — A "Writer Match" indicator: avatar + name + "PhD · Business"
      with a match score "97% match for your institution"
    — A quality progress bar: "Coherence · Originality · 
      Structure · Citations" — all at 95%+
    — A small revision log showing 2 tracked edits

Design note: This visual doesn't need to be functional.
It needs to look real enough that it builds envy and trust.

────────────────────────────────────────
SECTION 07 — WHY CHOOSE US
────────────────────────────────────────
Background: --forest-900
Padding: 96px 0

Section header (left-aligned, not centered):
  Eyebrow: "WHY STUDENTS CHOOSE US" — amber-300
  H2: "Six reasons students keep coming back." — white, Playfair
  Subtitle: white at 65%

Grid: 3 × 2, gap 22px

Each card:
  Background: white at 5%
  Border: 1px solid white at 9%
  Border-radius: 22px
  Padding: 30px 26px
  Hover: background white at 9%, translateY(-4px)

  Icon: Phosphor Duotone, 36px, amber
  H3: DM Sans 700, 17px, white
  Body: DM Sans 400, 14px, white at 62%, line-height 1.7

  Bottom indicator (NEW — not on competitor site):
    A small amber progress bar at bottom of card
    Width: varies (100%, 98%, 95%, etc.) matching the stat
    Label below: "12,400 papers" / "98% satisfaction" / etc.
    This turns a text claim into a visual proof point.

────────────────────────────────────────
SECTION 08 — PROCESS
────────────────────────────────────────
Background: --cream-50

Layout: Horizontal timeline — NOT the standard stacked list

Timeline bar:
  A 2px horizontal line connecting all steps
  Color: sage-300
  Endpoints: forest-900 filled circles

Each step node:
  Circle: 64px diameter, forest-900 fill, 2px amber border
  Number inside: Playfair 800, 22px, amber
  Position: centered on the timeline bar

Each step label (alternates above/below the line):
  Step 1 (above): H3 + Body S
  Step 2 (below): H3 + Body S
  Step 3 (above): H3 + Body S
  Step 4 (below): H3 + Body S

  This alternating pattern is the premium layout detail.
  It reads like a product roadmap, not a generic how-it-works.

Step content:
  1. Submit Requirements
     "Fill in what you need. Topic, deadline, level, style.
      Takes 90 seconds."
  2. Get Matched + Quoted
     "We match you to the right expert and send a
      fixed quote — within 15 minutes."
  3. Writer Builds Your Paper
     "Direct messaging available throughout. You're
      never out of the loop."
  4. Review, Approve & Download
     "Full revision window included. Download only
      when you're fully satisfied."

────────────────────────────────────────
SECTION 09 — SOCIAL PROOF / TESTIMONIALS
────────────────────────────────────────
Background: --white

Layout: NOT a standard grid. Use a staggered masonry-style layout.
  — Column 1: 2 cards (standard height)
  — Column 2: 1 tall card (featured, larger) + rating summary
  — Column 3: 2 cards (standard height)

Standard card:
  Background: cream-50
  Border: 1px cream-100
  Border-radius: 22px
  Padding: 28px 24px

  Top: Star rating (amber ★★★★★) + Phosphor Quotes icon (amber, faded)
  Quote text: Body M, italic, gray-500, line-height 1.75
  Bottom: Avatar (40px circle) + Name (DM Sans 700) + Meta (course + country)

Featured center card (larger):
  Background: forest-900
  All text: white/amber
  Padding: 36px 32px
  Quote text: Body L, italic, white at 80%
  Pull stat: Large number (e.g. "A-" grade) in Playfair 64px, amber
  Sub-label: "Final dissertation grade after using ScholarCraft"

Rating summary card (below featured):
  Overall: ★ 4.9 / 5 in Playfair 48px, amber
  Sub-label: "Based on 2,847 verified reviews"
  Bar chart: 5 horizontal bars (5★ to 1★) showing distribution
  Most bars at 80–95% filled. Creates instant credibility.

────────────────────────────────────────
SECTION 10 — PRICING CALCULATOR
────────────────────────────────────────
Background: --forest-900

This section does NOT exist on the competitor site.
It is the single highest-converting feature you can add.

Layout: 
  Left (6 cols): Calculator controls
  Right (6 cols): Live quote output card

Left — Input controls:

  Control group 1: Paper Type
    Style: Tab bar (pill tabs, not a dropdown)
    Options: Essay / Research / Dissertation / Editing / Assignment
    Active: amber fill, forest text
    Inactive: white at 8% fill, white text

  Control group 2: Academic Level
    Style: Segmented control (4 options in a row)
    Options: High School / Undergrad / Master's / PhD

  Control group 3: Deadline
    Style: Horizontal slider with snap points
    Labels: 6h · 12h · 24h · 3d · 7d · 14d · 30d
    Thumb: Amber circle, 24px
    Track: Forest-700 left of thumb, amber right of thumb

  Control group 4: Pages
    Style: Number stepper (− button / number / + button)
    Number display: Playfair 700, 32px, amber
    Note below: "~275 words per page"

Right — Quote output card:
  Background: white at 6%
  Border: 1px solid amber at 20%
  Border-radius: 24px
  Padding: 36px 32px

  Header: "Your Instant Quote"
  Price (large, animates on change):
    Currency: DM Sans 700, 24px, sage-300
    Amount: Playfair 800, 64px, amber
    "/paper": DM Sans 400, 18px, white at 50%

  Price breakdown:
    Base rate: $X.XX/page
    Deadline multiplier: ×Y
    Level multiplier: ×Z
    (Showing the math builds trust)

  Included items checklist:
    ✓ Plagiarism Report (Turnitin)
    ✓ Free Revisions (14 days)
    ✓ Direct Writer Access
    ✓ On-Time Guarantee

  CTA: "Order at This Price" — full-width amber button

────────────────────────────────────────
SECTION 11 — FAQ
────────────────────────────────────────
Background: --cream-50
Layout: Two-column (4 FAQs left, 4 FAQs right)

NOT a single-column accordion — the two-column layout is faster
to scan and feels more confident (less like hiding answers).

Each FAQ item:
  Background: white, border-radius 14px, padding 20px 22px
  Margin-bottom: 10px

  Question: DM Sans 600, 15px, forest-900
  Answer (expanded): DM Sans 400, 14px, gray-500, line-height 1.75
  Toggle: Phosphor Plus/Minus icon, 20px, in 32px amber circle

FAQ Topics:
  Left column:
    — How is pricing calculated?
    — Can you handle a 6-hour deadline?
    — Is my information confidential?
    — What referencing styles do you support?
  
  Right column:
    — How do free revisions work?
    — What payment methods are accepted?
    — Is the paper checked for plagiarism?
    — Can I communicate with my writer?

────────────────────────────────────────
SECTION 12 — CONTACT & ORDER FORM
────────────────────────────────────────
Background: --forest-900
Layout: Two-column (info left / form right)

Left column:
  Eyebrow: "GET IN TOUCH"
  H2: "Start your order. We handle the rest."
  Body: "A fixed quote in 15 minutes. No commitment required."
  
  Three contact cards (stacked):
    Each: Icon (Phosphor, amber) + Label + Value
    Background: white at 6%, border: white at 10%
    Border-radius: 14px, padding: 16px 20px
    Hover: slide right 4px, background white at 10%
    
    → Email us
    → WhatsApp (most prominent — green icon)
    → Phone

  Below cards:
    "Response time: < 15 minutes" badge
    Background: green at 10%, border: green at 20%
    Left: green pulse dot
    Text: Mono 12px, green-400

Right column — Order form:
  Background: white at 5%
  Border: 1px solid white at 10%
  Border-radius: 24px
  Padding: 40px 36px

  Form title: "Request Your Free Quote"
  Subtitle: "Average response: 12 minutes"

  Fields (design all states — default, focused, error, filled):
    Row 1: Name | Email
    Row 2: Paper Type (select) | Academic Level (select)
    Row 3: Pages (number) | Deadline (select)
    Row 4: WhatsApp Number (full width — for fast response)
    Row 5: Additional Instructions (textarea, 3 rows)

  Field styling:
    Background: white at 8%
    Border: 1px white at 14%
    Border-radius: 10px
    Focus: amber border, amber glow 0 0 0 3px rgba(245,166,35,.15)
    Label: uppercase, 11px, DM Sans 600, white at 60%
    Input text: 15px, DM Sans 400, white
    Placeholder: white at 35%

  Submit button:
    Full width, 52px height, amber fill, forest text
    Text: "Submit Request — Free Quote in 15 Minutes"
    DM Sans 700, 15px
    Hover: amber-300, translateY(-2px), amber glow shadow
    Loading state: spinner + "Sending your request…"
    Success state: green fill + "✓ Received — We'll be in touch shortly"

────────────────────────────────────────
SECTION 13 — FOOTER
────────────────────────────────────────
Background: #071812 (forest-950)
Padding: 72px 0 32px

Top section (4-column grid):
  Col 1 (wider): Logo + 2-line about text + contact links
  Col 2: Services (6 links)
  Col 3: Company (6 links)
  Col 4: Legal (5 links)

  Link styling: DM Sans 400, 14px, white at 50%
  Hover: amber, transition .2s
  Section heading: DM Sans 700, 14px, white, border-bottom 1px white/7%

Bottom bar:
  Left: © 2025 ScholarCraft. Papers for reference use only.
  Right: "Engineered by [BRAND]" — amber text, clickable
  Divider: 1px white at 7%

═══════════════════════════════════════════════════════════════

COMPONENT LIBRARY TO BUILD IN FIGMA
─────────────────────────────────────
Build these as Figma Components with variants before laying
out the page. This is how production-ready design works.

BUTTONS
  Primary / Secondary / Ghost / Danger / Disabled
  Sizes: SM (32px) / MD (40px) / LG (52px)
  States: Default / Hover / Active / Loading / Disabled
  With icon: Left icon / Right icon / Icon only

FORM FIELDS
  Input / Select / Textarea / Number stepper
  States: Default / Focus / Filled / Error / Disabled
  Label: Above / Floating
  Helper text: Neutral / Error / Success

CARDS
  Service card / Testimonial card / Writer card / Stat card
  States: Default / Hover / Selected

BADGES & PILLS
  Trust pill / Live indicator / Status badge / Tag
  Colors: Amber / Green / Sage / White / Forest

NAVIGATION
  Desktop nav (default + scrolled)
  Mobile nav (collapsed + expanded drawer)

FAQ ITEM
  States: Collapsed / Expanded

CALCULATOR CONTROLS
  Tab group / Segmented control / Slider / Stepper

═══════════════════════════════════════════════════════════════

PROTOTYPE INTERACTIONS TO ANNOTATE
────────────────────────────────────
Map these flows in Figma Prototype mode:

Flow 1 — Quote request:
  Nav CTA → Contact section → Form fill → 
  Submit → Success state → (implicit) WhatsApp follow-up

Flow 2 — Service exploration:
  Hero "Browse Services" → Services section → 
  Service card hover → "Get a quote" link → Contact form

Flow 3 — Mobile order:
  Mobile hero CTA → Mobile form → Submit

Micro-interactions to annotate:
  — Hero stats: count-up on section enter
  — Ticker: continuous scroll left (Auto Animate)
  — Service card: top accent bar animates on hover
  — FAQ: accordion expand with ease-out
  — Calculator: price updates instantly on any control change
  — Form submit: loading → success state
  — Nav: background/shadow appears on scroll (Smart Animate)
  — WhatsApp float button: pulse glow (Auto Animate loop)

═══════════════════════════════════════════════════════════════

MOBILE DESIGN REQUIREMENTS (390px)
────────────────────────────────────
Every section must be fully designed at mobile width.
Do not just scale down. Rethink the layout.

Key mobile adaptations:
  — Hero: Single column. Hero card becomes a horizontal
    stats strip below the H1 (2×2 mini grid)
  — Services: Single column stack, cards at full width
  — Why Us: 2-column grid (3×2 becomes 2 rows of 3)
  — Process: Vertical timeline (not horizontal)
  — Testimonials: Horizontal swipeable cards (overflow-x)
  — Calculator: Full-width stacked controls, 
    quote card appears below controls
  — FAQ: Single column, full-width
  — Contact: Single column, form below contact info
  — Nav: Hamburger → slide-in drawer from right

═══════════════════════════════════════════════════════════════

COMPETITIVE POSITIONING RULES
───────────────────────────────
When designing, refer to these rules to ensure the site
feels measurably superior to USResearchWriters.com:

1. Never use stock photography of people at laptops.
   Use abstract data visuals, typography-led imagery,
   or custom illustrations instead.

2. Every trust claim must have a visual proof point.
   Don't say "98% satisfaction" — show a rating breakdown chart.
   Don't say "fast delivery" — show a live activity ticker.

3. The calculator is the single biggest conversion advantage.
   Competitors show no price until you email them.
   Showing an instant price removes the #1 conversion barrier.

4. The typography must feel editorial, not corporate.
   Playfair Display signals academic authority that a sans-serif
   site can never achieve.

5. Dark sections (forest green) should feel premium, 
   not dark-mode generic. Add texture, gradients, and
   deliberate use of amber to make dark feel rich, not flat.

6. Every CTA must answer: "What happens next?"
   Not: "Submit" → instead: "Get My Free Quote in 15 Min"
   Not: "Order" → instead: "Start My Order — Delivered by [date]"

═══════════════════════════════════════════════════════════════

DELIVERABLE CHECKLIST
──────────────────────
□ Design token frame (colors, type, spacing, shadows, radii)
□ Component library frame (all components + variants)
□ Desktop frame — full page (1440px)
□ Tablet frame — full page (768px)
□ Mobile frame — full page (390px)
□ Prototype flow 1: Quote request
□ Prototype flow 2: Service exploration
□ Prototype flow 3: Mobile order
□ Handoff annotations (spacing, hover states, animations)
□ Export: all icons as SVG, all custom illustrations as PNG @2x