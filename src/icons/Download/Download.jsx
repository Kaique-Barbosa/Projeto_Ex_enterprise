import * as React from "react"
const Download = ({css}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    className={css}
  >
    <g clipPath="url(#a)">
      <path
        d="M10 15 3.75 8.75 5.5 6.937l3.25 3.25V0h2.5v10.188l3.25-3.25 1.75 1.812L10 15Zm-7.5 5a2.406 2.406 0 0 1-1.765-.734A2.412 2.412 0 0 1 0 17.5v-3.75h2.5v3.75h15v-3.75H20v3.75a2.41 2.41 0 0 1-.734 1.766c-.489.49-1.078.735-1.766.734h-15Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default Download;
