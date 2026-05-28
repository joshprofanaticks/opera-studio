import { ReactNode } from "react";

interface MarqueeProps {
  items: string[];
  className?: string;
  separator?: ReactNode;
  itemClassName?: string;
}

export function Marquee({
  items,
  className = "",
  separator,
  itemClassName = "",
}: MarqueeProps) {
  const sep = separator ?? <span className="text-signal mx-6 md:mx-10">●</span>;
  const Track = (
    <div className="inline-flex items-center shrink-0">
      {items.map((item, i) => (
        <span key={i} className={`inline-flex items-center ${itemClassName}`}>
          <span className="px-2 md:px-4">{item}</span>
          {sep}
        </span>
      ))}
    </div>
  );

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div className="inline-flex animate-marquee">
        {Track}
        {Track}
      </div>
    </div>
  );
}
