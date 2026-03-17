import { useEffect } from "react";

export function useSectionFadeIn() {
  useEffect(() => {
    const fadeEls = Array.from(document.querySelectorAll<HTMLElement>("[data-fade]"));

    // Set initial hidden state via JS (not CSS, to avoid conflicts)
    fadeEls.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(48px)";
      el.style.transition = "opacity 0.75s ease, transform 0.75s ease";
    });

    const show = (el: HTMLElement) => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            show(entry.target as HTMLElement);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -30px 0px" }
    );

    // Small delay so layout is fully painted before we check rects
    const timer = setTimeout(() => {
      fadeEls.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          // Already visible — show with slight delay for entrance feel
          setTimeout(() => show(el), 100);
        } else {
          observer.observe(el);
        }
      });
    }, 50);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);
}