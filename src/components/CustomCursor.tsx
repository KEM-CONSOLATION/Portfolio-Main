"use client";

import { useEffect } from "react";

const CustomCursor = () => {
  useEffect(() => {
    // Only show custom cursor on desktop (non-touch devices)
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    // Import kursor CSS
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/kursor.css";
    document.head.appendChild(link);

    // Dynamically import kursor to avoid SSR issues
    import("kursor").then((kursorModule) => {
      const Kursor = kursorModule.default || kursorModule;

      new Kursor({
        type: 1,
        removeDefaultCursor: true,
        color: "#3b82f6", // primary color
      });
    });

    // Cleanup function
    return () => {
      // Remove kursor elements
      const kursorElements = document.querySelectorAll(
        ".kursor, .kursorChild, #kursorWrapper"
      );
      kursorElements.forEach((el) => el.remove());

      // Remove CSS link
      const cssLink = document.querySelector('link[href*="kursor.css"]');
      if (cssLink) {
        cssLink.remove();
      }

      document.body.style.cursor = "auto";
    };
  }, []);

  return null;
};

export default CustomCursor;
