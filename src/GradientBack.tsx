import React, { useEffect, useRef } from "react";
import { NeatGradient } from "@firecms/neat";

export const GradientBack: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const gradientRef = useRef<NeatGradient | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    gradientRef.current = new NeatGradient({
      ref: canvasRef.current,
      colors: [
        {
          color: "#0D6EFD",
          enabled: true,
        },
        {
          color: "#314C79",
          enabled: true,
        },
        {
          color: "#00555A",
          enabled: true,
        },
        {
          color: "#00245A",
          enabled: true,
        },
        {
          color: "#f5e1e5",
          enabled: false,
        },
      ],
      speed: 2,
      horizontalPressure: 4,
      verticalPressure: 5,
      waveFrequencyX: 2,
      waveFrequencyY: 3,
      waveAmplitude: 5,
      shadows: 0,
      highlights: 2,
      colorBrightness: 1,
      colorSaturation: 7,
      wireframe: false,
      colorBlending: 6,
      backgroundColor: "#003FFF",
      backgroundAlpha: 1,
      resolution: 1,
    });

    // Cleanup function to destroy the gradient
    return () => {
      if (gradientRef.current) {
        gradientRef.current.destroy();
      }
    };
  }, []);

  return (
    <canvas
      className="bgColor"
      style={{
        position: "absolute",
        isolation: "isolate",
        height: "100%",
        width: "100%",
        zIndex: "-998",
      }}
      ref={canvasRef}
    />
  );
};
