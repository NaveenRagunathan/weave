
import React from "react";

const items = [
  { label: "Fast", color: "bg-jade-flow-500" },
  { label: "Secure", color: "bg-brand-blue-400" },
  { label: "Unstoppable", color: "bg-brand-blue" },
];

const FastSecureUnstoppable = () => (
  <div className="flex items-center justify-center gap-0 w-full my-8 select-none">
    {items.map((item, i) => (
      <React.Fragment key={item.label}>
        {i !== 0 && (
                    <span className="mx-3 sm:mx-5 w-px h-5 sm:h-6 bg-black/10" aria-hidden="true" />
        )}
        <span className="flex items-center gap-2 font-semibold text-off-white text-base sm:text-lg tracking-tight">
          <span className={`w-3 h-3 rounded-full ${item.color}`} />
          {item.label}
        </span>
      </React.Fragment>
    ))}
  </div>
);

export default FastSecureUnstoppable;
