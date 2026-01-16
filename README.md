
# Medical Website Design

A modern, responsive medical website built with React, Vite, and Tailwind CSS. This project demonstrates best practices for layout, accessibility, and mobile-first design, with a focus on clean code and maintainable structure.

## Features
- Fully responsive layout (mobile, tablet, desktop)
- Pixel-perfect desktop design
- Accessible forms and navigation
- Modular React components
- Tailwind CSS for rapid styling
- Optimized assets and SVG icons
- Easy to customize and extend

## Getting Started

### Prerequisites
- Node.js (v16 or newer recommended)
- npm or yarn

### Installation
1. Clone the repository:
	```bash
	git clone https://github.com/NwayOoPyaeZo/medicalwebsite01.git
	cd medicalwebsite01
	```
2. Install dependencies:
	```bash
	npm install
	# or
	yarn install
	```
3. Start the development server:
	```bash
	npm run dev
	# or
	yarn dev
	```
4. Open your browser at [http://localhost:5173](http://localhost:5173)

## Project Structure
```
medicalWebsiteDesign/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

## Customization
- Update colors, fonts, and layout in `tailwind.config.js` and `src/styles/main.css`.
- Add or modify components in `src/components/`.
- Replace images and SVGs in `src/assets/`.

## Responsive Design Principles
- Mobile-first: All layouts stack and scale gracefully from small screens up.
- No fixed heights or widths on mobile/tablet; desktop remains pixel-perfect.
- Spacing between sections is handled by section padding, not positional hacks.
- Flexbox and grid used for alignment, with Tailwind breakpoints for control.

## Contributing
Pull requests and suggestions are welcome! Please open an issue for major changes.

## License
MIT

---

For questions or support, reach out via the Contact Us form on the site.
