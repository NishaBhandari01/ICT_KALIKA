
"use client";

import { useEffect, useRef } from "react";

export default function Snowfall() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");

        if (!canvas || !ctx) return;

        let animationId = 0;
        let width = 0;
        let height = 0;

        const flakes = Array.from({ length: 100 }, () => ({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            radius: Math.random() * 2 + 0.8,
            speed: Math.random() * 2 + 0.1,
            drift: (Math.random() - 0.5) * 0.6,
            opacity: Math.random() * 0.6 + 0.3,
        }));

        const resizeCanvas = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);

            width = window.innerWidth;
            height = window.innerHeight;

            canvas.width = Math.round(width * dpr);
            canvas.height = Math.round(height * dpr);

            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            for (const flake of flakes) {
                ctx.beginPath();
                ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);

                ctx.fillStyle = `rgba(180, 220, 255, ${flake.opacity})`;
                ctx.shadowBlur = 8;
                ctx.shadowColor = "#60A5FA";
                ctx.fill();
                ctx.shadowBlur = 0;

                flake.y += flake.speed;
                flake.x += flake.drift;

                if (flake.y > height + 5) {
                    flake.y = -5;
                    flake.x = Math.random() * width;
                }

                if (flake.x > width + 5) flake.x = -5;
                if (flake.x < -5) flake.x = width + 5;
            }

            animationId = requestAnimationFrame(animate);
        };

        resizeCanvas();
        animate();

        window.addEventListener("resize", resizeCanvas);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", resizeCanvas);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-[9999] h-full w-full"
            style={{ opacity: 0.15, mixBlendMode: "screen" }}
        />
    );
}
