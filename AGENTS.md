# Pitch Deck System Rules

You are not building a marketing website.

You are building a slide-based pitch deck rendered in HTML,
designed for sales conversations.

CORE RULES:
- One slide = one idea or one feature
- Each slide takes exactly 100vh
- No scrolling inside a slide
- The deck is navigated by vertical scroll or arrow keys
- The experience must feel like a presentation, not a website

DESIGN LANGUAGE:
- Background: off-white / very light gray
- Slides contain large white cards with rounded corners
- Subtle shadows only
- Editorial, premium, calm aesthetic
- Very large titles
- Minimal text
- Visuals dominate over copy

LAYOUT CONSTRAINTS:
- Do not invent new layouts
- Reuse the same spacing, typography and card system across slides
- Prefer 1–2 columns max
- Never stack many text blocks vertically

ALLOWED COMPONENT TYPES:
- Slide
- TwoColumnSlide
- ImageGrid
- Metric
- Badge

NOT ALLOWED:
- Marketing sections
- Long paragraphs
- Feature lists
- Dense UI
- Explanatory copy

IMPLEMENTATION RULES:
- React + Tailwind only
- No UI libraries
- No animation libraries
- No CMS
- No carousels
- No marketing fluff

GOAL:
The deck must be immediately understandable in under 30 seconds,
and optimized for live sales calls.

Add pitch deck rules
