<!-- SEED: re-run /impeccable document once there's code to capture the actual tokens and components. -->
---
name: Kazoom Sites
description: Warm, confident websites for small businesses who want to look legitimate without the headache.
---

# Design System: Kazoom Sites

## 1. Overview

**Creative North Star: "The Friendly Storefront"**

Kazoom helps small business owners look legitimate, so the site has to feel like the nicest shop on the street: warm, inviting, and unmistakably cared-for. One confident, friendly color carries the surface and does the emotional work, the way a great storefront has a paint color you remember. The register is consumer-warm in the lane of Duolingo, Headspace, and Slack: rounded, encouraging, and human, but grown-up enough that an owner trusts it with their money.

This system rejects the thing our users are most afraid of: the cheap template. No generic clip-art icons, no busy stock-photo clutter, no "$5 theme" feel. Warmth here is earned through deliberate color, generous space, and rounded confidence, not through decoration. It is equally not cold corporate SaaS (navy gradients, enterprise distance), not loud hard-sell marketing (countdown timers, neon urgency), and not sterile minimalism so stripped-back it reads as unfinished. The site itself is the product demo, so every surface must look like something a small business would be proud to own.

**Key Characteristics:**
- One committed warm color carrying 30-60% of the surface, not a timid accent
- Rounded, soft, confident geometry; nothing sharp or cold
- Generous whitespace and clear hierarchy over density
- Responsive motion that feels alive but calm, never showy
- Plain, encouraging voice for a non-technical, mobile-first owner

## 2. Colors

A committed-warm strategy: one friendly, saturated brand color is the personality of the whole site, balanced by soft tinted neutrals so it never tips into shouting.

### Primary
- **Kazoom Warm** `[hue to be resolved during implementation: a friendly saturated warm anchor, e.g. coral, peach, or sunny amber]`: Carries 30-60% of the surface. Hero backgrounds, primary buttons, key highlights, the color an owner would remember. This is the emotional core; commit to it.

### Secondary (optional)
- **Supporting Warm or Friendly Contrast** `[to be resolved during implementation]`: An optional second friendly hue for secondary CTAs, illustration accents, or section variety. Omit if one color does the job.

### Neutral
- **Soft Cream / Warm Off-White** `[to be resolved during implementation]`: Primary page background. Tinted toward the brand hue, never pure `#fff`.
- **Warm Ink** `[to be resolved during implementation]`: Body and heading text. A deep warm near-black, never pure `#000`.
- **Muted Warm Gray** `[to be resolved during implementation]`: Secondary text, borders, dividers.

### Named Rules
**The Committed Color Rule.** The brand color is not a timid 10% accent. It owns the surface (30-60%) and is the first thing an owner feels. Half-using it reads as a template; commit or change strategy.

**The No-Pure Rule.** Never `#000` or `#fff`. Every neutral is tinted toward the brand hue so the whole page feels warm, even the "white."

## 3. Typography

**Display Font:** `[geometric sans to be chosen at implementation, e.g. a confident rounded-geometric grotesque]` (with system-ui, sans-serif)
**Body Font:** `[humanist sans to be chosen at implementation, optimized for readability]` (with system-ui, sans-serif)

**Character:** Geometric, confident headlines paired with a warm, highly readable humanist body. The display font gives Kazoom backbone and modernity; the body font keeps everything friendly and effortless for a non-technical reader on a phone.

### Hierarchy
- **Display** (bold, `clamp(2.5rem, 6vw, 4.5rem)`, tight line-height ~1.05): Hero headlines. The one moment of scale and confidence.
- **Headline** (semibold, ~2rem): Section openers.
- **Title** (semibold, ~1.25rem): Card and feature headings.
- **Body** (regular, ~1rem-1.125rem, line-height ~1.6, max 65-75ch): All running text. Comfortable and roomy.
- **Label** (medium, ~0.8125rem, slight letter-spacing): Buttons, eyebrows, metadata.

### Named Rules
**The One Scale Moment Rule.** Big type is reserved for the hero. Headlines step down clearly (≥1.25 ratio between levels) so hierarchy reads instantly. No flat, samey scales.

## 4. Elevation

Soft and tonal by default. Surfaces are flat at rest, separated by warm tinted backgrounds rather than heavy shadows. Depth appears as a gentle, diffuse response to interaction (a soft lift on hover), in keeping with the responsive, calm motion energy. No hard, dark drop-shadows; those read as the dated template look we reject.

### Named Rules
**The Soft-Lift Rule.** Shadows are diffuse, low-opacity, and warm-tinted, used only to respond to state (hover, focus). If a shadow looks like a 2014 card with a hard gray edge, it is wrong.

## 5. Components

<!-- No components exist yet. Re-run /impeccable document once primitives are built to capture buttons, inputs, nav, and cards with real values. -->

## 6. Do's and Don'ts

### Do:
- **Do** commit fully to one warm brand color carrying 30-60% of the surface (the Committed Color Rule).
- **Do** tint every neutral toward the brand hue; soft cream backgrounds, warm ink text.
- **Do** use rounded, soft, confident geometry and generous whitespace.
- **Do** pair geometric sans display with a humanist sans body, reserving big type for the hero.
- **Do** keep motion responsive: smooth hover and scroll-in feedback, soft lifts, honored `prefers-reduced-motion`.
- **Do** write plain, encouraging, mobile-first copy that speaks to the owner's outcome.
- **Do** hold every surface to WCAG AA contrast and visible focus states.

### Don't:
- **Don't** ship anything that reads as a cheap template or clip-art: no generic stock icons, no busy clutter, no "$5 theme" feel. This is the primary fear to overcome.
- **Don't** drift into cold corporate SaaS: no navy gradients, no stock office photography, no enterprise distance.
- **Don't** use loud, hard-sell marketing patterns: no countdown timers, no popups, no neon urgency.
- **Don't** over-strip into sterile minimalism that reads as cold or unfinished.
- **Don't** use pure `#000` or `#fff`, hard dark drop-shadows, or sharp cold geometry.
- **Don't** let the brand color shrink to a timid accent; that is the template look, not warm authority.
