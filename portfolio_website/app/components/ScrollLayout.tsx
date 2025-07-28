'use client';
import { useEffect, useRef } from "react";

const ScrollLayout = () => {
  const scrollTargetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handler = (e: WheelEvent) => {
      if (scrollTargetRef.current) {
        scrollTargetRef.current.scrollTop += e.deltaY;
      }
    };

    const sidebar = document.getElementById("sidebar");
    sidebar?.addEventListener("wheel", handler);

    return () => {
      sidebar?.removeEventListener("wheel", handler);
    };
  }, []);

  return (
    <div className="flex h-screen">
      {/* Left scroll controller */}
      <div
        id="sidebar"
        className="w-1/2 bg-base-200 p-4 overflow-hidden"
      >
        <h2 className="text-3xl font-bold mb-4">Heru Avila</h2>
        <p>Scroll here to control the content on the right.</p>
      </div>

      {/* Right scrollable area */}
      <div
        ref={scrollTargetRef}
        className="w-1/2 overflow-y-auto h-full p-6 space-y-6"
      >
        {Array.from({ length: 30 }, (_, i) => (
          <div key={i} className="p-4 bg-base-100 rounded shadow">
            Scrollable Block #{i + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollLayout;
