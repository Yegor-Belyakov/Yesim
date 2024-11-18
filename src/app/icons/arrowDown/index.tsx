import React from 'react';

const ArrowDownIcon = ({ color }: { color: string }) => (
  <React.Fragment>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
    >
      <defs>
        <mask id="mask0_62_1842" mask-type="alpha" maskUnits="userSpaceOnUse">
          <path
            d="M10.2856 4.28564L5.99993 8.57136L1.71422 4.28564"
            stroke="black"
            strokeOpacity="0.88"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </mask>
      </defs>
      <g mask="url(#mask0_62_1842)">
        <rect width="12" height="12" fill={color} />
      </g>
    </svg>
  </React.Fragment>
);

export default ArrowDownIcon;
