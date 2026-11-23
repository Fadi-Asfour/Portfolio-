"use client";

import type { CSSProperties } from "react";

const particles = [
  [8, 18, 3, 22, 0],
  [15, 72, 2, 29, 2],
  [23, 38, 2, 34, 5],
  [31, 82, 3, 26, 1],
  [39, 21, 2, 31, 7],
  [47, 62, 2, 24, 4],
  [54, 14, 3, 36, 9],
  [61, 78, 2, 28, 3],
  [68, 32, 2, 33, 6],
  [73, 58, 3, 27, 1],
  [82, 12, 2, 38, 8],
  [89, 68, 2, 25, 4],
  [94, 27, 3, 30, 6],
];

export default function AmbientBackground() {
  return (
    <div className="ambient-background" aria-hidden="true">
      <div className="ambient-grid" />
      <div className="ambient-glow ambient-glow-primary" />
      <div className="ambient-glow ambient-glow-secondary" />
      <div className="ambient-orb ambient-orb-one" />
      <div className="ambient-orb ambient-orb-two" />
      {particles.map(([left, top, size, duration, delay], index) => (
        <span
          key={index}
          className="ambient-particle"
          style={
            {
              left: `${left}%`,
              top: `${top}%`,
              width: `${size}px`,
              height: `${size}px`,
              "--particle-duration": `${duration}s`,
              "--particle-delay": `-${delay}s`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
