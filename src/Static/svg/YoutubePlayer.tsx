import * as React from "react"

const YoutubePlayer = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    data-name="Componente 5 \u2013 1"
    xmlns="http://www.w3.org/2000/svg"
    width={77}
    height={77}
    {...props}
  >
    <defs>
      <linearGradient
        id="a"
        x1={0.5}
        x2={0.5}
        y2={1}
        gradientUnits="objectBoundingBox"
      >
        <stop offset={0} stopColor="#fff" />
        <stop offset={1} stopColor="#fff" stopOpacity={0.18} />
      </linearGradient>
      <linearGradient
        id="b"
        x1={0.5}
        x2={0.5}
        y2={1}
        gradientUnits="objectBoundingBox"
      >
        <stop offset={0} stopColor="#006cc9" />
        <stop offset={1} stopColor="#00a3ff" />
      </linearGradient>
      <filter
        id="c"
        x={13.979}
        y={12.261}
        width={54.041}
        height={57.478}
        filterUnits="userSpaceOnUse"
      >
        <feOffset dy={3} />
        <feGaussianBlur stdDeviation={5} result="blur" />
        <feFlood floodOpacity={0.4} />
        <feComposite operator="in" in2="blur" />
        <feComposite in="SourceGraphic" />
      </filter>
    </defs>
    <circle
      data-name="Elipse 2"
      cx={38.5}
      cy={38.5}
      r={38.5}
      opacity={0.2}
      fill="url(#a)"
    />
    <circle
      data-name="Elipse 1"
      cx={31.5}
      cy={31.5}
      r={31.5}
      transform="translate(7 7)"
      fill="url(#b)"
    />
    <g filter="url(#c)">
      <path
        data-name="Icon awesome-play"
        d="M51.756 35.782 32.865 24.615a2.562 2.562 0 0 0-3.885 2.216V49.16a2.574 2.574 0 0 0 3.885 2.216l18.89-11.162a2.573 2.573 0 0 0 0-4.433Z"
        fill="#fff"
      />
    </g>
  </svg>
)

export default YoutubePlayer
