import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function SectionTwo() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const ghostRef1 = useRef<HTMLHeadingElement>(null);
  const ghostRef2 = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1.5,
        },
      });

      tl.fromTo(
        gridRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 0.4, scale: 1.1 },
        0
      );

      tl.fromTo(
        ghostRef1.current,
        { x: -150, opacity: 0 },
        { x: 0, opacity: 0.5 },
        0
      );
      tl.fromTo(
        ghostRef2.current,
        { x: 150, opacity: 0 },
        { x: 0, opacity: 0.5 },
        0
      );

      tl.fromTo(
        textRef.current,
        { filter: "blur(20px)", opacity: 0, scale: 1.2 },
        { filter: "blur(0px)", opacity: 1, scale: 1 },
        0.2
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full flex items-center justify-center bg-black overflow-hidden"
    >
      <div
        ref={gridRef}
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative flex items-center justify-center">
        <h2
          ref={ghostRef1}
          className="absolute z-0 text-[18vw] font-black text-blue-500/20 uppercase italic select-none"
        >
          FOCUS
        </h2>
        <h2
          ref={ghostRef2}
          className="absolute z-0 text-[18vw] font-black text-red-500/20 uppercase italic select-none"
        >
          FOCUS
        </h2>

        <h2
          ref={textRef}
          className="relative z-10 text-[18vw] font-black tracking-tighter text-white uppercase italic"
        >
          FOCUS
        </h2>
      </div>

      <div className="absolute top-10 left-10 text-white/40 font-mono text-xs uppercase tracking-[0.5em]">
        System.Initalizing... <br /> [Sector_7G]
      </div>
      <div className="absolute bottom-10 right-10 text-white/40 font-mono text-xs uppercase">
        00 // 02
      </div>
    </section>
  );
}
