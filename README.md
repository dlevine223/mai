@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --navy: #0D2B45;
    --teal: #007A7A;
    --accent: #4ECDC4;
    --surface: #EEF3F7;
    --white: #FFFFFF;
    --body: #111827;
    --body-mid: #4B5563;
    --body-soft: #9CA3AF;
  }

  html {
    @apply antialiased;
  }

  body {
    @apply bg-white text-body font-sans;
  }

  h1,
  h2,
  h3,
  h4 {
    @apply text-navy font-black;
  }

  a {
    @apply text-teal hover:text-teal-accent transition-colors;
  }
}
