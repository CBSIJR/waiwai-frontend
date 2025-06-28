import React from "react";

const ShieldCheckIcon: React.FC = (): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3L3.5 7.5v5.25c0 5.4 3.75 8.25 8.5 8.75 4.75-.5 8.5-3.35 8.5-8.75V7.5L12 3z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12l2 2 4-4"
    />
  </svg>
);

export default ShieldCheckIcon;
