/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#0F6987",
				secondary: "#FFCB05",
				bgCard: "#F7FAFC",
				bgIcon: "#22C55E",
			},
			boxShadow: {
				shadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px",
			},
		},

		screens: {
			sm: { min: "300px", max: "767px" },
			// => @media (min-width: 640px and max-width: 767px) { ... }

			md: { min: "768px", max: "1023px" },
			// => @media (min-width: 768px and max-width: 1023px) { ... }

			lg: { min: "1024px", max: "1279px" },
			// => @media (min-width: 1024px and max-width: 1279px) { ... }

			xl: { min: "1280px", max: "1535px" },
			// => @media (min-width: 1280px and max-width: 1535px) { ... }

			"2xl": { min: "1536px" },
			// => @media (min-width: 1536px) { ... }
		},
	},
	plugins: [import("flowbite/plugin")],
};
