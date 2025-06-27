import React from "react";

const CookieIcon: React.FC = (): JSX.Element => (
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
      d="M21 12a9 9 0 11-9-9c0 1.657 1.79 2.25 3 2.25S18 6 18 8.25c0 1.25.75 1.5 1.5 1.5S21 10.75 21 12z"
    />
    <circle cx="9" cy="9" r="1" fill="currentColor" />
    <circle cx="15" cy="13" r="1" fill="currentColor" />
    <circle cx="12" cy="17" r="1" fill="currentColor" />
  </svg>
);

export default CookieIcon;
