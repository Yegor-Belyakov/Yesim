import React from "react";

const CloseIcon = () => (
  <React.Fragment>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <mask
        id="mask0_62_3904"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="16"
        height="16"
      >
        <g clipPath="url(#clip0_62_3904)">
          <path
            d="M8.00002 8L3.42859 12.5714M8.00002 8L3.42859 3.42857M8.00002 8L12.5714 3.42857M8.00002 8L12.5714 12.5714"
            stroke="black"
            strokeOpacity="0.88"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </mask>
      <g mask="url(#mask0_62_3904)">
        <rect width="16" height="16" fill="black" fillOpacity="0.6" />
      </g>
      <defs>
        <clipPath id="clip0_62_3904">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  </React.Fragment>
);

export default CloseIcon;
