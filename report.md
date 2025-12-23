# Project Report: Wakanda Forever Cinematic Experience

## Links

- **Live Demo:** https://wakanda-cinematic-project.vercel.app/
- **Video Walkthrough:** https://drive.google.com/file/d/1W4Mb_pJvACwL87l9H6guJ88DMLJzDGtT/view?usp=sharing

## Tech Stack

- **React + TypeScript**
- **GSAP (ScrollTrigger)** for animations
- **Lenis** for smooth scrolling
- **Tailwind CSS** for styling

## Key Features & Decisions

1. **Performance over 3D:** Instead of heavy WebGL, I used multi-layered video parallax with `mix-blend-screen`. This ensures 60 FPS even on mid-range devices.
2. **Animation Lifecycle:** Used `gsap.context()` for proper memory cleanup in React.
3. **Immersive UI:** Implemented Chromatic Aberration, Dolly Zoom, and a custom inversion cursor to match the cinematic feel.

## Future Improvements

- Integration of **Three.js** for interactive 3D elements.
- Advanced shader effects for background transitions.
