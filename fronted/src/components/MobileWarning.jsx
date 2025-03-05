"use client";
import { useEffect, useState } from "react";

export default function MobileWarning() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            if (window.innerWidth < 1024 || /iPhone|iPad|Android/i.test(navigator.userAgent)) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);

        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    if (!isMobile) return null;

    return (
        <div className="fixed top-0 left-0 w-full bg-red-600 text-white text-center p-3 font-bold z-50">
            This website is not fully responsive yet. Please visit on a larger screen.
        </div>
    );
}
