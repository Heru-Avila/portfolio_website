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
            {/* Left side with margins, centered content */}
            <div className="w-1/2 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 bg-base-200 flex items-center justify-center">
                <div className="w-full">
                    <h1 className="text-3xl font-bold text-center">
                        <a href="https://heruavila.com">Heru Avila</a>
                    </h1>
                </div>
            </div>

            {/* Right scrollable section full width, no padding */}
            <div
                ref={scrollTargetRef}
                className="w-1/2 h-full overflow-y-auto p-6 space-y-6 bg-base-100"
            >
                {Array.from({ length: 30 }, (_, i) => (
                    <div key={i} className="p-4 bg-base-200 rounded shadow">
                        Scrollable Block #{i + 1}
                    </div>
                ))}
            </div>
        </div>


    );
};

export default ScrollLayout;
