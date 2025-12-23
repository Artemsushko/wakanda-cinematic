import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgVideoRef = useRef<HTMLVideoElement>(null);
  const particleVideoRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      tl.to(bgVideoRef.current, { scale: 1.2, y: 100, ease: "none" }, 0);

      tl.to(particleVideoRef.current, { y: -150, scale: 1.1, ease: "none" }, 0);

      tl.to(
        titleRef.current,
        { y: -250, opacity: 0, scale: 0.9, ease: "power2.in" },
        0
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center"
    >
      <video
        ref={bgVideoRef}
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/bg-video.mp4" type="video/mp4" />
      </video>

      <div
        ref={particleVideoRef}
        className="absolute inset-0 w-full h-full pointer-events-none mix-blend-screen opacity-40"
      >
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/particales-video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 text-center">
        <h1
          ref={titleRef}
          className="text-[12vw] font-black tracking-tighter leading-none text-white uppercase italic"
        >
          Zero
          <br />
          Limits
        </h1>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-20" />
    </section>
  );
}
