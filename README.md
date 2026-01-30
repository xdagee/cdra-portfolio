# Prince Boateng Asare - Creative Directing Reformer Portfolio

![Project Banner](/images/projects/placeholder-hero.png)

A high-performance, personality-driven portfolio application built with Next.js 16, TypeScript, Tailwind CSS 4, and Framer Motion. This project showcases the dual nature of an "Executive" (Results/Strategic) and "Technical" (Code/Systems) professional profile through a dynamic, theme-switching UI.

## 🚀 Features

- **Dual Personality Mode**: Toggle between "Executive" (Strategic/Results) and "Technical" (Code/Details) views.
- **Dynamic Theming**: Real-time theme switching using CSS variables and Tailwind CSS 4.
- **Performance Optimized**:
  - Image optimization with `next/image`.
  - Font optimization with `next/font`.
  - Zero layout shift.
- **Modern Animations**: Smooth transitions and micro-interactions powered by Framer Motion.
- **Type-Safe**: Built with strict TypeScript for robustness.
- **Accessibility**: adherence to WCAG best practices.

## 🛠 Tech Stack

- **Framework**: Next.js 16.1.4 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4.0 (Alpha/Beta) & CSS Variables
- **State Management**: Zustand
- **Animations**: Framer Motion 12
- **Deployment**: Vercel (Recommended)

## 📂 Project Structure

```bash
src/
├── app/              # Next.js App Router pages
├── components/       # Reusable UI components
├── config/           # Theme and configuration files
├── data/             # Static content data
├── hooks/            # Custom React hooks
├── store/            # Zustand state stores
├── types/            # TypeScript type definitions
└── utils/            # Helper functions
```

## ⚡ Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn or pnpm

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/xdagee/cdra-portfolio.git
    cd cdra-portfolio
    ```

2. Install dependencies:

    ```bash
    npm install
    # or
    yarn
    # or
    pnpm install
    ```

3. Run the development server:

    ```bash
    npm run dev
    ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🎨 Theming System

The theming system is built on top of CSS variables and Zustand.

- **Global Variables**: defined in `src/app/globals.css` (e.g., `--primary`).
- **State**: Managed in `src/store/personality.ts`.
- **Sync**: `ThemeSync` component updates the root CSS variables whenever the state changes.

To add a new theme, update `src/config/themes.ts` and `src/app/globals.css`.

## 🧪 Testing

The project includes a comprehensive testing suite:

- **Unit/Integration**: Jest + React Testing Library
- **E2E**: Playwright

Run tests with:

```bash
npm test        # Run unit tests
npm run test:e2e # Run E2E tests
```

## 🤝 Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Designed & Developed by Prince Boateng Asare.
