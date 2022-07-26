import * as React from "react"

const SvgComponent = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    data-name="Componente 5 \u2013 2"
    xmlns="http://www.w3.org/2000/svg"
    width={80}
    height={80}
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
        <stop offset={0} stopColor="#006cc9" />
        <stop offset={0.45} stopColor="#006cc9" />
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
        x={15.011}
        y={13.125}
        width={54.897}
        height={58.456}
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
      cx={40}
      cy={40}
      r={40}
      opacity={0.2}
      fill="url(#a)"
    />
    <circle
      data-name="Elipse 1"
      cx={32.5}
      cy={32.5}
      r={32.5}
      transform="translate(7 7)"
      fill="url(#b)"
    />
    <g filter="url(#c)">
      <path
        data-name="Icon awesome-play"
        d="M53.596 37.053 34.034 25.487a2.653 2.653 0 0 0-4.024 2.296v23.125a2.665 2.665 0 0 0 4.024 2.3l19.563-11.56a2.665 2.665 0 0 0 0-4.591Z"
        fill="#fff"
      />
    </g>
  </svg>
)

export default SvgComponent
