import { useEffect } from "react";

/**
 * Fades in every direct child of the app wrapper when it enters the viewport.
 * Works by targeting the wrapper div children directly — avoids conflicts
 * with Framer Motion or any section-level inline styles.
 */
export function useSectionFadeIn() {
  useEffect(() => {
    // Target the actual component wrapper divs (Hero, About, Projects, etc.)
    // We wrap each in a div with data-fade in App.tsx
    const fadeEls = document.querySelectorAll("[data-fade]");

    const show = (el: Element) => {
      (el as HTMLElement).style.opacity = "1";
      (el as HTMLElement).style.transform = "translateY(0)";
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            show(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -30px 0px" }
    );

    fadeEls.forEach((el) => {
      const rect = el.getBoundingClientRect();
      // Already visible on load — show immediately
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        show(el);
      } else {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);
}