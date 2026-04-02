/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Cormorant Garamond'", "serif"],
        body:    ["'Outfit'", "sans-serif"],
      },
      colors: {
        coffee: {
          50:  "#faf7f4",
          100: "#f4ece3",
          150: "#eee0d2",  // between 100 and 200
          200: "#E6D3B3",  // beige accent — the new hero tone
          300: "#d4b896",
          400: "#b8916a",
          500: "#6F4E37",  // primary coffee brown
          600: "#5c3f2c",
          700: "#4a3123",
          800: "#38231a",
          900: "#261610",
          950: "#150d08",
        },
        // Semantic aliases
        beige: "#E6D3B3",
        cream: "#FDFAF7",
        parchment: "#F8F2EA",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        // Layered, warm-toned shadows
        xs:    "0 1px 4px rgba(111,78,55,0.06)",
        soft:  "0 2px 16px rgba(111,78,55,0.08), 0 1px 3px rgba(111,78,55,0.04)",
        card:  "0 4px 24px rgba(111,78,55,0.10), 0 1px 6px rgba(111,78,55,0.05)",
        hover: "0 12px 40px rgba(111,78,55,0.16), 0 2px 8px rgba(111,78,55,0.08)",
        deep:  "0 20px 60px rgba(111,78,55,0.20), 0 4px 12px rgba(111,78,55,0.10)",
        // Inner glow for inputs on focus
        "inner-coffee": "inset 0 1px 4px rgba(111,78,55,0.08)",
        // Beige tint glow for hero elements
        "beige-glow":   "0 0 0 4px rgba(230,211,179,0.40)",
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
      },
      letterSpacing: {
        "widest-2": "0.2em",
      },
      backgroundImage: {
        // Grain texture overlay (SVG data-URI)
        "grain": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
        // Warm diagonal stripe (very subtle)
        "stripe": "repeating-linear-gradient(135deg, transparent, transparent 40px, rgba(230,211,179,0.15) 40px, rgba(230,211,179,0.15) 41px)",
        // Hero gradient
        "hero": "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(230,211,179,0.35) 0%, transparent 70%), linear-gradient(180deg, #FDFAF7 0%, #F8F2EA 100%)",
        // Surface gradient for cards
        "card-surface": "linear-gradient(145deg, #ffffff 0%, #fdfaf7 100%)",
        // Coffee accent bar
        "coffee-bar": "linear-gradient(90deg, #6F4E37 0%, #b8916a 50%, #6F4E37 100%)",
      },
      transitionTimingFunction: {
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
