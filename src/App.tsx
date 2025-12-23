import { Hero, SectionOne, SectionTwo, SectionThree } from "./sections";
import { CustomCursor } from "./components";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <main className="overflow-x-hidden">
      <CustomCursor />
      <Hero />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <footer className="h-[40vh] flex items-center justify-center bg-black border-t border-white/10">
        <p className="text-white/20 font-mono tracking-widest uppercase">
          © 2024 / Inspired by Wakanda Forever
        </p>
      </footer>
    </main>
  );
}

export default App;
