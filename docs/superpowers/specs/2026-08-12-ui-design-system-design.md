# UI Design System — Academic Proposal Deck

Date: 2026-08-12

## Context

The deck (`slide/`, a Vite + React app, deployed to GitHub Pages) currently has a
minimal component set: click/keyboard navigation, framer-motion slide
transitions, a `RevealList` progressive-reveal primitive, a fullscreen `Landing`
screen, and four basic slide types (title, agenda, stat-grid, closing). It needs
to grow into a small design system that can carry an actual thesis proposal
defense: system-architecture diagrams, evaluation charts, related-work
comparisons, and section breaks — while keeping the tone "formal academic +
modern tech" and staying legible on a projector.

This spec covers the **system and reusable templates**, populated with
placeholder/sample content (a fictional WebRTC client/worker/coturn stack,
matching the shape of the real thesis project). Real proposal content is a
separate pass.

## Design tokens

**Color.** Keep the existing token structure in `index.css`
(`--bg`, `--text`, `--text-h`, `--border`, `--card-bg`), light-default with a
dark variant. Shift `--accent`/`--accent-bg` from purple to the dataviz skill's
validated categorical slot 1 (blue): light `#2a78d6`, dark `#3987e5`. For
anything chart- or diagram-specific (categorical series, chart ink/gridlines),
use the dataviz skill's reference palette directly rather than inventing new
hex values, since its ordering is validated for colorblind-safety:

- Diagram layers (client / worker / coturn+TURN / eval-harness): categorical
  slots 1–4 in fixed order (blue, orange, aqua, yellow) — safe under the
  *adjacent*-pair validation, which is what a diagram's connected nodes need.
- Chart series: same categorical slots, assigned in fixed order, never cycled.
- Chart chrome: `--chart-surface`, `--chart-ink`, `--chart-ink-secondary`,
  `--chart-muted`, `--chart-gridline`, `--chart-axis` mapped to the palette's
  documented light/dark values.

**Typography.** Single sans stack for headings and body (current
`system-ui, "Segoe UI", Roboto, sans-serif`); hierarchy via size/weight/color
only — no serif or monospace face introduced.

**Spacing.** Formalize the sizes already implicit in the CSS into a scale:
4 / 8 / 12 / 16 / 24 / 32 / 48 / 64px. Slide outer padding stays `4vw 8vw`.

## Component architecture

New additions under `src/presentation/`, all still producing a `SlideDef`
(`{ id, stepsCount, render({ step, stepsCount }) }`) — `App.tsx`'s navigation,
transition, and reveal logic is unchanged by this work:

```
src/presentation/
  theme/
    useTheme.ts          — light/dark state, localStorage-backed, sets data-theme
    ThemeToggle.tsx       — icon button, top-left, stopPropagation on click
  diagram/
    Diagram.tsx            — renders {nodes, beats} data as a slide
    DiagramNode.tsx
    DiagramArrow.tsx        — static connector + animated flow-dot
  chart/
    BarChart.tsx
    LineChart.tsx
  ComparisonTable.tsx
  SectionDivider.tsx
```

### Architecture diagram + flow animation

A diagram slide is authored as data:

```ts
nodes: { id, label, sublabel?, x, y, layer }[]   // x/y in %, hand-placed
beats: ({ type: 'node'; id } | { type: 'edge'; from; to; label? })[]
```

`stepsCount = beats.length`. On each click, the next beat's node fades in, or
the next beat's edge draws itself with a small dot tweening from source to
target (plain framer-motion `x`/`y` keyframes — chosen over CSS `offset-path`
for cross-browser predictability). Once played, an edge remains as a static
highlighted connector. Node positions are hand-authored per diagram rather than
auto-layout, since the deck only needs a handful of diagrams and hand-placement
gives cleaner results than a general graph-layout engine.

### Evaluation chart slide

Heading + one `BarChart` or `LineChart`, fed a plain data array. Both are
hand-rolled SVG (no charting library dependency), following the dataviz skill's
mark specs: 2px lines, ≥8px markers, thin bars with rounded data-ends, recessive
gridlines/axes, a legend for ≥2 series, direct labels used selectively. Single
y-axis only — no dual-axis charts.

### Comparison table

`ComparisonTable`: heading + table, rows revealed one per click (same mechanic
as `RevealList`). Columns are configurable (`["Criteria", "Existing approach A",
"Existing approach B", "This work"]`-shaped).

### Section divider

Big index number + section title + optional subtitle. `stepsCount: 0` — no
progressive reveal, used to mark transitions between major parts.

## Theme toggle

Icon button (sun/moon) pinned top-left (bottom-right is already used by the nav
hint). Visible on every slide. State persisted to `localStorage` under
`slide-theme`; on load, falls back to `prefers-color-scheme` if no stored
preference. Click handler calls `stopPropagation` so it doesn't also trigger the
stage's slide-advance handler. Also bound to the `D` key in the existing
keydown handler in `App.tsx`.

## Non-goals

- No auto-layout / general graph engine for diagrams.
- No charting library — bar and line only, hand-rolled SVG.
- No real thesis content in this pass (placeholder content only).
- No changes to the existing navigation/transition/reveal mechanics in
  `App.tsx` — new slide types must fit the existing `SlideDef` contract.

## Testing plan

- `npx tsc -b --noEmit` after each component is added.
- Manual pass in Chrome (via the `claude-in-chrome` tool, matching how the deck
  was already verified): step through each new slide template in both light and
  dark theme, confirm reveal steps and flow animation fire in order, confirm the
  theme toggle persists across a reload.
