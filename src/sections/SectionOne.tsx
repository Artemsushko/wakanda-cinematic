import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function SectionOne() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=200%",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.fromTo(
        bgImageRef.current,
        { scale: 1.5, filter: "brightness(0.2)" },
        { scale: 1, filter: "brightness(0.5)", ease: "none" },
        0
      );

      tl.fromTo(
        titleRef.current,
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 1, ease: "power2.out" },
        0
      );

      tl.fromTo(
        contentRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1 },
        0.5
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
        ref={bgImageRef}
        className="absolute inset-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1550345332-09e3ac987658?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center"
      />

      <div className="relative z-10 flex flex-col items-center">
        <h2
          ref={titleRef}
          className="text-[15vw] font-black tracking-tighter text-white leading-none text-center"
        >
          POWER
        </h2>

        <div ref={contentRef} className="mt-8 max-w-md text-center px-4">
          <p className="text-gray-300 text-lg md:text-xl font-light tracking-wide leading-relaxed">
            Engineered to push boundaries and redefine what's possible in human
            performance.
          </p>
          <div className="mt-6 h-[1px] w-24 bg-white/30 mx-auto" />
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60" />
    </section>
  );
}
