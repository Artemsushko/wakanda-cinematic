import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function SectionThree() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(sectionRef.current, {
        x: "-200vw",
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true,
          scrub: 1,
          start: "top top",
          end: "+=3000",
          anticipatePin: 1,
        },
      });
    }, triggerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={triggerRef} className="bg-black">
      <div ref={sectionRef} className="flex h-screen w-[300vw] relative">
        <section className="w-screen h-full flex flex-col items-center justify-center p-20 border-r border-white/5">
          <span className="text-blue-500 font-mono mb-4 text-xl tracking-[0.3em]">
            01 — EXPLORE
          </span>
          <h2 className="text-white text-[12vw] font-black italic tracking-tighter uppercase">
            Unlimited
          </h2>
        </section>

        <section className="w-screen h-full flex flex-col items-center justify-center p-20 bg-zinc-900 border-r border-white/5">
          <span className="text-red-500 font-mono mb-4 text-xl tracking-[0.3em]">
            02 — BEYOND
          </span>
          <h2 className="text-white text-[12vw] font-black italic tracking-tighter uppercase">
            Vision
          </h2>
        </section>

        <section className="w-screen h-full flex flex-col items-center justify-center p-20 bg-white">
          <span className="text-black font-mono mb-4 text-xl tracking-[0.3em]">
            03 — FUTURE
          </span>
          <h2 className="text-black text-[12vw] font-black italic tracking-tighter uppercase text-center leading-none">
            Legacy
            <br />
            Starts Here
          </h2>

          <button className="mt-12 px-12 py-5 bg-black text-white text-xl font-bold rounded-full hover:scale-110 transition-transform">
            JOIN THE SQUAD
          </button>
        </section>
      </div>
    </div>
  );
}
