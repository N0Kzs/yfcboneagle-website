"use client";

import React from "react";
import { useResponsive } from "@/components/ui/use-responsive";
import clsx from "clsx";

const DefaultIllustration = (
  <svg fill="none" height="56" viewBox="0 0 36 56" width="36" xmlns="http://www.w3.org/2000/svg">
    <path
      clipRule="evenodd"
      d="M3.03113 28.0005C6.26017 23.1765 11.7592 20.0005 18 20.0005C24.2409 20.0005 29.7399 23.1765 32.9689 28.0005C29.7399 32.8244 24.2409 36.0005 18 36.0005C11.7592 36.0005 6.26017 32.8244 3.03113 28.0005Z"
      fill="#0070F3"
      fillRule="evenodd"
    />
    <path
      clipRule="evenodd"
      d="M32.9691 28.0012C34.8835 25.1411 36 21.7017 36 18.0015C36 8.06034 27.9411 0.00146484 18 0.00146484C8.05887 0.00146484 0 8.06034 0 18.0015C0 21.7017 1.11648 25.1411 3.03094 28.0012C6.25996 23.1771 11.7591 20.001 18 20.001C24.2409 20.001 29.74 23.1771 32.9691 28.0012Z"
      fill="#45DEC4"
      fillRule="evenodd"
    />
    <path
      clipRule="evenodd"
      d="M32.9692 28.0005C29.7402 32.8247 24.241 36.001 18 36.001C11.759 36.001 6.25977 32.8247 3.03077 28.0005C1.11642 30.8606 0 34.2999 0 38C0 47.9411 8.05887 56 18 56C27.9411 56 36 47.9411 36 38C36 34.2999 34.8836 30.8606 32.9692 28.0005Z"
      fill="#E5484D"
      fillRule="evenodd"
    />
  </svg>
);

interface ResponsiveProp<T> {
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
}

interface BookProps {
  title: string;
  variant?: "simple" | "stripe";
  width?: number | ResponsiveProp<number>;
  color?: string;
  textColor?: string;
  illustration?: React.ReactNode;
  textured?: boolean;
  className?: string;
}

function isLightColor(colorStr?: string) {
  if (!colorStr) return true;
  if (colorStr.startsWith("#")) {
    const hex = colorStr.replace("#", "");
    if (hex.length === 6) {
      const r = parseInt(hex.substring(0, 2), 16) || 0;
      const g = parseInt(hex.substring(2, 4), 16) || 0;
      const b = parseInt(hex.substring(4, 6), 16) || 0;
      const yiq = (r * 299 + g * 587 + b * 114) / 1000;
      return yiq >= 155;
    }
  }
  return false;
}

export const Book = ({
  title,
  variant = "stripe",
  width = 196,
  color,
  textColor,
  illustration,
  textured = false,
  className
}: BookProps) => {
  const _width = useResponsive(width);
  const _color = color ? color : variant === "simple" ? "var(--ds-background-200)" : "var(--ds-amber-600)";
  const _illustration = illustration ? illustration : DefaultIllustration;

  const isStripe = variant === "stripe";
  const defaultTextColor = isStripe
    ? "var(--ds-gray-1000)"
    : isLightColor(_color)
      ? "var(--ds-gray-1000)"
      : "#ffffff";
  const _textColor = textColor || defaultTextColor;

  return (
    <div className={clsx("inline-block w-fit select-none", className)} style={{ perspective: 900 }}>
      <div
        className="aspect-[49/60] w-fit relative rotate-0 duration-[250ms] book-rotate cursor-pointer"
        style={{ transformStyle: "preserve-3d", minWidth: _width, containerType: "inline-size" }}
      >
        <div
          className="flex flex-col h-full rounded-l-md rounded-r overflow-hidden bg-background-200 shadow-book translate-x-0 relative after:absolute after:border after:border-[var(--ds-gray-alpha-400)] after:w-full after:h-full after:shadow-book-border after:rounded-l-md after:rounded-r"
          style={{ width: _width }}
        >
          {/* Top Section (Stripe variant) */}
          <div
            className={clsx(
              "w-full relative overflow-hidden",
              variant === "stripe" && "flex-1"
            )}
            style={{ background: _color }}
          >
            {variant === "stripe" && illustration && (
              <div className="absolute inset-0 flex items-center justify-center pl-[8.2%] p-3">
                {_illustration}
              </div>
            )}
            <div className="absolute h-full w-[8.2%] mix-blend-overlay" style={{ background: "var(--ds-book-bind)" }} />
          </div>

          {/* Bottom Section (Stripe) or Full Cover (Simple) */}
          <div
            className={clsx(
              "relative flex-1",
              (variant === "stripe" || (variant === "simple" && color === undefined)) && "bg-book-gradient"
            )}
            style={{ background: variant === "simple" && color !== undefined ? _color : undefined }}
          >
            <div className="absolute h-full w-[8.2%] opacity-20" style={{ background: "var(--ds-book-bind)" }} />
            <div
              className={clsx(
                "flex flex-col w-full p-[6.1%] pl-[14.3%] h-full",
                variant === "simple" ? "gap-4" : "justify-between"
              )}
              style={{ containerType: "inline-size", gap: `calc((24px / 196) * ${_width})` }}
            >
              <span
                className={clsx(
                  "leading-[1.25em] tracking-[-.02em] text-balance font-semibold",
                  variant === "simple" ? "text-[12cqw]" : "text-[10.5cqw]"
                )}
                style={{ color: _textColor }}
              >
                {title}
              </span>
              {variant === "stripe" ? (
                <svg className="scale-75 -ml-1 -mb-1 opacity-90" height="24" width="24" style={{ fill: _textColor }}>
                  <path d="M21,21H3L12,3Z" />
                </svg>
              ) : (
                <div className="flex-1 flex items-center justify-center my-auto -ml-[6%] pb-3">
                  {_illustration}
                </div>
              )}
            </div>
          </div>

          {/* 3D Hardcover Cloth / Paper Grain Texture */}
          {textured && (
            <div
              className="absolute top-0 left-0 inset-0 rotate-180 rounded-l-md rounded-r mix-blend-hard-light pointer-events-none bg-cover bg-no-repeat opacity-50 brightness-110 bg-[url('/book-texture.avif')]"
            />
          )}
        </div>

        {/* 3D Pages Thickness (Right Edge) */}
        <div
          className="h-[calc(100%_-_2_*_3px)] w-[calc(29cqw_-_2px)] absolute top-[3px]"
          style={{
            background: "linear-gradient(90deg, #eaeaea, transparent 70%), linear-gradient(#fff, #fafafa)",
            transform: `translateX(calc(${_width} * 1px - 29cqw / 2 - 3px)) rotateY(90deg) translateX(calc(29cqw / 2))`
          }}
        />

        {/* Back Cover */}
        <div
          className="bg-gray-200 absolute left-0 top-0 rounded-l-md rounded-r h-full"
          style={{ width: _width, transform: "translateZ(calc(-1 * 29cqw))", background: "var(--ds-gray-200)" }}
        />
      </div>
    </div>
  );
};
