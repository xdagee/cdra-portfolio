---
trigger: always_on
---

# Performance & Vitals Rules

To maintain a high-quality portfolio, all development must adhere to strict performance budgets and Core Web Vital targets.

1. **LCP (Largest Contentful Paint)**: Must be under 2.5s on mobile/3G.
2. **CLS (Cumulative Layout Shift)**: Must be under 0.1 on all screens.
3. **INP (Interaction to Next Paint)**: Must be under 200ms.

## Technical Constraints

- **Images**: MUST use Next.js `Image` component or equivalent with explicit dimensions. Prefer `.webp` or `.avif`.
- **Fonts**: Use `swap` display and limit to 3 weights maximum.
- **Bundles**: Any new dependency must be analyzed for its impact on bundle size. Prefer tree-shakable libraries.
- **Async**: Use dynamic imports (lazy loading) for non-critical UI components (modals, heavy charts).

## Enforcement

- Every PR that changes the UI should be checked for layout shift risks.
- Prefetch only critical routes.
