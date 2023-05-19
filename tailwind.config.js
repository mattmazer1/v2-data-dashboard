/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			width: {
				cardWidth: "31rem",
				smCardWidth: "23rem",
			},

			margin: {
				toph: "32vh",
				tops: "23vh",
				leftw: "1vw",
			},

			colors: {
				darkMode: "#262627",
			},

			fontSize: {
				xs: "0.75rem",
			},
		},
	},
	plugins: [],
};
