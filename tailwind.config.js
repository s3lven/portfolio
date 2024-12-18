/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
export default {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			colors: {
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				chart: {
					1: "hsl(var(--chart-1))",
					2: "hsl(var(--chart-2))",
					3: "hsl(var(--chart-3))",
					4: "hsl(var(--chart-4))",
					5: "hsl(var(--chart-5))",
				},
			},
			container: {
				screens: {
					sm: "480px",
					md: "576px",
					lg: "768px",
					xl: "960px",
					"2xl": "1152px",
				},
			},
			animation: {
				shine: "shine var(--duration) infinite linear",
			},
			keyframes: {
				shine: {
					"0%": {
						"background-position": "0% 0%",
					},
					"50%": {
						"background-position": "100% 100%",
					},
					to: {
						"background-position": "0% 0%",
					},
				},
			},
		},
	},
	plugins: [
		require("tailwindcss-animate"),
		plugin(({ addUtilities }) => {
			const newUtilities = {
				".scrollbar-thin": {
				  scrollbarWidth: "thin",
				  scrollbarcolor: "rgb(31 29 29) white",
				},
				".scrollbar-webkit": {
				  "&::-webkit-scrollbar": {
					width: "8px",
				  },
				  "&::-webkit-scrollbar-track": {
					background: "white",
				  },
				  "&::-webkit-scrollbar-thumb": {
					backgroundColor: "rgb(31 41 55)",
					borderRadius: "20px",
					border: "1px solid white",
				  },
				},
			  };
			  addUtilities(newUtilities);
		}),
	],
};
